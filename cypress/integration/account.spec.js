describe('The Account Page', () => {
  const username = 'urlaub';
  const password = 'marlon';

  it('sets auth cookie when logging in via form submission', () => {
    // programmatically log us in without needing the UI
    cy.request('POST', 'http://localhost:8001/api/login', {
      username,
      password
    });

    cy.visit('/account');

    cy.get('h1').should('contain', 'Dein Account');
  });
});
