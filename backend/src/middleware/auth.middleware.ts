import { Role } from '@prisma/client';
import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
// import { Role } from '../generated/prisma';

interface JwtPayload {
  id: string;
  role: Role;
}

// Middleware to verify JWT token
export const isAuthenticated = (req: Request, res: Response, next: NextFunction) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ message: 'Authentication token required.' });
  }

  const token = authHeader.split(' ')[1];

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET as string) as JwtPayload;
    req.user = { id: decoded.id, role: decoded.role }; // Attach user payload to request
    next();
  } catch (error) {
    return res.status(401).json({ message: 'Invalid or expired token.' });
  }
};

// Middleware to check for 'DesignCompany' role
export const isDesignCompany = (req: Request, res: Response, next: NextFunction) => {
  if (req.user?.role !== 'DesignCompany' && req.user?.role !== 'Admin') {
    return res.status(403).json({ message: 'Forbidden: Access restricted to Design Companies.' });
  }
  next();
};

// Middleware to check for 'Admin' role
export const isAdmin = (req: Request, res: Response, next: NextFunction) => {
  if (req.user?.role !== 'Admin') {
    return res.status(403).json({ message: 'Forbidden: Access restricted to Admins.' });
  }
  next();
};
