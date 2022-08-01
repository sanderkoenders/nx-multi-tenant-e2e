import { productsTests } from '@workspace/shared/e2e';

describe(
  'Products',
  productsTests({
    content: {
      heading: /yak products/i,
      items: [/^yak milk$/i, /^yak fur$/i, /^yak$/i],
    },
  })
);
