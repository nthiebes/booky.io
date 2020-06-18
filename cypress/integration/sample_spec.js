describe('My First Test', () => {
  it('Visits the Kitchen Sink', () => {
    cy.visit('https://beta.booky.io');

    cy.contains('Anmelden').click();

    cy.url().should('include', '/login');


    cy.get('#username')
      .type('fake@email.com')
      .should('have.value', 'fake@email.com');
  });
});
