import { Component, Event, h, EventEmitter } from "@stencil/core";
import carList from "./car_list.json";

@Component({
  tag: "product-list",
  shadow: true
})
export class ProductList {
  @Event() viewproduct: EventEmitter;

  clickedCar = (e: MouseEvent, item: any) => {
    e.preventDefault();
    this.viewproduct.emit({ itemId: item.id });
  };

  render() {
    return (
      <div>
        <h3>Product List</h3>
        <table>
          <th>
            <td>Car Make</td>
            <td>Car Model</td>
          </th>
          {carList.map(item => (
            <tr>
              <td>
                <a onClick={e => this.clickedCar(e, item)} href="#">
                  {item.car_make}
                </a>
              </td>
              <td>
                <a onClick={e => this.clickedCar(e, item)} href="#">
                  {item.car_model}
                </a>
              </td>
            </tr>
          ))}
        </table>
      </div>
    );
  }
}
