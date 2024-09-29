/* eslint-disable no-unused-vars */
import ProductItem from './ProductItem';
import classes from './Products.module.css';

const DUMMY_PRODUCTS = [
  {
    id: 'p1',
    price: 6,
    title: 'My First Book',
    description: 'The First Book'
  },
  {
    id: 'p2',
    price: 10,
    title: 'My Second Book',
    description: 'The Second Book'
  },
  {
    id: 'p3',
    price: 5,
    title: 'My 3ed Book',
    description: 'The 3ed Book'
  },
  {
    id: 'p4',
    price: 8,
    title: 'My 4th Book',
    description: 'The 4th Book'
  },
]

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCTS.map((product) => (
          <ProductItem
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            description={product.description}
          />
        ))

        }
      </ul>
    </section>
  );
};

export default Products;
