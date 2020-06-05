/// <reference types="Cypress" />

describe('Checks header', () => {
  it('should have - title', () => {
    cy.title().should('eq', 'Abel - Digital Asset Manager');
  });

  it('should have - meta desc', () => {
    cy.get('meta[name="description"]').should('have.attr', 'content');
  });

  it('should have - logo, text and link', () => {
    cy.get('span').should('have.attr', 'aria-label', 'Abel Logo');
    cy.get('a')
      .contains('Abel')
      .and('have.attr', 'href');
  });
});
