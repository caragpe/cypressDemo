export interface testDataType {
  input: number;
  result: number[];
  isEnabled: boolean;
  isEdgeCase: boolean;
  errorMessage: string;
}

export const resultsResponseMessage = /the median is:/i;
export const resultsResponseArray = /\[((\d,\d)+|\d|,)+]/;
export const edgeCaseResultResponse = /[,]/;
export const componentMessage = 'Enter a number to get the median of primes';

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
    input: 18,
    result: [7],
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
