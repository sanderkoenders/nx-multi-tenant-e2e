describe('Contact', () => {
  it('should show the contact page heading', () => {
    cy.visit('/contact');

    cy.findByRole('heading', { name: /contact information/i });
  });

  it('should show a contact form', () => {
    cy.visit('/contact');

    cy.findByRole('textbox', { name: /your email address/i });
    cy.findByRole('textbox', { name: /your name/i });
    cy.findByRole('textbox', { name: /your message/i });

    cy.findByRole('button', { name: /send/i });
  });

  it('should show the phoneNumber', () => {
    cy.visit('/contact');

    cy.findByRole('heading', { name: /phone/i, level: 2 });
    cy.findByText('0687654321');
  });

  it('should show the email address', () => {
    cy.visit('/contact');

    cy.findByRole('heading', { name: /email/i, level: 2 });
    cy.findByText(/jenny@yakshop.com/i);
  });
});
