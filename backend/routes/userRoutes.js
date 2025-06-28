// // // // import express from 'express';
// // // // import User from '../models/User.js';
// // // // import authMiddleware from '../middleware/auth.js';

// // // // const router = express.Router();

// // // // router.get('/', authMiddleware, async (req, res) => {
// // // //   try {
// // // //     const users = await User.find().sort({ createdAt: -1 });
// // // //     res.json(users);
// // // //   } catch (error) {
// // // //     res.status(500).json({ message: error.message });
// // // //   }
// // // // });

// // // // router.get('/:id', async (req, res) => {
// // // //   try {
// // // //     const user = await User.findById(req.params.id);
// // // //     if (!user) {
// // // //       return res.status(404).json({ message: 'User not found' });
// // // //     }
// // // //     res.json(user);
// // // //   } catch (error) {
// // // //     res.status(500).json({ message: error.message });
// // // //   }
// // // // });

// // // // router.post('/', async (req, res) => {
// // // //   try {
// // // //     const { name, email, phone, address } = req.body;
    
// // // //     const user = new User({
// // // //       name,
// // // //       email,
// // // //       phone,
// // // //       address
// // // //     });
    
// // // //     await user.save();
// // // //     res.status(201).json(user);
// // // //   } catch (error) {
// // // //     res.status(500).json({ message: error.message });
// // // //   }
// // // // });

// // // // router.put('/:id', authMiddleware, async (req, res) => {
// // // //   try {
// // // //     const { name, email, phone, address } = req.body;
    
// // // //     const user = await User.findByIdAndUpdate(
// // // //       req.params.id,
// // // //       { name, email, phone, address },
// // // //       { new: true }
// // // //     );
    
// // // //     if (!user) {
// // // //       return res.status(404).json({ message: 'User not found' });
// // // //     }
    
// // // //     res.json(user);
// // // //   } catch (error) {
// // // //     res.status(500).json({ message: error.message });
// // // //   }
// // // // });

// // // // router.delete('/:id', authMiddleware, async (req, res) => {
// // // //   try {
// // // //     const user = await User.findByIdAndDelete(req.params.id);
// // // //     if (!user) {
// // // //       return res.status(404).json({ message: 'User not found' });
// // // //     }
// // // //     res.json({ message: 'User deleted successfully' });
// // // //   } catch (error) {
// // // //     res.status(500).json({ message: error.message });
// // // //   }
// // // // });

// // // // export default router;


// // // import express from 'express';
// // // import User from '../models/User.js';
// // // import jwt from 'jsonwebtoken';
// // // import authMiddleware from '../middleware/auth.js';

// // // const router = express.Router();


// // // router.post('/', async (req, res) => {
// // //   try {
// // //     const { name, email, phone, address } = req.body;

// // //     let user = await User.findOne({ email });
// // //     if (user) {
// // //       return res.status(200).json(user); 
// // //     }

// // //     user = new User({ name, email, phone, address });
// // //     await user.save();

// // //     res.status(201).json(user);
// // //   } catch (error) {
// // //     res.status(500).json({ message: error.message });
// // //   }
// // // });


// // // router.get('/', authMiddleware, async (req, res) => {
// // //   try {
// // //     const users = await User.find().sort({ createdAt: -1 });
// // //     res.json(users);
// // //   } catch (error) {
// // //     res.status(500).json({ message: error.message });
// // //   }
// // // });


// // // router.get('/:id', async (req, res) => {
// // //   try {
// // //     const user = await User.findById(req.params.id);
// // //     if (!user) return res.status(404).json({ message: 'User not found' });
// // //     res.json(user);
// // //   } catch (error) {
// // //     res.status(500).json({ message: error.message });
// // //   }
// // // });


// // // router.put('/:id', authMiddleware, async (req, res) => {
// // //   try {
// // //     const { name, email, phone, address } = req.body;

