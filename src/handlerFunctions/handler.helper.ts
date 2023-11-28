import { setSmartPlugHandler } from '../handlerFunctions/smartPlugHandler';
import { set0x0006Handler } from './0x0006Handler';
import { set0x0008Handler } from './0x0008Handler';
import { set0x0300Handler } from './0x0300Handler';

//helper to set the handler for a device type
export const setDeviceHandler = (
  thing: WoT.ExposedThing,
  deviceType: number,
  endpoint: number
) => {
  switch (deviceType) {
    case 266:
      //setSmartPlugHandler(thing);
      set0x0006Handler(thing, endpoint);
      set0x0008Handler(thing, endpoint);
      break;
    case 269:
      set0x0006Handler(thing, endpoint);
      set0x0008Handler(thing, endpoint);
      set0x0300Handler(thing, endpoint);
      break;
    default:
      console.log('cant set handler for deviceType: ' + deviceType);
      break;
  }
};
