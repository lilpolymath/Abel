/// <reference types="Cypress" />

describe('Contact Us page', () => {
  it('should load', () => {
    cy.visit('/contact-us');
    cy.location('pathname').should('include', 'contact-us');
  });
});
