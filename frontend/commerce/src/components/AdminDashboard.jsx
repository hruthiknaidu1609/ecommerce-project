import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AdminDashboard = () => {
  const [adminInfo, setAdminInfo] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('adminToken');
    const admin = localStorage.getItem('adminInfo');
    
    if (!token || !admin) {
      navigate('/admin/login');
      return;
    }
    
    setAdminInfo(JSON.parse(admin));
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    localStorage.removeItem('adminInfo');
    navigate('/admin/login');
  };

  const navigateToPage = (path) => {
    navigate(path);
  };

  if (!adminInfo) {
    return <div>Loading...</div>;
  }

  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <div className="admin-info">
          <img 
            src={adminInfo.image ? `http://localhost:5000${adminInfo.image}` : 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150'} 
            alt="Admin" 
            className="admin-avatar"
          />
          <div>
            <h1>Welcome, {adminInfo.name}</h1>
            <p>{adminInfo.email}</p>
          </div>
          <button onClick={handleLogout} className="btn btn-danger">Logout</button>
        </div>
      </div>

      <div className="dashboard-nav">
        <div className="nav-card" onClick={() => navigateToPage('/admin/add-admin')}>
          <h3>Add Admin</h3>
          <p>Create new admin accounts</p>
        </div>

        <div className="nav-card" onClick={() => navigateToPage('/admin/orders')}>
          <h3>Orders</h3>
          <p>View and manage orders</p>
        </div>

        <div className="nav-card" onClick={() => navigateToPage('/admin/users')}>
          <h3>Users</h3>
          <p>Manage user accounts</p>
        </div>

        <div className="nav-card" onClick={() => navigateToPage('/admin/products')}>
          <h3>Products</h3>
          <p>Manage product catalog</p>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;