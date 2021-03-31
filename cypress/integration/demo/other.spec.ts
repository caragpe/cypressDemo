/// <reference types="cypress" />
import filterTests from '../../support/filterTest';

filterTests(['@toronto'], () => {
  describe('Other test', () => {
    beforeEach(() => {
      cy.visit('https://www.toronto.ca/');
      cy.intercept('GET', 'find.toronto.ca/searchblox/').as('getResults');
    });

    context('Toronto website test', () => {
      it('search for bikes', () => {
        cy.get('#query').type('bikes');
        cy.get('#query-search').click();
        cy.wait('@getResults');
        cy.get('#synonyms').invoke('text').should('contain', 'bicycles');
      });
    });
  });
});
