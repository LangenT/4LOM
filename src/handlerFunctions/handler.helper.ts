import { setSmartPlugHandler } from '../handlerFunctions/smartPlugHandler';

//helper to set the handler for a device type
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
