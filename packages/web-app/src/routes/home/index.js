import { h } from 'preact';
import { route } from 'preact-router';
import style from './style';

const Home = () => (
  <div class={style.home}>
    <h1>Product List</h1>
    <product-list
      onviewproduct={itemEvent => route(`/product-detail/${itemEvent.detail.itemId}`, true)}
    />
  </div>
);

export default Home;
