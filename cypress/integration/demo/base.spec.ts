/// <reference types="cypress" />
import {
  getCalculationResults,
  getLoadingSpinner,
  getWelcomeMessage,
  insertValue,
  isInputFieldVisible,
  isLoadingSpinnerVisible,
  isSubmitButtonVisible,
  requestCalculation,
} from '../../support/pages/primesMedian';

import { welcomeMessageText } from '../../support/testData/primeMedian.data';

context('Actions', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('renders all  the input form', () => {
    getWelcomeMessage().should('contain.text', welcomeMessageText);
    isLoadingSpinnerVisible();
    isInputFieldVisible();
    isSubmitButtonVisible();
  });
});
