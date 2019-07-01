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
        {item.car_model}
        {item.car_year}
      </div>
    );
  }
}
