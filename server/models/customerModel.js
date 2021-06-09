import mongoose from 'mongoose'

const customerSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    required: true,
  },
})

const Customer = mongoose.model('Customer', customerSchema)
export default Customer
