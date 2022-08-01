export interface ProductsTestsProps {
  content: {
    heading: RegExp;
    items: RegExp[];
  };
}

export const productsTests = ({ content }: ProductsTestsProps) => {
  describe('Products', () => {
    it('should show the correct header', () => {
      cy.visit('/');

      cy.findByRole('heading', { name: content.heading, level: 1 });
    });

    it('should show three cards with products', () => {
      cy.visit('/');

      content.items.forEach((item) =>
        cy.findByRole('heading', { name: item, level: 2, exact: true })
      );
    });
  });
};
