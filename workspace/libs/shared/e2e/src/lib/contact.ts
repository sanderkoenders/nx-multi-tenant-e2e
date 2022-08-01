import { TestsWithContent } from '@workspace/test/util/e2e';

export interface ContactPageContentMapping {
  phoneNumber: string;
  email: string;
}

export const contactPageTests =
  ({ content }: TestsWithContent<ContactPageContentMapping>) =>
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
