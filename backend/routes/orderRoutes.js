// // // // // import express from 'express';
// // // // // import Order from '../models/Order.js';
// // // // // import authMiddleware from '../middleware/auth.js';

// // // // // const router = express.Router();

// // // // // router.get('/', authMiddleware, async (req, res) => {
// // // // //   try {
// // // // //     const orders = await Order.find()
// // // // //       .populate('user', 'name email')
// // // // //       .populate('products.product', 'name price')
// // // // //       .sort({ createdAt: -1 });
// // // // //     res.json(orders);
// // // // //   } catch (error) {
// // // // //     res.status(500).json({ message: error.message });
// // // // //   }
// // // // // });

// // // // // router.get('/:id', authMiddleware, async (req, res) => {
// // // // //   try {
// // // // //     const order = await Order.findById(req.params.id)
// // // // //       .populate('user', 'name email phone address')
// // // // //       .populate('products.product', 'name price image');
    
// // // // //     if (!order) {
// // // // //       return res.status(404).json({ message: 'Order not found' });
// // // // //     }
    
// // // // //     res.json(order);
// // // // //   } catch (error) {
// // // // //     res.status(500).json({ message: error.message });
// // // // //   }
// // // // // });

// // // // // router.post('/', async (req, res) => {
// // // // //   try {
// // // // //     const { user, products, totalAmount } = req.body;
    
// // // // //     const order = new Order({
// // // // //       user,
// // // // //       products,
// // // // //       totalAmount
// // // // //     });
    
// // // // //     await order.save();
    
// // // // //     const populatedOrder = await Order.findById(order._id)
// // // // //       .populate('user', 'name email')
// // // // //       .populate('products.product', 'name price');
    
// // // // //     res.status(201).json(populatedOrder);
// // // // //   } catch (error) {
// // // // //     res.status(500).json({ message: error.message });
// // // // //   }
// // // // // });

// // // // // router.put('/:id', authMiddleware, async (req, res) => {
// // // // //   try {
// // // // //     const { status } = req.body;
    
// // // // //     const order = await Order.findByIdAndUpdate(
// // // // //       req.params.id,
// // // // //       { status },
// // // // //       { new: true }
// // // // //     ).populate('user', 'name email')
// // // // //      .populate('products.product', 'name price');
    
// // // // //     if (!order) {
// // // // //       return res.status(404).json({ message: 'Order not found' });
// // // // //     }
    
// // // // //     res.json(order);
// // // // //   } catch (error) {
// // // // //     res.status(500).json({ message: error.message });
// // // // //   }
// // // // // });

// // // // // router.delete('/:id', authMiddleware, async (req, res) => {
// // // // //   try {
// // // // //     const order = await Order.findByIdAndDelete(req.params.id);
// // // // //     if (!order) {
// // // // //       return res.status(404).json({ message: 'Order not found' });
// // // // //     }
// // // // //     res.json({ message: 'Order deleted successfully' });
// // // // //   } catch (error) {
// // // // //     res.status(500).json({ message: error.message });
// // // // //   }
// // // // // });

// // // // // export default router;

// // // // import express from 'express';
// // // // import Order from '../models/Order.js';
// // // // import Product from '../models/Product.js'; 
// // // // import authMiddleware from '../middleware/auth.js';

// // // // const router = express.Router();


// // // // router.get('/', authMiddleware, async (req, res) => {
// // // //   try {
// // // //     const orders = await Order.find()
// // // //       .populate('user', 'name email')
// // // //       .populate('products.product', 'name price')
// // // //       .sort({ createdAt: -1 });
// // // //     res.json(orders);
// // // //   } catch (error) {
// // // //     res.status(500).json({ message: error.message });
// // // //   }
// // // // });


// // // // router.get('/:id', authMiddleware, async (req, res) => {
// // // //   try {
// // // //     const order = await Order.findById(req.params.id)
// // // //       .populate('user', 'name email phone address')
// // // //       .populate('products.product', 'name price image');

// // // //     if (!order) {
// // // //       return res.status(404).json({ message: 'Order not found' });
// // // //     }

// // // //     res.json(order);
// // // //   } catch (error) {
// // // //     res.status(500).json({ message: error.message });
// // // //   }
// // // // });


