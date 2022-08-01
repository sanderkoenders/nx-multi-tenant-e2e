import { headerTests } from '@workspace/shared/e2e';

describe(
  'Header',
  headerTests({
    content: {
      applicationName: /goatshop/i,
    },
  })
);
