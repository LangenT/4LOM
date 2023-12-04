//handler for cluster 0x0300 -> Color Control Cluster

//TODO currently not in use
export const properties0x0300:{ [key: string]: object } = {
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
};

export const actions0x0300:{ [key: string]: object } = {
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
};
