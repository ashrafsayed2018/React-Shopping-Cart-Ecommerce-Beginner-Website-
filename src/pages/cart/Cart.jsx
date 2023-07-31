import { PRODUCTS } from "../../products";
import { CartItem } from "./CartItem";
import { ShopContext } from "../../context/ShopContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import "./cart.css";

const Cart = () => {
  const { cartItems, getTotalCartAmount } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();
  const navigate = useNavigate();
  return (
    <div className="cart">
      <div>
        <h1>you cart items</h1>
      </div>
      <div className="cartItems">
        {PRODUCTS.map((product) => {
          if (cartItems[product.id] !== 0) {
            return <CartItem data={product} key={product.id} />;
          }
        })}
      </div>
      {totalAmount > 0 ? (
        <div className="checkout">
          <p>subtotal : ${totalAmount}</p>
          <button onClick={() => navigate("/")}>continue shopping</button>
          <button>checkout</button>
        </div>
      ) : (
        <h1>your cart is empty</h1>
      )}
    </div>
  );
};

export default Cart;