// // // // router.post('/', async (req, res) => {
// // // //   try {
// // // //     const { user, products, totalAmount } = req.body;

// // // //     const order = new Order({
// // // //       user,
// // // //       products,
// // // //       totalAmount
// // // //     });

// // // //     await order.save();


// // // //     for (const item of products) {
// // // //       await Product.findByIdAndUpdate(
// // // //         item.product,
// // // //         { $inc: { stock: -item.quantity } },
// // // //         { new: true }
// // // //       );
// // // //     }

// // // //     const populatedOrder = await Order.findById(order._id)
// // // //       .populate('user', 'name email')
// // // //       .populate('products.product', 'name price');

// // // //     res.status(201).json(populatedOrder);
// // // //   } catch (error) {
// // // //     res.status(500).json({ message: error.message });
// // // //   }
// // // // });


// // // // router.put('/:id', authMiddleware, async (req, res) => {
// // // //   try {
// // // //     const { status } = req.body;

// // // //     const order = await Order.findByIdAndUpdate(
// // // //       req.params.id,
// // // //       { status },
// // // //       { new: true }
// // // //     )
// // // //       .populate('user', 'name email')
// // // //       .populate('products.product', 'name price');

// // // //     if (!order) {
// // // //       return res.status(404).json({ message: 'Order not found' });
// // // //     }

// // // //     res.json(order);
// // // //   } catch (error) {
// // // //     res.status(500).json({ message: error.message });
// // // //   }
// // // // });


// // // // router.delete('/:id', authMiddleware, async (req, res) => {
// // // //   try {
// // // //     const order = await Order.findByIdAndDelete(req.params.id);
// // // //     if (!order) {
// // // //       return res.status(404).json({ message: 'Order not found' });
// // // //     }
// // // //     res.json({ message: 'Order deleted successfully' });
// // // //   } catch (error) {
// // // //     res.status(500).json({ message: error.message });
// // // //   }
// // // // });

// // // // export default router;

// // // import express from 'express';
// // // import Order from '../models/Order.js';
// // // import Product from '../models/Product.js';
// // // import authMiddleware from '../middleware/auth.js';

// // // const router = express.Router();

// // // router.post('/', authMiddleware, async (req, res) => {
// // //   try {
// // //     const { products, totalAmount } = req.body;

// // //     const order = new Order({
// // //       user: req.user._id,
// // //       products,
// // //       totalAmount
// // //     });

// // //     await order.save();

// // //     for (const item of products) {
// // //       await Product.findByIdAndUpdate(
// // //         item.product,
// // //         { $inc: { stock: -item.quantity } },
// // //         { new: true }
// // //       );
// // //     }

// // //     const populatedOrder = await Order.findById(order._id)
// // //       .populate('user', 'name email')
// // //       .populate('products.product', 'name price');

// // //     res.status(201).json(populatedOrder);
// // //   } catch (error) {
// // //     res.status(500).json({ message: error.message });
// // //   }
// // // });

// // // export default router;
// // import express from 'express';
// // import Order from '../models/Order.js';
// // import Product from '../models/Product.js';

// // const router = express.Router();

// // // ✅ Removed authMiddleware to allow guest checkout
// // router.post('/', async (req, res) => {
// //   try {
// //     const { user, products, totalAmount } = req.body;

// //     const order = new Order({
// //       user,
// //       products,
// //       totalAmount,
// //     });

// //     await order.save();

// //     for (const item of products) {
// //       await Product.findByIdAndUpdate(
// //         item.product,
// //         { $inc: { stock: -item.quantity } },
// //         { new: true }
// //       );
// //     }

// //     const populatedOrder = await Order.findById(order._id)
// //       .populate('user', 'name email')
// //       .populate('products.product', 'name price');

// //     res.status(201).json(populatedOrder);
// //   } catch (error) {
// //     console.error('Error creating order:', error);
// //     res.status(500).json({ message: error.message });
// //   }
// // });

// // export default router;

// import express from 'express';
// import Order from '../models/Order.js';
// import Product from '../models/Product.js';
// import User from '../models/User.js';
// import authMiddleware from '../middleware/auth.js';

