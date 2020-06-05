/// <reference types="Cypress" />

describe('Create Account page', () => {
  it('should load', () => {
    cy.visit('/create-an-account');
  });
});
