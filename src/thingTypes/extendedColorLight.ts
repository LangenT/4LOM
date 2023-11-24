import { actions0x0006, properties0x0006 } from '../cluster/0x0006';

export const extendedColorLight: WoT.ExposedThingInit = {
  title: 'extendedColorLight',
  description: '',
  properties: {
    OnOff: {
      type: 'boolean',
      description: 'Status if the device is turned on or not',
      observable: true,
      readOnly: true
    },
    GlobalSceneControl: {
      //LT
      type: 'boolean',
      description: 'GlobalSceneControl as described in Matter spec 1.2',
      observable: true,
      readOnly: true
    },
    OnTime: {
      //LT
      type: 'number',
      description: 'OnTime as described in Matter spec 1.2',
      observable: true,
      readOnly: true
    },
    OffWaitTime: {
      //LT
      type: 'number',
      description: 'OffWaitTime as described in Matter spec 1.2',
      observable: true,
      readOnly: true
    },
    StartUpOnOff: {
      //LT
      type: 'number', //enum StartUpOnOffEnum -> 0, 1, 2 are defined
      description: 'StartUpOnOff as described in Matter spec 1.2',
      observable: true,
      readOnly: true
    }
  },
  actions: {
    Off: {
      synchronous: true
    },
    On: {
      synchronous: true
    },
    Toggle: {
      //LT
      synchronous: true
    },
    OffWithEffect: {
      //LT
      synchronous: true
    },
    OnWithRecallGlobalScene: {
      //LT
      synchronous: true
    },
    OnWithTimedOff: {
      //LT
      synchronous: true
    }
  }
};
