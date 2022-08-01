import { Products } from '@workspace/shared/ui';

export const ProductsPage = () => (
  <Products
    heading="Goat products"
    description="Goat products straight from the source. Goats are treated as if they are our children at our farm."
    cards={[
      {
        heading: 'Goat Cheese',
        description: 'This will be nice during Netflix & chill!',
        image: '/assets/img/cheese.jpg',
      },
      {
        heading: 'Goat Milk',
        description: "Fresh goat milk, you're going to love it!",
        image: '/assets/img/milk.jpg',
      },
      {
        heading: 'Goat',
        description:
          "Not sure what to buy, buy a Goat and you don't have to worry about that ever again!",
        image: '/assets/img/goat.jpg',
      },
    ]}
  />
);
