// // // import express from 'express';
// // // import Product from '../models/Product.js';
// // // import authMiddleware from '../middleware/auth.js';

// // // const router = express.Router();

// // // router.get('/', async (req, res) => {
// // //   try {
// // //     const products = await Product.find().sort({ createdAt: -1 });
// // //     res.json(products);
// // //   } catch (error) {
// // //     res.status(500).json({ message: error.message });
// // //   }
// // // });

// // // router.get('/:id', async (req, res) => {
// // //   try {
// // //     const product = await Product.findById(req.params.id);
// // //     if (!product) {
// // //       return res.status(404).json({ message: 'Product not found' });
// // //     }
// // //     res.json(product);
// // //   } catch (error) {
// // //     res.status(500).json({ message: error.message });
// // //   }
// // // });

// // // router.post('/', authMiddleware, async (req, res) => {
// // //   try {
// // //     const { name, description, price, image, category, stock } = req.body;
    
// // //     const product = new Product({
// // //       name,
// // //       description,
// // //       price,
// // //       image,
// // //       category,
// // //       stock
// // //     });
    
// // //     await product.save();
// // //     res.status(201).json(product);
// // //   } catch (error) {
// // //     res.status(500).json({ message: error.message });
// // //   }
// // // });

// // // router.put('/:id', authMiddleware, async (req, res) => {
// // //   try {
// // //     const { name, description, price, image, category, stock } = req.body;
    
// // //     const product = await Product.findByIdAndUpdate(
// // //       req.params.id,
// // //       { name, description, price, image, category, stock },
// // //       { new: true }
// // //     );
    
// // //     if (!product) {
// // //       return res.status(404).json({ message: 'Product not found' });
// // //     }
    
// // //     res.json(product);
// // //   } catch (error) {
// // //     res.status(500).json({ message: error.message });
// // //   }
// // // });

// // // router.delete('/:id', authMiddleware, async (req, res) => {
// // //   try {
// // //     const product = await Product.findByIdAndDelete(req.params.id);
// // //     if (!product) {
// // //       return res.status(404).json({ message: 'Product not found' });
// // //     }
// // //     res.json({ message: 'Product deleted successfully' });
// // //   } catch (error) {
// // //     res.status(500).json({ message: error.message });
// // //   }
// // // });

// // // export default router;


// // // import express from 'express';
// // // import Product from '../models/Product.js';
// // // import authMiddleware from '../middleware/auth.js';

// // // const router = express.Router();


// // // router.get('/', async (req, res) => {
// // //   try {
// // //     const products = await Product.find().sort({ createdAt: -1 });
// // //     res.json(products);
// // //   } catch (error) {
// // //     res.status(500).json({ message: error.message });
// // //   }
// // // });


// // // router.get('/:id', async (req, res) => {
// // //   try {
// // //     const product = await Product.findById(req.params.id);
// // //     if (!product) return res.status(404).json({ message: 'Product not found' });
// // //     res.json(product);
// // //   } catch (error) {
// // //     res.status(500).json({ message: error.message });
// // //   }
// // // });


// // // router.post('/', authMiddleware, async (req, res) => {
// // //   try {
// // //     const { name, description, price, image, category, stock } = req.body;

// // //     const product = new Product({
// // //       name,
// // //       description,
// // //       price,
// // //       image,
// // //       category,
// // //       stock,
// // //       createdBy: req.user._id 
// // //     });

// // //     await product.save();
// // //     res.status(201).json(product);
// // //   } catch (error) {
// // //     res.status(500).json({ message: error.message });
// // //   }
// // // });


// // // router.put('/:id', authMiddleware, async (req, res) => {
// // //   try {
// // //     const { name, description, price, image, category, stock } = req.body;

// // //     const product = await Product.findById(req.params.id);
// // //     if (!product) return res.status(404).json({ message: 'Product not found' });

// // //     if (product.createdBy.toString() !== req.user._id.toString()) {
// // //       return res.status(403).json({ message: 'Unauthorized: You can only update your own products' });
// // //     }

// // //     product.name = name;
// // //     product.description = description;
// // //     product.price = price;
// // //     product.image = image;
// // //     product.category = category;
// // //     product.stock = stock;

