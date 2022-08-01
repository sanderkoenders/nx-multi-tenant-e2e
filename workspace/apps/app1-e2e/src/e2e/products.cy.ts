import { productsTests } from '@workspace/shared/e2e';

productsTests({
  content: {
    heading: /yak products/i,
    items: [/^yak milk$/i, /^yak fur$/i, /^yak$/i],
  },
});
