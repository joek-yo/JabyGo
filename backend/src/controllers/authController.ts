// backend/src/controllers/authController.ts

import { Request, Response } from 'express'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import User from '../models/User'

const JWT_SECRET = process.env.JWT_SECRET || 'changeme'

export const signup = async (req: Request, res: Response) => {
  try {
    const { name, email, password, role } = req.body

    const existingUser = await User.findOne({ email })
    if (existingUser)
      return res.status(400).json({ message: 'Email already in use' })

    const hashedPassword = await bcrypt.hash(password, 10)

    const user = await User.create({
      name,
      email,
      password: hashedPassword,
      role,
    })
    const token = jwt.sign({ id: user._id, role: user.role }, JWT_SECRET, {
      expiresIn: '1d',
    })

    res
      .status(201)
      .json({ token, user: { id: user._id, name: user.name, role: user.role } })
  } catch (error) {
    res.status(500).json({ message: 'Signup failed', error })
  }
}

export const login = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body

    const user = await User.findOne({ email })
    if (!user) return res.status(400).json({ message: 'Invalid credentials' })

    const isMatch = await bcrypt.compare(password, user.password)
    if (!isMatch)
      return res.status(400).json({ message: 'Invalid credentials' })

    const token = jwt.sign({ id: user._id, role: user.role }, JWT_SECRET, {
      expiresIn: '1d',
    })

    res.json({
      token,
      user: { id: user._id, name: user.name, role: user.role },
    })
  } catch (error) {
    res.status(500).json({ message: 'Login failed', error })
  }
}
