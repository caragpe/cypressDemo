export const container = '.mainContainer';
export const containerHeader = 'h1';
export const inputField = 'form input';
export const submitButton = 'form button';
export const waitingToCalculateSpinner = '.fa-spinner';
export const resultMessage = 'h2';

const containerSelector = (): string => container;
const containerHeaderSelector = (): string => `${containerSelector()} ${containerHeader}`;
const inputSelector = (): string => `${containerSelector()} ${inputField}`;
const loadingSelector = (): string => `${containerSelector()} ${waitingToCalculateSpinner}`;
const resultsSelector = (): string => `${containerSelector()} ${resultMessage}`;
const submitSelector = (): string => `${containerSelector()} ${submitButton}`;

export const getCalculationResults = (): Cypress.Chainable<JQuery> => cy.get(resultsSelector());
export const getLoadingSpinner = (): Cypress.Chainable<JQuery> => cy.get(loadingSelector());
export const getWelcomeMessage = (): Cypress.Chainable<JQuery> => cy.get(containerHeaderSelector());
export const insertAndSubmitValue = (value: number | string): void => {
  insertValue(value);
  requestCalculation();
};
const insertValue = (value: number | string): Cypress.Chainable<JQuery> => {
  const valueToType = typeof value === 'number' ? value.toString() : value;
  return cy.get(inputSelector()).type(valueToType);
};
export const isInputFieldVisible = (): Cypress.Chainable<JQuery> => cy.get(inputSelector());
export const isSubmitButtonVisible = (): Cypress.Chainable<JQuery> => cy.get(submitSelector());
const requestCalculation = (): Cypress.Chainable<JQuery> => isSubmitButtonVisible().click();
