import { ExposedThing, Servient } from '@node-wot/core';
import { HttpServer } from '@node-wot/binding-http';
import { smartPlug } from './src/thingTypes/smartPlug';
import {
  createNewThing,
  setDeviceHandler,
  setSmartPlugHandler
} from './src/controller/thingController';
import { discoverNode } from './src/matterDiscovery';

const servient = new Servient(); //create new servient
servient.addServer(
  new HttpServer({
    port: 8081
  })
); //use a HTTP server

//TO DO: read Node and types

servient.start().then(async (WoT) => {
  const thingList = await discoverNode();
  thingList.forEach((thingInit) => {
    WoT.produce(thingInit.ETI).then((thing) => {
      setDeviceHandler(thing, thingInit.deviceType);
      thing.expose().then(() => {
        console.info(thing.getThingDescription().title + ' ready');
      });
    });
  });

  // let smartPlugInst = smartPlug;
  // smartPlug.title = '1019';
  // WoT.produce(smartPlugInst).then((thing) => {
  //   setSmartPlugHandler(thing);
  //   // expose the thing
  //   thing.expose().then(() => {
  //     console.info(thing.getThingDescription().id + ' ready');
  //   });
  // });
}); //start the defined Server

// let test = smartPlug;
// test.id = "1019";
// test.title += "1019";
// createNewThing(servient, test);

//create exposed Thing, directly added to servient
//const smartPlugInst = new ExposedThing(servient, smartPlug);
//smartPlugInst.expose(); //what should I use?
//servient.addThing(smartPlugInst);
//servient.expose(smartPlugInst);

//WoT.produce(smartPlug).then((thing) => { //parse a ExposedThingInit and get a ExposedThing
//});
