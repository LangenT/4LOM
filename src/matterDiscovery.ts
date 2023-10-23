import axios from 'axios';
import { smartPlug } from './thingTypes/smartPlug';

export type discoveredNodeSchema = {
  ETI: WoT.ExposedThingInit, //the Exposed Thing Init
  deviceType: number //the device type
}

export const discoverNode = async (): Promise<discoveredNodeSchema[]> => {
    let things: {ETI: WoT.ExposedThingInit, deviceType: number
}[] = [];
  let config = {
    method: 'post',
    maxBodyLength: Infinity,
    url: 'http://192.168.2.32:9080/discover-operational-nodes',
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
    await getThingInit(nodeId).then((inst) => {
        if (inst) {
            const parseDeviceType = inst.title; // parse device Type
            inst.title = nodeId.toString();
            things.push({ ETI: inst, deviceType: Number(parseDeviceType) });
      }
    });
  }

  console.log('End discovery, found ' + things.length + " items");
  return things;
};

//give a nodeId and get the matching ExposedThingInit for the device Type
const getThingInit = async (
  nodeId: number
): Promise<WoT.ExposedThingInit | null> => {
  let config = {
    method: 'post',
    maxBodyLength: Infinity,
    url: 'http://192.168.2.32:9080/describe',
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

  //currently the thing can only implement one device type!
  //TODO handle more than one device type from one node
  if (
    nodeDescription['0']['1']['Descriptor::DeviceTypeListA'][0]['deviceType']
  ) {
    return getDeviceType(
      nodeDescription['0']['1']['Descriptor::DeviceTypeListA'][0]['deviceType']
    );
  } else {
    return null;
  }
};

//get the ExposedThingInit to a given device type number (dec)
const getDeviceType = (deviceType: number): WoT.ExposedThingInit | null => {
  switch (deviceType) {
      case 266:
        let inst = smartPlug;
        inst.title = deviceType.toString();
        return smartPlug;
      default:
        console.log("unknown or not supported device type: " + deviceType);
        return null;
  }
};
