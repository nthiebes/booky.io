describe('Start page', () => {
  it('loads', () => {
    cy.visit('/');

    cy.contains('Einloggen');
  });
});
