//handler for cluster 0x0008 -> Level Control

const min: number = 1;
const max: number = 254;
const minF: number = 1;
const maxF: number = 254;

export const context0x0008: { [key: string]: string } = {
  matter0x0008: "https://raw.githubusercontent.com/project-chip/connectedhomeip/master/data_model/clusters/LevelControl.xml#"
}

export const properties0x0008: { [key: string]: object } = {
  'LevelControl:CurrentLevel': {
    "@type": "matter0x0008:0x0000", 
    type: 'number',
    description: 'CurrentLevel as described in Matter spec 1.2', 
    readOnly: true,
    minimum: min,
    maximum: max
  },
  'LevelControl:RemainingTime': {
    //LT
    "@type": "matter0x0008:0x0001",
    type: 'number',
    description: 'RemainingTime as described in Matter spec 1.2', 
    readOnly: true
  },
  'LevelControl:MinLevel': {
    //LT
    "@type": "matter0x0008:0x0002",
    type: 'number',
    description: 'MinLevel as described in Matter spec 1.2',  
    readOnly: true,
    minimum: min,
    maximum: max
  },
  'LevelControl:MaxLevel': {
    //O
    "@type": "matter0x0008:0x0003",
    type: 'number',
    description: 'MaxLevel as described in Matter spec 1.2',   
    readOnly: true,
    minimum: min,
    maximum: max
  },
  'LevelControl:CurrentFrequency': {
    //FQ
    "@type": "matter0x0008:0x0004",
    type: 'number',
    description: 'CurrentFrequency as described in Matter spec 1.2',   
    readOnly: true,
    minimum: minF,
    maximum: maxF
  },
  'LevelControl:MinFrequency': {
    //FQ
    "@type": "matter0x0008:0x0005",
    type: 'number',
    description: 'MinFrequency as described in Matter spec 1.2',   
    readOnly: true,
    minimum: minF,
    maximum: maxF
  },
  'LevelControl:MaxFrequency': {
    //FQ
    "@type": "matter0x0008:0x0006",
    type: 'number',
    description: 'MinFrequency as described in Matter spec 1.2',   
    readOnly: true,
    minimum: minF,
    maximum: maxF
  },
  'LevelControl:OnOffTransitionTime': {
    //O
    "@type": "matter0x0008:0x0010",
    type: 'number',
    description: 'OnOffTransitionTime as described in Matter spec 1.2',   
    readOnly: true
  },
  'LevelControl:OnLevel': {
    "@type": "matter0x0008:0x0011",
    type: 'number',
    description: 'OnOffTransitionTime as described in Matter spec 1.2',   
    readOnly: true,
    minimum: min,
    maximum: max
  },
  'LevelControl:OnTransitionTime': {
    //O
    "@type": "matter0x0008:0x0012",
    type: 'number',
    description: 'OnTransitionTime as described in Matter spec 1.2',    
    readOnly: true
  },
  'LevelControl:OffTransitionTime': {
    //O
    "@type": "matter0x0008:0x0013",
    type: 'number',
    description: 'OffTransitionTime as described in Matter spec 1.2', 
    readOnly: true
  },
  'LevelControl:DefaultMoveRate': {
    //O
    "@type": "matter0x0008:0x0014",
    type: 'number',
    description: 'OffTransitionTime as described in Matter spec 1.2',  
    readOnly: true
  },
  'LevelControl:Options': {
    "@type": "matter0x0008:0x000F",
    type: 'number', //OptionsBitmap Type -> 0, 1 are defined
    description: 'Options as described in Matter spec 1.2',   
    readOnly: true
  },
  'LevelControl:StartUpCurrentLevel': {
    //LT
    "@type": "matter0x0008:0x4000",
    type: 'number',
    description: 'StartUpCurrentLevel as described in Matter spec 1.2',    
    readOnly: true
  }
};

