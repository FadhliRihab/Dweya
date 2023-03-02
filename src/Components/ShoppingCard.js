import React from "react";
import products from "../Assets/products";
import "../Components/css/shoppingcart.css";

class ShoppingCard extends React.Component {
  state = {
    quantity: 1,
    isFavorite: false,
  };

  handleAddToCart = () => {
    // Code to add item to cart goes here
  };

  handleIncreaseQuantity = () => {
    this.setState((prevState) => ({
      quantity: prevState.quantity + 1,
    }));
  };

  handleDecreaseQuantity = () => {
    if (this.state.quantity > 1) {
      this.setState((prevState) => ({
        quantity: prevState.quantity - 1,
      }));
    }
  };

  handleAddToFavorites = () => {
    this.setState((prevState) => ({
      isFavorite: !prevState.isFavorite,
    }));
  };

  render() {
    const { quantity, isFavorite } = this.state;
    // get the first product from the products array

    return (
      <div>
        <div className="card">
          <div className="div-container">
            <ul>
              <li>
                 <br />
                <img src="" alt="404" />- $ - Quantity:
                <button onClick={this.handleDecreaseQuantity}>-</button>
                {quantity}
                <button onClick={this.handleIncreaseQuantity}>+</button>
                <button onClick={this.handleAddToCart}>Buy</button>
                <button onClick={this.handleAddToFavorites}>
                  {isFavorite ? "❤️" : "♡"}
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default ShoppingCard;
