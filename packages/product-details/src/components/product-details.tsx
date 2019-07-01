import { Component, h, Prop } from "@stencil/core";
import carList from "./car_list.json";

@Component({
  tag: "product-details",
  shadow: true
})
export class ProductDetails {
  @Prop() itemId: number;

  render() {
    const item = carList.find(car => car.id === this.itemId);
    return (
      <div>
        {item.car_make}
        <br />
        <br />
        {item.car_model}
        <br />
        <br />
        {item.car_year}
      </div>
    );
  }
}
