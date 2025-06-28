// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';

// const UsersPage = () => {
//   const [users, setUsers] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [showAddForm, setShowAddForm] = useState(false);
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     phone: '',
//     address: ''
//   });
//   const navigate = useNavigate();

//   useEffect(() => {
//     fetchUsers();
//   }, []);

//   const fetchUsers = async () => {
//     try {
//       const token = localStorage.getItem('adminToken');
//       const response = await axios.get('http://localhost:5000/api/users', {
//         headers: { Authorization: `Bearer ${token}` }
//       });
//       setUsers(response.data);
//       setLoading(false);
//     } catch (error) {
//       console.error('Error fetching users:', error);
//       setLoading(false);
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const token = localStorage.getItem('adminToken');
//       await axios.post('http://localhost:5000/api/users', formData, {
//         headers: { Authorization: `Bearer ${token}` }
//       });
//       setFormData({ name: '', email: '', phone: '', address: '' });
//       setShowAddForm(false);
//       fetchUsers();
//     } catch (error) {
//       console.error('Error creating user:', error);
//     }
//   };

//   const deleteUser = async (userId) => {
//     if (window.confirm('Are you sure you want to delete this user?')) {
//       try {
//         const token = localStorage.getItem('adminToken');
//         await axios.delete(`http://localhost:5000/api/users/${userId}`, {
//           headers: { Authorization: `Bearer ${token}` }
//         });
//         fetchUsers();
//       } catch (error) {
//         console.error('Error deleting user:', error);
//       }
//     }
//   };

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div className="container">
//       <div className="dashboard-header">
//         <h1>Users Management</h1>
//         <div>
//           <button onClick={() => setShowAddForm(!showAddForm)} className="btn">
//             Add User
//           </button>
//           <button onClick={() => navigate('/admin/dashboard')} className="btn btn-secondary">
//             Back to Dashboard
//           </button>
//         </div>
//       </div>

//       {showAddForm && (
//         <div className="auth-form" style={{ margin: '20px auto' }}>
//           <h3>Add New User</h3>
//           <form onSubmit={handleSubmit}>
//             <div className="form-row">
//               <div className="form-group">
//                 <label>Name</label>
//                 <input
//                   type="text"
//                   value={formData.name}
//                   onChange={(e) => setFormData({...formData, name: e.target.value})}
//                   required
//                 />
//               </div>
//               <div className="form-group">
//                 <label>Email</label>
//                 <input
//                   type="email"
//                   value={formData.email}
//                   onChange={(e) => setFormData({...formData, email: e.target.value})}
//                   required
//                 />
//               </div>
//             </div>
//             <div className="form-row">
//               <div className="form-group">
//                 <label>Phone</label>
//                 <input
//                   type="tel"
//                   value={formData.phone}
//                   onChange={(e) => setFormData({...formData, phone: e.target.value})}
//                   required
//                 />
//               </div>
//               <div className="form-group">
//                 <label>Address</label>
//                 <input
//                   type="text"
//                   value={formData.address}
//                   onChange={(e) => setFormData({...formData, address: e.target.value})}
//                   required
//                 />
//               </div>
//             </div>
//             <button type="submit" className="btn">Add User</button>
//           </form>
//         </div>
//       )}

//       <div className="table-container">
//         <table className="table">
//           <thead>
//             <tr>
//               <th>Name</th>
//               <th>Email</th>
//               <th>Phone</th>
//               <th>Address</th>
//               <th>Joined</th>
//               <th>Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {users.map(user => (
//               <tr key={user._id}>
//                 <td>{user.name}</td>
//                 <td>{user.email}</td>
//                 <td>{user.phone}</td>
//                 <td>{user.address}</td>
//                 <td>{new Date(user.createdAt).toLocaleDateString()}</td>
//                 <td>
//                   <button 
//                     onClick={() => deleteUser(user._id)}
//                     className="btn btn-danger"
//                   >
//                     Delete
//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default UsersPage;

import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const UsersPage = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showAddForm, setShowAddForm] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: ''
  });
  const navigate = useNavigate();

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const token = localStorage.getItem('adminToken');
      const response = await axios.get('http://localhost:5000/api/users', {
        headers: { Authorization: `Bearer ${token}` }
      });
      setUsers(response.data.users || response.data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching users:', error);
      setLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('adminToken');
      await axios.post('http://localhost:5000/api/users', formData, {
        headers: { Authorization: `Bearer ${token}` }
      });
      setFormData({ name: '', email: '', phone: '', address: '' });
      setShowAddForm(false);
      fetchUsers();
    } catch (error) {
      console.error('Error creating user:', error);
    }
  };

  const deleteUser = async (userId) => {
    if (window.confirm('Are you sure you want to delete this user?')) {
      try {
        const token = localStorage.getItem('adminToken');
        await axios.delete(`http://localhost:5000/api/users/${userId}`, {
          headers: { Authorization: `Bearer ${token}` }
        });
        fetchUsers();
      } catch (error) {
        console.error('Error deleting user:', error);
      }
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container">
      <div className="dashboard-header">
        <h1>Users Management</h1>
        <div>
          <button onClick={() => setShowAddForm(!showAddForm)} className="btn">
            Add User
          </button>
          <button onClick={() => navigate('/admin/dashboard')} className="btn btn-secondary">
            Back to Dashboard
          </button>
        </div>
      </div>

      {showAddForm && (
        <div className="auth-form" style={{ margin: '20px auto' }}>
          <h3>Add New User</h3>
          <form onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label>Name</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  required
                />
              </div>
              <div className="form-group">
                <label>Email</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  required
                />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <label>Phone</label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  required
                />
              </div>
              <div className="form-group">
                <label>Address</label>
                <input
                  type="text"
                  value={formData.address}
                  onChange={(e) => setFormData({...formData, address: e.target.value})}
                  required
                />
              </div>
            </div>
            <button type="submit" className="btn">Add User</button>
          </form>
        </div>
      )}

      <div className="table-container">
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Address</th>
              <th>Joined</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map(user => (
              <tr key={user._id}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
                <td>{user.address}</td>
                <td>{new Date(user.createdAt).toLocaleDateString()}</td>
                <td>
                  <button 
                    onClick={() => deleteUser(user._id)}
                    className="btn btn-danger"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UsersPage;