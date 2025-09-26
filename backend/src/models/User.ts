// backend/src/models/User.ts

import mongoose, { Schema, Document } from 'mongoose'

export interface IUser extends Document {
  name: string
  email: string
  password: string
  role: 'buyer' | 'supplier' | 'admin'
  verified: boolean
}

const userSchema = new Schema<IUser>(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true, lowercase: true },
    password: { type: String, required: true },
    role: {
      type: String,
      enum: ['buyer', 'supplier', 'admin'],
      default: 'buyer',
    },
    verified: { type: Boolean, default: false },
  },
  { timestamps: true }
)

export default mongoose.model<IUser>('User', userSchema)
