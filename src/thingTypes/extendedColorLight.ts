import { actions0x0006, properties0x0006 } from '../cluster/0x0006';

const min: number = 1;
const max: number = 254;
const minF: number = 1;
const maxF: number = 254;

export const extendedColorLight: WoT.ExposedThingInit = {
  title: 'extendedColorLight',
  description: '',
  properties: {
    /*

      0x0003 -> On/Off

    */
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
    /*

      0x0008 -> Level Control

    */
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
    },
    /*

      0x0300 -> Color Control Cluster

    */
    //Color Information Attribute Set
  'ColorControl:CurrentHue': {
    //HS
    type: 'number',
    observable: true,
    readOnly: true,
    minimum: 0,
    maximum: 254
  },
  'ColorControl:CurrentSaturation': {
    //HS
    type: 'number',
    observable: true,
    readOnly: true,
    minimum: 0,
    maximum: 254
  },
  'ColorControl:RemainingTime': {
    //O
    type: 'number',
    observable: true,
    readOnly: true,
    minimum: 0,
    maximum: 65534
  },
  'ColorControl:CurrentX': {
    //XY
    type: 'number',
    observable: true,
    readOnly: true,
    minimum: 0,
    maximum: 65279 //0xFEFF
  },
  'ColorControl:CurrentY': {
    //XY
    type: 'number',
    observable: true,
    readOnly: true,
    minimum: 0,
    maximum: 65279 //0xFEFF
  },
  'ColorControl:DriftCompensation': {
    //O
    type: 'number', //enum 0-4 defined
    observable: true,
    readOnly: true,
    minimum: 0,
    maximum: 4
  },
  'ColorControl:CompensationText': {
    //O
    type: 'string',
    observable: true,
    readOnly: true,
    maximum: 254
  },
  'ColorControl:ColorTemperatureMireds': {
    //CT
    type: 'number',
    observable: true,
    readOnly: true,
    minimum: 0,
    maximum: 65279 //0xFEFF
  },
  'ColorControl:ColorMode': {
    //M
    type: 'number', //enum 0-2
    observable: true,
    readOnly: true,
    minimum: 0,
    maximum: 2
  },
  'ColorControl:Options': {
    type: 'number',
    observable: true,
    readOnly: true,
    minimum: 0,
    maximum: 1
  },
  'ColorControl:EnhancedCurrentHue': {
    //EHUE
    type: 'number',
    observable: true,
    readOnly: true
  },
  'ColorControl:EnhancedColorMode': {
    //M
    type: 'number', //enum 0-3
    observable: true,
    readOnly: true,
    minimum: 0,
    maximum: 3
  },
  'ColorControl:ColorLoopActive': {
    //CL
    type: 'number',
    observable: true,
    readOnly: true
  },
  'ColorControl:ColorLoopDirection': {
    //CL
    type: 'number',
    observable: true,
    readOnly: true
  },
  'ColorControl:ColorLoopTime': {
    //CL
    type: 'number',
    observable: true,
    readOnly: true
  },
  'ColorControl:ColorLoopStartEnhancedHue': {
    //CL
    type: 'number',
    observable: true,
    readOnly: true
  },
  'ColorControl:ColorLoopStoredEnhancedHue': {
    //CL
    type: 'number',
    observable: true,
    readOnly: true
  },
  'ColorControl:ColorCapabilities': {
    //M
    type: 'number',
    observable: true,
    readOnly: true,
    minimum: 0,
    maximum: 65279 //0xFEFF
  },
  'ColorControl:ColorTempPhysicalMinMireds': {
    //CT
    type: 'number',
    observable: true,
    readOnly: true,
    minimum: 0,
    maximum: 65279 //0xFEFF
  },
  'ColorControl:ColorTempPhysicalMaxMireds': {
    //CT
    type: 'number',
    observable: true,
    readOnly: true,
    minimum: 0,
    maximum: 65279 //0xFEFF
  },
  'ColorControl:CoupleColorTempToLevelMinMireds': {
    //CT| ColorTemperatureMireds
    type: 'number',
    observable: true,
    readOnly: true
    //   minimum: ColorTempPhysicalMinMireds,
    //   maximum: ColorTemperatureMireds
  },
  'ColorControl:StartUpColorTemperatureMireds': {
    //CT| ColorTemperatureMireds
    type: 'number',
    observable: true,
    readOnly: true,
    minimum: 0,
    maximum: 65279 //0xFEFF
  },

  //Defined Primaries Information Attribute Set
  'ColorControl:NumberOfPrimaries': {
    //M
    type: 'number',
    observable: true,
    readOnly: true,
    minimum: 0,
    maximum: 6
  },
  'ColorControl:Primary1X': {
    //M0
    type: 'number',
    observable: true,
    readOnly: true,
    minimum: 0,
    maximum: 65279 //0xFEFF
  },
  'ColorControl:Primary1Y': {
    //M0
    type: 'number',
    observable: true,
    readOnly: true,
    minimum: 0,
    maximum: 65279 //0xFEFF
  },
  'ColorControl:Primary1Intensity': {
    //M0
    type: 'number',
    observable: true,
    readOnly: true
  },
  'ColorControl:Primary2X': {
    //M1
    type: 'number',
    observable: true,
    readOnly: true,
    minimum: 0,
    maximum: 65279 //0xFEFF
  },
  'ColorControl:Primary2Y': {
    //M1
    type: 'number',
    observable: true,
    readOnly: true,
    minimum: 0,
    maximum: 65279 //0xFEFF
  },
  'ColorControl:Primary2Intensity': {
    //M1
    type: 'number',
    observable: true,
    readOnly: true
  },
  'ColorControl:Primary3X': {
    //M2
    type: 'number',
    observable: true,
    readOnly: true,
    minimum: 0,
    maximum: 65279 //0xFEFF
  },
  'ColorControl:Primary3Y': {
    //M2
    type: 'number',
    observable: true,
    readOnly: true,
    minimum: 0,
    maximum: 65279 //0xFEFF
  },
  'ColorControl:Primary3Intensity': {
    //M2
    type: 'number',
    observable: true,
    readOnly: true
  },
  //Additional Defined Primaries Information Attribute Set
  'ColorControl:Primary4X': {
    //M3
    type: 'number',
    observable: true,
    readOnly: true,
    minimum: 0,
    maximum: 65279 //0xFEFF
  },
  'ColorControl:Primary4Y': {
    //M3
    type: 'number',
    observable: true,
    readOnly: true,
    minimum: 0,
    maximum: 65279 //0xFEFF
  },
  'ColorControl:Primary4Intensity': {
    //M3
    type: 'number',
    observable: true,
    readOnly: true
  },
  'ColorControl:Primary5X': {
    //M4
    type: 'number',
    observable: true,
    readOnly: true,
    minimum: 0,
    maximum: 65279 //0xFEFF
  },
  'ColorControl:Primary5Y': {
    //M4
    type: 'number',
    observable: true,
    readOnly: true,
    minimum: 0,
    maximum: 65279 //0xFEFF
  },
  'ColorControl:Primary5Intensity': {
    //M4
    type: 'number',
    observable: true,
    readOnly: true
  },
  'ColorControl:Primary6X': {
    //M5
    type: 'number',
    observable: true,
    readOnly: true,
    minimum: 0,
    maximum: 65279 //0xFEFF
  },
  'ColorControl:Primary6Y': {
    //M5
    type: 'number',
    observable: true,
    readOnly: true,
    minimum: 0,
    maximum: 65279 //0xFEFF
  },
  'ColorControl:Primary6Intensity': {
    //M5
    type: 'number',
    observable: true,
    readOnly: true
  },

  //Defined Color Points Settings Attribute Set
  'ColorControl:WhitePointX': {
    //O
    type: 'number',
    observable: true,
    readOnly: true,
    minimum: 0,
    maximum: 65279 //0xFEFF
  },
  'ColorControl:WhitePointY': {
    //O
    type: 'number',
    observable: true,
    readOnly: true,
    minimum: 0,
    maximum: 65279 //0xFEFF
  },
  'ColorControl:ColorPointRX': {
    //O
    type: 'number',
    observable: true,
    readOnly: true,
    minimum: 0,
    maximum: 65279 //0xFEFF
  },
  'ColorControl:ColorPointRY': {
    //O
    type: 'number',
    observable: true,
    readOnly: true,
    minimum: 0,
    maximum: 65279 //0xFEFF
  },
  'ColorControl:ColorPointRIntensity': {
    //O
    type: 'number',
    observable: true,
    readOnly: true
  },
  'ColorControl:ColorPointGX': {
    //O
    type: 'number',
    observable: true,
    readOnly: true,
    minimum: 0,
    maximum: 65279 //0xFEFF
  },
  'ColorControl:ColorPointGY': {
    //O
    type: 'number',
    observable: true,
    readOnly: true,
    minimum: 0,
    maximum: 65279 //0xFEFF
  },
  'ColorControl:ColorPointGIntensity': {
    //O
    type: 'number',
    observable: true,
    readOnly: true
  },
  'ColorControl:ColorPointBX': {
    //O
    type: 'number',
    observable: true,
    readOnly: true,
    minimum: 0,
    maximum: 65279 //0xFEFF
  },
  'ColorControl:ColorPointBY': {
    //O
    type: 'number',
    observable: true,
    readOnly: true,
    minimum: 0,
    maximum: 65279 //0xFEFF
  },
  'ColorControl:ColorPointBIntensity': {
    //O
    type: 'number',
    observable: true,
    readOnly: true
  }
  },
  actions: {
     /*

      0x0003 -> On/Off

    */
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
    /*

      0x0008 -> Level Control

    */
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
    },
    /*

      0x0300 -> Color Control Cluster

    */
    'ColorControl:MoveToHue': {
      //HS
      synchronous: true
    },
    'ColorControl:MoveHue': {
      //HS
      synchronous: true
    },
    'ColorControl:StepHue': {
      //HS
      synchronous: true
    },
    'ColorControl:MoveToSaturation': {
      //HS
      synchronous: true
    },
    'ColorControl:MoveSaturation': {
      //HS
      synchronous: true
    },
    'ColorControl:StepSaturation': {
      //HS
      synchronous: true
    },
    'ColorControl:MoveToHueAndSaturation': {
      //HS
      synchronous: true
    },
    'ColorControl:MoveToColor': {
      //XY
      synchronous: true
    },
    'ColorControl:MoveColor': {
      //XY
      synchronous: true
    },
    'ColorControl:StepColor': {
      //XY
      synchronous: true
    },
    'ColorControl:MoveToColorTemperature': {
      //CT
      synchronous: true
    },
    'ColorControl:EnhancedMoveToHue': {
      //EHUE
      synchronous: true
    },
    'ColorControl:EnhancedMoveHue': {
      //EHUE
      synchronous: true
    },
    'ColorControl:EnhancedStepHue': {
      //EHUE
      synchronous: true
    },
    'ColorControl:EnhancedMoveToHueAndSaturation': {
      //EHUE
      synchronous: true
    },
    'ColorControl:ColorLoopSet': {
      //CL
      synchronous: true
    },
    'ColorControl:StopMoveStep': {
      //HS, XY, CT
      synchronous: true
    },
    'ColorControl:MoveColorTemperature': {
      //CT
      synchronous: true
    },
    'ColorControl:StepColorTemperature': {
      //CT
      synchronous: true
    }
  }
};
