import { ContactPageTestProps, contactPageTests } from '@workspace/shared/e2e';

const contactPageTestsProps: ContactPageTestProps = {
  content: {
    phoneNumber: '0612345678',
    email: 'jack@goatshop.com',
  },
};

describe('Contact Page', contactPageTests(contactPageTestsProps));
