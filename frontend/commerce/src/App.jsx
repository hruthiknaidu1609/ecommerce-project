// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import AdminSignup from './components/AdminSignup.jsx';
// import AdminLogin from './components/AdminLogin.jsx';
// import AdminDashboard from './components/AdminDashboard.jsx';
// import AddAdmin from './components/AddAdmin.jsx';
// import OrdersPage from './components/OrdersPage.jsx';
// import UsersPage from './components/UsersPage.jsx';
// import ProductsPage from './components/ProductsPage.jsx';
// import UserProducts from './components/UserProducts.jsx';
// import Cart from './components/Cart.jsx';

// function App() {
//   return (
//     <Router>
//       <div className="app">
//         <Routes>
//           <Route path="/" element={<AdminLogin />} />
//           <Route path="/admin/signup" element={<AdminSignup />} />
//           <Route path="/admin/login" element={<AdminLogin />} />
//           <Route path="/admin/dashboard" element={<AdminDashboard />} />
//           <Route path="/admin/add-admin" element={<AddAdmin />} />
//           <Route path="/admin/orders" element={<OrdersPage />} />
//           <Route path="/admin/users" element={<UsersPage />} />
//           <Route path="/admin/products" element={<ProductsPage />} />
//           <Route path="/products" element={<UserProducts />} />
//           <Route path="/cart" element={<Cart />} />
//         </Routes>
//       </div>
//     </Router>
//   );
// }

// export default App;

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AdminSignup from './components/AdminSignup.jsx';
import AdminLogin from './components/AdminLogin.jsx';
import AdminDashboard from './components/AdminDashboard.jsx';
import AddAdmin from './components/AddAdmin.jsx';
import OrdersPage from './components/OrdersPage.jsx';
import UsersPage from './components/UsersPage.jsx';
import ProductsPage from './components/ProductsPage.jsx';
import UserProducts from './components/UserProducts.jsx';
import Cart from './components/Cart.jsx';

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<AdminLogin />} />
          <Route path="/admin/signup" element={<AdminSignup />} />
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
          <Route path="/admin/add-admin" element={<AddAdmin />} />
          <Route path="/admin/orders" element={<OrdersPage />} />
          <Route path="/admin/users" element={<UsersPage />} />
          <Route path="/admin/products" element={<ProductsPage />} />
          <Route path="/products" element={<UserProducts />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;