// // //     const user = await User.findByIdAndUpdate(
// // //       req.params.id,
// // //       { name, email, phone, address },
// // //       { new: true }
// // //     );

// // //     if (!user) return res.status(404).json({ message: 'User not found' });

// // //     res.json(user);
// // //   } catch (error) {
// // //     res.status(500).json({ message: error.message });
// // //   }
// // // });


// // // router.delete('/:id', authMiddleware, async (req, res) => {
// // //   try {
// // //     const user = await User.findByIdAndDelete(req.params.id);
// // //     if (!user) return res.status(404).json({ message: 'User not found' });

// // //     res.json({ message: 'User deleted successfully' });
// // //   } catch (error) {
// // //     res.status(500).json({ message: error.message });
// // //   }
// // // });


// // // router.post('/login', async (req, res) => {
// // //   try {
// // //     const { email } = req.body;

// // //     const user = await User.findOne({ email });
// // //     if (!user) return res.status(404).json({ message: 'User not found' });

// // //     const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET || 'user-secret');
// // //     res.json({ token, user });
// // //   } catch (error) {
// // //     res.status(500).json({ message: error.message });
// // //   }
// // // });

// // // export default router;


// // import express from 'express';
// // import User from '../models/User.js';
// // import Order from '../models/Order.js';
// // import authMiddleware from '../middleware/auth.js';

// // const router = express.Router();

// // router.get('/', authMiddleware, async (req, res) => {
// //   try {
// //     const { page = 1, limit = 10, search } = req.query;
// //     let query = {};
    
// //     if (search) {
// //       query.$or = [
// //         { name: { $regex: search, $options: 'i' } },
// //         { email: { $regex: search, $options: 'i' } },
// //         { phone: { $regex: search, $options: 'i' } }
// //       ];
// //     }
    
// //     const users = await User.find(query)
// //       .sort({ createdAt: -1 })
// //       .limit(limit * 1)
// //       .skip((page - 1) * limit);
      
// //     const total = await User.countDocuments(query);
    
// //     res.json({
// //       users,
// //       totalPages: Math.ceil(total / limit),
// //       currentPage: page,
// //       total
// //     });
// //   } catch (error) {
// //     res.status(500).json({ message: error.message });
// //   }
// // });

// // router.get('/stats', authMiddleware, async (req, res) => {
// //   try {
// //     const totalUsers = await User.countDocuments();
// //     const recentUsers = await User.countDocuments({
// //       createdAt: { $gte: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000) }
// //     });
    
// //     res.json({
// //       totalUsers,
// //       recentUsers
// //     });
// //   } catch (error) {
// //     res.status(500).json({ message: error.message });
// //   }
// // });

// // router.get('/:id', async (req, res) => {
// //   try {
// //     const user = await User.findById(req.params.id);
// //     if (!user) {
// //       return res.status(404).json({ message: 'User not found' });
// //     }
// //     res.json(user);
// //   } catch (error) {
// //     res.status(500).json({ message: error.message });
// //   }
// // });

// // router.get('/:id/orders', authMiddleware, async (req, res) => {
// //   try {
// //     const orders = await Order.find({ user: req.params.id })
// //       .populate('products.product', 'name price image')
// //       .sort({ createdAt: -1 });
// //     res.json(orders);
// //   } catch (error) {
// //     res.status(500).json({ message: error.message });
// //   }
// // });

// // router.post('/', async (req, res) => {
// //   try {
// //     const { name, email, phone, address } = req.body;
    
// //     if (!name || !email || !phone || !address) {
// //       return res.status(400).json({ message: 'All fields are required' });
// //     }
    
// //     const existingUser = await User.findOne({ email });
// //     if (existingUser) {
// //       return res.status(400).json({ message: 'User with this email already exists' });
// //     }
    
// //     const user = new User({
// //       name,
// //       email,
// //       phone,
// //       address
// //     });
    
