/// <reference types="Cypress" />

describe('First steps', () => {
  it('checks if the website is accessible', () => {
    beforeEach(() => {
      cy.visit('/');
    });
  });
});
