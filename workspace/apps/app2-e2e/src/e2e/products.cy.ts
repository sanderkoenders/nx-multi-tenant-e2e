import { productsTests } from '@workspace/shared/e2e';

describe(
  'Products page',
  productsTests({
    content: {
      heading: /goat products/i,
      items: [/^goat milk$/i, /^goat cheese$/i, /^goat$/i],
    },
  })
);
