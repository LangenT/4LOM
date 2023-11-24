import { Servient } from '@node-wot/core';
import { HttpServer } from '@node-wot/binding-http';
import { discoverNode } from './src/matterDiscovery';
import { setDeviceHandler } from './src/handlerFunctions/handler.helper';
import dotenv from 'dotenv';
dotenv.config();

const qiviconIp = process.env.QIVICON_IP;
const qiviconPort = process.env.QIVICON_PORT;

export const baseUrl: string = qiviconIp + ':' + qiviconPort;

const servient = new Servient(); //create new servient
servient.addServer(
  new HttpServer({
    port: 8081
  })
); //use a HTTP server

servient.start().then(async (WoT) => {
  //discover the devices
  const thingList = await discoverNode();

  thingList.forEach((thingInit) => {
    //produce every device and
    WoT.produce(thingInit.ETI).then((thing) => {
      setDeviceHandler(thing, thingInit.deviceType, thingInit.endpoint);
      thing.expose().then(() => {
        console.info(thing.getThingDescription().title + ' ready');
      });
    });
  });
}); //start the defined Server
