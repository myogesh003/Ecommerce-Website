// backend/middleware/auth.js

const jwt = require('jsonwebtoken');
require('dotenv').config();

/**
 * Protect routes by verifying the JWT token.
 * Expected token format in headers: "Authorization: Bearer <token>"
 */
const protect = (req, res, next) => {
  // Check for token in Authorization header
  const authHeader = req.headers.authorization;
  
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ message: 'Not authorized, token missing' });
  }

  // Extract token from header
  const token = authHeader.split(' ')[1];

  try {
    // Verify token using JWT_SECRET from .env file
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    // Attach the decoded payload (user data) to the request object
    req.user = decoded;
    next();
  } catch (error) {
    console.error('Token verification failed:', error);
    res.status(401).json({ message: 'Not authorized, token failed' });
  }
};

/**
 * Optional: Middleware to check for admin role.
 * Uncomment and modify as needed based on your User model structure.
 */
// const admin = (req, res, next) => {
//   if (req.user && req.user.isAdmin) {
//     next();
//   } else {
//     res.status(403).json({ message: 'Not authorized as an admin' });
//   }
// };

module.exports = { protect /*, admin */ };
