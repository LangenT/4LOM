import { setSmartPlugHandler } from '../handlerFunctions/smartPlugHandler';
import { set0x0006Handler } from './0x0006Handler';

//helper to set the handler for a device type
export const setDeviceHandler = (
  thing: WoT.ExposedThing,
  deviceType: number,
  endpoint: number
) => {
  switch (deviceType) {
    case 266:
      setSmartPlugHandler(thing);
      break;
    case 269:
      set0x0006Handler(thing, endpoint);

      break;
    default:
      console.log('cant set handler for deviceType: ' + deviceType);
      break;
  }
};