// // //     await product.save();
// // //     res.json(product);
// // //   } catch (error) {
// // //     res.status(500).json({ message: error.message });
// // //   }
// // // });


// // // router.delete('/:id', authMiddleware, async (req, res) => {
// // //   try {
// // //     const product = await Product.findById(req.params.id);
// // //     if (!product) return res.status(404).json({ message: 'Product not found' });

// // //     if (product.createdBy.toString() !== req.user._id.toString()) {
// // //       return res.status(403).json({ message: 'Unauthorized: You can only delete your own products' });
// // //     }

// // //     await product.remove();
// // //     res.json({ message: 'Product deleted successfully' });
// // //   } catch (error) {
// // //     res.status(500).json({ message: error.message });
// // //   }
// // // });

// // // export default router;


// // import express from 'express';
// // import Product from '../models/Product.js';
// // import authMiddleware from '../middleware/auth.js';

// // const router = express.Router();

// // // Get all products (visible to users or admins)
// // router.get('/', async (req, res) => {
// //   try {
// //     const products = await Product.find().sort({ createdAt: -1 });
// //     res.json(products);
// //   } catch (error) {
// //     res.status(500).json({ message: error.message });
// //   }
// // });

// // // Get a single product by ID
// // router.get('/:id', async (req, res) => {
// //   try {
// //     const product = await Product.findById(req.params.id);
// //     if (!product) return res.status(404).json({ message: 'Product not found' });
// //     res.json(product);
// //   } catch (error) {
// //     res.status(500).json({ message: error.message });
// //   }
// // });

// // // Create a new product (admin only)
// // router.post('/', authMiddleware, async (req, res) => {
// //   try {
// //     const { name, description, price, image, category, stock } = req.body;

// //     const product = new Product({
// //       name,
// //       description,
// //       price,
// //       image,
// //       category,
// //       stock,
// //       userId: req.user._id // ✅ Correct field for model
// //     });

// //     await product.save();
// //     res.status(201).json(product);
// //   } catch (error) {
// //     console.error("Error saving product:", error); // Debug
// //     res.status(500).json({ message: error.message });
// //   }
// // });

// // // Update a product
// // router.put('/:id', authMiddleware, async (req, res) => {
// //   try {
// //     const { name, description, price, image, category, stock } = req.body;
// //     const product = await Product.findById(req.params.id);

// //     if (!product) return res.status(404).json({ message: 'Product not found' });

// //     if (product.userId.toString() !== req.user._id.toString()) {
// //       return res.status(403).json({ message: 'Unauthorized: You can only update your own products' });
// //     }

// //     product.name = name;
// //     product.description = description;
// //     product.price = price;
// //     product.image = image;
// //     product.category = category;
// //     product.stock = stock;

// //     await product.save();
// //     res.json(product);
// //   } catch (error) {
// //     res.status(500).json({ message: error.message });
// //   }
// // });

// // // Delete a product
// // router.delete('/:id', authMiddleware, async (req, res) => {
// //   try {
// //     const product = await Product.findById(req.params.id);

// //     if (!product) return res.status(404).json({ message: 'Product not found' });

// //     if (product.userId.toString() !== req.user._id.toString()) {
// //       return res.status(403).json({ message: 'Unauthorized: You can only delete your own products' });
// //     }

// //     await product.remove();
// //     res.json({ message: 'Product deleted successfully' });
// //   } catch (error) {
// //     res.status(500).json({ message: error.message });
// //   }
// // });

// // export default router;
// import express from 'express';
// import multer from 'multer';
// import path from 'path';
// import fs from 'fs';
// import Product from '../models/Product.js';
// import authMiddleware from '../middleware/auth.js';

// const router = express.Router();

// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     const uploadPath = 'backend/uploads/';
//     if (!fs.existsSync(uploadPath)) {
//       fs.mkdirSync(uploadPath, { recursive: true });
//     }
//     cb(null, uploadPath);
//   },
//   filename: function (req, file, cb) {
//     const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
//     cb(null, 'product-' + uniqueSuffix + path.extname(file.originalname));
//   }
// });

