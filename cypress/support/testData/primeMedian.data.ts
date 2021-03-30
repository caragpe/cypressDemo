export interface testDataType {
  input: number;
  result: number[];
  isEnabled: boolean;
  errorMessage: string;
}

export const resultsResponseMessage = /the median is:/i;
export const resultsResponseArray = /\[((\d,\d)+|\d|,)+]/;
export const componentMessage = 'Enter a number to get the median of primes';

export const testData: testDataType[] = [
  {
    input: 1,
    result: [],
    isEnabled: true,
    errorMessage: '',
  },
  {
    input: 10,
    result: [3, 5],
    isEnabled: true,
    errorMessage: '',
  },
  {
    input: 18,
    result: [7],
    isEnabled: true,
    errorMessage: '',
  },
];
