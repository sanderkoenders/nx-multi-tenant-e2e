import { Products } from '@workspace/shared/ui';

export const ProductsPage = () => (
  <Products
    heading="Yak products"
    description="Yak products straight from the source. Yaks are treated as if they are our children at our farm."
    cards={[
      {
        heading: 'Yak Milk',
        description: "Fresh Yak milk, it's delicious!",
        image: '/assets/img/milk.jpg',
      },
      {
        heading: 'Yak Fur',
        description: 'This will keep you warm when winter comes!',
        image: '/assets/img/fur.jpg',
      },
      {
        heading: 'Yak',
        description: 'Not sure what to buy, buy a Yak and decide later!',
        image: '/assets/img/yak.jpg',
      },
    ]}
  />
);
