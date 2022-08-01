import { headerTests } from '@workspace/shared/e2e';

headerTests({
  content: {
    applicationName: /goatshop/i,
  },
});
