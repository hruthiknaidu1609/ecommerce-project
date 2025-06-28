import express from 'express';
import jwt from 'jsonwebtoken';
import multer from 'multer';
import path from 'path';
import fs from 'fs';
import Admin from '../models/Admin.js';
import authMiddleware from '../middleware/auth.js';

const router = express.Router();

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
    cb(null, 'admin-' + uniqueSuffix + path.extname(file.originalname));
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
  storage: storage,
  fileFilter: fileFilter,
  limits: {
    fileSize: 5 * 1024 * 1024
  }
});

router.post('/signup', upload.single('image'), async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const image = req.file ? `/uploads/${req.file.filename}` : '';
    
    const existingAdmin = await Admin.findOne({ email });
    if (existingAdmin) {
      if (req.file) {
        fs.unlinkSync(req.file.path);
      }
      return res.status(400).json({ message: 'Admin already exists' });
    }

    const admin = new Admin({ name, email, password, image });
    await admin.save();

    const token = jwt.sign({ id: admin._id }, process.env.JWT_SECRET || 'your-secret-key', {
      expiresIn: '30d'
    });
    
    res.status(201).json({
      token,
      admin: {
        id: admin._id,
        name: admin.name,
        email: admin.email,
        image: admin.image
      }
    });
  } catch (error) {
    if (req.file) {
      fs.unlinkSync(req.file.path);
    }
    res.status(500).json({ message: error.message });
  }
});

router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    
    if (!email || !password) {
      return res.status(400).json({ message: 'Email and password are required' });
    }
    
    const admin = await Admin.findOne({ email });
    if (!admin || !(await admin.matchPassword(password))) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    const token = jwt.sign({ id: admin._id }, process.env.JWT_SECRET || 'your-secret-key', {
      expiresIn: '30d'
    });
    
    res.json({
      token,
      admin: {
        id: admin._id,
        name: admin.name,
        email: admin.email,
        image: admin.image
      }
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.post('/create', authMiddleware, upload.single('image'), async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const image = req.file ? `/uploads/${req.file.filename}` : '';
    
    const existingAdmin = await Admin.findOne({ email });
    if (existingAdmin) {
      if (req.file) {
        fs.unlinkSync(req.file.path);
      }
      return res.status(400).json({ message: 'Admin already exists' });
    }

    const admin = new Admin({ name, email, password, image });
    await admin.save();

    res.status(201).json({
      admin: {
        id: admin._id,
        name: admin.name,
        email: admin.email,
        image: admin.image
      }
    });
  } catch (error) {
    if (req.file) {
      fs.unlinkSync(req.file.path);
    }
    res.status(500).json({ message: error.message });
  }
});

router.get('/profile', authMiddleware, async (req, res) => {
  try {
    const admin = await Admin.findById(req.admin._id).select('-password');
    res.json(admin);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.put('/profile', authMiddleware, upload.single('image'), async (req, res) => {
  try {
    const { name, email } = req.body;
    const admin = await Admin.findById(req.admin._id);
    
    if (!admin) {
      if (req.file) {
        fs.unlinkSync(req.file.path);
      }
      return res.status(404).json({ message: 'Admin not found' });
    }

    admin.name = name || admin.name;
    admin.email = email || admin.email;
    
    if (req.file) {
      if (admin.image && fs.existsSync(`backend${admin.image}`)) {
        fs.unlinkSync(`backend${admin.image}`);
      }
      admin.image = `/uploads/${req.file.filename}`;
    }

    await admin.save();

    res.json({
      admin: {
        id: admin._id,
        name: admin.name,
        email: admin.email,
        image: admin.image
      }
    });
  } catch (error) {
    if (req.file) {
      fs.unlinkSync(req.file.path);
    }
    res.status(500).json({ message: error.message });
  }
});

export default router;