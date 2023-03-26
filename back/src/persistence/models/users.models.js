import mongoose from 'mongoose'

const usersSchema = new mongoose.Schema({
  first_name: {
    type: String,
    required: true,
  },
  last_name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  profession: {
    type: String,
    required: true,
  },
  job: {
    type: String,
    required:true
  },
  isAdmin: {
    type: Boolean,
    required: true
  },
  password: {
    type: String,
    required: true,
  },
})

export const userModel = mongoose.model('Users',usersSchema)