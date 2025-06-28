// // import jwt from 'jsonwebtoken';
// // import Admin from '../models/Admin.js';

// // const authMiddleware = async (req, res, next) => {
// //   try {
// //     const token = req.header('Authorization')?.replace('Bearer ', '');
    
// //     if (!token) {
// //       return res.status(401).json({ message: 'No token provided' });
// //     }

// //     const decoded = jwt.verify(token, process.env.JWT_SECRET || 'your-secret-key');
// //     const admin = await Admin.findById(decoded.id);
    
// //     if (!admin) {
// //       return res.status(401).json({ message: 'Invalid token' });
// //     }

// //     req.admin = admin;
// //     next();
// //   } catch (error) {
// //     res.status(401).json({ message: 'Invalid token' });
// //   }
// // };

// // export default authMiddleware;

// import jwt from 'jsonwebtoken';
// import Admin from '../models/Admin.js'; // or switch to User if this is user-protected

// const authMiddleware = async (req, res, next) => {
//   try {
//     const authHeader = req.header('Authorization');

//     if (!authHeader || !authHeader.startsWith('Bearer ')) {
//       return res.status(401).json({ message: 'No token provided' });
//     }

//     const token = authHeader.split(' ')[1];

//     // Ensure the JWT_SECRET is available
//     const secret = process.env.JWT_SECRET;
//     if (!secret) {
//       console.error('JWT_SECRET is not defined in environment');
//       return res.status(500).json({ message: 'Server config error' });
//     }

//     // Verify token
//     const decoded = jwt.verify(token, secret);

//     // Validate admin (or user)
//     const admin = await Admin.findById(decoded.id).select('-password');
//     if (!admin) {
//       return res.status(401).json({ message: 'Invalid token - admin not found' });
//     }

//     req.admin = admin;
//     next();
//   } catch (error) {
//     console.error('Auth Middleware Error:', error.message);
//     return res.status(401).json({ message: 'Invalid or expired token' });
//   }
// };

// export default authMiddleware;


import jwt from 'jsonwebtoken';
import Admin from '../models/Admin.js';

const authMiddleware = async (req, res, next) => {
  try {
    const authHeader = req.header('Authorization');

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return res.status(401).json({ message: 'No token provided' });
    }

    const token = authHeader.split(' ')[1];

    const secret = process.env.JWT_SECRET;
    if (!secret) {
      console.error('JWT_SECRET is not defined in environment');
      return res.status(500).json({ message: 'Server config error' });
    }

    const decoded = jwt.verify(token, secret);

    const admin = await Admin.findById(decoded.id).select('-password');
    if (!admin) {
      return res.status(401).json({ message: 'Invalid token - admin not found' });
    }

    req.admin = admin;
    next();
  } catch (error) {
    console.error('Auth Middleware Error:', error.message);
    return res.status(401).json({ message: 'Invalid or expired token' });
  }
};

export default authMiddleware;
