import { h, Component } from 'preact';
import style from './style';

export default class ProductDetail extends Component {
  // Note: `user` comes from the URL, courtesy of our router
  render({ itemId }) {
    return (
      <div class={style.profile}>
        <product-details itemId={itemId} />
        <product-checkout itemId={itemId} />
      </div>
    );
  }
}