// //     await user.save();
// //     res.status(201).json(user);
// //   } catch (error) {
// //     if (error.code === 11000) {
// //       res.status(400).json({ message: 'User with this email already exists' });
// //     } else {
// //       res.status(500).json({ message: error.message });
// //     }
// //   }
// // });

// // router.put('/:id', authMiddleware, async (req, res) => {
// //   try {
// //     const { name, email, phone, address } = req.body;
    
// //     const user = await User.findByIdAndUpdate(
// //       req.params.id,
// //       { name, email, phone, address },
// //       { new: true, runValidators: true }
// //     );
    
// //     if (!user) {
// //       return res.status(404).json({ message: 'User not found' });
// //     }
    
// //     res.json(user);
// //   } catch (error) {
// //     if (error.code === 11000) {
// //       res.status(400).json({ message: 'User with this email already exists' });
// //     } else {
// //       res.status(500).json({ message: error.message });
// //     }
// //   }
// // });

// // router.delete('/:id', authMiddleware, async (req, res) => {
// //   try {
// //     const user = await User.findById(req.params.id);
// //     if (!user) {
// //       return res.status(404).json({ message: 'User not found' });
// //     }
    
// //     const userOrders = await Order.countDocuments({ user: req.params.id });
// //     if (userOrders > 0) {
// //       return res.status(400).json({ 
// //         message: 'Cannot delete user with existing orders. Please handle orders first.' 
// //       });
// //     }
    
// //     await User.findByIdAndDelete(req.params.id);
// //     res.json({ message: 'User deleted successfully' });
// //   } catch (error) {
// //     res.status(500).json({ message: error.message });
// //   }
// // });

// // export default router;

// import express from 'express';
// import User from '../models/User.js';
// import Order from '../models/Order.js';
// import authMiddleware from '../middleware/auth.js';

// const router = express.Router();

// // List users with pagination and search
// router.get('/', authMiddleware, async (req, res) => {
//   try {
//     const { page = 1, limit = 10, search } = req.query;
//     const query = search ? {
//       $or: [
//         { name: { $regex: search, $options: 'i' } },
//         { email: { $regex: search, $options: 'i' } },
//         { phone: { $regex: search, $options: 'i' } }
//       ]
//     } : {};

//     const users = await User.find(query)
//       .sort({ createdAt: -1 })
//       .limit(limit * 1)
//       .skip((page - 1) * limit);

//     const total = await User.countDocuments(query);
//     res.json({
//       users,
//       totalPages: Math.ceil(total / limit),
//       currentPage: parseInt(page),
//       total
//     });
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// });

// // Stats for dashboard
// router.get('/stats', authMiddleware, async (req, res) => {
//   try {
//     const totalUsers = await User.countDocuments();
//     const recentUsers = await User.countDocuments({
//       createdAt: { $gte: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000) }
//     });

//     res.json({ totalUsers, recentUsers });
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// });

// // Get a single user
// router.get('/:id', async (req, res) => {
//   try {
//     const user = await User.findById(req.params.id);
//     if (!user) return res.status(404).json({ message: 'User not found' });
//     res.json(user);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// });

// // Get user orders
// router.get('/:id/orders', authMiddleware, async (req, res) => {
//   try {
//     const orders = await Order.find({ user: req.params.id })
//       .populate('products.product', 'name price image')
//       .sort({ createdAt: -1 });
//     res.json(orders);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// });

// // Register user (guest or first-time user)
// router.post('/', async (req, res) => {
//   try {
//     const { name, email, phone, address } = req.body;
//     if (!name || !email || !phone || !address) {
//       return res.status(400).json({ message: 'All fields are required' });
//     }

//     const existingUser = await User.findOne({ email });
//     if (existingUser) return res.status(400).json({ message: 'Email already exists' });

//     const user = new User({ name, email, phone, address });
//     await user.save();
//     res.status(201).json(user);
//   } catch (error) {
//     if (error.code === 11000) {
//       res.status(400).json({ message: 'Duplicate email' });
//     } else {
//       res.status(500).json({ message: error.message });
//     }
//   }
// });

