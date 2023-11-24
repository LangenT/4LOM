//handler for cluster 0x0300 -> Color Control Cluster

//TODO currently not in use
export const properties0x0006 = {
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
    observable: 0,
    readOnly: 254,
    minimum: 0,
    maximum: 254
  },
  RemainingTime: {
    //O
    type: 'number',
    observable: true,
    readOnly: true,
    minimum: 0,
    maximum: 65534
  },
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
  Options: {
    type: 'number',
    observable: true,
    readOnly: true,
    minimum: 0,
    maximum: 1
  },
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
};

export const actions0x0006 = {
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
};