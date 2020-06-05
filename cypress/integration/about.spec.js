/// <reference types="Cypress" />

describe('About page', () => {
  it('should load', () => {
    cy.visit('/about');
  });
});
