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

export const isSubmitButtonVisible = () => cy.get(submitSelector());
export const isInputFieldVisible = () => cy.get(inputSelector());
export const isLoadingSpinnerVisible = () => getLoadingSpinner().should('not.be.visible');
export const requestCalculation = () => isSubmitButtonVisible().click();
export const getWelcomeMessage = () => cy.get(containerHeaderSelector());
export const insertValue = (param: string) => cy.get(inputSelector()).type(param);
export const getLoadingSpinner = () => cy.get(loadingSelector());
export const getCalculationResults = () => cy.get(resultsSelector());
