import { contactPageTests } from '@workspace/shared/e2e';

contactPageTests({
  content: {
    phoneNumber: '0612345678',
    email: 'jack@goatshop.com',
  },
});
