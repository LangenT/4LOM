//cluster 0x0006 -> On/Off
//LT -> conformance LT for Lighting

//TODO currently not in use
export const properties0x0006 = {
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
};

export const actions0x0006 = {
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
};
