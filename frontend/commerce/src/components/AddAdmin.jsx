// // import React, { useState } from 'react';
// // import { useNavigate } from 'react-router-dom';
// // import axios from 'axios';

// // const AddAdmin = () => {
// //   const [formData, setFormData] = useState({
// //     name: '',
// //     email: '',
// //     password: '',
// //     image: null
// //   });
// //   const [imagePreview, setImagePreview] = useState('');
// //   const [error, setError] = useState('');
// //   const [success, setSuccess] = useState('');
// //   const navigate = useNavigate();

// //   const handleChange = (e) => {
// //     if (e.target.name === 'image') {
// //       const file = e.target.files[0];
// //       setFormData({
// //         ...formData,
// //         image: file
// //       });
// //       if (file) {
// //         const reader = new FileReader();
// //         reader.onloadend = () => {
// //           setImagePreview(reader.result);
// //         };
// //         reader.readAsDataURL(file);
// //       }
// //     } else {
// //       setFormData({
// //         ...formData,
// //         [e.target.name]: e.target.value
// //       });
// //     }
// //   };

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();
// //     try {
// //       const token = localStorage.getItem('adminToken');
// //       const formDataToSend = new FormData();
// //       formDataToSend.append('name', formData.name);
// //       formDataToSend.append('email', formData.email);
// //       formDataToSend.append('password', formData.password);
// //       if (formData.image) {
// //         formDataToSend.append('image', formData.image);
// //       }

// //       await axios.post('http://localhost:5000/api/admin/create', formDataToSend, {
// //         headers: { 
// //           Authorization: `Bearer ${token}`,
// //           'Content-Type': 'multipart/form-data'
// //         }
// //       });
// //       setSuccess('Admin created successfully!');
// //       setError('');
// //       setFormData({ name: '', email: '', password: '', image: null });
// //       setImagePreview('');
// //     } catch (error) {
// //       setError(error.response?.data?.message || 'An error occurred');
// //       setSuccess('');
// //     }
// //   };

// //   return (
// //     <div className="container">
// //       <div className="dashboard-header">
// //         <h1>Add New Admin</h1>
// //         <button onClick={() => navigate('/admin/dashboard')} className="btn btn-secondary">
// //           Back to Dashboard
// //         </button>
// //       </div>

// //       <div className="auth-form" style={{ margin: '0 auto', marginTop: '20px' }}>
// //         {error && <div className="alert alert-error">{error}</div>}
// //         {success && <div className="alert alert-success">{success}</div>}
        
// //         <form onSubmit={handleSubmit}>
// //           <div className="form-group">
// //             <label>Name</label>
// //             <input
// //               type="text"
// //               name="name"
// //               value={formData.name}
// //               onChange={handleChange}
// //               required
// //             />
// //           </div>

// //           <div className="form-group">
// //             <label>Email</label>
// //             <input
// //               type="email"
// //               name="email"
// //               value={formData.email}
// //               onChange={handleChange}
// //               required
// //             />
// //           </div>

// //           <div className="form-group">
// //             <label>Password</label>
// //             <input
// //               type="password"
// //               name="password"
// //               value={formData.password}
// //               onChange={handleChange}
// //               required
// //             />
// //           </div>

// //           <div className="form-group">
// //             <label>Profile Image</label>
// //             <input
// //               type="file"
// //               name="image"
// //               accept="image/*"
// //               onChange={handleChange}
// //               className="file-input"
// //             />
// //             {imagePreview && (
// //               <div className="image-preview">
// //                 <img src={imagePreview} alt="Preview" />
// //               </div>
// //             )}
// //           </div>

// //           <button type="submit" className="btn">Create Admin</button>
// //         </form>
// //       </div>
// //     </div>
// //   );
// // };

// // export default AddAdmin;

// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';

// const AddAdmin = () => {
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
//       const token = localStorage.getItem('adminToken');
//       const formDataToSend = new FormData();
//       formDataToSend.append('name', formData.name);
//       formDataToSend.append('email', formData.email);
//       formDataToSend.append('password', formData.password);
//       if (formData.image) {
//         formDataToSend.append('image', formData.image);
//       }

//       await axios.post('http://localhost:5000/api/admin/create', formDataToSend, {
//         headers: { 
//           Authorization: `Bearer ${token}`,
//           'Content-Type': 'multipart/form-data'
//         }
//       });
//       setSuccess('Admin created successfully!');
//       setError('');
//       setFormData({ name: '', email: '', password: '', image: null });
//       setImagePreview('');
//     } catch (error) {
//       setError(error.response?.data?.message || 'An error occurred');
//       setSuccess('');
//     }
//   };

//   return (
//     <div className="container">
//       <div className="dashboard-header">
//         <h1>Add New Admin</h1>
//         <button onClick={() => navigate('/admin/dashboard')} className="btn btn-secondary">
//           Back to Dashboard
//         </button>
//       </div>

//       <div className="auth-form" style={{ margin: '0 auto', marginTop: '20px' }}>
//         {error && <div className="alert alert-error">{error}</div>}
//         {success && <div className="alert alert-success">{success}</div>}
        
//         <form onSubmit={handleSubmit}>
//           <div className="form-group">
//             <label>Name</label>
//             <input
//               type="text"
//               name="name"
//               value={formData.name}
//               onChange={handleChange}
//               required
//             />
//           </div>

//           <div className="form-group">
//             <label>Email</label>
//             <input
//               type="email"
//               name="email"
//               value={formData.email}
//               onChange={handleChange}
//               required
//             />
//           </div>

//           <div className="form-group">
//             <label>Password</label>
//             <input
//               type="password"
//               name="password"
//               value={formData.password}
//               onChange={handleChange}
//               required
//             />
//           </div>

//           <div className="form-group">
//             <label>Profile Image</label>
//             <input
//               type="file"
//               name="image"
//               accept="image/*"
//               onChange={handleChange}
//               className="file-input"
//             />
//             {imagePreview && (
//               <div className="image-preview">
//                 <img src={imagePreview} alt="Preview" />
//               </div>
//             )}
//           </div>

//           <button type="submit" className="btn">Create Admin</button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default AddAdmin;


import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const AddAdmin = () => {
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
    const token = localStorage.getItem('adminToken');

    if (!token) {
      setError('No admin token found. Please log in again.');
      return;
    }

    console.log('Using token:', token);

    try {
      const formDataToSend = new FormData();
      formDataToSend.append('name', formData.name);
      formDataToSend.append('email', formData.email);
      formDataToSend.append('password', formData.password);
      if (formData.image) {
        formDataToSend.append('image', formData.image);
      }

      await axios.post('http://localhost:5000/api/admin/create', formDataToSend, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'multipart/form-data'
        }
      });

      setSuccess('Admin created successfully!');
      setError('');
      setFormData({ name: '', email: '', password: '', image: null });
      setImagePreview('');
    } catch (error) {
      setError(error.response?.data?.message || 'An error occurred');
      setSuccess('');
    }
  };

  return (
    <div className="container">
      <div className="dashboard-header">
        <h1>Add New Admin</h1>
        <button onClick={() => navigate('/admin/dashboard')} className="btn btn-secondary">
          Back to Dashboard
        </button>
      </div>

      <div className="auth-form" style={{ margin: '0 auto', marginTop: '20px' }}>
        {error && <div className="alert alert-error">{error}</div>}
        {success && <div className="alert alert-success">{success}</div>}

        <form onSubmit={handleSubmit}>
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

          <button type="submit" className="btn">Create Admin</button>
        </form>
      </div>
    </div>
  );
};

export default AddAdmin;
