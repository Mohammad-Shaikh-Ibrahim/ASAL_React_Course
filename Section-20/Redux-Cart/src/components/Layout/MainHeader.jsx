import CartButton from '../Cart/CartButton';
import classes from './MainHeader.module.css';

// eslint-disable-next-line no-unused-vars
const MainHeader = (props) => {
  return (
    <header className={classes.header}>
      <h1>ReduxCart</h1>
      <nav>
        <ul>
          <li>
            <CartButton />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;
