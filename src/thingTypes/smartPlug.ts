//Thing description for a smart plug
const min: number = 1;
const max: number = 254;
const minF: number = 1;
const maxF: number = 254;

export const smartPlug: WoT.ExposedThingInit = {
  title: 'On/Off Plug-in Unit',
  description: '0x010A On/Off Plug-in Unit | Matter',
  properties: {
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
    },

    'LevelControl:CurrentLevel': {
      type: 'number',
      description: 'CurrentLevel as described in Matter spec 1.2',
      observable: true,
      readOnly: true,
      minimum: min,
      maximum: max
    },
    'LevelControl:RemainingTime': {
      //LT
      type: 'number',
      description: 'RemainingTime as described in Matter spec 1.2',
      observable: true,
      readOnly: true
    },
    'LevelControl:MinLevel': {
      //LT
      type: 'number',
      description: 'MinLevel as described in Matter spec 1.2',
      observable: true,
      readOnly: true,
      minimum: min,
      maximum: max
    },
    'LevelControl:MaxLevel': {
      //O
      type: 'number',
      description: 'MaxLevel as described in Matter spec 1.2',
      observable: true,
      readOnly: true,
      minimum: min,
      maximum: max
    },
    'LevelControl:CurrentFrequency': {
      //FQ
      type: 'number',
      description: 'CurrentFrequency as described in Matter spec 1.2',
      observable: true,
      readOnly: true,
      minimum: minF,
      maximum: maxF
    },
    'LevelControl:MinFrequency': {
      //FQ
      type: 'number',
      description: 'MinFrequency as described in Matter spec 1.2',
      observable: true,
      readOnly: true,
      minimum: minF,
      maximum: maxF
    },
    'LevelControl:MaxFrequency': {
      //FQ
      type: 'number',
      description: 'MinFrequency as described in Matter spec 1.2',
      observable: true,
      readOnly: true,
      minimum: minF,
      maximum: maxF
    },
    'LevelControl:OnOffTransitionTime': {
      //O
      type: 'number',
      description: 'OnOffTransitionTime as described in Matter spec 1.2',
      observable: true,
      readOnly: true
    },
    'LevelControl:OnLevel': {
      type: 'number',
      description: 'OnOffTransitionTime as described in Matter spec 1.2',
      observable: true,
      readOnly: true,
      minimum: min,
      maximum: max
    },
    'LevelControl:OnTransitionTime': {
      //O
      type: 'number',
      description: 'OnTransitionTime as described in Matter spec 1.2',
      observable: true,
      readOnly: true
    },
    'LevelControl:OffTransitionTime': {
      //O
      type: 'number',
      description: 'OffTransitionTime as described in Matter spec 1.2',
      observable: true,
      readOnly: true
    },
    'LevelControl:DefaultMoveRate': {
      //O
      type: 'number',
      description: 'OffTransitionTime as described in Matter spec 1.2',
      observable: true,
      readOnly: true
    },
    'LevelControl:Options': {
      type: 'number', //OptionsBitmap Type -> 0, 1 are defined
      description: 'Options as described in Matter spec 1.2',
      observable: true,
      readOnly: true
    },
    'LevelControl:StartUpCurrentLevel': {
      //LT
      type: 'number',
      description: 'StartUpCurrentLevel as described in Matter spec 1.2',
      observable: true,
      readOnly: true
    }
  },
  actions: {
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
    },

    'LevelControl:MoveToLevel': {
      synchronous: true
    },
    'LevelControl:Move': {
      synchronous: true
    },
    'LevelControl:Step': {
      synchronous: true
    },
    'LevelControl:Stop': {
      synchronous: true
    },
    'LevelControl:MoveToLevelWithOnOff': {
      synchronous: true
    },
    'LevelControl:MoveWithOnOff': {
      synchronous: true
    },
    'LevelControl:StepWithOnOff': {
      synchronous: true
    },
    'LevelControl:StopWithOnOff': {
      synchronous: true
    },
    'LevelControl:MoveToClosestFrequency': {
      //FQ
      synchronous: true
    }
  }
};
