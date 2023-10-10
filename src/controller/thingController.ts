import { ExposedThing, Servient } from '@node-wot/core';
import { smartPlug, toggleHandler } from '../thingTypes/smartPlug';
import axios from 'axios';
import { invokeRequest, readRequest } from './matterController';

export const createNewThing = (
  servient: Servient,
  thingInit: WoT.ExposedThingInit
) => {
  //create exposed Thing, directly added to servient
  const smartPlugInst = new ExposedThing(servient, thingInit);

  servient.addThing(smartPlugInst);
  console.log('Hallo');

  smartPlugInst.setActionHandler('toggle', function (value, options) {
    console.log(options);
    toggleHandler();
    return Promise.resolve('toggled');
  });

  smartPlugInst.setPropertyReadHandler('temperature', function () {
    //endpoint und attribute type mappen durch prop id
    console.log(smartPlugInst.id);
    return new Promise((resolve, reject) => {
      resolve(smartPlugInst.id);
    });
  });

  servient.expose(smartPlugInst);

  // smartPlugInst.expose().then(() => {

  //   console.info(smartPlugInst.getThingDescription().title + ' ready');
  //   // smartPlugInst.destroy().then(() => {
  //   //   console.log("destroyed");
  //   // })
  // });
};

export const setDeviceHandler = (thing: WoT.ExposedThing, deviceType: number) => {
  switch (deviceType) {
    case 266:
      setSmartPlugHandler(thing);
      break;
    default:
      console.log("cant set handler for deviceType: " + deviceType);
      break;
  }
};

export const setSmartPlugHandler = (smartPlug: WoT.ExposedThing) => {
  smartPlug.setPropertyReadHandler('nodeid', function () {
    return new Promise((resolve, reject) => {
      resolve(smartPlug.getThingDescription().title);
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
