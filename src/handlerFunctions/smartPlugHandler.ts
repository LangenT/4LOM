import { invokeRequest, readRequest } from "../controller/matterController";

export const setSmartPlugHandler = (smartPlug: WoT.ExposedThing) => {
    smartPlug.setPropertyReadHandler('nodeid', function () {
      return new Promise((resolve, reject) => {
        resolve(smartPlug.getThingDescription().title.split("-")?.[0]);
      });
    });
  
    smartPlug.setPropertyReadHandler('status', function () {
      //only possible to read all resources at once?
      let data = JSON.stringify({
        nodeId: parseInt(smartPlug.getThingDescription().title),
        endpointId: 1,
        attributeType: 'OnOff::OnOffA'
      });
  
      return readRequest(data);
    });
  
    smartPlug.setActionHandler('on', function (value, options) {
      let data = JSON.stringify({
        nodeId: parseInt(smartPlug.getThingDescription().title),
        endpointId: 1,
        commandType: 'OnOff::On'
      });
  
      return invokeRequest(data);
    });
  
    smartPlug.setActionHandler('off', function (value, options) {
      let data = JSON.stringify({
        nodeId: parseInt(smartPlug.getThingDescription().title),
        endpointId: 1,
        commandType: 'OnOff::Off'
      });
  
      return invokeRequest(data);
    });
  
    smartPlug.setActionHandler('toggle', function (value, options) {
      let data = JSON.stringify({
        nodeId: parseInt(smartPlug.getThingDescription().title),
        endpointId: 1,
        commandType: 'OnOff::Toggle'
      });
  
      return invokeRequest(data);
    });
};