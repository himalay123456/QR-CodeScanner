import mongoose from 'mongoose'

const AdminSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    trim: true,
    lowercase: true,
    unique: true,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  mobileNumber: {
    type: Number,
    required: true
  },
  status: {
    type: String,
    default: 'Active',
    enum: ['Active', 'Deactive']
  },
  isSuperAdmin: {
    type: Boolean,
    default: false
  },
  createdBy: {
    type: Schema.Types.ObjectId,
    ref: 'admin'
  }
})

module.exports = mongoose.models.Admin || mongoose.model('Admin', AdminSchema)
