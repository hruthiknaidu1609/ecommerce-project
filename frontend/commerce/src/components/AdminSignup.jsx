// import React, { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import axios from 'axios';

// const AdminSignup = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     password: '',
//     image: null
//   });
//   const [imagePreview, setImagePreview] = useState('');
//   const [error, setError] = useState('');
//   const [success, setSuccess] = useState('');
//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     if (e.target.name === 'image') {
//       const file = e.target.files[0];
//       setFormData({
//         ...formData,
//         image: file
//       });
//       if (file) {
//         const reader = new FileReader();
//         reader.onloadend = () => {
//           setImagePreview(reader.result);
//         };
//         reader.readAsDataURL(file);
//       }
//     } else {
//       setFormData({
//         ...formData,
//         [e.target.name]: e.target.value
//       });
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const formDataToSend = new FormData();
//       formDataToSend.append('name', formData.name);
//       formDataToSend.append('email', formData.email);
//       formDataToSend.append('password', formData.password);
//       if (formData.image) {
//         formDataToSend.append('image', formData.image);
//       }

//       const response = await axios.post('http://localhost:5000/api/admin/signup', formDataToSend, {
//         headers: {
//           'Content-Type': 'multipart/form-data'
//         }
//       });
//       setSuccess('Admin created successfully!');
//       setError('');
//       setTimeout(() => {
//         navigate('/admin/login');
//       }, 2000);
//     } catch (error) {
//       setError(error.response?.data?.message || 'An error occurred');
//       setSuccess('');
//     }
//   };

//   return (
//     <div className="auth-container">
//       <form className="auth-form" onSubmit={handleSubmit}>
//         <h2>Admin Signup</h2>
//         {error && <div className="alert alert-error">{error}</div>}
//         {success && <div className="alert alert-success">{success}</div>}
        
//         <div className="form-group">
//           <label>Name</label>
//           <input
//             type="text"
//             name="name"
//             value={formData.name}
//             onChange={handleChange}
//             required
//           />
//         </div>

//         <div className="form-group">
//           <label>Email</label>
//           <input
//             type="email"
//             name="email"
//             value={formData.email}
//             onChange={handleChange}
//             required
//           />
//         </div>

//         <div className="form-group">
//           <label>Password</label>
//           <input
//             type="password"
//             name="password"
//             value={formData.password}
//             onChange={handleChange}
//             required
//           />
//         </div>

//         <div className="form-group">
//           <label>Profile Image</label>
//           <input
//             type="file"
//             name="image"
//             accept="image/*"
//             onChange={handleChange}
//             className="file-input"
//           />
//           {imagePreview && (
//             <div className="image-preview">
//               <img src={imagePreview} alt="Preview" />
//             </div>
//           )}
//         </div>

//         <button type="submit" className="btn">Sign Up</button>
        
//         <div className="link">
//           <Link to="/admin/login">Already have an account? Login</Link>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default AdminSignup;


import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const AdminSignup = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    image: null
  });
  const [imagePreview, setImagePreview] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    if (e.target.name === 'image') {
      const file = e.target.files[0];
      setFormData({
        ...formData,
        image: file
      });
      if (file) {
        const reader = new FileReader();
        reader.onloadend = () => {
          setImagePreview(reader.result);
        };
        reader.readAsDataURL(file);
      }
    } else {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formDataToSend = new FormData();
      formDataToSend.append('name', formData.name);
      formDataToSend.append('email', formData.email);
      formDataToSend.append('password', formData.password);
      if (formData.image) {
        formDataToSend.append('image', formData.image);
      }

      const response = await axios.post('http://localhost:5000/api/admin/signup', formDataToSend, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      setSuccess('Admin created successfully!');
      setError('');
      setTimeout(() => {
        navigate('/admin/login');
      }, 2000);
    } catch (error) {
      setError(error.response?.data?.message || 'An error occurred');
      setSuccess('');
    }
  };

  return (
    <div className="auth-container">
      <form className="auth-form" onSubmit={handleSubmit}>
        <h2>Admin Signup</h2>
        {error && <div className="alert alert-error">{error}</div>}
        {success && <div className="alert alert-success">{success}</div>}
        
        <div className="form-group">
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Profile Image</label>
          <input
            type="file"
            name="image"
            accept="image/*"
            onChange={handleChange}
            className="file-input"
          />
          {imagePreview && (
            <div className="image-preview">
              <img src={imagePreview} alt="Preview" />
            </div>
          )}
        </div>

        <button type="submit" className="btn">Sign Up</button>
        
        <div className="link">
          <Link to="/admin/login">Already have an account? Login</Link>
        </div>
      </form>
    </div>
  );
};

export default AdminSignup;