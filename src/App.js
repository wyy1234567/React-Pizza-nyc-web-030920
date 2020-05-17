import React, { Component, Fragment } from 'react';
import Header from './components/Header'
import PizzaForm from './components/PizzaForm'
import PizzaList from './containers/PizzaList'
const PizzaUrl = 'http://localhost:3000/pizzas';
const header = {
  Accept: "application/json",
  "Content-Type": 'application/json'
}

class App extends Component {
  state = {
    pizzas: [],
    selectedId: null,
    topping: null,
    size: null,
    vegetarian: null
  }

  componentDidMount() {
    fetch(PizzaUrl)
      .then(res => res.json())
      .then(pizzas => this.setState({ pizzas }))
      .catch(err => console.log(err))
  }

  handleEditBtn = (id, topping, size, vegetarian) => {
    //let selectedPizza = this.state.pizzas.find(pizza => pizza.id === id)
    this.setState({
      selectedId: id,
      topping: topping,
      size: size,
      vegetarian: vegetarian
    })

  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  toggleCheckBox = (value) => {
    this.setState({
      vegetarian: value
    })
  }

  handleSubmitBtn = () => {
    let pizzaObj = {
      "id": this.state.selectedId,
      "topping": this.state.topping,
      "size": this.state.size,
      "vegetarian": this.state.vegetarian
    }
    fetch(`${PizzaUrl}/${this.state.selectedId}`, {
      method: 'PATCH',
      headers: header,
      body: JSON.stringify(pizzaObj)
    })
      .then(res => res.json())
      .then(response => this.setState({
        pizzas: this.state.pizzas.map(pizza => pizza.id !== response.id ? pizza : response)
      }))
    this.setState({
      selectedId: null,
      topping: null,
      size: null,
      vegetarian: null
    })
  }


  render() {
    console.log('App state:', this.state)
    return (
      <Fragment>
        <Header />
        <PizzaForm allState={this.state}
          changeForm={this.handleChange}
          changeSubmit={this.handleSubmitBtn}
          changeCheckBox={this.toggleCheckBox}
          submitChange={this.handleEditBtn} />
        <PizzaList allPizzas={this.state.pizzas} handleSelect={this.handleEditBtn} />
      </Fragment>
    );
  }
}

export default App;
