import React, { useContext } from "react";
import "./PlaceOrder.css";
import "../Cart/Cart.css";
import { StoreContext } from "../../components/Context/StoreContext";

const PlaceOrder = () => {
  const { cartItems, food_list, getTotalCartAmount } = useContext(StoreContext);
  return (
    <form className="place-order">
      <div className="place-order-left">
        {food_list.map((item, index) => {
          if (cartItems[item._id] > 0) {
            return (
              <>
                <p className="title">Items</p>
                <div
                  className="cart-items-title cart-items-item order-info"
                  key={index}
                >
                  <p>{item.name}</p>
                  <p>${item.price}</p>
                  <p>{cartItems[item._id]}</p>
                  <p>${item.price * cartItems[item._id]}</p>
                  <img src={item.image} alt="" />
                </div>
              </>
            );
          }
        })}
        <p className="title">Delivery Location</p>
        <div className="multi-fields">
          <input type="text" placeholder="First Name" />
          <input type="text" placeholder="Last Name" />
        </div>
        <input placeholder="Email address" />
        <input type="text" placeholder="Street" />
        <div className="multi-fields">
          <input type="text" placeholder="City" />
          <input type="text" placeholder="State" />
        </div>
        <div className="multi-fields">
          <input type="text" placeholder="Zip Code" />
          <input type="text" placeholder="Country" />
        </div>
        <input type="text" placeholder="Phone" />
      </div>
      <div className="cart-total">
        <h2>Cart Total</h2>
        <div className="cart-total-details">
          <p>Subtotal</p>
          <p>${getTotalCartAmount()}</p>
        </div>
        <hr />
        <div className="cart-total-details">
          <p>Delivery fee</p>
          <p>${getTotalCartAmount() === 0 ? 0 : 2}</p>
        </div>
        <hr />
        <div className="cart-total-details">
          <b>Total</b>
          <b>${getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 2}</b>
        </div>
        <button className="button">PROCEED TO PAYMENT</button>
      </div>
    </form>
  );
};

export default PlaceOrder;
