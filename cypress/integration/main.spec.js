/// <reference types="Cypress" />

describe('First steps', () => {
  it('checks if the website is accessible', () => {
    beforeEach(() => {
      cy.visit('/');
      //   cy.viewport('samsung-s10');
    });
  });
});

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

describe('Homepage', () => {
  it('should load', () => {
    cy.visit('/');
  });

  it('should have - two sign-in button', () => {
    cy.get('a').should('contain', 'Sign in');
  });

  it('should have - two create account button', () => {
    cy.get('a').should('contain', 'Create an account');
  });

  it('should have - forgot password button', () => {
    cy.get('a').should('contain', 'Forgot Password?');
  });
});

describe('About page', () => {
  it('should load', () => {
    cy.visit('/about');
  });
});

describe('Contact Us page', () => {
  it('should load', () => {
    cy.visit('/contact-us');
  });
});

describe('Feedback page', () => {
  it('should load', () => {
    cy.visit('/feedback');
  });
});

describe('Sigin page', () => {
  it('should load', () => {
    cy.visit('/sign-in');
  });
});

describe('Create Account page', () => {
  it('should load', () => {
    cy.visit('/create-an-account');
  });
});
