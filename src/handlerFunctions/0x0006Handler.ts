//handler for cluster 0x0006 -> On/Off
import { invokeRequest, readRequest } from '../controller/matterController';

export const set0x0006Handler = (
  smartPlug: WoT.ExposedThing,
  endpoint: number
) => {
  //
  //read handler
  //
  smartPlug.setPropertyReadHandler('OnOff:OnOff', function () {
    let data = JSON.stringify({
      nodeId: parseInt(smartPlug.getThingDescription().title.split('-')?.[0]),
      endpointId: endpoint,
      attributeType: 'OnOff::OnOffA'
    });
    return readRequest(data);
  });

  smartPlug.setPropertyReadHandler('OnOff:GlobalSceneControl', function () {
    let data = JSON.stringify({
      nodeId: parseInt(smartPlug.getThingDescription().title.split('-')?.[0]),
      endpointId: endpoint,
      attributeType: 'OnOff::GlobalSceneControlA'
    });
    return readRequest(data);
  });

  smartPlug.setPropertyReadHandler('OnOff:OnTime', function () {
    let data = JSON.stringify({
      nodeId: parseInt(smartPlug.getThingDescription().title.split('-')?.[0]),
      endpointId: endpoint,
      attributeType: 'OnOff::OnTimeA'
    });
    return readRequest(data);
  });

  smartPlug.setPropertyReadHandler('OnOff:OffWaitTime', function () {
    let data = JSON.stringify({
      nodeId: parseInt(smartPlug.getThingDescription().title.split('-')?.[0]),
      endpointId: endpoint,
      attributeType: 'OnOff::OffWaitTimeA'
    });
    return readRequest(data);
  });

  smartPlug.setPropertyReadHandler('OnOff:StartUpOnOff', function () {
    let data = JSON.stringify({
      nodeId: parseInt(smartPlug.getThingDescription().title.split('-')?.[0]),
      endpointId: endpoint,
      attributeType: 'OnOff::StartUpOnOffA'
    });
    return readRequest(data);
  });

  //
  //action handler
  //
  smartPlug.setActionHandler('OnOff:Off', function (value, options) {
    let data = JSON.stringify({
      nodeId: parseInt(smartPlug.getThingDescription().title.split('-')?.[0]),
      endpointId: endpoint,
      commandType: 'OnOff::Off'
    });

    return invokeRequest(data);
  });

  smartPlug.setActionHandler('OnOff:On', function (value, options) {
    let data = JSON.stringify({
      nodeId: parseInt(smartPlug.getThingDescription().title.split('-')?.[0]),
      endpointId: endpoint,
      commandType: 'OnOff::On'
    });

    return invokeRequest(data);
  });

  smartPlug.setActionHandler('OnOff:Toggle', function (value, options) {
    let data = JSON.stringify({
      nodeId: parseInt(smartPlug.getThingDescription().title.split('-')?.[0]),
      endpointId: endpoint,
      commandType: 'OnOff::Toggle'
    });

    return invokeRequest(data);
  });

  smartPlug.setActionHandler(
    'OnOff:OffWithEffect',
    async function (value, options) {
      const parsedValue = await value.value();
      if (typeof parsedValue !== 'object') { //check if type is object
        return 'Invalid content type';
      }
      //const reqData = JSON.parse((await value.value())?.toString() || '');
      //parse to sting and then to json to know object structure
      const reqData = JSON.parse(JSON.stringify(parsedValue));
      if (!reqData?.effectIdentifier && !reqData?.effectVariant) {
        return 'Invalid argument';
      }

      let data = JSON.stringify({
        nodeId: parseInt(smartPlug.getThingDescription().title.split('-')?.[0]),
        endpointId: endpoint,
        commandType: 'OnOff::OffWithEffect',
        payload: {
          ...reqData
        }
      });

      return invokeRequest(data);
    }
  );

  smartPlug.setActionHandler(
    'OnOff:OnWithRecallGlobalScene',
    function (value, options) {
      let data = JSON.stringify({
        nodeId: parseInt(smartPlug.getThingDescription().title.split('-')?.[0]),
        endpointId: endpoint,
        commandType: 'OnOff::OnWithRecallGlobalScene'
      });

      return invokeRequest(data);
    }
  );

  smartPlug.setActionHandler(
    'OnOff:OnWithTimedOff',
    async function (value, options) {
      const parsedValue = await value.value();
      if (typeof parsedValue !== 'object') {
        return 'Invalid content type';
      }

      //const reqData = JSON.parse((await value.value())?.toString() || '');
      const reqData = JSON.parse(JSON.stringify(parsedValue));
      if (!reqData?.onOffControl && !reqData?.onTime && !reqData?.offWaitTime) {
        return 'Invalid argument';
      }

      let data = JSON.stringify({
        nodeId: parseInt(smartPlug.getThingDescription().title.split('-')?.[0]),
        endpointId: endpoint,
        commandType: 'OnOff::OnWithTimedOff',
        payload: {
          ...reqData
        }
      });

      return invokeRequest(data);
    }
  );
};
