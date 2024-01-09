//handler for cluster 0x0300 -> Color Control Cluster

export const properties0x0300: { [key: string]: object } = {
  //Color Information Attribute Set
  'ColorControl:CurrentHue': {
    //HS
    type: 'number',
    readOnly: true,
    minimum: 0,
    maximum: 254
  },
  'ColorControl:CurrentSaturation': {
    //HS
    type: 'number',
    readOnly: true,
    minimum: 0,
    maximum: 254
  },
  'ColorControl:RemainingTime': {
    //O
    type: 'number',
    readOnly: true,
    minimum: 0,
    maximum: 65534
  },
  'ColorControl:CurrentX': {
    //XY
    type: 'number',
    readOnly: true,
    minimum: 0,
    maximum: 65279 //0xFEFF
  },
  'ColorControl:CurrentY': {
    //XY
    type: 'number',
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
    readOnly: true,
    maximum: 254
  },
  'ColorControl:ColorTemperatureMireds': {
    //CT
    type: 'number',
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
    readOnly: true,
    minimum: 0,
    maximum: 1
  },
  'ColorControl:EnhancedCurrentHue': {
    //EHUE
    type: 'number',
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
    readOnly: true
  },
  'ColorControl:ColorLoopDirection': {
    //CL
    type: 'number',
    readOnly: true
  },
  'ColorControl:ColorLoopTime': {
    //CL
    type: 'number',
    readOnly: true
  },
  'ColorControl:ColorLoopStartEnhancedHue': {
    //CL
    type: 'number',
    readOnly: true
  },
  'ColorControl:ColorLoopStoredEnhancedHue': {
    //CL
    type: 'number',
    readOnly: true
  },
  'ColorControl:ColorCapabilities': {
    //M
    type: 'number',
    readOnly: true,
    minimum: 0,
    maximum: 65279 //0xFEFF
  },
  'ColorControl:ColorTempPhysicalMinMireds': {
    //CT
    type: 'number',
    readOnly: true,
    minimum: 0,
    maximum: 65279 //0xFEFF
  },
  'ColorControl:ColorTempPhysicalMaxMireds': {
    //CT
    type: 'number',
    readOnly: true,
    minimum: 0,
    maximum: 65279 //0xFEFF
  },
  'ColorControl:CoupleColorTempToLevelMinMireds': {
    //CT| ColorTemperatureMireds
    type: 'number',
    readOnly: true
    //   minimum: ColorTempPhysicalMinMireds,
    //   maximum: ColorTemperatureMireds
  },
  'ColorControl:StartUpColorTemperatureMireds': {
    //CT| ColorTemperatureMireds
    type: 'number',
    readOnly: true,
    minimum: 0,
    maximum: 65279 //0xFEFF
  },

  //Defined Primaries Information Attribute Set
  'ColorControl:NumberOfPrimaries': {
    //M
    type: 'number',
    readOnly: true,
    minimum: 0,
    maximum: 6
  },
  'ColorControl:Primary1X': {
    //M0
    type: 'number',
    readOnly: true,
    minimum: 0,
    maximum: 65279 //0xFEFF
  },
  'ColorControl:Primary1Y': {
    //M0
    type: 'number',
    readOnly: true,
    minimum: 0,
    maximum: 65279 //0xFEFF
  },
  'ColorControl:Primary1Intensity': {
    //M0
    type: 'number',
    readOnly: true
  },
  'ColorControl:Primary2X': {
    //M1
    type: 'number',
    readOnly: true,
    minimum: 0,
    maximum: 65279 //0xFEFF
  },
  'ColorControl:Primary2Y': {
    //M1
    type: 'number',
    readOnly: true,
    minimum: 0,
    maximum: 65279 //0xFEFF
  },
  'ColorControl:Primary2Intensity': {
    //M1
    type: 'number',
    readOnly: true
  },
  'ColorControl:Primary3X': {
    //M2
    type: 'number',
    readOnly: true,
    minimum: 0,
    maximum: 65279 //0xFEFF
  },
  'ColorControl:Primary3Y': {
    //M2
    type: 'number',
    readOnly: true,
    minimum: 0,
    maximum: 65279 //0xFEFF
  },
  'ColorControl:Primary3Intensity': {
    //M2
    type: 'number',
    readOnly: true
  },
  //Additional Defined Primaries Information Attribute Set
  'ColorControl:Primary4X': {
    //M3
    type: 'number',
    readOnly: true,
    minimum: 0,
    maximum: 65279 //0xFEFF
  },
  'ColorControl:Primary4Y': {
    //M3
    type: 'number',
    readOnly: true,
    minimum: 0,
    maximum: 65279 //0xFEFF
  },
  'ColorControl:Primary4Intensity': {
    //M3
    type: 'number',
    readOnly: true
  },
  'ColorControl:Primary5X': {
    //M4
    type: 'number',
    readOnly: true,
    minimum: 0,
    maximum: 65279 //0xFEFF
  },
  'ColorControl:Primary5Y': {
    //M4
    type: 'number',
    readOnly: true,
    minimum: 0,
    maximum: 65279 //0xFEFF
  },
  'ColorControl:Primary5Intensity': {
    //M4
    type: 'number',
    readOnly: true
  },
  'ColorControl:Primary6X': {
    //M5
    type: 'number',
    readOnly: true,
    minimum: 0,
    maximum: 65279 //0xFEFF
  },
  'ColorControl:Primary6Y': {
    //M5
    type: 'number',
    readOnly: true,
    minimum: 0,
    maximum: 65279 //0xFEFF
  },
  'ColorControl:Primary6Intensity': {
    //M5
    type: 'number',
    readOnly: true
  },

  //Defined Color Points Settings Attribute Set
  'ColorControl:WhitePointX': {
    //O
    type: 'number',
    readOnly: true,
    minimum: 0,
    maximum: 65279 //0xFEFF
  },
  'ColorControl:WhitePointY': {
    //O
    type: 'number',
    readOnly: true,
    minimum: 0,
    maximum: 65279 //0xFEFF
  },
  'ColorControl:ColorPointRX': {
    //O
    type: 'number',
    readOnly: true,
    minimum: 0,
    maximum: 65279 //0xFEFF
  },
  'ColorControl:ColorPointRY': {
    //O
    type: 'number',
    readOnly: true,
    minimum: 0,
    maximum: 65279 //0xFEFF
  },
  'ColorControl:ColorPointRIntensity': {
    //O
    type: 'number',
    readOnly: true
  },
  'ColorControl:ColorPointGX': {
    //O
    type: 'number',
    readOnly: true,
    minimum: 0,
    maximum: 65279 //0xFEFF
  },
  'ColorControl:ColorPointGY': {
    //O
    type: 'number',
    readOnly: true,
    minimum: 0,
    maximum: 65279 //0xFEFF
  },
  'ColorControl:ColorPointGIntensity': {
    //O
    type: 'number',
    readOnly: true
  },
  'ColorControl:ColorPointBX': {
    //O
    type: 'number',
    readOnly: true,
    minimum: 0,
    maximum: 65279 //0xFEFF
  },
  'ColorControl:ColorPointBY': {
    //O
    type: 'number',
    readOnly: true,
    minimum: 0,
    maximum: 65279 //0xFEFF
  },
  'ColorControl:ColorPointBIntensity': {
    //O
    type: 'number',
    readOnly: true
  }
};

