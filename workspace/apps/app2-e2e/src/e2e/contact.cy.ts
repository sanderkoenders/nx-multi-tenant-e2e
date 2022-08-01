import {
  ContactPageContentMapping,
  contactPageTests,
} from '@workspace/shared/e2e';
import { TestsWithContent } from '@workspace/test/util/e2e';

const contactPageTestsProps: TestsWithContent<ContactPageContentMapping> = {
  content: {
    phoneNumber: '0612345678',
    email: 'jack@goatshop.com',
  },
};

describe('Contact Page', contactPageTests(contactPageTestsProps));
