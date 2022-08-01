describe('Products', () => {
  it('should show the correct header', () => {
    cy.visit('/');

    cy.findByRole('heading', { name: /goat products/i, level: 1 });
  });

  it('should show three cards with products', () => {
    cy.visit('/');

    cy.findByRole('heading', { name: /^goat milk$/i, level: 2, exact: true });
    cy.findByRole('heading', { name: /^goat cheese$/i, level: 2, exact: true });
    cy.findByRole('heading', { name: /^goat$/i, level: 2, exact: true });
  });
});
