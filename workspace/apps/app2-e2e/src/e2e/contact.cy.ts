describe('Contact', () => {
  it('should show the contact page heading', () => {
    cy.visit('/contact');

    cy.findByRole('heading', { name: /contact information/i });
  });

  it('should show the phoneNumber', () => {
    cy.visit('/contact');

    cy.findByRole('heading', { name: /phone/i, level: 2 });
    cy.findByText('0612345678');
  });

  it('should show the email address', () => {
    cy.visit('/contact');

    cy.findByRole('heading', { name: /email/i, level: 2 });
    cy.findByText(/jack@goatshop.com/i);
  });
});
