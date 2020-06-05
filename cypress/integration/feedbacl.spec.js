/// <reference types="Cypress" />

describe('Feedback page', () => {
  it('should load', () => {
    cy.visit('/feedback');
  });
});
