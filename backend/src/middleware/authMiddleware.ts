// backend/src/middleware/authMiddleware.ts

import { Request, Response, NextFunction } from 'express'
import jwt from 'jsonwebtoken'

const JWT_SECRET = process.env.JWT_SECRET || 'changeme'

export interface AuthRequest extends Request {
  user?: { id: string; role: string }
}

export const protect = (
  req: AuthRequest,
  res: Response,
  next: NextFunction
) => {
  try {
    const token = req.headers.authorization?.split(' ')[1]
    if (!token)
      return res.status(401).json({ message: 'Not authorized, no token' })

    const decoded = jwt.verify(token, JWT_SECRET) as {
      id: string
      role: string
    }
    req.user = decoded

    next()
  } catch (error) {
    res.status(401).json({ message: 'Invalid token' })
  }
}