// const fileFilter = (req, file, cb) => {
//   if (file.mimetype.startsWith('image/')) {
//     cb(null, true);
//   } else {
//     cb(new Error('Only image files are allowed'), false);
//   }
// };

// const upload = multer({ 
//   storage: storage,
//   fileFilter: fileFilter,
//   limits: {
//     fileSize: 5 * 1024 * 1024
//   }
// });

// router.get('/', async (req, res) => {
//   try {
//     const { category, search, minPrice, maxPrice } = req.query;
//     let query = {};
    
//     if (category) {
//       query.category = { $regex: category, $options: 'i' };
//     }
    
//     if (search) {
//       query.$or = [
//         { name: { $regex: search, $options: 'i' } },
//         { description: { $regex: search, $options: 'i' } }
//       ];
//     }
    
//     if (minPrice || maxPrice) {
//       query.price = {};
//       if (minPrice) query.price.$gte = parseFloat(minPrice);
//       if (maxPrice) query.price.$lte = parseFloat(maxPrice);
//     }
    
//     const products = await Product.find(query).sort({ createdAt: -1 });
//     res.json(products);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// });

// router.get('/:id', async (req, res) => {
//   try {
//     const product = await Product.findById(req.params.id);
//     if (!product) {
//       return res.status(404).json({ message: 'Product not found' });
//     }
//     res.json(product);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// });

// router.post('/', authMiddleware, upload.single('image'), async (req, res) => {
//   try {
//     const { name, description, price, category, stock } = req.body;
    
//     if (!name || !description || !price || !category) {
//       if (req.file) {
//         fs.unlinkSync(req.file.path);
//       }
//       return res.status(400).json({ message: 'All required fields must be provided' });
//     }
    
//     const image = req.file ? `/uploads/${req.file.filename}` : '';
    
//     const product = new Product({
//       name,
//       description,
//       price: parseFloat(price),
//       image,
//       category,
//       stock: parseInt(stock) || 0
//     });
    
//     await product.save();
//     res.status(201).json(product);
//   } catch (error) {
//     if (req.file) {
//       fs.unlinkSync(req.file.path);
//     }
//     res.status(500).json({ message: error.message });
//   }
// });

// router.put('/:id', authMiddleware, upload.single('image'), async (req, res) => {
//   try {
//     const { name, description, price, category, stock } = req.body;
//     const product = await Product.findById(req.params.id);
    
//     if (!product) {
//       if (req.file) {
//         fs.unlinkSync(req.file.path);
//       }
//       return res.status(404).json({ message: 'Product not found' });
//     }
    
//     product.name = name || product.name;
//     product.description = description || product.description;
//     product.price = price ? parseFloat(price) : product.price;
//     product.category = category || product.category;
//     product.stock = stock !== undefined ? parseInt(stock) : product.stock;
    
//     if (req.file) {
//       if (product.image && fs.existsSync(`backend${product.image}`)) {
//         fs.unlinkSync(`backend${product.image}`);
//       }
//       product.image = `/uploads/${req.file.filename}`;
//     }
    
//     await product.save();
//     res.json(product);
//   } catch (error) {
//     if (req.file) {
//       fs.unlinkSync(req.file.path);
//     }
//     res.status(500).json({ message: error.message });
//   }
// });

// router.delete('/:id', authMiddleware, async (req, res) => {
//   try {
//     const product = await Product.findById(req.params.id);
//     if (!product) {
//       return res.status(404).json({ message: 'Product not found' });
//     }
    
//     if (product.image && fs.existsSync(`backend${product.image}`)) {
//       fs.unlinkSync(`backend${product.image}`);
//     }
    
//     await Product.findByIdAndDelete(req.params.id);
//     res.json({ message: 'Product deleted successfully' });
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// });

// router.patch('/:id/stock', authMiddleware, async (req, res) => {
//   try {
//     const { stock } = req.body;
//     const product = await Product.findByIdAndUpdate(
//       req.params.id,
//       { stock: parseInt(stock) },
//       { new: true }
//     );
    
//     if (!product) {
//       return res.status(404).json({ message: 'Product not found' });
//     }
    
//     res.json(product);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// });

