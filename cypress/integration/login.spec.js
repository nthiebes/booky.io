describe('The Login Page', () => {
  const username = 'urlaub';
  const password = 'marlon';

  beforeEach(() => {
    cy.visit('/login');
  });

  it('loggs in successfully', () => {
    cy.get('input[name=username]').type(username);

    // {enter} causes the form to submit
    cy.get('input[name=password]').type(`${password}{enter}`);

    cy.url().should('include', '/');
    cy.contains('Account');
  });
});
