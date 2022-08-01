import { ContactPageTestProps, contactPageTests } from '@workspace/shared/e2e';
import { joinedDescribe } from '@workspace/test/util/e2e';

const contactPageContent: ContactPageTestProps = {
  content: {
    phoneNumber: '0687654321',
    email: 'jenny@yakshop.com',
  },
};

joinedDescribe('Contact Page', contactPageTests(contactPageContent), () => {
  it('should show a contact form', () => {
    cy.visit('/contact');

    cy.findByRole('textbox', { name: /your email address/i });
    cy.findByRole('textbox', { name: /your name/i });
    cy.findByRole('textbox', { name: /your message/i });

    cy.findByRole('button', { name: /send/i });
  });
});
