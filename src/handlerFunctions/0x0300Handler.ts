//handler for cluster 0x0300 -> Color Control
import { invokeRequest, readRequest } from '../controller/matterController';

export const set0x0300Handler = (
  exposedThing: WoT.ExposedThing,
  endpoint: number
) => {
  //
  //read handler
  //
  exposedThing.setPropertyReadHandler('CurrentHue', function () {
    let data = JSON.stringify({
      nodeId: parseInt(exposedThing.getThingDescription().title.split('-')?.[0]),
      endpointId: endpoint,
      attributeType: 'ColorControl::CurrentHueA'
    });
    return readRequest(data);
  });

  exposedThing.setPropertyReadHandler('CurrentSaturation', function () {
    let data = JSON.stringify({
      nodeId: parseInt(exposedThing.getThingDescription().title.split('-')?.[0]),
      endpointId: endpoint,
      attributeType: 'ColorControl::CurrentSaturationA'
    });
    return readRequest(data);
  });

  exposedThing.setPropertyReadHandler('RemainingTime', function () {
    let data = JSON.stringify({
      nodeId: parseInt(exposedThing.getThingDescription().title.split('-')?.[0]),
      endpointId: endpoint,
      attributeType: 'ColorControl::RemainingTimeA'
    });
    return readRequest(data);
  });

  exposedThing.setPropertyReadHandler('CurrentX', function () {
    let data = JSON.stringify({
      nodeId: parseInt(exposedThing.getThingDescription().title.split('-')?.[0]),
      endpointId: endpoint,
      attributeType: 'ColorControl::CurrentXA'
    });
    return readRequest(data);
  });

  exposedThing.setPropertyReadHandler('CurrentY', function () {
    let data = JSON.stringify({
      nodeId: parseInt(exposedThing.getThingDescription().title.split('-')?.[0]),
      endpointId: endpoint,
      attributeType: 'ColorControl::CurrentYA'
    });
    return readRequest(data);
  });

  exposedThing.setPropertyReadHandler('DriftCompensation', function () {
    let data = JSON.stringify({
      nodeId: parseInt(exposedThing.getThingDescription().title.split('-')?.[0]),
      endpointId: endpoint,
      attributeType: 'ColorControl::DriftCompensationA'
    });
    return readRequest(data);
  });

  exposedThing.setPropertyReadHandler('CompensationText', function () {
    let data = JSON.stringify({
      nodeId: parseInt(exposedThing.getThingDescription().title.split('-')?.[0]),
      endpointId: endpoint,
      attributeType: 'ColorControl::CompensationTextA'
    });
    return readRequest(data);
  });

  exposedThing.setPropertyReadHandler('ColorTemperatureMireds', function () {
    let data = JSON.stringify({
      nodeId: parseInt(exposedThing.getThingDescription().title.split('-')?.[0]),
      endpointId: endpoint,
      attributeType: 'ColorControl::ColorTemperatureMiredsA'
    });
    return readRequest(data);
  });

  exposedThing.setPropertyReadHandler('ColorMode', function () {
    let data = JSON.stringify({
      nodeId: parseInt(exposedThing.getThingDescription().title.split('-')?.[0]),
      endpointId: endpoint,
      attributeType: 'ColorControl::ColorModeA'
    });
    return readRequest(data);
  });

  exposedThing.setPropertyReadHandler('Options', function () {
    let data = JSON.stringify({
      nodeId: parseInt(exposedThing.getThingDescription().title.split('-')?.[0]),
      endpointId: endpoint,
      attributeType: 'ColorControl::OptionsA'
    });
    return readRequest(data);
  });

  exposedThing.setPropertyReadHandler('EnhancedCurrentHue', function () {
    let data = JSON.stringify({
      nodeId: parseInt(exposedThing.getThingDescription().title.split('-')?.[0]),
      endpointId: endpoint,
      attributeType: 'ColorControl::EnhancedCurrentHueA'
    });
    return readRequest(data);
  });

  exposedThing.setPropertyReadHandler('EnhancedColorMode', function () {
    let data = JSON.stringify({
      nodeId: parseInt(exposedThing.getThingDescription().title.split('-')?.[0]),
      endpointId: endpoint,
      attributeType: 'ColorControl::EnhancedColorModeA'
    });
    return readRequest(data);
  });

  exposedThing.setPropertyReadHandler('ColorLoopActive', function () {
    let data = JSON.stringify({
      nodeId: parseInt(exposedThing.getThingDescription().title.split('-')?.[0]),
      endpointId: endpoint,
      attributeType: 'ColorControl::ColorLoopActiveA'
    });
    return readRequest(data);
  });

  exposedThing.setPropertyReadHandler('ColorLoopDirection', function () {
    let data = JSON.stringify({
      nodeId: parseInt(exposedThing.getThingDescription().title.split('-')?.[0]),
      endpointId: endpoint,
      attributeType: 'ColorControl::ColorLoopDirectionA'
    });
    return readRequest(data);
  });
    
  exposedThing.setPropertyReadHandler('ColorLoopTime', function () {
    let data = JSON.stringify({
      nodeId: parseInt(exposedThing.getThingDescription().title.split('-')?.[0]),
      endpointId: endpoint,
      attributeType: 'ColorControl::ColorLoopTimeA'
    });
    return readRequest(data);
  });
    
  exposedThing.setPropertyReadHandler('ColorLoopStartEnhancedHue', function () {
    let data = JSON.stringify({
      nodeId: parseInt(exposedThing.getThingDescription().title.split('-')?.[0]),
      endpointId: endpoint,
      attributeType: 'ColorControl::ColorLoopStartEnhancedHueA'
    });
    return readRequest(data);
  });
    
  exposedThing.setPropertyReadHandler('ColorLoopStoredEnhancedHue', function () {
    let data = JSON.stringify({
      nodeId: parseInt(exposedThing.getThingDescription().title.split('-')?.[0]),
      endpointId: endpoint,
      attributeType: 'ColorControl::ColorLoopStoredEnhancedHueA'
    });
    return readRequest(data);
  });
    
  exposedThing.setPropertyReadHandler('ColorCapabilities', function () {
    let data = JSON.stringify({
      nodeId: parseInt(exposedThing.getThingDescription().title.split('-')?.[0]),
      endpointId: endpoint,
      attributeType: 'ColorControl::ColorCapabilitiesA'
    });
    return readRequest(data);
  });
    
  exposedThing.setPropertyReadHandler('ColorTempPhysicalMinMireds', function () {
    let data = JSON.stringify({
      nodeId: parseInt(exposedThing.getThingDescription().title.split('-')?.[0]),
      endpointId: endpoint,
      attributeType: 'ColorControl::ColorTempPhysicalMinMiredsA'
    });
    return readRequest(data);
  });
    
  exposedThing.setPropertyReadHandler('ColorTempPhysicalMaxMireds', function () {
    let data = JSON.stringify({
      nodeId: parseInt(exposedThing.getThingDescription().title.split('-')?.[0]),
      endpointId: endpoint,
      attributeType: 'ColorControl::ColorTempPhysicalMaxMiredsA'
    });
    return readRequest(data);
  });
    
  exposedThing.setPropertyReadHandler('CoupleColorTempToLevelMinMireds', function () {
    let data = JSON.stringify({
      nodeId: parseInt(exposedThing.getThingDescription().title.split('-')?.[0]),
      endpointId: endpoint,
      attributeType: 'ColorControl::CoupleColorTempToLevelMinMiredsA'
    });
    return readRequest(data);
  });
    
  exposedThing.setPropertyReadHandler('StartUpColorTemperatureMireds', function () {
    let data = JSON.stringify({
      nodeId: parseInt(exposedThing.getThingDescription().title.split('-')?.[0]),
      endpointId: endpoint,
      attributeType: 'ColorControl::StartUpColorTemperatureMiredsA'
    });
    return readRequest(data);
  });
    
  exposedThing.setPropertyReadHandler('NumberOfPrimaries', function () {
    let data = JSON.stringify({
      nodeId: parseInt(exposedThing.getThingDescription().title.split('-')?.[0]),
      endpointId: endpoint,
      attributeType: 'ColorControl::NumberOfPrimariesA'
    });
    return readRequest(data);
  });
    
  exposedThing.setPropertyReadHandler('Primary1X', function () {
    let data = JSON.stringify({
      nodeId: parseInt(exposedThing.getThingDescription().title.split('-')?.[0]),
      endpointId: endpoint,
      attributeType: 'ColorControl::Primary1XA'
    });
    return readRequest(data);
  });
    
  exposedThing.setPropertyReadHandler('Primary1Y', function () {
    let data = JSON.stringify({
      nodeId: parseInt(exposedThing.getThingDescription().title.split('-')?.[0]),
      endpointId: endpoint,
      attributeType: 'ColorControl::Primary1YA'
    });
    return readRequest(data);
  });
    
  exposedThing.setPropertyReadHandler('Primary1Intensity', function () {
    let data = JSON.stringify({
      nodeId: parseInt(exposedThing.getThingDescription().title.split('-')?.[0]),
      endpointId: endpoint,
      attributeType: 'ColorControl::Primary1IntensityA'
    });
    return readRequest(data);
  });
    
  exposedThing.setPropertyReadHandler('Primary2X', function () {
    let data = JSON.stringify({
      nodeId: parseInt(exposedThing.getThingDescription().title.split('-')?.[0]),
      endpointId: endpoint,
      attributeType: 'ColorControl::Primary2XA'
    });
    return readRequest(data);
  });
    
  exposedThing.setPropertyReadHandler('Primary2Y', function () {
    let data = JSON.stringify({
      nodeId: parseInt(exposedThing.getThingDescription().title.split('-')?.[0]),
      endpointId: endpoint,
      attributeType: 'ColorControl::Primary2YA'
    });
    return readRequest(data);
  });
    
  exposedThing.setPropertyReadHandler('Primary2Intensity', function () {
    let data = JSON.stringify({
      nodeId: parseInt(exposedThing.getThingDescription().title.split('-')?.[0]),
      endpointId: endpoint,
      attributeType: 'ColorControl::Primary2IntensityA'
    });
    return readRequest(data);
  });
    
  exposedThing.setPropertyReadHandler('Primary3X', function () {
    let data = JSON.stringify({
      nodeId: parseInt(exposedThing.getThingDescription().title.split('-')?.[0]),
      endpointId: endpoint,
      attributeType: 'ColorControl::Primary3XA'
    });
    return readRequest(data);
  });
    
  exposedThing.setPropertyReadHandler('Primary3Y', function () {
    let data = JSON.stringify({
      nodeId: parseInt(exposedThing.getThingDescription().title.split('-')?.[0]),
      endpointId: endpoint,
      attributeType: 'ColorControl::Primary3YA'
    });
    return readRequest(data);
  });
    
  exposedThing.setPropertyReadHandler('Primary3Intensity', function () {
    let data = JSON.stringify({
      nodeId: parseInt(exposedThing.getThingDescription().title.split('-')?.[0]),
      endpointId: endpoint,
      attributeType: 'ColorControl::Primary3IntensityA'
    });
    return readRequest(data);
  });
    
  exposedThing.setPropertyReadHandler('Primary4X', function () {
    let data = JSON.stringify({
      nodeId: parseInt(exposedThing.getThingDescription().title.split('-')?.[0]),
      endpointId: endpoint,
      attributeType: 'ColorControl::Primary4XA'
    });
    return readRequest(data);
  });
    
  exposedThing.setPropertyReadHandler('Primary4Y', function () {
    let data = JSON.stringify({
      nodeId: parseInt(exposedThing.getThingDescription().title.split('-')?.[0]),
      endpointId: endpoint,
      attributeType: 'ColorControl::Primary4YA'
    });
    return readRequest(data);
  });
    
  exposedThing.setPropertyReadHandler('Primary4Intensity', function () {
    let data = JSON.stringify({
      nodeId: parseInt(exposedThing.getThingDescription().title.split('-')?.[0]),
      endpointId: endpoint,
      attributeType: 'ColorControl::Primary4IntensityA'
    });
    return readRequest(data);
  });
    
  exposedThing.setPropertyReadHandler('Primary5X', function () {
    let data = JSON.stringify({
      nodeId: parseInt(exposedThing.getThingDescription().title.split('-')?.[0]),
      endpointId: endpoint,
      attributeType: 'ColorControl::Primary5XA'
    });
    return readRequest(data);
  });
    
  exposedThing.setPropertyReadHandler('Primary5Y', function () {
    let data = JSON.stringify({
      nodeId: parseInt(exposedThing.getThingDescription().title.split('-')?.[0]),
      endpointId: endpoint,
      attributeType: 'ColorControl::Primary5YA'
    });
    return readRequest(data);
  });
    
  exposedThing.setPropertyReadHandler('Primary5Intensity', function () {
    let data = JSON.stringify({
      nodeId: parseInt(exposedThing.getThingDescription().title.split('-')?.[0]),
      endpointId: endpoint,
      attributeType: 'ColorControl::Primary5IntensityA'
    });
    return readRequest(data);
  });
    
  exposedThing.setPropertyReadHandler('Primary6X', function () {
    let data = JSON.stringify({
      nodeId: parseInt(exposedThing.getThingDescription().title.split('-')?.[0]),
      endpointId: endpoint,
      attributeType: 'ColorControl::Primary6XA'
    });
    return readRequest(data);
  });
    
  exposedThing.setPropertyReadHandler('Primary6Y', function () {
    let data = JSON.stringify({
      nodeId: parseInt(exposedThing.getThingDescription().title.split('-')?.[0]),
      endpointId: endpoint,
      attributeType: 'ColorControl::Primary6YA'
    });
    return readRequest(data);
  });
    
  exposedThing.setPropertyReadHandler('Primary6Intensity', function () {
    let data = JSON.stringify({
      nodeId: parseInt(exposedThing.getThingDescription().title.split('-')?.[0]),
      endpointId: endpoint,
      attributeType: 'ColorControl::Primary6IntensityA'
    });
    return readRequest(data);
  });
    
  exposedThing.setPropertyReadHandler('WhitePointX', function () {
    let data = JSON.stringify({
      nodeId: parseInt(exposedThing.getThingDescription().title.split('-')?.[0]),
      endpointId: endpoint,
      attributeType: 'ColorControl::WhitePointXA'
    });
    return readRequest(data);
  });
    
  exposedThing.setPropertyReadHandler('WhitePointY', function () {
    let data = JSON.stringify({
      nodeId: parseInt(exposedThing.getThingDescription().title.split('-')?.[0]),
      endpointId: endpoint,
      attributeType: 'ColorControl::WhitePointYA'
    });
    return readRequest(data);
  });
    
  exposedThing.setPropertyReadHandler('ColorPointRX', function () {
    let data = JSON.stringify({
      nodeId: parseInt(exposedThing.getThingDescription().title.split('-')?.[0]),
      endpointId: endpoint,
      attributeType: 'ColorControl::ColorPointRXA'
    });
    return readRequest(data);
  });
    
  exposedThing.setPropertyReadHandler('ColorPointRY', function () {
    let data = JSON.stringify({
      nodeId: parseInt(exposedThing.getThingDescription().title.split('-')?.[0]),
      endpointId: endpoint,
      attributeType: 'ColorControl::ColorPointRYA'
    });
    return readRequest(data);
  });
    
  exposedThing.setPropertyReadHandler('ColorPointRIntensity', function () {
    let data = JSON.stringify({
      nodeId: parseInt(exposedThing.getThingDescription().title.split('-')?.[0]),
      endpointId: endpoint,
      attributeType: 'ColorControl::ColorPointRIntensityA'
    });
    return readRequest(data);
  });
    
  exposedThing.setPropertyReadHandler('ColorPointGX', function () {
    let data = JSON.stringify({
      nodeId: parseInt(exposedThing.getThingDescription().title.split('-')?.[0]),
      endpointId: endpoint,
      attributeType: 'ColorControl::ColorPointGXA'
    });
    return readRequest(data);
  });
    
  exposedThing.setPropertyReadHandler('ColorPointGY', function () {
    let data = JSON.stringify({
      nodeId: parseInt(exposedThing.getThingDescription().title.split('-')?.[0]),
      endpointId: endpoint,
      attributeType: 'ColorControl::ColorPointGYA'
    });
    return readRequest(data);
  });
    
  exposedThing.setPropertyReadHandler('ColorPointGIntensity', function () {
    let data = JSON.stringify({
      nodeId: parseInt(exposedThing.getThingDescription().title.split('-')?.[0]),
      endpointId: endpoint,
      attributeType: 'ColorControl::ColorPointGIntensityA'
    });
    return readRequest(data);
  });
    
  exposedThing.setPropertyReadHandler('ColorPointBX', function () {
    let data = JSON.stringify({
      nodeId: parseInt(exposedThing.getThingDescription().title.split('-')?.[0]),
      endpointId: endpoint,
      attributeType: 'ColorControl::ColorPointBXA'
    });
    return readRequest(data);
  });
    
  exposedThing.setPropertyReadHandler('ColorPointBY', function () {
    let data = JSON.stringify({
      nodeId: parseInt(exposedThing.getThingDescription().title.split('-')?.[0]),
      endpointId: endpoint,
      attributeType: 'ColorControl::ColorPointBYA'
    });
    return readRequest(data);
  });
    
  exposedThing.setPropertyReadHandler('ColorPointBIntensity', function () {
    let data = JSON.stringify({
      nodeId: parseInt(exposedThing.getThingDescription().title.split('-')?.[0]),
      endpointId: endpoint,
      attributeType: 'ColorControl::ColorPointBIntensityA'
    });
    return readRequest(data);
  });

  //
  //action handler
  //
  exposedThing.setActionHandler('MoveToHue', async function (value, options) {
    const parsedValue = await value.value();
    if (typeof parsedValue !== 'string') {
      return 'Invalid content type';
    }

    const reqData = JSON.parse((await value.value())?.toString() || '');
    if (
      !reqData?.Hue &&
        !reqData?.Direction &&
        !reqData?.TransitionTime &&
      !reqData?.OptionsMask &&
      !reqData?.OptionsOverride
    ) {
      return 'Invalid argument';
    }

    let data = JSON.stringify({
      nodeId: parseInt(exposedThing.getThingDescription().title.split('-')?.[0]),
      endpointId: endpoint,
      commandType: 'ColorControl::MoveToHue',
      payload: {
        Hue: reqData?.Hue,
          Direction: reqData?.Direction,
          TransitionTime: reqData?.TransitionTime,
        OptionsMask: reqData?.OptionsMask,
        OptionsOverride: reqData?.OptionsOverride
      }
    });

    return invokeRequest(data);
  });

  exposedThing.setActionHandler('MoveHue', async function (value, options) {
    const parsedValue = await value.value();
    if (typeof parsedValue !== 'string') {
      return 'Invalid content type';
    }

    const reqData = JSON.parse((await value.value())?.toString() || '');
      if (
          !reqData?.MoveMode &&
      !reqData?.Rate &&
      !reqData?.OptionsMask &&
      !reqData?.OptionsOverride
    ) {
      return 'Invalid argument';
    }

    let data = JSON.stringify({
      nodeId: parseInt(exposedThing.getThingDescription().title.split('-')?.[0]),
      endpointId: endpoint,
      commandType: 'ColorControl::MoveHue',
      payload: {
        MoveMode: reqData?.MoveMode,
        Rate: reqData?.Rate,
        OptionsMask: reqData?.OptionsMask,
        OptionsOverride: reqData?.OptionsOverride
      }
    });

    return invokeRequest(data);
  });

  exposedThing.setActionHandler('StepHue', async function (value, options) {
    const parsedValue = await value.value();
    if (typeof parsedValue !== 'string') {
      return 'Invalid content type';
    }

    const reqData = JSON.parse((await value.value())?.toString() || '');
      if (!reqData?.StepMode && !reqData?.StepSize && !reqData?.TransitionTime && !reqData?.OptionsMask && !reqData?.OptionsOverride) {
      return 'Invalid argument';
    }

    let data = JSON.stringify({
      nodeId: parseInt(exposedThing.getThingDescription().title.split('-')?.[0]),
      endpointId: endpoint,
      commandType: 'ColorControl::StepHue',
        payload: {
            StepMode: reqData?.StepMode,
            StepSize: reqData?.StepSize,
            TransitionTime: reqData?.TransitionTime,
        OptionsMask: reqData?.OptionsMask,
        OptionsOverride: reqData?.OptionsOverride
      }
    });

    return invokeRequest(data);
  });

  exposedThing.setActionHandler(
    'MoveToSaturation',
    async function (value, options) {
      const parsedValue = await value.value();
      if (typeof parsedValue !== 'string') {
        return 'Invalid content type';
      }

      const reqData = JSON.parse((await value.value())?.toString() || '');
      if (
        !reqData?.Saturation &&
        !reqData?.TransitionTime &&
        !reqData?.OptionsMask &&
        !reqData?.OptionsOverride
      ) {
        return 'Invalid argument';
      }

      let data = JSON.stringify({
        nodeId: parseInt(exposedThing.getThingDescription().title.split('-')?.[0]),
        endpointId: endpoint,
        commandType: 'ColorControl::MoveToSaturation',
        payload: {
            Saturation: reqData?.Saturation,
          TransitionTime: reqData?.TransitionTime,
          OptionsMask: reqData?.OptionsMask,
          OptionsOverride: reqData?.OptionsOverride
        }
      });

      return invokeRequest(data);
    }
  );

  exposedThing.setActionHandler('MoveSaturation', async function (value, options) {
    const parsedValue = await value.value();
    if (typeof parsedValue !== 'string') {
      return 'Invalid content type';
    }

    const reqData = JSON.parse((await value.value())?.toString() || '');
    if (
      !reqData?.MoveMode &&
      !reqData?.Rate &&
      !reqData?.OptionsMask &&
      !reqData?.OptionsOverride
    ) {
      return 'Invalid argument';
    }

    let data = JSON.stringify({
      nodeId: parseInt(exposedThing.getThingDescription().title.split('-')?.[0]),
      endpointId: endpoint,
      commandType: 'ColorControl::MoveSaturation',
      payload: {
        MoveMode: reqData?.MoveMode,
        Rate: reqData?.Rate,
        OptionsMask: reqData?.OptionsMask,
        OptionsOverride: reqData?.OptionsOverride
      }
    });

    return invokeRequest(data);
  });

  exposedThing.setActionHandler('StepSaturation', async function (value, options) {
    const parsedValue = await value.value();
    if (typeof parsedValue !== 'string') {
      return 'Invalid content type';
    }

    const reqData = JSON.parse((await value.value())?.toString() || '');
    if (
      !reqData?.StepMode &&
      !reqData?.StepSize &&
      !reqData?.TransitionTime &&
      !reqData?.OptionsMask &&
      !reqData?.OptionsOverride
    ) {
      return 'Invalid argument';
    }

    let data = JSON.stringify({
      nodeId: parseInt(exposedThing.getThingDescription().title.split('-')?.[0]),
      endpointId: endpoint,
      commandType: 'ColorControl::StepSaturation',
      payload: {
        StepMode: reqData?.StepMode,
        StepSize: reqData?.StepMode,
        TransitionTime: reqData?.TransitionTime,
        OptionsMask: reqData?.OptionsMask,
        OptionsOverride: reqData?.OptionsOverride
      }
    });

    return invokeRequest(data);
  });
    
  exposedThing.setActionHandler(
    'MoveToHueAndSaturation',
    async function (value, options) {
      const parsedValue = await value.value();
      if (typeof parsedValue !== 'string') {
        return 'Invalid content type';
      }

      const reqData = JSON.parse((await value.value())?.toString() || '');
        if (
            !reqData?.Hue &&
        !reqData?.Saturation &&
        !reqData?.TransitionTime &&
        !reqData?.OptionsMask &&
        !reqData?.OptionsOverride
      ) {
        return 'Invalid argument';
      }

      let data = JSON.stringify({
        nodeId: parseInt(exposedThing.getThingDescription().title.split('-')?.[0]),
        endpointId: endpoint,
        commandType: 'ColorControl::MoveToHueAndSaturation',
          payload: {
            Hue: reqData?.Hue,
            Saturation: reqData?.Saturation,
          TransitionTime: reqData?.TransitionTime,
          OptionsMask: reqData?.OptionsMask,
          OptionsOverride: reqData?.OptionsOverride
        }
      });

      return invokeRequest(data);
    }
  );
    
  exposedThing.setActionHandler(
    'MoveToColor',
    async function (value, options) {
      const parsedValue = await value.value();
      if (typeof parsedValue !== 'string') {
        return 'Invalid content type';
      }

      const reqData = JSON.parse((await value.value())?.toString() || '');
        if (
            !reqData?.ColorX &&
        !reqData?.ColorY &&
        !reqData?.TransitionTime &&
        !reqData?.OptionsMask &&
        !reqData?.OptionsOverride
      ) {
        return 'Invalid argument';
      }

      let data = JSON.stringify({
        nodeId: parseInt(exposedThing.getThingDescription().title.split('-')?.[0]),
        endpointId: endpoint,
        commandType: 'ColorControl::MoveToColor',
          payload: {
            ColorX: reqData?.ColorX,
            ColorY: reqData?.ColorY,
          TransitionTime: reqData?.TransitionTime,
          OptionsMask: reqData?.OptionsMask,
          OptionsOverride: reqData?.OptionsOverride
        }
      });

      return invokeRequest(data);
    }
  );
    
  exposedThing.setActionHandler(
    'MoveColor',
    async function (value, options) {
      const parsedValue = await value.value();
      if (typeof parsedValue !== 'string') {
        return 'Invalid content type';
      }

      const reqData = JSON.parse((await value.value())?.toString() || '');
        if (
            !reqData?.RateX &&
        !reqData?.RateY &&
        !reqData?.OptionsMask &&
        !reqData?.OptionsOverride
      ) {
        return 'Invalid argument';
      }

      let data = JSON.stringify({
        nodeId: parseInt(exposedThing.getThingDescription().title.split('-')?.[0]),
        endpointId: endpoint,
        commandType: 'ColorControl::MoveColor',
          payload: {
            RateX: reqData?.RateX,
            RateY: reqData?.RateY,
          OptionsMask: reqData?.OptionsMask,
          OptionsOverride: reqData?.OptionsOverride
        }
      });

      return invokeRequest(data);
    }
  );
    
  exposedThing.setActionHandler(
    'StepColor',
    async function (value, options) {
      const parsedValue = await value.value();
      if (typeof parsedValue !== 'string') {
        return 'Invalid content type';
      }

      const reqData = JSON.parse((await value.value())?.toString() || '');
        if (
            !reqData?.StepX &&
            !reqData?.StepY &&
            !reqData?.TransitionTime &&
        !reqData?.OptionsMask &&
        !reqData?.OptionsOverride
      ) {
        return 'Invalid argument';
      }

      let data = JSON.stringify({
        nodeId: parseInt(exposedThing.getThingDescription().title.split('-')?.[0]),
        endpointId: endpoint,
        commandType: 'ColorControl::StepColor',
          payload: {
            StepX: reqData?.StepX,
              StepY: reqData?.StepY,
              TransitionTime: reqData?.TransitionTime,
          OptionsMask: reqData?.OptionsMask,
          OptionsOverride: reqData?.OptionsOverride
        }
      });

      return invokeRequest(data);
    }
  );
    
  exposedThing.setActionHandler(
    'MoveToColorTemperature',
    async function (value, options) {
      const parsedValue = await value.value();
      if (typeof parsedValue !== 'string') {
        return 'Invalid content type';
      }

      const reqData = JSON.parse((await value.value())?.toString() || '');
        if (
            !reqData?.ColorTemperatureMireds &&
            !reqData?.TransitionTime &&
        !reqData?.OptionsMask &&
        !reqData?.OptionsOverride
      ) {
        return 'Invalid argument';
      }

      let data = JSON.stringify({
        nodeId: parseInt(exposedThing.getThingDescription().title.split('-')?.[0]),
        endpointId: endpoint,
        commandType: 'ColorControl::MoveToColorTemperature',
          payload: {
            ColorTemperatureMireds: reqData?.ColorTemperatureMireds,
              TransitionTime: reqData?.TransitionTime,
          OptionsMask: reqData?.OptionsMask,
          OptionsOverride: reqData?.OptionsOverride
        }
      });

      return invokeRequest(data);
    }
  );
    
  exposedThing.setActionHandler(
    'EnhancedMoveToHue',
    async function (value, options) {
      const parsedValue = await value.value();
      if (typeof parsedValue !== 'string') {
        return 'Invalid content type';
      }

      const reqData = JSON.parse((await value.value())?.toString() || '');
        if (
            !reqData?.EnhancedHue &&
            !reqData?.Direction &&
            !reqData?.TransitionTime &&
        !reqData?.OptionsMask &&
        !reqData?.OptionsOverride
      ) {
        return 'Invalid argument';
      }

      let data = JSON.stringify({
        nodeId: parseInt(exposedThing.getThingDescription().title.split('-')?.[0]),
        endpointId: endpoint,
        commandType: 'ColorControl::EnhancedMoveToHue',
          payload: {
              EnhancedHue: reqData?.EnhancedHue,
              Direction: reqData?.Direction,
              TransitionTime: reqData?.TransitionTime,
          OptionsMask: reqData?.OptionsMask,
          OptionsOverride: reqData?.OptionsOverride
        }
      });

      return invokeRequest(data);
    }
  );
    
  exposedThing.setActionHandler(
    'EnhancedMoveHue',
    async function (value, options) {
      const parsedValue = await value.value();
      if (typeof parsedValue !== 'string') {
        return 'Invalid content type';
      }

      const reqData = JSON.parse((await value.value())?.toString() || '');
        if (
            !reqData?.MoveMode &&
            !reqData?.Rate &&
        !reqData?.OptionsMask &&
        !reqData?.OptionsOverride
      ) {
        return 'Invalid argument';
      }

      let data = JSON.stringify({
        nodeId: parseInt(exposedThing.getThingDescription().title.split('-')?.[0]),
        endpointId: endpoint,
        commandType: 'ColorControl::EnhancedMoveHue',
          payload: {
            MoveMode: reqData?.MoveMode,
            Rate: reqData?.Rate,
          OptionsMask: reqData?.OptionsMask,
          OptionsOverride: reqData?.OptionsOverride
        }
      });

      return invokeRequest(data);
    }
  );
    
  exposedThing.setActionHandler('EnhancedStepHue', async function (value, options) {
    const parsedValue = await value.value();
    if (typeof parsedValue !== 'string') {
      return 'Invalid content type';
    }

    const reqData = JSON.parse((await value.value())?.toString() || '');
      if (!reqData?.StepMode && !reqData?.StepSize && !reqData?.TransitionTime && !reqData?.OptionsMask && !reqData?.OptionsOverride) {
      return 'Invalid argument';
    }

    let data = JSON.stringify({
      nodeId: parseInt(exposedThing.getThingDescription().title.split('-')?.[0]),
      endpointId: endpoint,
      commandType: 'ColorControl::EnhancedStepHue',
        payload: {
            StepMode: reqData?.StepMode,
            StepSize: reqData?.StepSize,
            TransitionTime: reqData?.TransitionTime,
        OptionsMask: reqData?.OptionsMask,
        OptionsOverride: reqData?.OptionsOverride
      }
    });

    return invokeRequest(data);
  });
    
  exposedThing.setActionHandler(
    'EnhancedMoveToHueAndSaturation',
    async function (value, options) {
      const parsedValue = await value.value();
      if (typeof parsedValue !== 'string') {
        return 'Invalid content type';
      }

      const reqData = JSON.parse((await value.value())?.toString() || '');
        if (
            !reqData?.EnhancedHue &&
            !reqData?.Saturation &&
            !reqData?.TransitionTime &&
        !reqData?.OptionsMask &&
        !reqData?.OptionsOverride
      ) {
        return 'Invalid argument';
      }

      let data = JSON.stringify({
        nodeId: parseInt(exposedThing.getThingDescription().title.split('-')?.[0]),
        endpointId: endpoint,
        commandType: 'ColorControl::EnhancedMoveToHueAndSaturation',
          payload: {
            EnhancedHue: reqData?.EnhancedHue,
              Saturation: reqData?.Saturation,
              TransitionTime: reqData?.TransitionTime,
          OptionsMask: reqData?.OptionsMask,
          OptionsOverride: reqData?.OptionsOverride
        }
      });

      return invokeRequest(data);
    }
  );
    
  exposedThing.setActionHandler(
    'ColorLoopSet',
    async function (value, options) {
      const parsedValue = await value.value();
      if (typeof parsedValue !== 'string') {
        return 'Invalid content type';
      }

      const reqData = JSON.parse((await value.value())?.toString() || '');
        if (
            !reqData?.UpdateFlags &&
            !reqData?.Action &&
            !reqData?.Direction &&
            !reqData?.Time &&
            !reqData?.StartHue &&
        !reqData?.OptionsMask &&
        !reqData?.OptionsOverride
      ) {
        return 'Invalid argument';
      }

      let data = JSON.stringify({
        nodeId: parseInt(exposedThing.getThingDescription().title.split('-')?.[0]),
        endpointId: endpoint,
        commandType: 'ColorControl::ColorLoopSet',
          payload: {
            UpdateFlags: reqData?.UpdateFlags,
            Action: reqData?.Action,
            Direction: reqData?.Direction,
            Time: reqData?.Time,
            StartHue: reqData?.StartHue,
          OptionsMask: reqData?.OptionsMask,
          OptionsOverride: reqData?.OptionsOverride
        }
      });

      return invokeRequest(data);
    }
  );
    
  exposedThing.setActionHandler(
    'StopMoveStep',
    async function (value, options) {
      const parsedValue = await value.value();
      if (typeof parsedValue !== 'string') {
        return 'Invalid content type';
      }

      const reqData = JSON.parse((await value.value())?.toString() || '');
        if (
        !reqData?.OptionsMask &&
        !reqData?.OptionsOverride
      ) {
        return 'Invalid argument';
      }

      let data = JSON.stringify({
        nodeId: parseInt(exposedThing.getThingDescription().title.split('-')?.[0]),
        endpointId: endpoint,
        commandType: 'ColorControl::StopMoveStep',
          payload: {
          OptionsMask: reqData?.OptionsMask,
          OptionsOverride: reqData?.OptionsOverride
        }
      });

      return invokeRequest(data);
    }
  );
    
  exposedThing.setActionHandler(
    'MoveColorTemperature',
    async function (value, options) {
      const parsedValue = await value.value();
      if (typeof parsedValue !== 'string') {
        return 'Invalid content type';
      }

      const reqData = JSON.parse((await value.value())?.toString() || '');
        if (
            !reqData?.MoveMode &&
            !reqData?.Rate &&
            !reqData?.ColorTemperatureMinimumMireds &&
            !reqData?.ColorTemperatureMaximumMireds &&
        !reqData?.OptionsMask &&
        !reqData?.OptionsOverride
      ) {
        return 'Invalid argument';
      }

      let data = JSON.stringify({
        nodeId: parseInt(exposedThing.getThingDescription().title.split('-')?.[0]),
        endpointId: endpoint,
        commandType: 'ColorControl::MoveColorTemperature',
          payload: {
            MoveMode: reqData?.MoveMode,
            Rate: reqData?.Rate,
            ColorTemperatureMinimumMireds: reqData?.ColorTemperatureMinimumMireds,
            ColorTemperatureMaximumMireds: reqData?.ColorTemperatureMaximumMireds,
          OptionsMask: reqData?.OptionsMask,
          OptionsOverride: reqData?.OptionsOverride
        }
      });

      return invokeRequest(data);
    }
  );
    
  exposedThing.setActionHandler(
    'StepColorTemperature',
    async function (value, options) {
      const parsedValue = await value.value();
      if (typeof parsedValue !== 'string') {
        return 'Invalid content type';
      }

      const reqData = JSON.parse((await value.value())?.toString() || '');
        if (
            !reqData?.StepMode &&
            !reqData?.StepSize &&
            !reqData?.TransitionTime &&
            !reqData?.ColorTemperatureMinimumMireds &&
            !reqData?.ColorTemperatureMaximumMireds &&
        !reqData?.OptionsMask &&
        !reqData?.OptionsOverride
      ) {
        return 'Invalid argument';
      }

      let data = JSON.stringify({
        nodeId: parseInt(exposedThing.getThingDescription().title.split('-')?.[0]),
        endpointId: endpoint,
        commandType: 'ColorControl::StepColorTemperature',
          payload: {
            StepMode: reqData?.StepMode,
            StepSize: reqData?.StepSize,
            TransitionTime: reqData?.TransitionTime,
              ColorTemperatureMinimumMireds: reqData?.ColorTemperatureMinimumMireds,
              ColorTemperatureMaximumMireds: reqData?.ColorTemperatureMaximumMireds,
          OptionsMask: reqData?.OptionsMask,
          OptionsOverride: reqData?.OptionsOverride
        }
      });

      return invokeRequest(data);
    }
  );
};