// const router = express.Router();

// router.get('/', authMiddleware, async (req, res) => {
//   try {
//     const { status, page = 1, limit = 10 } = req.query;
//     let query = {};
    
//     if (status) {
//       query.status = status;
//     }
    
//     const orders = await Order.find(query)
//       .populate('user', 'name email phone address')
//       .populate('products.product', 'name price image category')
//       .sort({ createdAt: -1 })
//       .limit(limit * 1)
//       .skip((page - 1) * limit);
      
//     const total = await Order.countDocuments(query);
    
//     res.json({
//       orders,
//       totalPages: Math.ceil(total / limit),
//       currentPage: page,
//       total
//     });
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// });

// router.get('/stats', authMiddleware, async (req, res) => {
//   try {
//     const totalOrders = await Order.countDocuments();
//     const pendingOrders = await Order.countDocuments({ status: 'pending' });
//     const processingOrders = await Order.countDocuments({ status: 'processing' });
//     const shippedOrders = await Order.countDocuments({ status: 'shipped' });
//     const deliveredOrders = await Order.countDocuments({ status: 'delivered' });
    
//     const totalRevenue = await Order.aggregate([
//       { $match: { status: { $ne: 'cancelled' } } },
//       { $group: { _id: null, total: { $sum: '$totalAmount' } } }
//     ]);
    
//     res.json({
//       totalOrders,
//       pendingOrders,
//       processingOrders,
//       shippedOrders,
//       deliveredOrders,
//       totalRevenue: totalRevenue[0]?.total || 0
//     });
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// });

// router.get('/:id', authMiddleware, async (req, res) => {
//   try {
//     const order = await Order.findById(req.params.id)
//       .populate('user', 'name email phone address')
//       .populate('products.product', 'name price image category description');
    
//     if (!order) {
//       return res.status(404).json({ message: 'Order not found' });
//     }
    
//     res.json(order);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// });

// router.post('/', async (req, res) => {
//   try {
//     const { user, products, totalAmount } = req.body;
    
//     if (!user || !products || !Array.isArray(products) || products.length === 0) {
//       return res.status(400).json({ message: 'Invalid order data' });
//     }
    
//     for (let item of products) {
//       const product = await Product.findById(item.product);
//       if (!product) {
//         return res.status(404).json({ message: `Product ${item.product} not found` });
//       }
//       if (product.stock < item.quantity) {
//         return res.status(400).json({ 
//           message: `Insufficient stock for ${product.name}. Available: ${product.stock}, Requested: ${item.quantity}` 
//         });
//       }
//     }
    
//     const order = new Order({
//       user,
//       products,
//       totalAmount: parseFloat(totalAmount)
//     });
    
//     await order.save();
    
//     for (let item of products) {
//       await Product.findByIdAndUpdate(
//         item.product,
//         { $inc: { stock: -item.quantity } }
//       );
//     }
    
//     const populatedOrder = await Order.findById(order._id)
//       .populate('user', 'name email phone address')
//       .populate('products.product', 'name price image');
    
//     res.status(201).json(populatedOrder);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// });

// router.put('/:id', authMiddleware, async (req, res) => {
//   try {
//     const { status } = req.body;
    
//     if (!['pending', 'processing', 'shipped', 'delivered', 'cancelled'].includes(status)) {
//       return res.status(400).json({ message: 'Invalid status' });
//     }
    
//     const order = await Order.findByIdAndUpdate(
//       req.params.id,
//       { status },
//       { new: true }
//     ).populate('user', 'name email phone address')
//      .populate('products.product', 'name price image');
    
//     if (!order) {
//       return res.status(404).json({ message: 'Order not found' });
//     }
    
//     res.json(order);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// });

// router.delete('/:id', authMiddleware, async (req, res) => {
//   try {
//     const order = await Order.findById(req.params.id);
//     if (!order) {
//       return res.status(404).json({ message: 'Order not found' });
//     }
    
//     if (order.status === 'processing' || order.status === 'shipped') {
//       return res.status(400).json({ message: 'Cannot delete order that is being processed or shipped' });
//     }
    