// // Update user
// router.put('/:id', authMiddleware, async (req, res) => {
//   try {
//     const { name, email, phone, address } = req.body;
//     const user = await User.findByIdAndUpdate(
//       req.params.id,
//       { name, email, phone, address },
//       { new: true, runValidators: true }
//     );
//     if (!user) return res.status(404).json({ message: 'User not found' });
//     res.json(user);
//   } catch (error) {
//     if (error.code === 11000) {
//       res.status(400).json({ message: 'Email already exists' });
//     } else {
//       res.status(500).json({ message: error.message });
//     }
//   }
// });

// // Delete user
// router.delete('/:id', authMiddleware, async (req, res) => {
//   try {
//     const user = await User.findById(req.params.id);
//     if (!user) return res.status(404).json({ message: 'User not found' });

//     const orders = await Order.countDocuments({ user: req.params.id });
//     if (orders > 0) {
//       return res.status(400).json({ message: 'User has orders. Cannot delete.' });
//     }

//     await User.findByIdAndDelete(req.params.id);
//     res.json({ message: 'User deleted successfully' });
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// });

// export default router;
import express from 'express';
import User from '../models/User.js';
import Order from '../models/Order.js';
import authMiddleware from '../middleware/auth.js';

const router = express.Router();

// List users with pagination and search
router.get('/', authMiddleware, async (req, res) => {
  try {
    const { page = 1, limit = 10, search } = req.query;
    const query = search ? {
      $or: [
        { name: { $regex: search, $options: 'i' } },
        { email: { $regex: search, $options: 'i' } },
        { phone: { $regex: search, $options: 'i' } }
      ]
    } : {};

    const users = await User.find(query)
      .sort({ createdAt: -1 })
      .limit(limit * 1)
      .skip((page - 1) * limit);

    const total = await User.countDocuments(query);
    res.json({
      users,
      totalPages: Math.ceil(total / limit),
      currentPage: parseInt(page),
      total
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Stats for dashboard
router.get('/stats', authMiddleware, async (req, res) => {
  try {
    const totalUsers = await User.countDocuments();
    const recentUsers = await User.countDocuments({
      createdAt: { $gte: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000) }
    });

    res.json({ totalUsers, recentUsers });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get a single user
router.get('/:id', async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) return res.status(404).json({ message: 'User not found' });
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get user orders
router.get('/:id/orders', authMiddleware, async (req, res) => {
  try {
    const orders = await Order.find({ user: req.params.id })
      .populate('products.product', 'name price image')
      .sort({ createdAt: -1 });
    res.json(orders);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Register user (or find existing)
router.post('/', async (req, res) => {
  try {
    const { name, email, phone, address } = req.body;

    if (!name || !email || !phone || !address) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    let user = await User.findOne({ email });

    if (!user) {
      user = new User({ name, email, phone, address });
      await user.save();
      return res.status(201).json(user);
    }

    // Update existing user details
    user.name = name;
    user.phone = phone;
    user.address = address;
    await user.save();

    return res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Update user
router.put('/:id', authMiddleware, async (req, res) => {
  try {
    const { name, email, phone, address } = req.body;
    const user = await User.findByIdAndUpdate(
      req.params.id,
      { name, email, phone, address },
      { new: true, runValidators: true }
    );
    if (!user) return res.status(404).json({ message: 'User not found' });
    res.json(user);
  } catch (error) {
    if (error.code === 11000) {
      res.status(400).json({ message: 'Email already exists' });
    } else {
      res.status(500).json({ message: error.message });
    }
  }
});

// Delete user
router.delete('/:id', authMiddleware, async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) return res.status(404).json({ message: 'User not found' });

    const orders = await Order.countDocuments({ user: req.params.id });
    if (orders > 0) {
      return res.status(400).json({ message: 'User has orders. Cannot delete.' });
    }

    await User.findByIdAndDelete(req.params.id);
    res.json({ message: 'User deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;
