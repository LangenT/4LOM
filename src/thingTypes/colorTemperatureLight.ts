import { actions0x0006, context0x0006, properties0x0006 } from '../cluster/0x0006';
import { actions0x0008, context0x0008, properties0x0008 } from '../cluster/0x0008';
import { actions0x0300, context0x0300, properties0x0300 } from '../cluster/0x0300';
import { deviceTypeColorTemperatureLight } from '../deviceTypeContext';
import { baseThing } from './baseThing';

export const colorTemperatureLight: WoT.ExposedThingInit = {
  "@context": [
    "https://www.w3.org/2019/wot/td/v1",
    "https://www.w3.org/2022/wot/td/v1.1",
    {
      ...context0x0006,
      ...context0x0008,
      ...context0x0300,
      ...deviceTypeColorTemperatureLight
    }
  ],
  title: 'colorTemperatureLight',
  description:
    'Color Temperature Light is a lighting device that is capable of ' +
    'being switched on or off, the intensity of its light adjusted, and its color temperature adjusted',
  "@type": "ColorTemperatureLight:0x010C",
  properties: {
    ...properties0x0006, //On/Off
    ...properties0x0008, //Level Control
    ...properties0x0300 //Color Control
  },
  actions: {
    ...actions0x0006, //On/Off
    ...actions0x0008, //Level Control
    ...actions0x0300 //Color Control
  }
};

colorTemperatureLight.properties;
