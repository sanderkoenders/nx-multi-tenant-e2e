import { ContactForm, ContactHeader, ContactInfo } from '@workspace/shared/ui';

export const ContactPage = () => (
  <>
    <ContactHeader />
    <ContactForm />
    <ContactInfo phoneNumber="0687654321" email="Jenny@yakshop.com" />
  </>
);
