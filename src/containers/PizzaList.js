import React, { Component } from 'react';
import Pizza from '../components/Pizza'
class PizzaList extends Component {

  render() {
    // console.log('inside pizzaList, props: ', this.props)
    return (
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">Topping</th>
            <th scope="col">Size</th>
            <th scope="col">Vegetarian?</th>
            <th scope="col">Edit</th>
          </tr>
        </thead>
        <tbody>
          {this.props.allPizzas.map(pizza => <Pizza {...pizza} key={pizza.id} handleSelect={this.props.handleSelect}/>)}
        </tbody>
      </table>
    );
  }

}

export default PizzaList;
