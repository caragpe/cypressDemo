export interface testDataType {
  input: number;
  result: number[];
  isEnabled: boolean;
  isEdgeCase: boolean;
  errorMessage: string;
}

export interface stringEdgeCaseType {
  stringInput: string;
}

export const alertMessageOnError = 'Number exceeds limit';
export const componentMessage = 'Enter a number to get the median of primes';
export const edgeCaseResultResponse = /[,]/;
export const primeMedianEndpoint = '/api/';
export const resultsResponseMessage = /the median is:/i;
export const resultsResponseArray = /\[((\d,\d)+|\d|,)+]/;

export const testData: testDataType[] = [
  {
    input: 1,
    result: [],
    isEnabled: true,
    isEdgeCase: true,
    errorMessage: '',
  },
  {
    input: 10,
    result: [3, 5],
    isEnabled: true,
    isEdgeCase: false,
    errorMessage: '',
  },
  {
    input: +15,
    result: [5, 7],
    isEnabled: true,
    isEdgeCase: false,
    errorMessage: '',
  },
  {
    input: 18,
    result: [7],
    isEnabled: true,
    isEdgeCase: false,
    errorMessage: '',
  },
  {
    input: 100,
    result: [41],
    isEnabled: true,
    isEdgeCase: false,
    errorMessage: '',
  },
];

export const testEdgeData: testDataType[] = [
  {
    input: 1,
    result: [],
    isEnabled: true,
    isEdgeCase: true,
    errorMessage: '',
  },
  {
    input: 0,
    result: [],
    isEnabled: true,
    isEdgeCase: true,
    errorMessage: '',
  },
  {
    input: -1,
    result: [],
    isEnabled: true,
    isEdgeCase: true,
    errorMessage: '',
  },
  {
    input: -919191919191919191919191,
    result: [],
    isEnabled: true,
    isEdgeCase: true,
    errorMessage: '',
  },
  {
    input: 919191919191919191919191,
    result: [],
    isEnabled: true,
    isEdgeCase: true,
    errorMessage: 'Number exceeds limit',
  },
];

export const stringEdgeCases: testDataType[] & stringEdgeCaseType[] = [
  {
    input: 0,
    stringInput: '.',
    result: [],
    isEnabled: true,
    isEdgeCase: true,
    errorMessage: 'Please enter a number',
  },
  {
    input: 0,
    stringInput: ',',
    result: [],
    isEnabled: true,
    isEdgeCase: true,
    errorMessage: 'Please enter a number',
  },
  {
    input: 0,
    stringInput: '+',
    result: [],
    isEnabled: true,
    isEdgeCase: true,
    errorMessage: 'Please enter a number',
  },
  {
    input: 0,
    stringInput: '-',
    result: [],
    isEnabled: true,
    isEdgeCase: true,
    errorMessage: 'Please enter a number',
  },
  {
    input: 0,
    stringInput: 'a',
    result: [],
    isEnabled: true,
    isEdgeCase: true,
    errorMessage: 'Please enter a number',
  },
  {
    input: 0,
    stringInput: ' ',
    result: [],
    isEnabled: true,
    isEdgeCase: true,
    errorMessage: 'Please enter a number',
  },
];
