import { actions0x0006, properties0x0006 } from '../cluster/0x0006';
import { actions0x0008, properties0x0008 } from '../cluster/0x0008';
//Thing description for a smart plug

export const smartPlug: WoT.ExposedThingInit = {
  title: 'On/Off Plug-in Unit',
  description: '0x010A On/Off Plug-in Unit | Matter',
  properties: {
    ...properties0x0006, //On/Off
    ...properties0x0008 //Level Control (Optional)
  },
  actions: {
    ...actions0x0006, //On/Off
    ...actions0x0008 //Level Control (Optional)
  }
};
