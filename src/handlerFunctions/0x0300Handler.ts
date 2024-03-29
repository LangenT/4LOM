//handler for cluster 0x0300 -> Color Control
import { invokeRequest, readRequest } from '../controller/matterController';

export const set0x0300Handler = (
  exposedThing: WoT.ExposedThing,
  endpoint: number
) => {
  //
  //read handler
  //
  exposedThing.setPropertyReadHandler('ColorControl:CurrentHue', function () {
    let data = JSON.stringify({
      nodeId: parseInt(
        exposedThing.getThingDescription().title.split('-')?.[0]
      ),
      endpointId: endpoint,
      attributeType: 'ColorControl::CurrentHueA'
    });
    return readRequest(data);
  });

  exposedThing.setPropertyReadHandler(
    'ColorControl:CurrentSaturation',
    function () {
      let data = JSON.stringify({
        nodeId: parseInt(
          exposedThing.getThingDescription().title.split('-')?.[0]
        ),
        endpointId: endpoint,
        attributeType: 'ColorControl::CurrentSaturationA'
      });
      return readRequest(data);
    }
  );

  exposedThing.setPropertyReadHandler(
    'ColorControl:RemainingTime',
    function () {
      let data = JSON.stringify({
        nodeId: parseInt(
          exposedThing.getThingDescription().title.split('-')?.[0]
        ),
        endpointId: endpoint,
        attributeType: 'ColorControl::RemainingTimeA'
      });
      return readRequest(data);
    }
  );

  exposedThing.setPropertyReadHandler('ColorControl:CurrentX', function () {
    let data = JSON.stringify({
      nodeId: parseInt(
        exposedThing.getThingDescription().title.split('-')?.[0]
      ),
      endpointId: endpoint,
      attributeType: 'ColorControl::CurrentXA'
    });
    return readRequest(data);
  });

  exposedThing.setPropertyReadHandler('ColorControl:CurrentY', function () {
    let data = JSON.stringify({
      nodeId: parseInt(
        exposedThing.getThingDescription().title.split('-')?.[0]
      ),
      endpointId: endpoint,
      attributeType: 'ColorControl::CurrentYA'
    });
    return readRequest(data);
  });

  exposedThing.setPropertyReadHandler(
    'ColorControl:DriftCompensation',
    function () {
      let data = JSON.stringify({
        nodeId: parseInt(
          exposedThing.getThingDescription().title.split('-')?.[0]
        ),
        endpointId: endpoint,
        attributeType: 'ColorControl::DriftCompensationA'
      });
      return readRequest(data);
    }
  );

  exposedThing.setPropertyReadHandler(
    'ColorControl:CompensationText',
    function () {
      let data = JSON.stringify({
        nodeId: parseInt(
          exposedThing.getThingDescription().title.split('-')?.[0]
        ),
        endpointId: endpoint,
        attributeType: 'ColorControl::CompensationTextA'
      });
      return readRequest(data);
    }
  );

  exposedThing.setPropertyReadHandler(
    'ColorControl:ColorTemperatureMireds',
    function () {
      let data = JSON.stringify({
        nodeId: parseInt(
          exposedThing.getThingDescription().title.split('-')?.[0]
        ),
        endpointId: endpoint,
        attributeType: 'ColorControl::ColorTemperatureMiredsA'
      });
      return readRequest(data);
    }
  );

  exposedThing.setPropertyReadHandler('ColorControl:ColorMode', function () {
    let data = JSON.stringify({
      nodeId: parseInt(
        exposedThing.getThingDescription().title.split('-')?.[0]
      ),
      endpointId: endpoint,
      attributeType: 'ColorControl::ColorModeA'
    });
    return readRequest(data);
  });

  exposedThing.setPropertyReadHandler('ColorControl:Options', function () {
    let data = JSON.stringify({
      nodeId: parseInt(
        exposedThing.getThingDescription().title.split('-')?.[0]
      ),
      endpointId: endpoint,
      attributeType: 'ColorControl::OptionsA'
    });
    return readRequest(data);
  });

  exposedThing.setPropertyReadHandler(
    'ColorControl:EnhancedCurrentHue',
    function () {
      let data = JSON.stringify({
        nodeId: parseInt(
          exposedThing.getThingDescription().title.split('-')?.[0]
        ),
        endpointId: endpoint,
        attributeType: 'ColorControl::EnhancedCurrentHueA'
      });
      return readRequest(data);
    }
  );

  exposedThing.setPropertyReadHandler(
    'ColorControl:EnhancedColorMode',
    function () {
      let data = JSON.stringify({
        nodeId: parseInt(
          exposedThing.getThingDescription().title.split('-')?.[0]
        ),
        endpointId: endpoint,
        attributeType: 'ColorControl::EnhancedColorModeA'
      });
      return readRequest(data);
    }
  );

  exposedThing.setPropertyReadHandler(
    'ColorControl:ColorLoopActive',
    function () {
      let data = JSON.stringify({
        nodeId: parseInt(
          exposedThing.getThingDescription().title.split('-')?.[0]
        ),
        endpointId: endpoint,
        attributeType: 'ColorControl::ColorLoopActiveA'
      });
      return readRequest(data);
    }
  );

  exposedThing.setPropertyReadHandler(
    'ColorControl:ColorLoopDirection',
    function () {
      let data = JSON.stringify({
        nodeId: parseInt(
          exposedThing.getThingDescription().title.split('-')?.[0]
        ),
        endpointId: endpoint,
        attributeType: 'ColorControl::ColorLoopDirectionA'
      });
      return readRequest(data);
    }
  );

  exposedThing.setPropertyReadHandler(
    'ColorControl:ColorLoopTime',
    function () {
      let data = JSON.stringify({
        nodeId: parseInt(
          exposedThing.getThingDescription().title.split('-')?.[0]
        ),
        endpointId: endpoint,
        attributeType: 'ColorControl::ColorLoopTimeA'
      });
      return readRequest(data);
    }
  );

  exposedThing.setPropertyReadHandler(
    'ColorControl:ColorLoopStartEnhancedHue',
    function () {
      let data = JSON.stringify({
        nodeId: parseInt(
          exposedThing.getThingDescription().title.split('-')?.[0]
        ),
        endpointId: endpoint,
        attributeType: 'ColorControl::ColorLoopStartEnhancedHueA'
      });
      return readRequest(data);
    }
  );

  exposedThing.setPropertyReadHandler(
    'ColorControl:ColorLoopStoredEnhancedHue',
    function () {
      let data = JSON.stringify({
        nodeId: parseInt(
          exposedThing.getThingDescription().title.split('-')?.[0]
        ),
        endpointId: endpoint,
        attributeType: 'ColorControl::ColorLoopStoredEnhancedHueA'
      });
      return readRequest(data);
    }
  );

  exposedThing.setPropertyReadHandler(
    'ColorControl:ColorCapabilities',
    function () {
      let data = JSON.stringify({
        nodeId: parseInt(
          exposedThing.getThingDescription().title.split('-')?.[0]
        ),
        endpointId: endpoint,
        attributeType: 'ColorControl::ColorCapabilitiesA'
      });
      return readRequest(data);
    }
  );

  exposedThing.setPropertyReadHandler(
    'ColorControl:ColorTempPhysicalMinMireds',
    function () {
      let data = JSON.stringify({
        nodeId: parseInt(
          exposedThing.getThingDescription().title.split('-')?.[0]
        ),
        endpointId: endpoint,
        attributeType: 'ColorControl::ColorTempPhysicalMinMiredsA'
      });
      return readRequest(data);
    }
  );

  exposedThing.setPropertyReadHandler(
    'ColorControl:ColorTempPhysicalMaxMireds',
    function () {
      let data = JSON.stringify({
        nodeId: parseInt(
          exposedThing.getThingDescription().title.split('-')?.[0]
        ),
        endpointId: endpoint,
        attributeType: 'ColorControl::ColorTempPhysicalMaxMiredsA'
      });
      return readRequest(data);
    }
  );

  exposedThing.setPropertyReadHandler(
    'ColorControl:CoupleColorTempToLevelMinMireds',
    function () {
      let data = JSON.stringify({
        nodeId: parseInt(
          exposedThing.getThingDescription().title.split('-')?.[0]
        ),
        endpointId: endpoint,
        attributeType: 'ColorControl::CoupleColorTempToLevelMinMiredsA'
      });
      return readRequest(data);
    }
  );

  exposedThing.setPropertyReadHandler(
    'ColorControl:StartUpColorTemperatureMireds',
    function () {
      let data = JSON.stringify({
        nodeId: parseInt(
          exposedThing.getThingDescription().title.split('-')?.[0]
        ),
        endpointId: endpoint,
        attributeType: 'ColorControl::StartUpColorTemperatureMiredsA'
      });
      return readRequest(data);
    }
  );

  exposedThing.setPropertyReadHandler(
    'ColorControl:NumberOfPrimaries',
    function () {
      let data = JSON.stringify({
        nodeId: parseInt(
          exposedThing.getThingDescription().title.split('-')?.[0]
        ),
        endpointId: endpoint,
        attributeType: 'ColorControl::NumberOfPrimariesA'
      });
      return readRequest(data);
    }
  );

  exposedThing.setPropertyReadHandler('ColorControl:Primary1X', function () {
    let data = JSON.stringify({
      nodeId: parseInt(
        exposedThing.getThingDescription().title.split('-')?.[0]
      ),
      endpointId: endpoint,
      attributeType: 'ColorControl::Primary1XA'
    });
    return readRequest(data);
  });

  exposedThing.setPropertyReadHandler('ColorControl:Primary1Y', function () {
    let data = JSON.stringify({
      nodeId: parseInt(
        exposedThing.getThingDescription().title.split('-')?.[0]
      ),
      endpointId: endpoint,
      attributeType: 'ColorControl::Primary1YA'
    });
    return readRequest(data);
  });

  exposedThing.setPropertyReadHandler(
    'ColorControl:Primary1Intensity',
    function () {
      let data = JSON.stringify({
        nodeId: parseInt(
          exposedThing.getThingDescription().title.split('-')?.[0]
        ),
        endpointId: endpoint,
        attributeType: 'ColorControl::Primary1IntensityA'
      });
      return readRequest(data);
    }
  );

  exposedThing.setPropertyReadHandler('ColorControl:Primary2X', function () {
    let data = JSON.stringify({
      nodeId: parseInt(
        exposedThing.getThingDescription().title.split('-')?.[0]
      ),
      endpointId: endpoint,
      attributeType: 'ColorControl::Primary2XA'
    });
    return readRequest(data);
  });

  exposedThing.setPropertyReadHandler('ColorControl:Primary2Y', function () {
    let data = JSON.stringify({
      nodeId: parseInt(
        exposedThing.getThingDescription().title.split('-')?.[0]
      ),
      endpointId: endpoint,
      attributeType: 'ColorControl::Primary2YA'
    });
    return readRequest(data);
  });

  exposedThing.setPropertyReadHandler(
    'ColorControl:Primary2Intensity',
    function () {
      let data = JSON.stringify({
        nodeId: parseInt(
          exposedThing.getThingDescription().title.split('-')?.[0]
        ),
        endpointId: endpoint,
        attributeType: 'ColorControl::Primary2IntensityA'
      });
      return readRequest(data);
    }
  );

  exposedThing.setPropertyReadHandler('ColorControl:Primary3X', function () {
    let data = JSON.stringify({
      nodeId: parseInt(
        exposedThing.getThingDescription().title.split('-')?.[0]
      ),
      endpointId: endpoint,
      attributeType: 'ColorControl::Primary3XA'
    });
    return readRequest(data);
  });

  exposedThing.setPropertyReadHandler('ColorControl:Primary3Y', function () {
    let data = JSON.stringify({
      nodeId: parseInt(
        exposedThing.getThingDescription().title.split('-')?.[0]
      ),
      endpointId: endpoint,
      attributeType: 'ColorControl::Primary3YA'
    });
    return readRequest(data);
  });

  exposedThing.setPropertyReadHandler(
    'ColorControl:Primary3Intensity',
    function () {
      let data = JSON.stringify({
        nodeId: parseInt(
          exposedThing.getThingDescription().title.split('-')?.[0]
        ),
        endpointId: endpoint,
        attributeType: 'ColorControl::Primary3IntensityA'
      });
      return readRequest(data);
    }
  );

  exposedThing.setPropertyReadHandler('ColorControl:Primary4X', function () {
    let data = JSON.stringify({
      nodeId: parseInt(
        exposedThing.getThingDescription().title.split('-')?.[0]
      ),
      endpointId: endpoint,
      attributeType: 'ColorControl::Primary4XA'
    });
    return readRequest(data);
  });

  exposedThing.setPropertyReadHandler('ColorControl:Primary4Y', function () {
    let data = JSON.stringify({
      nodeId: parseInt(
        exposedThing.getThingDescription().title.split('-')?.[0]
      ),
      endpointId: endpoint,
      attributeType: 'ColorControl::Primary4YA'
    });
    return readRequest(data);
  });

  exposedThing.setPropertyReadHandler(
    'ColorControl:Primary4Intensity',
    function () {
      let data = JSON.stringify({
        nodeId: parseInt(
          exposedThing.getThingDescription().title.split('-')?.[0]
        ),
        endpointId: endpoint,
        attributeType: 'ColorControl::Primary4IntensityA'
      });
      return readRequest(data);
    }
  );

  exposedThing.setPropertyReadHandler('ColorControl:Primary5X', function () {
    let data = JSON.stringify({
      nodeId: parseInt(
        exposedThing.getThingDescription().title.split('-')?.[0]
      ),
      endpointId: endpoint,
      attributeType: 'ColorControl::Primary5XA'
    });
    return readRequest(data);
  });

  exposedThing.setPropertyReadHandler('ColorControl:Primary5Y', function () {
    let data = JSON.stringify({
      nodeId: parseInt(
        exposedThing.getThingDescription().title.split('-')?.[0]
      ),
      endpointId: endpoint,
      attributeType: 'ColorControl::Primary5YA'
    });
    return readRequest(data);
  });

  exposedThing.setPropertyReadHandler(
    'ColorControl:Primary5Intensity',
    function () {
      let data = JSON.stringify({
        nodeId: parseInt(
          exposedThing.getThingDescription().title.split('-')?.[0]
        ),
        endpointId: endpoint,
        attributeType: 'ColorControl::Primary5IntensityA'
      });
      return readRequest(data);
    }
  );

  exposedThing.setPropertyReadHandler('ColorControl:Primary6X', function () {
    let data = JSON.stringify({
      nodeId: parseInt(
        exposedThing.getThingDescription().title.split('-')?.[0]
      ),
      endpointId: endpoint,
      attributeType: 'ColorControl::Primary6XA'
    });
    return readRequest(data);
  });

  exposedThing.setPropertyReadHandler('ColorControl:Primary6Y', function () {
    let data = JSON.stringify({
      nodeId: parseInt(
        exposedThing.getThingDescription().title.split('-')?.[0]
      ),
      endpointId: endpoint,
      attributeType: 'ColorControl::Primary6YA'
    });
    return readRequest(data);
  });

  exposedThing.setPropertyReadHandler(
    'ColorControl:Primary6Intensity',
    function () {
      let data = JSON.stringify({
        nodeId: parseInt(
          exposedThing.getThingDescription().title.split('-')?.[0]
        ),
        endpointId: endpoint,
        attributeType: 'ColorControl::Primary6IntensityA'
      });
      return readRequest(data);
    }
  );

  exposedThing.setPropertyReadHandler('ColorControl:WhitePointX', function () {
    let data = JSON.stringify({
      nodeId: parseInt(
        exposedThing.getThingDescription().title.split('-')?.[0]
      ),
      endpointId: endpoint,
      attributeType: 'ColorControl::WhitePointXA'
    });
    return readRequest(data);
  });

  exposedThing.setPropertyReadHandler('ColorControl:WhitePointY', function () {
    let data = JSON.stringify({
      nodeId: parseInt(
        exposedThing.getThingDescription().title.split('-')?.[0]
      ),
      endpointId: endpoint,
      attributeType: 'ColorControl::WhitePointYA'
    });
    return readRequest(data);
  });

  exposedThing.setPropertyReadHandler('ColorControl:ColorPointRX', function () {
    let data = JSON.stringify({
      nodeId: parseInt(
        exposedThing.getThingDescription().title.split('-')?.[0]
      ),
      endpointId: endpoint,
      attributeType: 'ColorControl::ColorPointRXA'
    });
    return readRequest(data);
  });

  exposedThing.setPropertyReadHandler('ColorControl:ColorPointRY', function () {
    let data = JSON.stringify({
      nodeId: parseInt(
        exposedThing.getThingDescription().title.split('-')?.[0]
      ),
      endpointId: endpoint,
      attributeType: 'ColorControl::ColorPointRYA'
    });
    return readRequest(data);
  });

  exposedThing.setPropertyReadHandler(
    'ColorControl:ColorPointRIntensity',
    function () {
      let data = JSON.stringify({
        nodeId: parseInt(
          exposedThing.getThingDescription().title.split('-')?.[0]
        ),
        endpointId: endpoint,
        attributeType: 'ColorControl::ColorPointRIntensityA'
      });
      return readRequest(data);
    }
  );

  exposedThing.setPropertyReadHandler('ColorControl:ColorPointGX', function () {
    let data = JSON.stringify({
      nodeId: parseInt(
        exposedThing.getThingDescription().title.split('-')?.[0]
      ),
      endpointId: endpoint,
      attributeType: 'ColorControl::ColorPointGXA'
    });
    return readRequest(data);
  });

  exposedThing.setPropertyReadHandler('ColorControl:ColorPointGY', function () {
    let data = JSON.stringify({
      nodeId: parseInt(
        exposedThing.getThingDescription().title.split('-')?.[0]
      ),
      endpointId: endpoint,
      attributeType: 'ColorControl::ColorPointGYA'
    });
    return readRequest(data);
  });

  exposedThing.setPropertyReadHandler(
    'ColorControl:ColorPointGIntensity',
    function () {
      let data = JSON.stringify({
        nodeId: parseInt(
          exposedThing.getThingDescription().title.split('-')?.[0]
        ),
        endpointId: endpoint,
        attributeType: 'ColorControl::ColorPointGIntensityA'
      });
      return readRequest(data);
    }
  );

  exposedThing.setPropertyReadHandler('ColorControl:ColorPointBX', function () {
    let data = JSON.stringify({
      nodeId: parseInt(
        exposedThing.getThingDescription().title.split('-')?.[0]
      ),
      endpointId: endpoint,
      attributeType: 'ColorControl::ColorPointBXA'
    });
    return readRequest(data);
  });

  exposedThing.setPropertyReadHandler('ColorControl:ColorPointBY', function () {
    let data = JSON.stringify({
      nodeId: parseInt(
        exposedThing.getThingDescription().title.split('-')?.[0]
      ),
      endpointId: endpoint,
      attributeType: 'ColorControl::ColorPointBYA'
    });
    return readRequest(data);
  });

  exposedThing.setPropertyReadHandler(
    'ColorControl:ColorPointBIntensity',
    function () {
      let data = JSON.stringify({
        nodeId: parseInt(
          exposedThing.getThingDescription().title.split('-')?.[0]
        ),
        endpointId: endpoint,
        attributeType: 'ColorControl::ColorPointBIntensityA'
      });
      return readRequest(data);
    }
  );

  //
  //action handler
  //
  exposedThing.setActionHandler(
    'ColorControl:MoveToHue',
    async function (value, options) {
      const parsedValue = await value.value();
      if (typeof parsedValue !== 'object') {
        return 'Invalid content type';
      }

      //const reqData = JSON.parse((await value.value())?.toString() || '');
      const reqData = JSON.parse(JSON.stringify(parsedValue));
      if (
        !reqData?.hue &&
        !reqData?.direction &&
        !reqData?.transitionTime &&
        !reqData?.optionsMask &&
        !reqData?.optionsOverride
      ) {
        return 'Invalid argument';
      }

      let data = JSON.stringify({
        nodeId: parseInt(
          exposedThing.getThingDescription().title.split('-')?.[0]
        ),
        endpointId: endpoint,
        commandType: 'ColorControl::MoveToHue',
        payload: {
          ...reqData
        }
      });

      return invokeRequest(data);
    }
  );

  exposedThing.setActionHandler(
    'ColorControl:MoveHue',
    async function (value, options) {
      const parsedValue = await value.value();
      if (typeof parsedValue !== 'object') {
        return 'Invalid content type';
      }

      //const reqData = JSON.parse((await value.value())?.toString() || '');
      const reqData = JSON.parse(JSON.stringify(parsedValue));
      if (
        !reqData?.moveMode &&
        !reqData?.rate &&
        !reqData?.optionsMask &&
        !reqData?.optionsOverride
      ) {
        return 'Invalid argument';
      }

      let data = JSON.stringify({
        nodeId: parseInt(
          exposedThing.getThingDescription().title.split('-')?.[0]
        ),
        endpointId: endpoint,
        commandType: 'ColorControl::MoveHue',
        payload: {
          ...reqData
        }
      });

      return invokeRequest(data);
    }
  );

  exposedThing.setActionHandler(
    'ColorControl:StepHue',
    async function (value, options) {
      const parsedValue = await value.value();
      if (typeof parsedValue !== 'object') {
        return 'Invalid content type';
      }

      //const reqData = JSON.parse((await value.value())?.toString() || '');
      const reqData = JSON.parse(JSON.stringify(parsedValue));
      if (
        !reqData?.stepMode &&
        !reqData?.stepSize &&
        !reqData?.transitionTime &&
        !reqData?.optionsMask &&
        !reqData?.optionsOverride
      ) {
        return 'Invalid argument';
      }

      let data = JSON.stringify({
        nodeId: parseInt(
          exposedThing.getThingDescription().title.split('-')?.[0]
        ),
        endpointId: endpoint,
        commandType: 'ColorControl::StepHue',
        payload: {
          ...reqData
        }
      });

      return invokeRequest(data);
    }
  );

  exposedThing.setActionHandler(
    'ColorControl:MoveToSaturation',
    async function (value, options) {
      const parsedValue = await value.value();
      if (typeof parsedValue !== 'object') {
        return 'Invalid content type';
      }

      //const reqData = JSON.parse((await value.value())?.toString() || '');
      const reqData = JSON.parse(JSON.stringify(parsedValue));
      if (
        !reqData?.saturation &&
        !reqData?.transitionTime &&
        !reqData?.optionsMask &&
        !reqData?.optionsOverride
      ) {
        return 'Invalid argument';
      }

      let data = JSON.stringify({
        nodeId: parseInt(
          exposedThing.getThingDescription().title.split('-')?.[0]
        ),
        endpointId: endpoint,
        commandType: 'ColorControl::MoveToSaturation',
        payload: {
          ...reqData
        }
      });

      return invokeRequest(data);
    }
  );

  exposedThing.setActionHandler(
    'ColorControl:MoveSaturation',
    async function (value, options) {
      const parsedValue = await value.value();
      if (typeof parsedValue !== 'object') {
        return 'Invalid content type';
      }

      //const reqData = JSON.parse((await value.value())?.toString() || '');
      const reqData = JSON.parse(JSON.stringify(parsedValue));
      if (
        !reqData?.moveMode &&
        !reqData?.rate &&
        !reqData?.optionsMask &&
        !reqData?.optionsOverride
      ) {
        return 'Invalid argument';
      }

      let data = JSON.stringify({
        nodeId: parseInt(
          exposedThing.getThingDescription().title.split('-')?.[0]
        ),
        endpointId: endpoint,
        commandType: 'ColorControl::MoveSaturation',
        payload: {
          ...reqData
        }
      });

      return invokeRequest(data);
    }
  );

  exposedThing.setActionHandler(
    'ColorControl:StepSaturation',
    async function (value, options) {
      const parsedValue = await value.value();
      if (typeof parsedValue !== 'object') {
        return 'Invalid content type';
      }

      //const reqData = JSON.parse((await value.value())?.toString() || '');
      const reqData = JSON.parse(JSON.stringify(parsedValue));
      if (
        !reqData?.stepMode &&
        !reqData?.stepSize &&
        !reqData?.transitionTime &&
        !reqData?.optionsMask &&
        !reqData?.optionsOverride
      ) {
        return 'Invalid argument';
      }

      let data = JSON.stringify({
        nodeId: parseInt(
          exposedThing.getThingDescription().title.split('-')?.[0]
        ),
        endpointId: endpoint,
        commandType: 'ColorControl::StepSaturation',
        payload: {
          ...reqData
        }
      });

      return invokeRequest(data);
    }
  );

  exposedThing.setActionHandler(
    'ColorControl:MoveToHueAndSaturation',
    async function (value, options) {
      const parsedValue = await value.value();
      if (typeof parsedValue !== 'object') {
        return 'Invalid content type';
      }

      //const reqData = JSON.parse((await value.value())?.toString() || '');
      const reqData = JSON.parse(JSON.stringify(parsedValue));
      if (
        !reqData?.hue &&
        !reqData?.saturation &&
        !reqData?.transitionTime &&
        !reqData?.optionsMask &&
        !reqData?.optionsOverride
      ) {
        return 'Invalid argument';
      }

      let data = JSON.stringify({
        nodeId: parseInt(
          exposedThing.getThingDescription().title.split('-')?.[0]
        ),
        endpointId: endpoint,
        commandType: 'ColorControl::MoveToHueAndSaturation',
        payload: {
          ...reqData
        }
      });

      return invokeRequest(data);
    }
  );

  exposedThing.setActionHandler('ColorControl:MoveToColor', async function (value, options) {
    const parsedValue = await value.value();
    if (typeof parsedValue !== 'object') {
      return 'Invalid content type';
    }

    //const reqData = JSON.parse((await value.value())?.toString() || '');
      const reqData = JSON.parse(JSON.stringify(parsedValue));
    if (
      !reqData?.colorX &&
      !reqData?.colorY &&
      !reqData?.transitionTime &&
      !reqData?.optionsMask &&
      !reqData?.optionsOverride
    ) {
      return 'Invalid argument';
    }

    let data = JSON.stringify({
      nodeId: parseInt(
        exposedThing.getThingDescription().title.split('-')?.[0]
      ),
      endpointId: endpoint,
      commandType: 'ColorControl::MoveToColor',
      payload: {
        ...reqData
      }
    });

    return invokeRequest(data);
  });

  exposedThing.setActionHandler('ColorControl:MoveColor', async function (value, options) {
    const parsedValue = await value.value();
    if (typeof parsedValue !== 'object') {
      return 'Invalid content type';
    }

    //const reqData = JSON.parse((await value.value())?.toString() || '');
      const reqData = JSON.parse(JSON.stringify(parsedValue));
    if (
      !reqData?.rateX &&
      !reqData?.rateY &&
      !reqData?.optionsMask &&
      !reqData?.optionsOverride
    ) {
      return 'Invalid argument';
    }

    let data = JSON.stringify({
      nodeId: parseInt(
        exposedThing.getThingDescription().title.split('-')?.[0]
      ),
      endpointId: endpoint,
      commandType: 'ColorControl::MoveColor',
      payload: {
        ...reqData
      }
    });

    return invokeRequest(data);
  });

  exposedThing.setActionHandler('ColorControl:StepColor', async function (value, options) {
    const parsedValue = await value.value();
    if (typeof parsedValue !== 'object') {
      return 'Invalid content type';
    }

    //const reqData = JSON.parse((await value.value())?.toString() || '');
      const reqData = JSON.parse(JSON.stringify(parsedValue));
    if (
      !reqData?.stepX &&
      !reqData?.stepY &&
      !reqData?.transitionTime &&
      !reqData?.optionsMask &&
      !reqData?.optionsOverride
    ) {
      return 'Invalid argument';
    }

    let data = JSON.stringify({
      nodeId: parseInt(
        exposedThing.getThingDescription().title.split('-')?.[0]
      ),
      endpointId: endpoint,
      commandType: 'ColorControl::StepColor',
      payload: {
        ...reqData
      }
    });

    return invokeRequest(data);
  });

  exposedThing.setActionHandler(
    'ColorControl:MoveToColorTemperature',
    async function (value, options) {
      const parsedValue = await value.value();
      if (typeof parsedValue !== 'object') {
        return 'Invalid content type';
      }

      //const reqData = JSON.parse((await value.value())?.toString() || '');
      const reqData = JSON.parse(JSON.stringify(parsedValue));
      if (
        !reqData?.colorTemperatureMireds &&
        !reqData?.transitionTime &&
        !reqData?.optionsMask &&
        !reqData?.optionsOverride
      ) {
        return 'Invalid argument';
      }

      let data = JSON.stringify({
        nodeId: parseInt(
          exposedThing.getThingDescription().title.split('-')?.[0]
        ),
        endpointId: endpoint,
        commandType: 'ColorControl::MoveToColorTemperature',
        payload: {
          ...reqData
        }
      });

      return invokeRequest(data);
    }
  );

  exposedThing.setActionHandler(
    'ColorControl:EnhancedMoveToHue',
    async function (value, options) {
      const parsedValue = await value.value();
      if (typeof parsedValue !== 'object') {
        return 'Invalid content type';
      }

      //const reqData = JSON.parse((await value.value())?.toString() || '');
      const reqData = JSON.parse(JSON.stringify(parsedValue));
      if (
        !reqData?.enhancedHue &&
        !reqData?.direction &&
        !reqData?.transitionTime &&
        !reqData?.optionsMask &&
        !reqData?.optionsOverride
      ) {
        return 'Invalid argument';
      }

      let data = JSON.stringify({
        nodeId: parseInt(
          exposedThing.getThingDescription().title.split('-')?.[0]
        ),
        endpointId: endpoint,
        commandType: 'ColorControl::EnhancedMoveToHue',
        payload: {
          ...reqData
        }
      });

      return invokeRequest(data);
    }
  );

  exposedThing.setActionHandler(
    'ColorControl:EnhancedMoveHue',
    async function (value, options) {
      const parsedValue = await value.value();
      if (typeof parsedValue !== 'object') {
        return 'Invalid content type';
      }

      //const reqData = JSON.parse((await value.value())?.toString() || '');
      const reqData = JSON.parse(JSON.stringify(parsedValue));
      if (
        !reqData?.moveMode &&
        !reqData?.rate &&
        !reqData?.optionsMask &&
        !reqData?.optionsOverride
      ) {
        return 'Invalid argument';
      }

      let data = JSON.stringify({
        nodeId: parseInt(
          exposedThing.getThingDescription().title.split('-')?.[0]
        ),
        endpointId: endpoint,
        commandType: 'ColorControl::EnhancedMoveHue',
        payload: {
          ...reqData
        }
      });

      return invokeRequest(data);
    }
  );

  exposedThing.setActionHandler(
    'ColorControl:EnhancedStepHue',
    async function (value, options) {
      const parsedValue = await value.value();
      if (typeof parsedValue !== 'object') {
        return 'Invalid content type';
      }

      //const reqData = JSON.parse((await value.value())?.toString() || '');
      const reqData = JSON.parse(JSON.stringify(parsedValue));
      if (
        !reqData?.stepMode &&
        !reqData?.stepSize &&
        !reqData?.transitionTime &&
        !reqData?.optionsMask &&
        !reqData?.optionsOverride
      ) {
        return 'Invalid argument';
      }

      let data = JSON.stringify({
        nodeId: parseInt(
          exposedThing.getThingDescription().title.split('-')?.[0]
        ),
        endpointId: endpoint,
        commandType: 'ColorControl::EnhancedStepHue',
        payload: {
          ...reqData
        }
      });

      return invokeRequest(data);
    }
  );

  exposedThing.setActionHandler(
    'ColorControl:EnhancedMoveToHueAndSaturation',
    async function (value, options) {
      const parsedValue = await value.value();
      if (typeof parsedValue !== 'object') {
        return 'Invalid content type';
      }

      //const reqData = JSON.parse((await value.value())?.toString() || '');
      const reqData = JSON.parse(JSON.stringify(parsedValue));
      if (
        !reqData?.enhancedHue &&
        !reqData?.saturation &&
        !reqData?.transitionTime &&
        !reqData?.optionsMask &&
        !reqData?.optionsOverride
      ) {
        return 'Invalid argument';
      }

      let data = JSON.stringify({
        nodeId: parseInt(
          exposedThing.getThingDescription().title.split('-')?.[0]
        ),
        endpointId: endpoint,
        commandType: 'ColorControl::EnhancedMoveToHueAndSaturation',
        payload: {
          ...reqData
        }
      });

      return invokeRequest(data);
    }
  );

  exposedThing.setActionHandler(
    'ColorControl:ColorLoopSet',
    async function (value, options) {
      const parsedValue = await value.value();
      if (typeof parsedValue !== 'object') {
        return 'Invalid content type';
      }

      //const reqData = JSON.parse((await value.value())?.toString() || '');
      const reqData = JSON.parse(JSON.stringify(parsedValue));
      if (
        !reqData?.updateFlags &&
        !reqData?.action &&
        !reqData?.direction &&
        !reqData?.time &&
        !reqData?.startHue &&
        !reqData?.optionsMask &&
        !reqData?.optionsOverride
      ) {
        return 'Invalid argument';
      }

      let data = JSON.stringify({
        nodeId: parseInt(
          exposedThing.getThingDescription().title.split('-')?.[0]
        ),
        endpointId: endpoint,
        commandType: 'ColorControl::ColorLoopSet',
        payload: {
          ...reqData
        }
      });

      return invokeRequest(data);
    }
  );

  exposedThing.setActionHandler(
    'ColorControl:StopMoveStep',
    async function (value, options) {
      const parsedValue = await value.value();
      if (typeof parsedValue !== 'object') {
        return 'Invalid content type';
      }

      //const reqData = JSON.parse((await value.value())?.toString() || '');
      const reqData = JSON.parse(JSON.stringify(parsedValue));
      if (!reqData?.optionsMask && !reqData?.optionsOverride) {
        return 'Invalid argument';
      }

      let data = JSON.stringify({
        nodeId: parseInt(
          exposedThing.getThingDescription().title.split('-')?.[0]
        ),
        endpointId: endpoint,
        commandType: 'ColorControl::StopMoveStep',
        payload: {
          ...reqData
        }
      });

      return invokeRequest(data);
    }
  );

  exposedThing.setActionHandler(
    'ColorControl:MoveColorTemperature',
    async function (value, options) {
      const parsedValue = await value.value();
      if (typeof parsedValue !== 'object') {
        return 'Invalid content type';
      }

      //const reqData = JSON.parse((await value.value())?.toString() || '');
      const reqData = JSON.parse(JSON.stringify(parsedValue));
      if (
        !reqData?.moveMode &&
        !reqData?.rate &&
        !reqData?.colorTemperatureMinimumMireds &&
        !reqData?.colorTemperatureMaximumMireds &&
        !reqData?.optionsMask &&
        !reqData?.optionsOverride
      ) {
        return 'Invalid argument';
      }

      let data = JSON.stringify({
        nodeId: parseInt(
          exposedThing.getThingDescription().title.split('-')?.[0]
        ),
        endpointId: endpoint,
        commandType: 'ColorControl::MoveColorTemperature',
        payload: {
          ...reqData
        }
      });

      return invokeRequest(data);
    }
  );

  exposedThing.setActionHandler(
    'ColorControl:StepColorTemperature',
    async function (value, options) {
      const parsedValue = await value.value();
      if (typeof parsedValue !== 'object') {
        return 'Invalid content type';
      }

      //const reqData = JSON.parse((await value.value())?.toString() || '');
      const reqData = JSON.parse(JSON.stringify(parsedValue));
      if (
        !reqData?.stepMode &&
        !reqData?.stepSize &&
        !reqData?.transitionTime &&
        !reqData?.colorTemperatureMinimumMireds &&
        !reqData?.colorTemperatureMaximumMireds &&
        !reqData?.optionsMask &&
        !reqData?.optionsOverride
      ) {
        return 'Invalid argument';
      }

      let data = JSON.stringify({
        nodeId: parseInt(
          exposedThing.getThingDescription().title.split('-')?.[0]
        ),
        endpointId: endpoint,
        commandType: 'ColorControl::StepColorTemperature',
        payload: {
          ...reqData
        }
      });

      return invokeRequest(data);
    }
  );
};
