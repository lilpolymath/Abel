/// <reference types="Cypress" />

describe('About page', () => {
  it('should load', () => {
    cy.visit('/about');
    cy.location('pathname').should('include', 'about');
  });
});
