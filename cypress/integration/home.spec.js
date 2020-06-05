/// <reference types="Cypress" />

describe('Homepage', () => {
  it('should load', () => {
    cy.visit('/');
  });

  it('should have - two sign-in button', () => {
    cy.get('a')
      .contains('Sign in')
      .should('have.attr', 'href', '/sign-in');
  });

  it('should have - two create account button', () => {
    cy.get('a')
      .contains('Create an account')
      .should('have.attr', 'href', '/create-an-account');
  });

  it('should have - forgot password button', () => {
    cy.get('a')
      .contains('Forgot Password?')
      .should('have.attr', 'href', '/forgot-password');
  });
});
