//handler for cluster 0x0008 -> Level Control
import { invokeRequest, readRequest } from '../controller/matterController';

export const set0x0008Handler = (
  smartPlug: WoT.ExposedThing,
  endpoint: number
) => {
  //
  //read handler
  //
  smartPlug.setPropertyReadHandler('LevelControl:CurrentLevel', function () {
    let data = JSON.stringify({
      nodeId: parseInt(smartPlug.getThingDescription().title.split('-')?.[0]),
      endpointId: endpoint,
      attributeType: 'LevelControl::CurrentLevelA'
    });
    return readRequest(data);
  });

  smartPlug.setPropertyReadHandler('LevelControl:RemainingTime', function () {
    let data = JSON.stringify({
      nodeId: parseInt(smartPlug.getThingDescription().title.split('-')?.[0]),
      endpointId: endpoint,
      attributeType: 'LevelControl::RemainingTimeA'
    });
    return readRequest(data);
  });

  smartPlug.setPropertyReadHandler('LevelControl:MinLevel', function () {
    let data = JSON.stringify({
      nodeId: parseInt(smartPlug.getThingDescription().title.split('-')?.[0]),
      endpointId: endpoint,
      attributeType: 'LevelControl::MinLevelA'
    });
    return readRequest(data);
  });

  smartPlug.setPropertyReadHandler('LevelControl:MaxLevel', function () {
    let data = JSON.stringify({
      nodeId: parseInt(smartPlug.getThingDescription().title.split('-')?.[0]),
      endpointId: endpoint,
      attributeType: 'LevelControl::MaxLevelA'
    });
    return readRequest(data);
  });

  smartPlug.setPropertyReadHandler('LevelControl:CurrentFrequency', function () {
    let data = JSON.stringify({
      nodeId: parseInt(smartPlug.getThingDescription().title.split('-')?.[0]),
      endpointId: endpoint,
      attributeType: 'LevelControl::CurrentFrequencyA'
    });
    return readRequest(data);
  });

  smartPlug.setPropertyReadHandler('LevelControl:MinFrequency', function () {
    let data = JSON.stringify({
      nodeId: parseInt(smartPlug.getThingDescription().title.split('-')?.[0]),
      endpointId: endpoint,
      attributeType: 'LevelControl::MinFrequencyA'
    });
    return readRequest(data);
  });

  smartPlug.setPropertyReadHandler('LevelControl:MaxFrequency', function () {
    let data = JSON.stringify({
      nodeId: parseInt(smartPlug.getThingDescription().title.split('-')?.[0]),
      endpointId: endpoint,
      attributeType: 'LevelControl::MaxFrequencyA'
    });
    return readRequest(data);
  });

  smartPlug.setPropertyReadHandler('LevelControl:OnOffTransitionTime', function () {
    let data = JSON.stringify({
      nodeId: parseInt(smartPlug.getThingDescription().title.split('-')?.[0]),
      endpointId: endpoint,
      attributeType: 'LevelControl::OnOffTransitionTimeA'
    });
    return readRequest(data);
  });

  smartPlug.setPropertyReadHandler('LevelControl:OnLevel', function () {
    let data = JSON.stringify({
      nodeId: parseInt(smartPlug.getThingDescription().title.split('-')?.[0]),
      endpointId: endpoint,
      attributeType: 'LevelControl::OnLevelA'
    });
    return readRequest(data);
  });

  smartPlug.setPropertyReadHandler('LevelControl:OnTransitionTime', function () {
    let data = JSON.stringify({
      nodeId: parseInt(smartPlug.getThingDescription().title.split('-')?.[0]),
      endpointId: endpoint,
      attributeType: 'LevelControl::OnTransitionTimeA'
    });
    return readRequest(data);
  });

  smartPlug.setPropertyReadHandler('LevelControl:OffTransitionTime', function () {
    let data = JSON.stringify({
      nodeId: parseInt(smartPlug.getThingDescription().title.split('-')?.[0]),
      endpointId: endpoint,
      attributeType: 'LevelControl::OffTransitionTimeA'
    });
    return readRequest(data);
  });

  smartPlug.setPropertyReadHandler('LevelControl:DefaultMoveRate', function () {
    let data = JSON.stringify({
      nodeId: parseInt(smartPlug.getThingDescription().title.split('-')?.[0]),
      endpointId: endpoint,
      attributeType: 'LevelControl::DefaultMoveRateA'
    });
    return readRequest(data);
  });

  smartPlug.setPropertyReadHandler('LevelControl:Options', function () {
    let data = JSON.stringify({
      nodeId: parseInt(smartPlug.getThingDescription().title.split('-')?.[0]),
      endpointId: endpoint,
      attributeType: 'LevelControl::OptionsA'
    });
    return readRequest(data);
  });

  smartPlug.setPropertyReadHandler('LevelControl:StartUpCurrentLevel', function () {
    let data = JSON.stringify({
      nodeId: parseInt(smartPlug.getThingDescription().title.split('-')?.[0]),
      endpointId: endpoint,
      attributeType: 'LevelControl::StartUpCurrentLevelA'
    });
    return readRequest(data);
  });

  //
  //action handler
  //
  smartPlug.setActionHandler('LevelControl:MoveToLevel', async function (value, options) {
    const parsedValue = await value.value();
    if (typeof parsedValue !== 'string') {
      return 'Invalid content type';
    }

    const reqData = JSON.parse((await value.value())?.toString() || '');
    if (
      !reqData?.Level &&
      !reqData?.TransitionTime &&
      !reqData?.OptionsMask &&
      !reqData?.OptionsOverride
    ) {
      return 'Invalid argument';
    }

    let data = JSON.stringify({
      nodeId: parseInt(smartPlug.getThingDescription().title.split('-')?.[0]),
      endpointId: endpoint,
      commandType: 'LevelControl::MoveToLevel',
      payload: {
        Level: reqData?.Level,
        TransitionTime: reqData?.TransitionTime,
        OptionsMask: reqData?.OptionsMask,
        OptionsOverride: reqData?.OptionsOverride
      }
    });

    return invokeRequest(data);
  });

  smartPlug.setActionHandler('LevelControl:Move', async function (value, options) {
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
      nodeId: parseInt(smartPlug.getThingDescription().title.split('-')?.[0]),
      endpointId: endpoint,
      commandType: 'LevelControl::Move',
      payload: {
        MoveMode: reqData?.MoveMode,
        Rate: reqData?.Rate,
        OptionsMask: reqData?.OptionsMask,
        OptionsOverride: reqData?.OptionsOverride
      }
    });

    return invokeRequest(data);
  });

  smartPlug.setActionHandler('LevelControl:Step', async function (value, options) {
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
      nodeId: parseInt(smartPlug.getThingDescription().title.split('-')?.[0]),
      endpointId: endpoint,
      commandType: 'LevelControl::Step',
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

  smartPlug.setActionHandler('LevelControl:Stop', async function (value, options) {
    const parsedValue = await value.value();
    if (typeof parsedValue !== 'string') {
      return 'Invalid content type';
    }

    const reqData = JSON.parse((await value.value())?.toString() || '');
    if (!reqData?.OptionsMask && !reqData?.OptionsOverride) {
      return 'Invalid argument';
    }

    let data = JSON.stringify({
      nodeId: parseInt(smartPlug.getThingDescription().title.split('-')?.[0]),
      endpointId: endpoint,
      commandType: 'LevelControl::Stop',
      payload: {
        OptionsMask: reqData?.OptionsMask,
        OptionsOverride: reqData?.OptionsOverride
      }
    });

    return invokeRequest(data);
  });

  smartPlug.setActionHandler(
    'LevelControl:MoveToLevelWithOnOff',
    async function (value, options) {
      const parsedValue = await value.value();
      if (typeof parsedValue !== 'string') {
        return 'Invalid content type';
      }

      const reqData = JSON.parse((await value.value())?.toString() || '');
      if (
        !reqData?.Level &&
        !reqData?.TransitionTime &&
        !reqData?.OptionsMask &&
        !reqData?.OptionsOverride
      ) {
        return 'Invalid argument';
      }

      let data = JSON.stringify({
        nodeId: parseInt(smartPlug.getThingDescription().title.split('-')?.[0]),
        endpointId: endpoint,
        commandType: 'LevelControl::MoveToLevelWithOnOff',
        payload: {
          Level: reqData?.Level,
          TransitionTime: reqData?.TransitionTime,
          OptionsMask: reqData?.OptionsMask,
          OptionsOverride: reqData?.OptionsOverride
        }
      });

      return invokeRequest(data);
    }
  );

  smartPlug.setActionHandler('LevelControl:MoveWithOnOff', async function (value, options) {
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
      nodeId: parseInt(smartPlug.getThingDescription().title.split('-')?.[0]),
      endpointId: endpoint,
      commandType: 'LevelControl::MoveWithOnOff',
      payload: {
        MoveMode: reqData?.MoveMode,
        Rate: reqData?.Rate,
        OptionsMask: reqData?.OptionsMask,
        OptionsOverride: reqData?.OptionsOverride
      }
    });

    return invokeRequest(data);
  });

  smartPlug.setActionHandler('LevelControl:StepWithOnOff', async function (value, options) {
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
      nodeId: parseInt(smartPlug.getThingDescription().title.split('-')?.[0]),
      endpointId: endpoint,
      commandType: 'LevelControl::StepWithOnOff',
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
};