export const actions0x0008: { [key: string]: object } = {
  'LevelControl:MoveToLevel': {
    "@type": "matter0x0008:0x00",
    synchronous: true,
    input: {
      type: "object",
      properties: {
        level: {
          type: "integer",
          minimum: 0,
          maximum: 254
        },
        transitionTime: {
          type: "integer"
        },
        optionsMask: {
          type: "integer"
        },
        optionsOverride: {
          type: "integer",
          minimum: 0,
          maximum: 1
        }
      },
      required: ["level","transitionTime", "optionsMask", "optionsOverride"]
    }
  },
  'LevelControl:Move': {
    "@type": "matter0x0008:0x01",
    synchronous: true,
    input: {
      type: "object",
      properties: {
        moveMode: {
          type: "integer",
          minimum: 0,
          maximum: 1
        },
        rate: {
          type: "integer"
        },
        optionsMask: {
          type: "integer"
        },
        optionsOverride: {
          type: "integer",
          minimum: 0,
          maximum: 1
        }
      },
      required: ["moveMode", "rate", "optionsMask", "optionsOverride"]
    }
  },
  'LevelControl:Step': {
    "@type": "matter0x0008:0x02",
    synchronous: true,
    input: {
      type: "object",
      properties: {
        stepMode: {
          type: "integer",
          minimum: 0,
          maximum: 1
        },
        stepSize: {
          type: "integer"
        },
        transitionTime: {
          type: "integer"
        },
        optionsMask: {
          type: "integer"
        },
        optionsOverride: {
          type: "integer",
          minimum: 0,
          maximum: 1
        }
      },
      required: ["stepMode", "moveMode","transitionTime", "optionsMask", "optionsOverride"]
    }
  },
  'LevelControl:Stop': {
    "@type": "matter0x0008:0x03",
    synchronous: true,
    input: {
      type: "object",
      properties: {
        optionsMask: {
          type: "integer"
        },
        optionsOverride: {
          type: "integer",
          minimum: 0,
          maximum: 1
        }
      },
      required: ["optionsMask", "optionsOverride"]
    }
  },
  'LevelControl:MoveToLevelWithOnOff': {
    "@type": "matter0x0008:0x04",
    synchronous: true,
    input: {
      type: "object",
      properties: {
        level: {
          type: "integer",
          minimum: 0,
          maximum: 254
        },
        transitionTime: {
          type: "integer"
        },
        optionsMask: {
          type: "integer"
        },
        optionsOverride: {
          type: "integer",
          minimum: 0,
          maximum: 1
        }
      },
      required: ["level", "transitionTime", "optionsMask", "optionsOverride"]
    }
  },
  'LevelControl:MoveWithOnOff': {
    "@type": "matter0x0008:0x05",
    synchronous: true,
    input: {
      type: "object",
      properties: {
        moveMode: {
          type: "integer",
          minimum: 0,
          maximum: 1
        },
        rate: {
          type: "integer"
        },
        optionsMask: {
          type: "integer"
        },
        optionsOverride: {
          type: "integer",
          minimum: 0,
          maximum: 1
        }
      },
      required: ["moveMode","rate", "optionsMask", "optionsOverride"]
    }
  },
  'LevelControl:StepWithOnOff': {
    "@type": "matter0x0008:0x06",
    synchronous: true,
    input: {
      type: "object",
      properties: {
        stepMode: {
          type: "integer",
          minimum: 0,
          maximum: 1
        },
        stepSize: {
          type: "integer"
        },
        transitionTime: {
          type: "integer"
        },
        optionsMask: {
          type: "integer"
        },
        optionsOverride: {
          type: "integer",
          minimum: 0,
          maximum: 1
        }
      },
      required: ["stepMode", "moveMode", "transitionTime", "optionsMask", "optionsOverride"]
    }
  },
  'LevelControl:StopWithOnOff': {
    "@type": "matter0x0008:0x07",
    synchronous: true,
    input: {
      type: "object",
      properties: {
        optionsMask: {
          type: "integer"
        },
        optionsOverride: {
          type: "integer",
          minimum: 0,
          maximum: 1
        }
      },
      required: ["optionsMask", "optionsOverride"]
    }
  },
  'LevelControl:MoveToClosestFrequency': {
    //FQ
    "@type": "matter0x0008:0x08",
    synchronous: true,
    input: {
      type: "object",
      properties: {
        frequency: {
          type: "integer"
        }
      },
      required: ["frequency"]
    }
  }
};
