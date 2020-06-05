/// <reference types="Cypress" />

describe('Feedback page', () => {
  it('should load', () => {
    cy.visit('/feedback');
    cy.location('pathname').should('include', 'feedback');
  });
});
