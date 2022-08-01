describe('Products', () => {
  it('should show the correct header', () => {
    cy.visit('/');

    cy.findByRole('heading', { name: /yak products/i, level: 1 });
  });

  it('should show three cards with products', () => {
    cy.visit('/');

    cy.findByRole('heading', { name: /^yak milk$/i, level: 2, exact: true });
    cy.findByRole('heading', { name: /^yak fur$/i, level: 2, exact: true });
    cy.findByRole('heading', { name: /^yak$/i, level: 2, exact: true });
  });
});
