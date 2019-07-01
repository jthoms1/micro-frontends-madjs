import { h } from 'preact';
import style from './style';

const Home = () => (
  <div class={style.home}>
    <h1>Product List</h1>
    <product-list />
  </div>
);

export default Home;
