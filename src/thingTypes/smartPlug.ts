//Thing description for a smart plug
const min: number = 1;
const max: number = 254;
const minF: number = 1;
const maxF: number = 254;

export const smartPlug: WoT.ExposedThingInit = {
  title: 'On/Off Plug-in Unit',
  description: '0x010A On/Off Plug-in Unit | Matter',
  properties: {
    onOff: { //attributes from On/Off Cluster 0x0006
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
    levelControl: { //attributes from LevelControl Cluster 0x0008
      CurrentLevel: {
        type: 'number',
        description: 'CurrentLevel as described in Matter spec 1.2',
        observable: true,
        readOnly: true,
        minimum: min,
        maximum: max
      },
      RemainingTime: {
        //LT
        type: 'number',
        description: 'RemainingTime as described in Matter spec 1.2',
        observable: true,
        readOnly: true
      },
      MinLevel: {
        //LT
        type: 'number',
        description: 'MinLevel as described in Matter spec 1.2',
        observable: true,
        readOnly: true,
        minimum: min,
        maximum: max
      },
      MaxLevel: {
        //O
        type: 'number',
        description: 'MaxLevel as described in Matter spec 1.2',
        observable: true,
        readOnly: true,
        minimum: min,
        maximum: max
      },
      CurrentFrequency: {
        //FQ
        type: 'number',
        description: 'CurrentFrequency as described in Matter spec 1.2',
        observable: true,
        readOnly: true,
        minimum: minF,
        maximum: maxF
      },
      MinFrequency: {
        //FQ
        type: 'number',
        description: 'MinFrequency as described in Matter spec 1.2',
        observable: true,
        readOnly: true,
        minimum: minF,
        maximum: maxF
      },
      MaxFrequency: {
        //FQ
        type: 'number',
        description: 'MinFrequency as described in Matter spec 1.2',
        observable: true,
        readOnly: true,
        minimum: minF,
        maximum: maxF
      },
      OnOffTransitionTime: {
        //O
        type: 'number',
        description: 'OnOffTransitionTime as described in Matter spec 1.2',
        observable: true,
        readOnly: true
      },
      OnLevel: {
        type: 'number',
        description: 'OnOffTransitionTime as described in Matter spec 1.2',
        observable: true,
        readOnly: true,
        minimum: min,
        maximum: max
      },
      OnTransitionTime: {
        //O
        type: 'number',
        description: 'OnTransitionTime as described in Matter spec 1.2',
        observable: true,
        readOnly: true
      },
      OffTransitionTime: {
        //O
        type: 'number',
        description: 'OffTransitionTime as described in Matter spec 1.2',
        observable: true,
        readOnly: true
      },
      DefaultMoveRate: {
        //O
        type: 'number',
        description: 'OffTransitionTime as described in Matter spec 1.2',
        observable: true,
        readOnly: true
      },
      Options: {
        type: 'number', //OptionsBitmap Type -> 0, 1 are defined
        description: 'Options as described in Matter spec 1.2',
        observable: true,
        readOnly: true
      },
      StartUpCurrentLevel: {
        //LT
        type: 'number',
        description: 'StartUpCurrentLevel as described in Matter spec 1.2',
        observable: true,
        readOnly: true
      }    
    }
  },
  actions: {
    onOff: { //commands from On/Off Cluster 0x0006
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
    },
    levelControl: {
      MoveToLevel: {
        synchronous: true
      },
      Move: {
        synchronous: true
      },
      Step: {
        synchronous: true
      },
      Stop: {
        synchronous: true
      },
      MoveToLevelWithOnOff: {
        synchronous: true
      },
      MoveWithOnOff: {
        synchronous: true
      },
      StepWithOnOff: {
        synchronous: true
      },
      StopWithOnOff: {
        synchronous: true
      },
      MoveToClosestFrequency: {
        //FQ
        synchronous: true
      }
    }
  }
};
