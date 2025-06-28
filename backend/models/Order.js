// import mongoose from 'mongoose';

// const orderSchema = new mongoose.Schema({
//   user: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: 'User',
//     required: true
//   },
//   products: [{
//     product: {
//       type: mongoose.Schema.Types.ObjectId,
//       ref: 'Product',
//       required: true
//     },
//     quantity: {
//       type: Number,
//       required: true
//     },
//     price: {
//       type: Number,
//       required: true
//     }
//   }],
//   totalAmount: {
//     type: Number,
//     required: true
//   },
//   status: {
//     type: String,
//     enum: ['pending', 'processing', 'shipped', 'delivered'],
//     default: 'pending'
//   }
// }, {
//   timestamps: true
// });

// export default mongoose.model('Order', orderSchema);


import mongoose from 'mongoose';

const orderSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  products: [{
    product: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Product',
      required: true
    },
    quantity: {
      type: Number,
      required: true,
      min: [1, 'Quantity must be at least 1']
    },
    price: {
      type: Number,
      required: true,
      min: [0, 'Price must be a positive number']
    }
  }],
  totalAmount: {
    type: Number,
    required: true,
    min: [0, 'Total amount must be a positive number']
  },
  status: {
    type: String,
    enum: ['pending', 'processing', 'shipped', 'delivered', 'cancelled'],
    default: 'pending'
  }
}, {
  timestamps: true
});

export default mongoose.model('Order', orderSchema);