//     if (order.status === 'pending') {
//       for (let item of order.products) {
//         await Product.findByIdAndUpdate(
//           item.product,
//           { $inc: { stock: item.quantity } }
//         );
//       }
//     }
    
//     await Order.findByIdAndDelete(req.params.id);
//     res.json({ message: 'Order deleted successfully' });
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// });

// export default router;
import express from 'express';
import Order from '../models/Order.js';
import Product from '../models/Product.js';
import authMiddleware from '../middleware/auth.js';

const router = express.Router();

// List orders (admin view)
router.get('/', authMiddleware, async (req, res) => {
  try {
    const { status, page = 1, limit = 10 } = req.query;
    const query = status ? { status } : {};

    const orders = await Order.find(query)
      .populate('user', 'name email phone address')
      .populate('products.product', 'name price image category')
      .sort({ createdAt: -1 })
      .limit(limit * 1)
      .skip((page - 1) * limit);

    const total = await Order.countDocuments(query);
    res.json({
      orders,
      totalPages: Math.ceil(total / limit),
      currentPage: parseInt(page),
      total
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Order statistics
router.get('/stats', authMiddleware, async (req, res) => {
  try {
    const [totalRevenueResult] = await Order.aggregate([
      { $match: { status: { $ne: 'cancelled' } } },
      { $group: { _id: null, total: { $sum: '$totalAmount' } } }
    ]);

    res.json({
      totalOrders: await Order.countDocuments(),
      pendingOrders: await Order.countDocuments({ status: 'pending' }),
      processingOrders: await Order.countDocuments({ status: 'processing' }),
      shippedOrders: await Order.countDocuments({ status: 'shipped' }),
      deliveredOrders: await Order.countDocuments({ status: 'delivered' }),
      totalRevenue: totalRevenueResult?.total || 0
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Single order
router.get('/:id', authMiddleware, async (req, res) => {
  try {
    const order = await Order.findById(req.params.id)
      .populate('user', 'name email phone address')
      .populate('products.product', 'name price image category description');
    if (!order) return res.status(404).json({ message: 'Order not found' });
    res.json(order);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Place order (user or guest)
router.post('/', async (req, res) => {
  try {
    const { user, products, totalAmount } = req.body;

    if (!user || !products || !Array.isArray(products) || products.length === 0) {
      return res.status(400).json({ message: 'Invalid order data' });
    }

    for (let item of products) {
      const product = await Product.findById(item.product);
      if (!product || product.stock < item.quantity) {
        return res.status(400).json({ message: `Stock issue with ${product?.name || 'a product'}` });
      }
    }

    const order = new Order({
      user,
      products,
      totalAmount: parseFloat(totalAmount),
    });

    await order.save();

    for (let item of products) {
      await Product.findByIdAndUpdate(item.product, {
        $inc: { stock: -item.quantity }
      });
    }

    const populated = await Order.findById(order._id)
      .populate('user', 'name email phone address')
      .populate('products.product', 'name price image');
    res.status(201).json(populated);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Update order status
router.put('/:id', authMiddleware, async (req, res) => {
  try {
    const { status } = req.body;
    if (!['pending', 'processing', 'shipped', 'delivered', 'cancelled'].includes(status)) {
      return res.status(400).json({ message: 'Invalid status' });
    }

    const order = await Order.findByIdAndUpdate(
      req.params.id,
      { status },
      { new: true }
    )
      .populate('user', 'name email phone address')
      .populate('products.product', 'name price image');

    if (!order) return res.status(404).json({ message: 'Order not found' });
    res.json(order);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Delete order
router.delete('/:id', authMiddleware, async (req, res) => {
  try {
    const order = await Order.findById(req.params.id);
    if (!order) return res.status(404).json({ message: 'Order not found' });

    if (['processing', 'shipped'].includes(order.status)) {
      return res.status(400).json({ message: 'Cannot delete order in progress' });
    }

    if (order.status === 'pending') {
      for (let item of order.products) {
        await Product.findByIdAndUpdate(item.product, {
          $inc: { stock: item.quantity }
        });
      }
    }

    await Order.findByIdAndDelete(req.params.id);
    res.json({ message: 'Order deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;
