export const container = '.mainContainer';
export const containerHeader = 'h1';
export const inputField = 'form input';
export const submitButton = 'form button';
export const waitingToCalculateSpinner = '.fa-spinner';
export const resultMessage = 'h2';

const containerSelector = (): string => container;
const containerHeaderSelector = (): string => `${containerSelector()} ${containerHeader}`;
const inputSelector = (): string => `${containerSelector()} ${inputField}`;
const submitSelector = (): string => `${containerSelector()} ${submitButton}`;
const loadingSelector = (): string => `${containerSelector()} ${waitingToCalculateSpinner}`;
const resultsSelector = (): string => `${containerSelector()} ${resultMessage}`;

export const isSubmitButtonVisible = (): Cypress.Chainable<JQuery> => cy.get(submitSelector());
export const isInputFieldVisible = (): Cypress.Chainable<JQuery> => cy.get(inputSelector());
export const requestCalculation = (): Cypress.Chainable<JQuery> => isSubmitButtonVisible().click();
export const getWelcomeMessage = (): Cypress.Chainable<JQuery> => cy.get(containerHeaderSelector());
export const insertValue = (param: string): Cypress.Chainable<JQuery> =>
  cy.get(inputSelector()).type(param);
export const getLoadingSpinner = (): Cypress.Chainable<JQuery> => cy.get(loadingSelector());
export const getCalculationResults = (): Cypress.Chainable<JQuery> => cy.get(resultsSelector());
