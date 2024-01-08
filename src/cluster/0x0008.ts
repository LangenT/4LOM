//handler for cluster 0x0008 -> Level Control

const min: number = 1;
const max: number = 254;
const minF: number = 1;
const maxF: number = 254;

export const properties0x0008: { [key: string]: object } = {
  'LevelControl:CurrentLevel': {
    type: 'number',
    description: 'CurrentLevel as described in Matter spec 1.2', 
    readOnly: true,
    minimum: min,
    maximum: max
  },
  'LevelControl:RemainingTime': {
    //LT
    type: 'number',
    description: 'RemainingTime as described in Matter spec 1.2', 
    readOnly: true
  },
  'LevelControl:MinLevel': {
    //LT
    type: 'number',
    description: 'MinLevel as described in Matter spec 1.2',  
    readOnly: true,
    minimum: min,
    maximum: max
  },
  'LevelControl:MaxLevel': {
    //O
    type: 'number',
    description: 'MaxLevel as described in Matter spec 1.2',   
    readOnly: true,
    minimum: min,
    maximum: max
  },
  'LevelControl:CurrentFrequency': {
    //FQ
    type: 'number',
    description: 'CurrentFrequency as described in Matter spec 1.2',   
    readOnly: true,
    minimum: minF,
    maximum: maxF
  },
  'LevelControl:MinFrequency': {
    //FQ
    type: 'number',
    description: 'MinFrequency as described in Matter spec 1.2',   
    readOnly: true,
    minimum: minF,
    maximum: maxF
  },
  'LevelControl:MaxFrequency': {
    //FQ
    type: 'number',
    description: 'MinFrequency as described in Matter spec 1.2',   
    readOnly: true,
    minimum: minF,
    maximum: maxF
  },
  'LevelControl:OnOffTransitionTime': {
    //O
    type: 'number',
    description: 'OnOffTransitionTime as described in Matter spec 1.2',   
    readOnly: true
  },
  'LevelControl:OnLevel': {
    type: 'number',
    description: 'OnOffTransitionTime as described in Matter spec 1.2',   
    readOnly: true,
    minimum: min,
    maximum: max
  },
  'LevelControl:OnTransitionTime': {
    //O
    type: 'number',
    description: 'OnTransitionTime as described in Matter spec 1.2',    
    readOnly: true
  },
  'LevelControl:OffTransitionTime': {
    //O
    type: 'number',
    description: 'OffTransitionTime as described in Matter spec 1.2', 
    readOnly: true
  },
  'LevelControl:DefaultMoveRate': {
    //O
    type: 'number',
    description: 'OffTransitionTime as described in Matter spec 1.2',  
    readOnly: true
  },
  'LevelControl:Options': {
    type: 'number', //OptionsBitmap Type -> 0, 1 are defined
    description: 'Options as described in Matter spec 1.2',   
    readOnly: true
  },
  'LevelControl:StartUpCurrentLevel': {
    //LT
    type: 'number',
    description: 'StartUpCurrentLevel as described in Matter spec 1.2',    
    readOnly: true
  }
};

export const actions0x0008: { [key: string]: object } = {
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
  }
};
