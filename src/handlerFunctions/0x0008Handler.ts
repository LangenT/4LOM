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

  smartPlug.setPropertyReadHandler(
    'LevelControl:CurrentFrequency',
    function () {
      let data = JSON.stringify({
        nodeId: parseInt(smartPlug.getThingDescription().title.split('-')?.[0]),
        endpointId: endpoint,
        attributeType: 'LevelControl::CurrentFrequencyA'
      });
      return readRequest(data);
    }
  );

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

  smartPlug.setPropertyReadHandler(
    'LevelControl:OnOffTransitionTime',
    function () {
      let data = JSON.stringify({
        nodeId: parseInt(smartPlug.getThingDescription().title.split('-')?.[0]),
        endpointId: endpoint,
        attributeType: 'LevelControl::OnOffTransitionTimeA'
      });
      return readRequest(data);
    }
  );

  smartPlug.setPropertyReadHandler('LevelControl:OnLevel', function () {
    let data = JSON.stringify({
      nodeId: parseInt(smartPlug.getThingDescription().title.split('-')?.[0]),
      endpointId: endpoint,
      attributeType: 'LevelControl::OnLevelA'
    });
    return readRequest(data);
  });

  smartPlug.setPropertyReadHandler(
    'LevelControl:OnTransitionTime',
    function () {
      let data = JSON.stringify({
        nodeId: parseInt(smartPlug.getThingDescription().title.split('-')?.[0]),
        endpointId: endpoint,
        attributeType: 'LevelControl::OnTransitionTimeA'
      });
      return readRequest(data);
    }
  );

  smartPlug.setPropertyReadHandler(
    'LevelControl:OffTransitionTime',
    function () {
      let data = JSON.stringify({
        nodeId: parseInt(smartPlug.getThingDescription().title.split('-')?.[0]),
        endpointId: endpoint,
        attributeType: 'LevelControl::OffTransitionTimeA'
      });
      return readRequest(data);
    }
  );

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

  smartPlug.setPropertyReadHandler(
    'LevelControl:StartUpCurrentLevel',
    function () {
      let data = JSON.stringify({
        nodeId: parseInt(smartPlug.getThingDescription().title.split('-')?.[0]),
        endpointId: endpoint,
        attributeType: 'LevelControl::StartUpCurrentLevelA'
      });
      return readRequest(data);
    }
  );

  //
  //action handler
  //
  smartPlug.setActionHandler(
    'LevelControl:MoveToLevel',
    async function (value, options) {
      const parsedValue = await value.value();
      if (typeof parsedValue !== 'string') {
        return 'Invalid content type';
      }

      const reqData = JSON.parse((await value.value())?.toString() || '');
      if (
        !reqData?.level &&
        !reqData?.transitionTime &&
        !reqData?.optionsMask &&
        !reqData?.optionsOverride
      ) {
        return 'Invalid argument';
      }

      let data = JSON.stringify({
        nodeId: parseInt(smartPlug.getThingDescription().title.split('-')?.[0]),
        endpointId: endpoint,
        commandType: 'LevelControl::MoveToLevel',
        payload: {
          ...reqData
        }
      });

      return invokeRequest(data);
    }
  );

  smartPlug.setActionHandler(
    'LevelControl:Move',
    async function (value, options) {
      const parsedValue = await value.value();
      if (typeof parsedValue !== 'string') {
        return 'Invalid content type';
      }

      const reqData = JSON.parse((await value.value())?.toString() || '');
      if (
        !reqData?.moveMode &&
        !reqData?.rate &&
        !reqData?.optionsMask &&
        !reqData?.optionsOverride
      ) {
        return 'Invalid argument';
      }

      let data = JSON.stringify({
        nodeId: parseInt(smartPlug.getThingDescription().title.split('-')?.[0]),
        endpointId: endpoint,
        commandType: 'LevelControl::Move',
        payload: {
          ...reqData
        }
      });

      return invokeRequest(data);
    }
  );

  smartPlug.setActionHandler(
    'LevelControl:Step',
    async function (value, options) {
      const parsedValue = await value.value();
      if (typeof parsedValue !== 'string') {
        return 'Invalid content type';
      }

      const reqData = JSON.parse((await value.value())?.toString() || '');
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
        nodeId: parseInt(smartPlug.getThingDescription().title.split('-')?.[0]),
        endpointId: endpoint,
        commandType: 'LevelControl::Step',
        payload: {
          ...reqData
        }
      });

      return invokeRequest(data);
    }
  );

  smartPlug.setActionHandler(
    'LevelControl:Stop',
    async function (value, options) {
      const parsedValue = await value.value();
      if (typeof parsedValue !== 'string') {
        return 'Invalid content type';
      }

      const reqData = JSON.parse((await value.value())?.toString() || '');
      if (!reqData?.optionsMask && !reqData?.optionsOverride) {
        return 'Invalid argument';
      }

      let data = JSON.stringify({
        nodeId: parseInt(smartPlug.getThingDescription().title.split('-')?.[0]),
        endpointId: endpoint,
        commandType: 'LevelControl::Stop',
        payload: {
          ...reqData
        }
      });

      return invokeRequest(data);
    }
  );

  smartPlug.setActionHandler(
    'LevelControl:MoveToLevelWithOnOff',
    async function (value, options) {
      const parsedValue = await value.value();
      if (typeof parsedValue !== 'string') {
        return 'Invalid content type';
      }

      const reqData = JSON.parse((await value.value())?.toString() || '');
      if (
        !reqData?.level &&
        !reqData?.transitionTime &&
        !reqData?.optionsMask &&
        !reqData?.optionsOverride
      ) {
        return 'Invalid argument';
      }

      let data = JSON.stringify({
        nodeId: parseInt(smartPlug.getThingDescription().title.split('-')?.[0]),
        endpointId: endpoint,
        commandType: 'LevelControl::MoveToLevelWithOnOff',
        payload: {
          ...reqData
        }
      });

      return invokeRequest(data);
    }
  );

  smartPlug.setActionHandler(
    'LevelControl:MoveWithOnOff',
    async function (value, options) {
      const parsedValue = await value.value();
      if (typeof parsedValue !== 'string') {
        return 'Invalid content type';
      }

      const reqData = JSON.parse((await value.value())?.toString() || '');
      if (
        !reqData?.moveMode &&
        !reqData?.rate &&
        !reqData?.optionsMask &&
        !reqData?.optionsOverride
      ) {
        return 'Invalid argument';
      }

      let data = JSON.stringify({
        nodeId: parseInt(smartPlug.getThingDescription().title.split('-')?.[0]),
        endpointId: endpoint,
        commandType: 'LevelControl::MoveWithOnOff',
        payload: {
          ...reqData
        }
      });

      return invokeRequest(data);
    }
  );

  smartPlug.setActionHandler(
    'LevelControl:StepWithOnOff',
    async function (value, options) {
      const parsedValue = await value.value();
      if (typeof parsedValue !== 'string') {
        return 'Invalid content type';
      }

      const reqData = JSON.parse((await value.value())?.toString() || '');
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
        nodeId: parseInt(smartPlug.getThingDescription().title.split('-')?.[0]),
        endpointId: endpoint,
        commandType: 'LevelControl::StepWithOnOff',
        payload: {
          ...reqData
        }
      });

      return invokeRequest(data);
    }
  );
};
