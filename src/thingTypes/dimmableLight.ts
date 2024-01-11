import { actions0x0006, context0x0006, properties0x0006 } from '../cluster/0x0006';
import { actions0x0008, context0x0008, properties0x0008 } from '../cluster/0x0008';
import { context0x0300 } from '../cluster/0x0300';
import { deviceTypeDimmableLight } from '../deviceTypeContext';
import { baseThing } from './baseThing';
//Thing description for a smart plug

export const dimmableLight: WoT.ExposedThingInit = {
  "@context": [
    "https://www.w3.org/2019/wot/td/v1",
    "https://www.w3.org/2022/wot/td/v1.1",
    {
      ...context0x0006,
      ...context0x0008,
      ...context0x0300,
      ...deviceTypeDimmableLight
    }
  ],
  title: 'Dimmable Light',
  description: '0x0101 On/Off Light | Matter',
  "@type": "DimmableLight:0x0101",
  properties: {
    ...properties0x0006, //On/Off
    ...properties0x0008 //Level Control
    //TODO 0x0406 Occupancy Sensing
  },
  actions: {
    ...actions0x0006, //On/Off
    ...actions0x0008 //Level Control
    //TODO 0x0406 Occupancy Sensing
  }
};
