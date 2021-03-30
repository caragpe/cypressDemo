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
  testData,
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
        isInputFieldVisible();
        isSubmitButtonVisible();
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

    testData.map((item: testDataType) => {
      item.isEnabled && availableTestCases(item);
    });
  });
});
