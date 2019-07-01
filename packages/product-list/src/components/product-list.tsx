import { Component, h } from "@stencil/core";
import carList from "./car_list.json";

@Component({
  tag: "product-list",
  shadow: true
})
export class ProductList {
  render() {
    return (
      <div>
        <h3>Product List</h3>
        <table>
          <thead>
            <tr>
              <td>Car Make</td>
              <td>Car Model</td>
            </tr>
          </thead>
          {carList.map(item => (
            <tr>
              <td>{item.car_make}</td>
              <td>{item.car_model}</td>
            </tr>
          ))}
        </table>
      </div>
    );
  }
}
