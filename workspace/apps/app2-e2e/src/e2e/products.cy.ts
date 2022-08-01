import { productsTests } from '@workspace/shared/e2e';

productsTests({
  content: {
    heading: /goat products/i,
    items: [/^goat milk$/i, /^goat cheese$/i, /^goat$/i],
  },
});
