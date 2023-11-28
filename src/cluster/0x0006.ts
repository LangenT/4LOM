//cluster 0x0006 -> On/Off
//LT -> conformance LT for Lighting

//TODO currently not in use
export const properties0x0006 = {
  'OnOff:OnOff': {
    type: 'boolean',
    description: 'Status if the device is turned on or not',
    observable: true,
    readOnly: true
  },
  'OnOff:GlobalSceneControl': {
    //LT
    type: 'boolean',
    description: 'GlobalSceneControl as described in Matter spec 1.2',
    observable: true,
    readOnly: true
  },
  'OnOff:OnTime': {
    //LT
    type: 'number',
    description: 'OnTime as described in Matter spec 1.2',
    observable: true,
    readOnly: true
  },
  'OnOff:OffWaitTime': {
    //LT
    type: 'number',
    description: 'OffWaitTime as described in Matter spec 1.2',
    observable: true,
    readOnly: true
  },
  'OnOff:StartUpOnOff': {
    //LT
    type: 'number', //enum StartUpOnOffEnum -> 0, 1, 2 are defined
    description: 'StartUpOnOff as described in Matter spec 1.2',
    observable: true,
    readOnly: true
  }
};

export const actions0x0006 = {
  'OnOff:Off': {
    synchronous: true
  },
  'OnOff:On': {
    synchronous: true
  },
  'OnOff:Toggle': {
    //LT
    synchronous: true
  },
  'OnOff:OffWithEffect': {
    //LT
    synchronous: true
  },
  'OnOff:OnWithRecallGlobalScene': {
    //LT
    synchronous: true
  },
  'OnOff:OnWithTimedOff': {
    //LT
    synchronous: true
  }
};
