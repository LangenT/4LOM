import { actions0x0006, properties0x0006 } from '../cluster/0x0006';

const min: number = 1;
const max: number = 254;
const minF: number = 1;
const maxF: number = 254;

export const extendedColorLight: WoT.ExposedThingInit = {
  title: 'extendedColorLight',
  description: '',
  properties: {
    //from 0x0006 On/Off cluster
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
    },

    //from 0x0008 Level Control Cluster
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
    },

    //from 0x0300 Color Control Cluster
    //Color Information Attribute Set
  CurrentHue: {
    //HS
    type: 'number',
    observable: true,
    readOnly: true,
    minimum: 0,
    maximum: 254
  },
  CurrentSaturation: {
    //HS
    type: 'number',
    observable: true,
    readOnly: false,
    minimum: 0,
    maximum: 254
    },
  //TODO RemainingTime from two clusters. are they the same?
  // RemainingTime: {
  //   //O
  //   type: 'number',
  //   observable: true,
  //   readOnly: true,
  //   minimum: 0,
  //   maximum: 65534
  // },
  CurrentX: {
    //XY
    type: 'number',
    observable: true,
    readOnly: true,
    minimum: 0,
    maximum: 65279 //0xFEFF
  },
  CurrentY: {
    //XY
    type: 'number',
    observable: true,
    readOnly: true,
    minimum: 0,
    maximum: 65279 //0xFEFF
  },
  DriftCompensation: {
    //O
    type: 'number', //enum 0-4 defined
    observable: true,
    readOnly: true,
    minimum: 0,
    maximum: 4
  },
  CompensationText: {
    //O
    type: 'string',
    observable: true,
    readOnly: true,
    maximum: 254
  },
  ColorTemperatureMireds: {
    //CT
    type: 'number',
    observable: true,
    readOnly: true,
    minimum: 0,
    maximum: 65279 //0xFEFF
  },
  ColorMode: {
    //M
    type: 'number', //enum 0-2
    observable: true,
    readOnly: true,
    minimum: 0,
    maximum: 2
    },
  //TODO RemainingTime from two clusters. are they the same?
  // Options: {
  //   type: 'number',
  //   observable: true,
  //   readOnly: true,
  //   minimum: 0,
  //   maximum: 1
  // },
  EnhancedCurrentHue: {
    //EHUE
    type: 'number',
    observable: true,
    readOnly: true
  },
  EnhancedColorMode: {
    //M
    type: 'number', //enum 0-3
    observable: true,
    readOnly: true,
    minimum: 0,
    maximum: 3
  },
  ColorLoopActive: {
    //CL
    type: 'number',
    observable: true,
    readOnly: true
  },
  ColorLoopDirection: {
    //CL
    type: 'number',
    observable: true,
    readOnly: true
  },
  ColorLoopTime: {
    //CL
    type: 'number',
    observable: true,
    readOnly: true
  },
  ColorLoopStartEnhancedHue: {
    //CL
    type: 'number',
    observable: true,
    readOnly: true
  },
  ColorLoopStoredEnhancedHue: {
    //CL
    type: 'number',
    observable: true,
    readOnly: true
  },
  ColorCapabilities: {
    //M
    type: 'number',
    observable: true,
    readOnly: true,
    minimum: 0,
    maximum: 65279 //0xFEFF
  },
  ColorTempPhysicalMinMireds: {
    //CT
    type: 'number',
    observable: true,
    readOnly: true,
    minimum: 0,
    maximum: 65279 //0xFEFF
  },
  ColorTempPhysicalMaxMireds: {
    //CT
    type: 'number',
    observable: true,
    readOnly: true,
    minimum: 0,
    maximum: 65279 //0xFEFF
  },
  CoupleColorTempToLevelMinMireds: {
    //CT| ColorTemperatureMireds
    type: 'number',
    observable: true,
    readOnly: true
    //   minimum: ColorTempPhysicalMinMireds,
    //   maximum: ColorTemperatureMireds
  },
  StartUpColorTemperatureMireds: {
    //CT| ColorTemperatureMireds
    type: 'number',
    observable: true,
    readOnly: true,
    minimum: 0,
    maximum: 65279 //0xFEFF
  },

  //Defined Primaries Information Attribute Set
  NumberOfPrimaries: {
    //M
    type: 'number',
    observable: true,
    readOnly: true,
    minimum: 0,
    maximum: 6
  },
  Primary1X: {
    //M0
    type: 'number',
    observable: true,
    readOnly: true,
    minimum: 0,
    maximum: 65279 //0xFEFF
  },
  Primary1Y: {
    //M0
    type: 'number',
    observable: true,
    readOnly: true,
    minimum: 0,
    maximum: 65279 //0xFEFF
  },
  Primary1Intensity: {
    //M0
    type: 'number',
    observable: true,
    readOnly: true
  },
  Primary2X: {
    //M1
    type: 'number',
    observable: true,
    readOnly: true,
    minimum: 0,
    maximum: 65279 //0xFEFF
  },
  Primary2Y: {
    //M1
    type: 'number',
    observable: true,
    readOnly: true,
    minimum: 0,
    maximum: 65279 //0xFEFF
  },
  Primary2Intensity: {
    //M1
    type: 'number',
    observable: true,
    readOnly: true
  },
  Primary3X: {
    //M2
    type: 'number',
    observable: true,
    readOnly: true,
    minimum: 0,
    maximum: 65279 //0xFEFF
  },
  Primary3Y: {
    //M2
    type: 'number',
    observable: true,
    readOnly: true,
    minimum: 0,
    maximum: 65279 //0xFEFF
  },
  Primary3Intensity: {
    //M2
    type: 'number',
    observable: true,
    readOnly: true
  },
  //Additional Defined Primaries Information Attribute Set
  Primary4X: {
    //M3
    type: 'number',
    observable: true,
    readOnly: true,
    minimum: 0,
    maximum: 65279 //0xFEFF
  },
  Primary4Y: {
    //M3
    type: 'number',
    observable: true,
    readOnly: true,
    minimum: 0,
    maximum: 65279 //0xFEFF
  },
  Primary4Intensity: {
    //M3
    type: 'number',
    observable: true,
    readOnly: true
  },
  Primary5X: {
    //M4
    type: 'number',
    observable: true,
    readOnly: true,
    minimum: 0,
    maximum: 65279 //0xFEFF
  },
  Primary5Y: {
    //M4
    type: 'number',
    observable: true,
    readOnly: true,
    minimum: 0,
    maximum: 65279 //0xFEFF
  },
  Primary5Intensity: {
    //M4
    type: 'number',
    observable: true,
    readOnly: true
  },
  Primary6X: {
    //M5
    type: 'number',
    observable: true,
    readOnly: true,
    minimum: 0,
    maximum: 65279 //0xFEFF
  },
  Primary6Y: {
    //M5
    type: 'number',
    observable: true,
    readOnly: true,
    minimum: 0,
    maximum: 65279 //0xFEFF
  },
  Primary6Intensity: {
    //M5
    type: 'number',
    observable: true,
    readOnly: true
  },

  //Defined Color Points Settings Attribute Set
  WhitePointX: {
    //O
    type: 'number',
    observable: true,
    readOnly: true,
    minimum: 0,
    maximum: 65279 //0xFEFF
  },
  WhitePointY: {
    //O
    type: 'number',
    observable: true,
    readOnly: true,
    minimum: 0,
    maximum: 65279 //0xFEFF
  },
  ColorPointRX: {
    //O
    type: 'number',
    observable: true,
    readOnly: true,
    minimum: 0,
    maximum: 65279 //0xFEFF
  },
  ColorPointRY: {
    //O
    type: 'number',
    observable: true,
    readOnly: true,
    minimum: 0,
    maximum: 65279 //0xFEFF
  },
  ColorPointRIntensity: {
    //O
    type: 'number',
    observable: true,
    readOnly: true
  },
  ColorPointGX: {
    //O
    type: 'number',
    observable: true,
    readOnly: true,
    minimum: 0,
    maximum: 65279 //0xFEFF
  },
  ColorPointGY: {
    //O
    type: 'number',
    observable: true,
    readOnly: true,
    minimum: 0,
    maximum: 65279 //0xFEFF
  },
  ColorPointGIntensity: {
    //O
    type: 'number',
    observable: true,
    readOnly: true
  },
  ColorPointBX: {
    //O
    type: 'number',
    observable: true,
    readOnly: true,
    minimum: 0,
    maximum: 65279 //0xFEFF
  },
  ColorPointBY: {
    //O
    type: 'number',
    observable: true,
    readOnly: true,
    minimum: 0,
    maximum: 65279 //0xFEFF
  },
  ColorPointBIntensity: {
    //O
    type: 'number',
    observable: true,
    readOnly: true
  }
  },
  actions: {
    //from 0x0006 On/Off cluster
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
    },

    //from 0x0008 Level Control Cluster
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
    },

    //from 0x0300 Color Control Cluster
    MoveToHue: {
      //HS
      synchronous: true
    },
    MoveHue: {
      //HS
      synchronous: true
    },
    StepHue: {
      //HS
      synchronous: true
    },
    MoveToSaturation: {
      //HS
      synchronous: true
    },
    MoveSaturation: {
      //HS
      synchronous: true
    },
    StepSaturation: {
      //HS
      synchronous: true
    },
    MoveToHueAndSaturation: {
      //HS
      synchronous: true
    },
    MoveToColor: {
      //XY
      synchronous: true
    },
    MoveColor: {
      //XY
      synchronous: true
    },
    StepColor: {
      //XY
      synchronous: true
    },
    MoveToColorTemperature: {
      //CT
      synchronous: true
    },
    EnhancedMoveToHue: {
      //EHUE
      synchronous: true
    },
    EnhancedMoveHue: {
      //EHUE
      synchronous: true
    },
    EnhancedStepHue: {
      //EHUE
      synchronous: true
    },
    EnhancedMoveToHueAndSaturation: {
      //EHUE
      synchronous: true
    },
    ColorLoopSet: {
      //CL
      synchronous: true
    },
    StopMoveStep: {
      //HS, XY, CT
      synchronous: true
    },
    MoveColorTemperature: {
      //CT
      synchronous: true
    },
    StepColorTemperature: {
      //CT
      synchronous: true
    }
  }
};
