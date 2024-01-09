//cluster 0x0006 -> On/Off
//LT -> conformance LT for Lighting

export const properties0x0006: { [key: string]: object } = {
  'OnOff:OnOff': {
    type: 'boolean',
    description: 'Status if the device is turned on or not',
    readOnly: true
  },
  'OnOff:GlobalSceneControl': {
    //LT
    type: 'boolean',
    description: 'GlobalSceneControl as described in Matter spec 1.2',
    readOnly: true
  },
  'OnOff:OnTime': {
    //LT
    type: 'number',
    description: 'OnTime as described in Matter spec 1.2',
    readOnly: true
  },
  'OnOff:OffWaitTime': {
    //LT
    type: 'number',
    description: 'OffWaitTime as described in Matter spec 1.2',
    readOnly: true
  },
  'OnOff:StartUpOnOff': {
    //LT
    type: 'number', //enum StartUpOnOffEnum -> 0, 1, 2 are defined
    description: 'StartUpOnOff as described in Matter spec 1.2',
    readOnly: true
  }
};

export const actions0x0006: { [key: string]: object } = {
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
    synchronous: true,
    input: {
      type: "object",
      properties: {
        effectIdentifier: {
          type: "integer",
          minimum: 0,
          maximum: 1
        },
        effectVariant: {
          type: "integer",
          minimum: 0,
          maximum: 2
        }
      },
      required: ["effectIdentifier","effectVariant"]
    }
  },
  'OnOff:OnWithRecallGlobalScene': {
    //LT
    synchronous: true
  },
  'OnOff:OnWithTimedOff': {
    //LT
    synchronous: true,
    input: {
      type: "object",
      properties: {
        onOffControl: {
          type: "integer",
          minimum: 0,
          maximum: 1
        },
        onTime: {
          type: "integer",
          minimum: 0,
          maximum: 65534
        },
        offWaitTime: {
          type: "integer",
          minimum: 0,
          maximum: 65534
        }
      },
      required: ["effectIdentifier","effectVariant"]
    }
  }
};
