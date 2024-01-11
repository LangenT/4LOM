//handler for cluster 0x0300 -> Color Control Cluster

export const context0x0300: { [key: string]: string } = {
  matter0x0300: "https://raw.githubusercontent.com/project-chip/connectedhomeip/master/data_model/clusters/ColorControl.xml#"
}

export const properties0x0300: { [key: string]: object } = {
  //Color Information Attribute Set
  'ColorControl:CurrentHue': {
    //HS
    "@type": "matter0x0300:0x0000",
    type: 'number',
    readOnly: true,
    minimum: 0,
    maximum: 254
  },
  'ColorControl:CurrentSaturation': {
    //HS
    "@type": "matter0x0300:0x0001",
    type: 'number',
    readOnly: true,
    minimum: 0,
    maximum: 254
  },
  'ColorControl:RemainingTime': {
    //O
    "@type": "matter0x0300:0x0002",
    type: 'number',
    readOnly: true,
    minimum: 0,
    maximum: 65534
  },
  'ColorControl:CurrentX': {
    //XY
    "@type": "matter0x0300:0x0003",
    type: 'number',
    readOnly: true,
    minimum: 0,
    maximum: 65279 //0xFEFF
  },
  'ColorControl:CurrentY': {
    //XY
    "@type": "matter0x0300:0x0004",
    type: 'number',
    readOnly: true,
    minimum: 0,
    maximum: 65279 //0xFEFF
  },
  'ColorControl:DriftCompensation': {
    //O
    "@type": "matter0x0300:0x0005",
    type: 'number', //enum 0-4 defined
    observable: true,
    readOnly: true,
    minimum: 0,
    maximum: 4
  },
  'ColorControl:CompensationText': {
    //O
    "@type": "matter0x0300:0x0006",
    type: 'string',
    readOnly: true,
    maximum: 254
  },
  'ColorControl:ColorTemperatureMireds': {
    //CT
    "@type": "matter0x0300:0x0007",
    type: 'number',
    readOnly: true,
    minimum: 0,
    maximum: 65279 //0xFEFF
  },
  'ColorControl:ColorMode': {
    //M
    "@type": "matter0x0300:0x0008",
    type: 'number', //enum 0-2
    observable: true,
    readOnly: true,
    minimum: 0,
    maximum: 2
  },
  'ColorControl:Options': {
    "@type": "matter0x0300:0x000F",
    type: 'number',
    readOnly: true,
    minimum: 0,
    maximum: 1
  },
  'ColorControl:EnhancedCurrentHue': {
    //EHUE
    "@type": "matter0x0300:0x4000",
    type: 'number',
    readOnly: true
  },
  'ColorControl:EnhancedColorMode': {
    //M
    "@type": "matter0x0300:0x4001",
    type: 'number', //enum 0-3
    observable: true,
    readOnly: true,
    minimum: 0,
    maximum: 3
  },
  'ColorControl:ColorLoopActive': {
    //CL
    "@type": "matter0x0300:0x4002",
    type: 'number',
    readOnly: true
  },
  'ColorControl:ColorLoopDirection': {
    //CL
    "@type": "matter0x0300:0x4003",
    type: 'number',
    readOnly: true
  },
  'ColorControl:ColorLoopTime': {
    //CL
    "@type": "matter0x0300:0x4004",
    type: 'number',
    readOnly: true
  },
  'ColorControl:ColorLoopStartEnhancedHue': {
    //CL
    "@type": "matter0x0300:0x4005",
    type: 'number',
    readOnly: true
  },
  'ColorControl:ColorLoopStoredEnhancedHue': {
    //CL
    "@type": "matter0x0300:0x4006",
    type: 'number',
    readOnly: true
  },
  'ColorControl:ColorCapabilities': {
    //M
    "@type": "matter0x0300:0x400A",
    type: 'number',
    readOnly: true,
    minimum: 0,
    maximum: 65279 //0xFEFF
  },
  'ColorControl:ColorTempPhysicalMinMireds': {
    //CT
    "@type": "matter0x0300:0x400B",
    type: 'number',
    readOnly: true,
    minimum: 0,
    maximum: 65279 //0xFEFF
  },
  'ColorControl:ColorTempPhysicalMaxMireds': {
    //CT
    "@type": "matter0x0300:0x400C",
    type: 'number',
    readOnly: true,
    minimum: 0,
    maximum: 65279 //0xFEFF
  },
  'ColorControl:CoupleColorTempToLevelMinMireds': {
    //CT| ColorTemperatureMireds
    "@type": "matter0x0300:0x400D",
    type: 'number',
    readOnly: true
    //   minimum: ColorTempPhysicalMinMireds,
    //   maximum: ColorTemperatureMireds
  },
  'ColorControl:StartUpColorTemperatureMireds': {
    //CT| ColorTemperatureMireds
    "@type": "matter0x0300:0x4010",
    type: 'number',
    readOnly: true,
    minimum: 0,
    maximum: 65279 //0xFEFF
  },

  //Defined Primaries Information Attribute Set
  'ColorControl:NumberOfPrimaries': {
    //M
    "@type": "matter0x0300:0x0010",
    type: 'number',
    readOnly: true,
    minimum: 0,
    maximum: 6
  },
  'ColorControl:Primary1X': {
    //M0
    "@type": "matter0x0300:0x0011",
    type: 'number',
    readOnly: true,
    minimum: 0,
    maximum: 65279 //0xFEFF
  },
  'ColorControl:Primary1Y': {
    //M0
    "@type": "matter0x0300:0x0012",
    type: 'number',
    readOnly: true,
    minimum: 0,
    maximum: 65279 //0xFEFF
  },
  'ColorControl:Primary1Intensity': {
    //M0
    "@type": "matter0x0300:0x0013",
    type: 'number',
    readOnly: true
  },
  'ColorControl:Primary2X': {
    //M1
    "@type": "matter0x0300:0x0015",
    type: 'number',
    readOnly: true,
    minimum: 0,
    maximum: 65279 //0xFEFF
  },
  'ColorControl:Primary2Y': {
    //M1
    "@type": "matter0x0300:0x0016",
    type: 'number',
    readOnly: true,
    minimum: 0,
    maximum: 65279 //0xFEFF
  },
  'ColorControl:Primary2Intensity': {
    //M1
    "@type": "matter0x0300:0x0017",
    type: 'number',
    readOnly: true
  },
  'ColorControl:Primary3X': {
    //M2
    "@type": "matter0x0300:0x0019",
    type: 'number',
    readOnly: true,
    minimum: 0,
    maximum: 65279 //0xFEFF
  },
  'ColorControl:Primary3Y': {
    //M2
    "@type": "matter0x0300:0x001A",
    type: 'number',
    readOnly: true,
    minimum: 0,
    maximum: 65279 //0xFEFF
  },
  'ColorControl:Primary3Intensity': {
    //M2
    "@type": "matter0x0300:0x001B",
    type: 'number',
    readOnly: true
  },
  //Additional Defined Primaries Information Attribute Set
  'ColorControl:Primary4X': {
    //M3
    "@type": "matter0x0300:0x0020",
    type: 'number',
    readOnly: true,
    minimum: 0,
    maximum: 65279 //0xFEFF
  },
  'ColorControl:Primary4Y': {
    //M3
    "@type": "matter0x0300:0x0021",
    type: 'number',
    readOnly: true,
    minimum: 0,
    maximum: 65279 //0xFEFF
  },
  'ColorControl:Primary4Intensity': {
    //M3
    "@type": "matter0x0300:0x0022",
    type: 'number',
    readOnly: true
  },
  'ColorControl:Primary5X': {
    //M4
    "@type": "matter0x0300:0x0024",
    type: 'number',
    readOnly: true,
    minimum: 0,
    maximum: 65279 //0xFEFF
  },
  'ColorControl:Primary5Y': {
    //M4
    "@type": "matter0x0300:0x0025",
    type: 'number',
    readOnly: true,
    minimum: 0,
    maximum: 65279 //0xFEFF
  },
  'ColorControl:Primary5Intensity': {
    //M4
    "@type": "matter0x0300:0x0026",
    type: 'number',
    readOnly: true
  },
  'ColorControl:Primary6X': {
    //M5
    "@type": "matter0x0300:0x0028",
    type: 'number',
    readOnly: true,
    minimum: 0,
    maximum: 65279 //0xFEFF
  },
  'ColorControl:Primary6Y': {
    //M5
    "@type": "matter0x0300:0x0029",
    type: 'number',
    readOnly: true,
    minimum: 0,
    maximum: 65279 //0xFEFF
  },
  'ColorControl:Primary6Intensity': {
    //M5
    "@type": "matter0x0300:0x002A",
    type: 'number',
    readOnly: true
  },

  //Defined Color Points Settings Attribute Set
  'ColorControl:WhitePointX': {
    //O
    "@type": "matter0x0300:0x0030",
    type: 'number',
    readOnly: true,
    minimum: 0,
    maximum: 65279 //0xFEFF
  },
  'ColorControl:WhitePointY': {
    //O
    "@type": "matter0x0300:0x0031",
    type: 'number',
    readOnly: true,
    minimum: 0,
    maximum: 65279 //0xFEFF
  },
  'ColorControl:ColorPointRX': {
    //O
    "@type": "matter0x0300:0x0032",
    type: 'number',
    readOnly: true,
    minimum: 0,
    maximum: 65279 //0xFEFF
  },
  'ColorControl:ColorPointRY': {
    //O
    "@type": "matter0x0300:0x0033",
    type: 'number',
    readOnly: true,
    minimum: 0,
    maximum: 65279 //0xFEFF
  },
  'ColorControl:ColorPointRIntensity': {
    //O
    "@type": "matter0x0300:0x0034",
    type: 'number',
    readOnly: true
  },
  'ColorControl:ColorPointGX': {
    //O
    "@type": "matter0x0300:0x0036",
    type: 'number',
    readOnly: true,
    minimum: 0,
    maximum: 65279 //0xFEFF
  },
  'ColorControl:ColorPointGY': {
    //O
    "@type": "matter0x0300:0x0037",
    type: 'number',
    readOnly: true,
    minimum: 0,
    maximum: 65279 //0xFEFF
  },
  'ColorControl:ColorPointGIntensity': {
    //O
    "@type": "matter0x0300:0x0038",
    type: 'number',
    readOnly: true
  },
  'ColorControl:ColorPointBX': {
    //O
    "@type": "matter0x0300:0x003A",
    type: 'number',
    readOnly: true,
    minimum: 0,
    maximum: 65279 //0xFEFF
  },
  'ColorControl:ColorPointBY': {
    //O
    "@type": "matter0x0300:0x003B",
    type: 'number',
    readOnly: true,
    minimum: 0,
    maximum: 65279 //0xFEFF
  },
  'ColorControl:ColorPointBIntensity': {
    //O
    "@type": "matter0x0300:0x003C",
    type: 'number',
    readOnly: true
  }
};

export const actions0x0300: { [key: string]: object } = {
  'ColorControl:MoveToHue': {
    //HS
    "@type": "matter0x0300:0x00",
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
    "@type": "matter0x0300:0x01",
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
    "@type": "matter0x0300:0x02",
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
    "@type": "matter0x0300:0x03",
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
    "@type": "matter0x0300:0x04",
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
    "@type": "matter0x0300:0x05",
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
    "@type": "matter0x0300:0x06",
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
    "@type": "matter0x0300:0x07",
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
    "@type": "matter0x0300:0x08",
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
    "@type": "matter0x0300:0x09",
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
    "@type": "matter0x0300:0x0A",
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
    "@type": "matter0x0300:0x40",
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
    "@type": "matter0x0300:0x41",
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
    "@type": "matter0x0300:0x42",
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
    "@type": "matter0x0300:0x43",
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
    "@type": "matter0x0300:0x44",
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
    "@type": "matter0x0300:0x47",
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
    "@type": "matter0x0300:0x4B",
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
    "@type": "matter0x0300:0x4C",
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
