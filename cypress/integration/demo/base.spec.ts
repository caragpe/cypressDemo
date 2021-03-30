/// <reference types="cypress" />
import {
  getCalculationResults,
  getLoadingSpinner,
  getWelcomeMessage,
  insertValue,
  isInputFieldVisible,
  isSubmitButtonVisible,
  requestCalculation,
} from '../../support/pages/primesMedian';

import {
  edgeCaseResultResponse,
  testData,
  testEdgeData,
  testDataType,
  resultsResponseArray,
  resultsResponseMessage,
  componentMessage,
} from '../../support/testData/primeMedian.data';

describe('Demo Prime Median Calculator', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  context('Component', () => {
    it('renders all input form fields', () => {
      getWelcomeMessage().should('contain.text', componentMessage);
      getLoadingSpinner().should('not.be.visible');
      isInputFieldVisible();
      isSubmitButtonVisible();
    });
  });

  context('Calculations', () => {
    const availableTestCases = (testData: testDataType) => {
      it(`prime median for input ${testData.input}`, () => {
        insertValue(testData.input.toString());
        requestCalculation();
        getCalculationResults()
          .invoke('text')
          .should((result) => {
            expect(result).to.match(resultsResponseMessage);
            expect(result).to.match(resultsResponseArray);
            expect(result).to.include(testData.result);
          });
      });
    };

    const availableEdgeCases = (testEdgeData: testDataType) => {
      it(`edge case for input ${testEdgeData.input}`, () => {
        insertValue(testEdgeData.input.toString());
        requestCalculation();
        if (isInRange(testEdgeData.input)) {
          getCalculationResults()
            .invoke('text')
            .should((result) => {
              expect(result).to.match(edgeCaseResultResponse);
            });
        }
      });
    };

    testData.map((item: testDataType) => {
      item.isEnabled && !item.isEdgeCase && availableTestCases(item);
    });

    testEdgeData.map((item: testDataType) => {
      item.isEnabled && item.isEdgeCase && availableEdgeCases(item);
    });
  });
});

const isInRange = (value: number, upperLimit = 100, lowerLimit = -100): boolean => {
  return value >= lowerLimit && value <= upperLimit;
};
