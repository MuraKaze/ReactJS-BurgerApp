import React, { Component } from "react";
import './burgerStyle.css'

export default class Burger extends Component {
  state = {
    lettuce: 0,
    tomato: 0,
    cheese: 0,
    meat: 0
  }

  changeIngridient = (action, ingridient) => {
    this.setState(prevState => ({
      [ingridient]: Math.max(action === 'add' ? prevState[ingridient] + 1 : prevState[ingridient] - 1, 0)
    }));
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
        <div className="ingridientsBlock">
          <p>Lettuce</p>
          <div className="ingrBtns">
            <button onClick={() => this.changeIngridient('add', 'lettuce')} className="ingrBtn">Add</button>
            <button onClick={() => this.changeIngridient('remove', 'lettuce')} className="ingrBtn">Remove</button>
          </div>
          <p>Tomato</p>
          <div className="ingrBtns">
            <button onClick={() => this.changeIngridient('add', 'tomato')} className="ingrBtn">Add</button>
            <button onClick={() => this.changeIngridient('remove', 'tomato')} className="ingrBtn">Remove</button>
          </div>
          <p>Cheese</p>
          <div className="ingrBtns">
            <button onClick={() => this.changeIngridient('add', 'cheese')} className="ingrBtn">Add</button>
            <button onClick={() => this.changeIngridient('remove', 'cheese')} className="ingrBtn">Remove</button>
          </div>
          <p>Meat</p>
          <div className="ingrBtns">
            <button onClick={() => this.changeIngridient('add', 'meat')} className="ingrBtn">Add</button>
            <button onClick={() => this.changeIngridient('remove', 'meat')} className="ingrBtn">Remove</button>
          </div>
        </div>
      </>
    )
  }
}
