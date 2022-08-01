export interface ContactPageContentMapping {
  phoneNumber: string;
  email: string;
}

export interface ContactPageTestProps {
  content: ContactPageContentMapping;
}

export const contactPageTests =
  ({ content }: ContactPageTestProps) =>
  () => {
    it('should show the contact page heading', () => {
      cy.visit('/contact');

      cy.findByRole('heading', { name: /contact information/i });
    });

    it('should show the phoneNumber', () => {
      cy.visit('/contact');

      cy.findByRole('heading', { name: /phone/i, level: 2 });
      cy.findByText(content.phoneNumber);
    });

    it('should show the email address', () => {
      cy.visit('/contact');

      cy.findByRole('heading', { name: /email/i, level: 2 });
      cy.findByText(new RegExp(content.email, 'i'));
    });
  };