// export default router;
import express from 'express';
import multer from 'multer';
import path from 'path';
import fs from 'fs';
import Product from '../models/Product.js';
import authMiddleware from '../middleware/auth.js';

const router = express.Router();

// Multer storage setup
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    const uploadPath = 'backend/uploads/';
    if (!fs.existsSync(uploadPath)) {
      fs.mkdirSync(uploadPath, { recursive: true });
    }
    cb(null, uploadPath);
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, 'product-' + uniqueSuffix + path.extname(file.originalname));
  }
});

const fileFilter = (req, file, cb) => {
  if (file.mimetype.startsWith('image/')) {
    cb(null, true);
  } else {
    cb(new Error('Only image files are allowed'), false);
  }
};

const upload = multer({ 
  storage,
  fileFilter,
  limits: { fileSize: 5 * 1024 * 1024 } // 5MB limit
});

// GET: Fetch all products (with filters)
router.get('/', async (req, res) => {
  try {
    const { category, search, minPrice, maxPrice } = req.query;
    let query = {};

    if (category) {
      query.category = { $regex: category, $options: 'i' };
    }

    if (search) {
      query.$or = [
        { name: { $regex: search, $options: 'i' } },
        { description: { $regex: search, $options: 'i' } }
      ];
    }

    if (minPrice || maxPrice) {
      query.price = {};
      if (minPrice) query.price.$gte = parseFloat(minPrice);
      if (maxPrice) query.price.$lte = parseFloat(maxPrice);
    }

    const products = await Product.find(query).sort({ createdAt: -1 });
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// GET: Single product by ID
router.get('/:id', async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) return res.status(404).json({ message: 'Product not found' });
    res.json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// POST: Create new product
router.post('/', authMiddleware, upload.single('image'), async (req, res) => {
  try {
    const { name, description, price, category, stock } = req.body;

    if (!name || !description || !price || !category) {
      if (req.file) fs.unlinkSync(req.file.path);
      return res.status(400).json({ message: 'All required fields must be provided' });
    }

    const image = req.file ? `/uploads/${req.file.filename}` : '';

    const product = new Product({
      userId: req.admin._id, // ✅ Important fix
      name,
      description,
      price: parseFloat(price),
      image,
      category,
      stock: parseInt(stock) || 0
    });

    await product.save();
    res.status(201).json(product);
  } catch (error) {
    if (req.file) fs.unlinkSync(req.file.path);
    res.status(500).json({ message: error.message });
  }
});

// PUT: Update product
router.put('/:id', authMiddleware, upload.single('image'), async (req, res) => {
  try {
    const { name, description, price, category, stock } = req.body;
    const product = await Product.findById(req.params.id);

    if (!product) {
      if (req.file) fs.unlinkSync(req.file.path);
      return res.status(404).json({ message: 'Product not found' });
    }

    product.name = name || product.name;
    product.description = description || product.description;
    product.price = price ? parseFloat(price) : product.price;
    product.category = category || product.category;
    product.stock = stock !== undefined ? parseInt(stock) : product.stock;

    if (req.file) {
      if (product.image && fs.existsSync(`backend${product.image}`)) {
        fs.unlinkSync(`backend${product.image}`);
      }
      product.image = `/uploads/${req.file.filename}`;
    }

    await product.save();
    res.json(product);
  } catch (error) {
    if (req.file) fs.unlinkSync(req.file.path);
    res.status(500).json({ message: error.message });
  }
});

// DELETE: Remove product
router.delete('/:id', authMiddleware, async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) return res.status(404).json({ message: 'Product not found' });

    if (product.image && fs.existsSync(`backend${product.image}`)) {
      fs.unlinkSync(`backend${product.image}`);
    }

    await Product.findByIdAndDelete(req.params.id);
    res.json({ message: 'Product deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// PATCH: Update stock
router.patch('/:id/stock', authMiddleware, async (req, res) => {
  try {
    const { stock } = req.body;
    const product = await Product.findByIdAndUpdate(
      req.params.id,
      { stock: parseInt(stock) },
      { new: true }
    );

    if (!product) return res.status(404).json({ message: 'Product not found' });

    res.json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;
