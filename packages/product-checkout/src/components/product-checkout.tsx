import { Component, Prop, h } from "@stencil/core";
import carList from "./car_list.json";

@Component({
  tag: "product-checkout",
  shadow: true
})
export class ProductCheckout {
  @Prop() itemId: number;

  boughtIt = (item: any) => {
    window.alert(`Bought a ${item.car_make} ${item.car_model}`);
  };

  render() {
    const item = carList.find(car => car.id === this.itemId);
    return (
      <button
        onClick={() => this.boughtIt(item)}
        title={item.car_make + " " + item.car_model}
      >
        Product Checkout
      </button>
    );
  }
}
