const container = '.mainContainer';
const containerHeader = 'h1';
const inputField = 'form input';
const submitButton = 'form button';
const waitingToCalculateSpinner = '.fa-spinner';
const resultMessage = 'h2';

const containerSelector = (): string => container;
const containerHeaderSelector = (): string => `${containerSelector()} ${containerHeader}`;
const inputSelector = (): string => `${containerSelector()} ${inputField}`;
const loadingSelector = (): string => `${containerSelector()} ${waitingToCalculateSpinner}`;
const resultsSelector = (): string => `${containerSelector()} ${resultMessage}`;
const submitSelector = (): string => `${containerSelector()} ${submitButton}`;

/**
 * Verifies presence of results after form submission. As a chainable method,
 * it also allows to process its output and run assertions.
 * @example
 * ```typescript
 *   getCalculationResults()
 *    .invoke('text')
 *    .should((result) => {
 *      expect(result).to.match(resultsResponseMessage);
 *    }
 *```
 * @returns Cypress.Chainable<JQuery>
 */
export const getCalculationResults = (): Cypress.Chainable<JQuery> => cy.get(resultsSelector());
/**
 * Verifies presence of loading spinner after form submission. As a chainable method,
 * it also allows to process its output and run assertions.
 * @returns Cypress.Chainable<JQuery>
 *
 */
export const getLoadingSpinner = (): Cypress.Chainable<JQuery> => cy.get(loadingSelector());
/**
 * Verifies presence of informational message.
 * @returns Cypress.Chainable<JQuery>
 *
 * */
export const getWelcomeMessage = (): Cypress.Chainable<JQuery> => cy.get(containerHeaderSelector());

/**
 * Inserts a character(s) into the input field and clicks the submit button.
 *
 * @param {string | number } value Element to type
 * @example insertAndSubmitValue(1)
 * @example insertAndSubmitValue(-1)
 * @example insertAndSubmitValue('.')
 *
 * @returns void
 *
 */
export const insertAndSubmitValue = (value: number | string): void => {
  insertValue(value);
  requestCalculation();
};
/**
 * Inserts a character(s) into the input field by converting it into a string.
 *
 * @param {string | number } value Element to type
 * @example insertValue(1)
 * @example insertValue(-1)
 * @example insertValue('.')
 *
 * @returns Cypress.Chainable<JQuery>
 */
const insertValue = (value: number | string): Cypress.Chainable<JQuery> => {
  const valueToType = typeof value === 'number' ? value.toString() : value;
  return cy.get(inputSelector()).type(valueToType);
};
/**
 * Verifies presence of form input field.
 *
 * @returns Cypress.Chainable<JQuery>
 */
export const isInputFieldVisible = (): Cypress.Chainable<JQuery> => cy.get(inputSelector());
/**
 * Verifies presence of form submitt button.
 *
 * @returns Cypress.Chainable<JQuery>
 */
export const isSubmitButtonVisible = (): Cypress.Chainable<JQuery> => cy.get(submitSelector());
/**
 * Submits the form to perform the calculation.
 *
 * @returns Cypress.Chainable<JQuery>
 */
const requestCalculation = (): Cypress.Chainable<JQuery> => isSubmitButtonVisible().click();
