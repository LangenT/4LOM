//Thing description for a smart plug
export const smartPlug: WoT.ExposedThingInit = {
  title: 'smartplug',
  description: 'This is a normal on/off smart plug',
  properties: {
    resources: {
      readOnly: true,
      observable: true,
      type: 'object',
      properties: {
        status: {
          type: 'boolean'
        }
      }
    },
    status: {
      //cluster
      type: 'boolean',
      description: 'Current status value',
      observable: true,
      readOnly: true
    },
    nodeid: {
      type: 'integer',
      description: 'NodeId of the device',
      observable: false,
      readOnly: true
    }
  },
  actions: {
    on: {
      synchronous: true
    },
    off: {
      synchronous: true
    },
    toggle: {
      synchronous: true
    }
  }
};