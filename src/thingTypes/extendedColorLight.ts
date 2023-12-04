import { actions0x0006, properties0x0006 } from '../cluster/0x0006';
import { actions0x0008, properties0x0008 } from '../cluster/0x0008';
import { actions0x0300, properties0x0300 } from '../cluster/0x0300';

export const extendedColorLight: WoT.ExposedThingInit = {
  title: 'extendedColorLight',
  description: '',
  properties: {
    ...properties0x0006,//On/Off
    ...properties0x0008,//Level Control
    ...properties0x0300//Color Control
  },
  actions: {
    ...actions0x0006,//On/Off
    ...actions0x0008,//Level Control
    ...actions0x0300//Color Control
  }
};
