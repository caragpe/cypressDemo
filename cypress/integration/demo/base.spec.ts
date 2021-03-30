/// <reference types="cypress" />
import {
  getCalculationResults,
  getLoadingSpinner,
  getWelcomeMessage,
  insertAndSubmitValue,
  isInputFieldVisible,
  isSubmitButtonVisible,
} from '../../support/pages/primesMedian';

import {
  alertMessageOnError,
  componentMessage,
  edgeCaseResultResponse,
  primeMedianEndpoint,
  testData,
  testEdgeData,
  testDataType,
  resultsResponseArray,
  resultsResponseMessage,
  stringEdgeCaseType,
  stringEdgeCases,
} from '../../support/testData/primeMedian.data';

describe('Demo Prime Median Calculator', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.intercept('GET', primeMedianEndpoint).as('getResults');
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
        insertAndSubmitValue(testData.input);
        getLoadingSpinner();
        cy.wait('@getResults');
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
      if (testEdgeData.input >= 0) {
        it(`edge case for positive or 0 input ${testEdgeData.input}`, () => {
          insertAndSubmitValue(testEdgeData.input);
          getLoadingSpinner();
          cy.wait('@getResults');
          if (isInRange(testEdgeData.input)) {
            getCalculationResults()
              .invoke('text')
              .should((result) => {
                expect(result).to.match(edgeCaseResultResponse);
              });
          } else {
            getCalculationResults().should('not.be.visible');
            cy.on('window:alert', (msg) => {
              expect(msg).to.be.equal(alertMessageOnError);
            });
          }
        });
      } else {
        it(`edge case for negative input ${testEdgeData.input}`, () => {
          insertAndSubmitValue(testEdgeData.input);
          getLoadingSpinner();
          cy.wait('@getResults');
          if (isInRange(testEdgeData.input)) {
            getCalculationResults()
              .invoke('text')
              .should((result) => {
                expect(result).to.match(edgeCaseResultResponse);
              });
          } else {
            cy.on('window:alert', (msg) => {
              expect(msg).to.be.equal(alertMessageOnError);
            });
          }
        });
      }
    };

    const availableStringEdgeCases = (testData: testDataType & stringEdgeCaseType) => {
      it(`prime median for input "${testData.stringInput}"`, () => {
        insertAndSubmitValue(testData.stringInput);
        getLoadingSpinner();
        getCalculationResults().should('not.be.visible');
        cy.wait('@getResults').its('response.statusCode').should('eq', 404);
      });
    };

    testData.map((item: testDataType) => {
      item.isEnabled && !item.isEdgeCase && availableTestCases(item);
    });

    testEdgeData.map((item: testDataType) => {
      item.isEnabled && item.isEdgeCase && availableEdgeCases(item);
    });

    stringEdgeCases.map((item: testDataType & stringEdgeCaseType) => {
      item.isEnabled && item.isEdgeCase && availableStringEdgeCases(item);
    });
  });
});

const isInRange = (value: number, upperLimit = 100, lowerLimit = -100): boolean => {
  return value >= lowerLimit && value <= upperLimit;
};