export const actions0x0300: { [key: string]: object } = {
  'ColorControl:MoveToHue': {
    //HS
    synchronous: true,
    input: {
      type: "object",
      properties: {
        hue: {
          type: "integer",
          minimum: 0,
          maximum: 254
        },
        direction: {
          type: "integer",
          minimum: 0,
          maximum: 3
        },
        transitionTime: {
          type: "integer",
          minimum: 0,
          maximum: 65534
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
      required: ["hue", "direction", "transitionTime", "optionsMask", "optionsOverride"]
    }
  },
  'ColorControl:MoveHue': {
    //HS
    synchronous: true,
    input: {
      type: "object",
      properties: {
        moveMode: {
          type: "integer",
          minimum: 0,
          maximum: 3
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
  'ColorControl:StepHue': {
    //HS
    synchronous: true,
    input: {
      type: "object",
      properties: {
        stepMode: {
          type: "integer",
          minimum: 0,
          maximum: 3
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
  'ColorControl:MoveToSaturation': {
    //HS
    synchronous: true,
    input: {
      type: "object",
      properties: {
        saturation: {
          type: "integer",
          minimum: 0,
          maximum: 1
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
      required: ["saturation", "transitionTime", "optionsMask", "optionsOverride"]
    }
  },
  'ColorControl:MoveSaturation': {
    //HS
    synchronous: true,
    input: {
      type: "object",
      properties: {
        moveMode: {
          type: "integer",
          minimum: 0,
          maximum: 3
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
  'ColorControl:StepSaturation': {
    //HS
    synchronous: true,
    input: {
      type: "object",
      properties: {
        stepMode: {
          type: "integer",
          minimum: 0,
          maximum: 3
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
  'ColorControl:MoveToHueAndSaturation': {
    //HS
    synchronous: true,
    input: {
      type: "object",
      properties: {
        hue: {
          type: "integer",
          minimum: 0,
          maximum: 254
        },
        saturation: {
          type: "integer",
          minimum: 0,
          maximum: 254
        },
        transitionTime: {
          type: "integer",
          minimum: 0,
          maximum: 65534
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
      required: ["hue", "saturation", "transitionTime", "optionsMask", "optionsOverride"]
    }
  },
  'ColorControl:MoveToColor': {
    //XY
    synchronous: true,
    input: {
      type: "object",
      properties: {
        colorX: {
          type: "integer",
          minimum: 0,
          maximum: 65279
        },
        colorY: {
          type: "integer",
          minimum: 0,
          maximum: 65279
        },
        transitionTime: {
          type: "integer",
          minimum: 0,
          maximum: 65534
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
      required: ["colorX", "colorY", "transitionTime", "optionsMask", "optionsOverride"]
    }
  },
  'ColorControl:MoveColor': {
    //XY
    synchronous: true,
    input: {
      type: "object",
      properties: {
        rateX: {
          type: "integer"
        },
        rateY: {
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
      required: ["rateX", "rateY", "optionsMask", "optionsOverride"]
    }
  },
  'ColorControl:StepColor': {
    //XY
    synchronous: true,
    input: {
      type: "object",
      properties: {
        stepX: {
          type: "integer"
        },
        stepY: {
          type: "integer"
        },
        transitionTime: {
          type: "integer",
          minimum: 0,
          maximum: 65534
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
      required: ["stepX", "stepY", "transitionTime", "optionsMask", "optionsOverride"]
    }
  },
  'ColorControl:MoveToColorTemperature': {
    //CT
    synchronous: true,
    input: {
      type: "object",
      properties: {
        colorTemperatureMireds: {
          type: "integer",
          minimum: 0,
          maximum: 65279
        },
        transitionTime: {
          type: "integer",
          minimum: 0,
          maximum: 65534
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
      required: ["colorTemperatureMireds", "transitionTime", "optionsMask", "optionsOverride"]
    }
  },
  'ColorControl:EnhancedMoveToHue': {
    //EHUE
    synchronous: true,
    input: {
      type: "object",
      properties: {
        enhancedHue: {
          type: "integer"
        },
        direction: {
          type: "integer",
          minimum: 0,
          maximum: 3
        },
        transitionTime: {
          type: "integer",
          minimum: 0,
          maximum: 65534
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
      required: ["enhancedHue", "direction", "transitionTime", "optionsMask", "optionsOverride"]
    }
  },
  'ColorControl:EnhancedMoveHue': {
    //EHUE
    synchronous: true,
    input: {
      type: "object",
      properties: {
        moveMode: {
          type: "integer",
          minimum: 0,
          maximum: 3
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
  'ColorControl:EnhancedStepHue': {
    //EHUE
    synchronous: true,
    input: {
      type: "object",
      properties: {
        stepMode: {
          type: "integer",
          minimum: 0,
          maximum: 3
        },
        stepSize: {
          type: "integer"
        },
        transitionTime: {
          type: "integer",
          minimum: 0,
          maximum: 65534
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
  'ColorControl:EnhancedMoveToHueAndSaturation': {
    //EHUE
    synchronous: true,
    input: {
      type: "object",
      properties: {
        enhancedHue: {
          type: "integer"
        },
        saturation: {
          type: "integer",
          minimum: 0,
          maximum: 254
        },
        transitionTime: {
          type: "integer",
          minimum: 0,
          maximum: 65534
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
      required: ["enhancedHue", "saturation", "transitionTime", "optionsMask", "optionsOverride"]
    }
  },
  'ColorControl:ColorLoopSet': {
    //CL
    synchronous: true,
    input: {
      type: "object",
      properties: {
        updateFlags: {
          type: "integer",
          minimum: 0,
          maximum: 7
        },
        action: {
          type: "integer",
          minimum: 0,
          maximum: 2
        },
        direction: {
          type: "integer",
          minimum: 0,
          maximum: 1
        },
        time: {
          type: "integer"
        },
        startHue: {
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
      required: ["updateFlags", "action", "direction", "time", "startHue", "optionsMask", "optionsOverride"]
    }
  },
  'ColorControl:StopMoveStep': {
    //HS, XY, CT
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
  'ColorControl:MoveColorTemperature': {
    //CT
    synchronous: true,
    input: {
      type: "object",
      properties: {
        moveMode: {
          type: "integer",
          minimum: 0,
          maximum: 3
        },
        rate: {
          type: "integer"
        },
        colorTemperatureMinimumMireds: {
          type: "integer",
          minimum: 0,
          maximum: 65279
        },
        colorTemperatureMaximumMireds: {
          type: "integer",
          minimum: 0,
          maximum: 65279
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
      required: ["moveMode", "rate", "colorTemperatureMinimumMireds", "colorTemperatureMaximumMireds", "optionsMask", "optionsOverride"]
    }
  },
  'ColorControl:StepColorTemperature': {
    //CT
    synchronous: true,
    input: {
      type: "object",
      properties: {
        stepMode: {
          type: "integer",
          minimum: 0,
          maximum: 3
        },
        stepSize: {
          type: "integer"
        },
        transitionTime: {
          type: "integer",
          minimum: 0,
          maximum: 65534
        },
        colorTemperatureMinimumMireds: {
          type: "integer",
          minimum: 0,
          maximum: 65279
        },
        colorTemperatureMaximumMireds: {
          type: "integer",
          minimum: 0,
          maximum: 65279
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
      required: ["stepMode", "stepSize", "transitionTime", "colorTemperatureMinimumMireds", "colorTemperatureMaximumMireds", "optionsMask", "optionsOverride"]
    }
  }
};
