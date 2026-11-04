import React, { useContext } from 'react'
import './Placeorder.css';
import { StoreContext } from '../components/StoredContext';

const Placeorder = () => {
  const {getTotalCartAmount}=useContext(StoreContext);
  const handleSubmit = (event) => {
    event.preventDefault();
    window.alert("Proceeding to payment.");
  };

  return (
    <form className='place-order' onSubmit={handleSubmit}>
      <div className="place-order-left">
        <p className="title">Delivery information</p>
        <div className="multi-feilds">
          <input type="text" placeholder="First name" autoComplete="given-name" />
          <input type="text" placeholder="Last name" autoComplete="family-name" />
        </div>
        <input type="email" placeholder="Email address" autoComplete="email" />
        <input type="text" placeholder="Street address" autoComplete="street-address" />
        <div className="multi-feilds">
          <input type="text" placeholder="City" autoComplete="address-level2" />
          <input type="text" placeholder="State / Province" autoComplete="address-level1" />
        </div>
         <div className="multi-feilds">
            <input type="text" placeholder="ZIP / Postal code" autoComplete="postal-code" />
            <input type="text" placeholder="Country" autoComplete="country-name" />
          </div>
          <input type="tel" placeholder="Phone number" autoComplete="tel" />

      </div>
      <div className="place-order-right">
          <div className="cart-total">
            <h2>Cart Totals</h2>
            <div className="cart-total-details">
              <p>Subtotal</p>
              <p>Rs{getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Delivery fee</p>
              <p>Rs{2}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <b>Total</b>
              <b>Rs{getTotalCartAmount()+2}</b>
            </div>
          </div>
          <button type="submit">Proceed To Payment</button>

      </div>

    </form>
  )
}

export default Placeorder