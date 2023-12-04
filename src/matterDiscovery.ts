import axios from 'axios';
import { smartPlug } from './thingTypes/smartPlug';
import { baseUrl } from '..';
import { extendedColorLight } from './thingTypes/extendedColorLight';
import { onOffLight } from './thingTypes/onOffLight';
import { colorTemperatureLight } from './thingTypes/colorTemperatureLight';
import { dimmableLight } from './thingTypes/dimmableLight';

export type discoveredEndpointSchema = {
  ETI: WoT.ExposedThingInit; //the Exposed Thing Init
  deviceType: number; //the device type of the Exposed Thing
  endpoint: number;
};

export const discoverNode = async (): Promise<discoveredEndpointSchema[]> => {
  let things: discoveredEndpointSchema[] = [];

  let config = {
    method: 'post',
    maxBodyLength: Infinity,
    url: `http://${baseUrl}/discover-operational-nodes`,
    headers: {
      'Content-Type': 'application/json'
    }
  };

  //get every nodeId as an array
  const nodeIds: number[] = await axios
    .request(config)
    .then((response) => {
      return response.data.response;
    })
    .catch((error) => {
      console.log(error);
      return [];
    });

  //go through every node
  for (const nodeId of nodeIds) {
    await getThingInit(nodeId).then((endpointSchemaArray) => {
      endpointSchemaArray?.forEach((endpointSchema) => {
        //go through every endpoint
        if (endpointSchema) {
          things.push(endpointSchema); //add every endpoint to the things
        }
      });
    });
  }

  console.log('End discovery, found ' + things.length + ' items');
  return things;
};

//give a nodeId and get the matching ExposedThingInit for the device Type
const getThingInit = async (
  nodeId: number
): Promise<discoveredEndpointSchema[] | null> => {
  let config = {
    method: 'post',
    maxBodyLength: Infinity,
    url: `http://${baseUrl}/describe`,
    headers: {
      'Content-Type': 'application/json'
    },
    data: nodeId
  };

  const nodeDescription = await axios
    .request(config)
    .then((response) => {
      return response.data.response;
    })
    .catch((error) => {
      console.log(error);
      return [];
    });

  const endpointSchemaArray: discoveredEndpointSchema[] = [];

  //iterate trough every endpoint
  let i = 1;
  while (true) {
    if (
      nodeDescription?.['0']?.[i.toString()]?.[
        'Descriptor::DeviceTypeListA'
      ]?.[0]?.['deviceType']
    ) {
      const endpointSchema = getDeviceType(
        nodeDescription['0'][i.toString()]['Descriptor::DeviceTypeListA'][0][
          'deviceType'
        ]
      );
      if (endpointSchema) {
        console.log(endpointSchema.ETI.title);
        endpointSchema.ETI.title =
          nodeId.toString() + '-' + endpointSchema.deviceType.toString();
        endpointSchema.endpoint = i;
        console.log(
          'found a new device: ' + endpointSchema.ETI.title + ' endpoint: ' + i
        );
        endpointSchemaArray.push(endpointSchema);
      }
    } else {
      break;
    }
    i++;
  }

  return endpointSchemaArray;
};

//get the ExposedThingInit to a given device type number (dec)
const getDeviceType = (deviceType: number): discoveredEndpointSchema | null => {
  switch (deviceType) {
    case 266: {//type smartPlug
      const Inst: WoT.ExposedThingInit = { ...smartPlug };
      return { ETI: Inst, deviceType: 266, endpoint: -1 };
    }
    case 256: {//type on/off light
      const Inst: WoT.ExposedThingInit = { ...onOffLight };
      return { ETI: Inst, deviceType: 256, endpoint: -1 };
    }
    case 257: {//type dimmable light
      const Inst: WoT.ExposedThingInit = { ...dimmableLight };
      return { ETI: Inst, deviceType: 266, endpoint: -1 };
    }
    case 268: {//type color temperature light
      const Inst: WoT.ExposedThingInit = { ...colorTemperatureLight };
      return { ETI: Inst, deviceType: 268, endpoint: -1 };
    }
    case 269: //type extended color light
      const eclInst: WoT.ExposedThingInit = { ...extendedColorLight };
      return { ETI: eclInst, deviceType: 269, endpoint: -1 };
    //TODO 
    default:
      console.log('unknown or not supported device type: ' + deviceType);
      return null;
  }
};
