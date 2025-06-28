import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Cart = () => {
  const [cart, setCart] = useState([]);
  const [showCheckout, setShowCheckout] = useState(false);
  const [userInfo, setUserInfo] = useState({
    name: '',
    email: '',
    phone: '',
    address: ''
  });
  const [orderPlaced, setOrderPlaced] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []);

  const updateQuantity = (productId, newQuantity) => {
    if (newQuantity === 0) {
      removeFromCart(productId);
      return;
    }

    const updatedCart = cart.map(item =>
      item._id === productId
        ? { ...item, quantity: newQuantity }
        : item
    );
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  const removeFromCart = (productId) => {
    const updatedCart = cart.filter(item => item._id !== productId);
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  const getCartTotal = () => {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const handleCheckout = async (e) => {
    e.preventDefault();
    try {
      const userResponse = await axios.post('http://localhost:5000/api/users', userInfo);
      const user = userResponse.data;
      const userId = user._id;

      if (!userId) {
        throw new Error("User ID not returned from backend");
      }

      const orderData = {
        user: userId,
        products: cart.map(item => ({
          product: item._id,
          quantity: item.quantity,
          price: item.price
        })),
        totalAmount: getCartTotal()
      };

      await axios.post('http://localhost:5000/api/orders', orderData);

      setOrderPlaced(true);
      setCart([]);
      localStorage.removeItem('cart');

      setTimeout(() => {
        navigate('/products');
      }, 3000);
    } catch (error) {
      console.error('Error placing order:', error?.response?.data || error.message);
    }
  };

  if (orderPlaced) {
    return (
      <div className="container">
        <div className="alert alert-success">
          <h2>Order Placed Successfully!</h2>
          <p>Thank you for your purchase. You will be redirected to the products page.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="container">
      <div className="dashboard-header">
        <h1>Shopping Cart</h1>
        <button onClick={() => navigate('/products')} className="btn btn-secondary">
          Continue Shopping
        </button>
      </div>

      {cart.length === 0 ? (
        <div className="alert alert-error">
          <p>Your cart is empty.</p>
        </div>
      ) : (
        <>
          <div className="cart-items">
            {cart.map(item => (
              <div key={item._id} className="cart-item">
                <div>
                  <h3>{item.name}</h3>
                  <p>${item.price} each</p>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <button 
                    onClick={() => updateQuantity(item._id, item.quantity - 1)}
                    className="btn"
                  >
                    -
                  </button>
                  <span>Qty: {item.quantity}</span>
                  <button 
                    onClick={() => updateQuantity(item._id, item.quantity + 1)}
                    className="btn"
                  >
                    +
                  </button>
                  <button 
                    onClick={() => removeFromCart(item._id)}
                    className="btn btn-danger"
                  >
                    Remove
                  </button>
                </div>
                <div>
                  <strong>${(item.price * item.quantity).toFixed(2)}</strong>
                </div>
              </div>
            ))}
          </div>

          <div className="cart-total">
            <h3>Total: ${getCartTotal().toFixed(2)}</h3>
          </div>

          <button 
            onClick={() => setShowCheckout(!showCheckout)} 
            className="btn"
          >
            Proceed to Checkout
          </button>

          {showCheckout && (
            <div className="auth-form" style={{ margin: '20px auto' }}>
              <h3>Checkout Information</h3>
              <form onSubmit={handleCheckout}>
                <div className="form-row">
                  <div className="form-group">
                    <label>Name</label>
                    <input
                      type="text"
                      value={userInfo.name}
                      onChange={(e) => setUserInfo({...userInfo, name: e.target.value})}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label>Email</label>
                    <input
                      type="email"
                      value={userInfo.email}
                      onChange={(e) => setUserInfo({...userInfo, email: e.target.value})}
                      required
                    />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label>Phone</label>
                    <input
                      type="tel"
                      value={userInfo.phone}
                      onChange={(e) => setUserInfo({...userInfo, phone: e.target.value})}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label>Address</label>
                    <input
                      type="text"
                      value={userInfo.address}
                      onChange={(e) => setUserInfo({...userInfo, address: e.target.value})}
                      required
                    />
                  </div>
                </div>
                <button type="submit" className="btn">
                  Place Order
                </button>
              </form>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default Cart;
