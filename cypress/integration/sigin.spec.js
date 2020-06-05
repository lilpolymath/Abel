/// <reference types="Cypress" />

describe('Sigin page', () => {
  it('should load', () => {
    cy.visit('/sign-in');
    cy.location('pathname').should('include', 'sign-in');
  });
});
