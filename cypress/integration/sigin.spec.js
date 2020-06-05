/// <reference types="Cypress" />

describe('Sigin page', () => {
  it('should load', () => {
    cy.visit('/sign-in');
  });
});
