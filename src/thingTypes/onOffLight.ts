import { actions0x0006, properties0x0006 } from '../cluster/0x0006';
import { actions0x0008, properties0x0008 } from '../cluster/0x0008';
//Thing description for a smart plug

export const onOffLight: WoT.ExposedThingInit = {
  title: 'OnOff Light',
  description: '0x0100 On/Off Light | Matter',
  properties: {
    ...properties0x0006, //On/Off
    ...properties0x0008 //Level Control (Optional)
    //TODO 0x0406 Occupancy Sensing
  },
  actions: {
    ...actions0x0006, //On/Off
    ...actions0x0008 //Level Control (Optional)
    //TODO 0x0406 Occupancy Sensing
  }
};