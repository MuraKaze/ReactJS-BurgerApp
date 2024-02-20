import React, { Component } from "react";
import './burgerStyle.css'

export default class Burger extends Component {
  state = {
    lettuce: 0,
    tomato: 0,
    cheese: 0,
    meat: 0,
    price: 3.00,
  }

  changeIngridient = (action, ingredient) => {
    const ingredientCost = {
      lettuce: 0.50,
      tomato: 0,
      cheese: 0.40,
      meat: 1.30
    };

    const costChange = action === 'add' ? ingredientCost[ingredient] : -ingredientCost[ingredient];
    const newPrice = Math.max(this.state.price + costChange, 0);

    if (action === 'add' || this.state[ingredient] > 0) {
      this.setState(prevState => ({
        [ingredient]: Math.max(action === 'add' ? prevState[ingredient] + 1 : prevState[ingredient] - 1, 0),
        price: newPrice
      }));
    }
  }



  renderBurgerIngredients = () => {
    const { lettuce, tomato, cheese, meat } = this.state;
    const ingredients = [
      { type: 'lettuce', count: lettuce },
      { type: 'tomato', count: tomato },
      { type: 'cheese', count: cheese },
      { type: 'meat', count: meat }
    ];

    return ingredients.map(({ type, count }) => (
      Array.from({ length: count }, (_, index) => (
        <div key={`${type}-${index}`} className={`${type} side`}></div>
      ))
    )).flat();
  }

  render() {
    return (
      <>
        <div className="burgerIngridients">
          <div className="top side"></div>
          {this.renderBurgerIngredients()}
          <div className="bottom side"></div>
        </div>
        <div className="ingridientsBlocks">
        <div className="currentPrice">
          Current Price: <strong>${this.state.price.toFixed(2)}</strong>
        </div>
          <div className="igridientsBlock">
            <p>Lettuce</p>
            <div className="ingrBtns">
              <button onClick={() => this.changeIngridient('add', 'lettuce')} className="ingrBtn">Add</button>
              <button onClick={() => this.changeIngridient('remove', 'lettuce')} className="ingrBtn">Remove</button>
            </div>
          </div>
          <div className="igridientsBlock">
            <p>Tomato</p>
            <div className="ingrBtns">
              <button onClick={() => this.changeIngridient('add', 'tomato')} className="ingrBtn">Add</button>
              <button onClick={() => this.changeIngridient('remove', 'tomato')} className="ingrBtn">Remove</button>
            </div>
          </div>
          <div className="igridientsBlock">
            <p>Cheese</p>
            <div className="ingrBtns">
              <button onClick={() => this.changeIngridient('add', 'cheese')} className="ingrBtn">Add</button>
              <button onClick={() => this.changeIngridient('remove', 'cheese')} className="ingrBtn">Remove</button>
            </div>
          </div>
          <div className="igridientsBlock">
            <p>Meat</p>
            <div className="ingrBtns">
              <button onClick={() => this.changeIngridient('add', 'meat')} className="ingrBtn">Add</button>
              <button onClick={() => this.changeIngridient('remove', 'meat')} className="ingrBtn">Remove</button>
            </div>
          </div>
        </div>
      </>
    )
  }
}
