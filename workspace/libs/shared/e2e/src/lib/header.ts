export interface HeaderTestsProps {
  content: {
    applicationName: RegExp;
  };
}

export const headerTests =
  ({ content }: HeaderTestsProps) =>
  () => {
    it('should show the shop name in the header', () => {
      cy.visit('/');

      cy.findByRole('link', { name: content.applicationName });
    });

    it('should show two menu items (products & contact)', () => {
      cy.visit('/');

      cy.findByRole('link', { name: /products/i });
      cy.findByRole('link', { name: /contact/i });
    });
  };
