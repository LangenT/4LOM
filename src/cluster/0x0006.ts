//cluster 0x0006 -> On/Off
//LT -> conformance LT for Lighting

export const context0x0006: { [key: string]: string } = {
  matter0x0006: "https://raw.githubusercontent.com/project-chip/connectedhomeip/master/data_model/clusters/OnOff.xml#"
}

export const properties0x0006: { [key: string]: object } = {
  'OnOff:OnOff': {
    "@type": "matter0x0006:0x0000", 
    type: 'boolean',
    description: 'Status if the device is turned on or not',
    readOnly: true
  },
  'OnOff:GlobalSceneControl': {
    //LT
    "@type": "matter0x0006:0x4000",
    type: 'boolean',
    description: 'GlobalSceneControl as described in Matter spec 1.2',
    readOnly: true
  },
  'OnOff:OnTime': {
    //LT
    "@type": "matter0x0006:0x4001",
    type: 'number',
    description: 'OnTime as described in Matter spec 1.2',
    readOnly: true
  },
  'OnOff:OffWaitTime': {
    //LT
    "@type": "matter0x0006:0x4002",
    type: 'number',
    description: 'OffWaitTime as described in Matter spec 1.2',
    readOnly: true
  },
  'OnOff:StartUpOnOff': {
    //LT
    "@type": "matter0x0006:0x4003",
    type: 'number', //enum StartUpOnOffEnum -> 0, 1, 2 are defined
    description: 'StartUpOnOff as described in Matter spec 1.2',
    readOnly: true
  }
};

export const actions0x0006: { [key: string]: object } = {
  'OnOff:Off': {
    "@type": "matter0x0006:0x00", 
    synchronous: true
  },
  'OnOff:On': {
    "@type": "matter0x0006:0x01",
    synchronous: true
  },
  'OnOff:Toggle': {
    //LT
    "@type": "matter0x0006:0x02", 
    synchronous: true
  },
  'OnOff:OffWithEffect': {
    //LT
    "@type": "matter0x0006:0x40", 
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
    "@type": "matter0x0006:0x41",
    synchronous: true
  },
  'OnOff:OnWithTimedOff': {
    //LT
    "@type": "matter0x0006:0x42",
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
