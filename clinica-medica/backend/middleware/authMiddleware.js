
const User = require('../models/User')
const jwt = require('jsonwebtoken');
const jwtSecret = process.env.JWT_SECRET;

const authMiddleware = async (req, res, next) => {
    const token = req.headers.authorization;
  
    if (!token) {
      return res.status(401).send({ message: 'Unauthorized' });
    }
  
    try {
      const decoded = jwt.verify(token, jwtSecret);
      req.user = await User.findById(decoded.id).select('-password');
      next();
    } catch (error) {
      res.status(401).send({ message: 'Unauthorized' });
    }
  };
  
  const adminMiddleware = (req, res, next) => {
    const user = req.user;
    if (user && user.isAdmin) {
      next();
    } else {
      res.status(403).json({ message: 'Forbidden: Admins only' });
    }
  };


  exports.protect = async (req, res, next) => {
  let token;

  if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
      try {
          token = req.headers.authorization.split(' ')[1];
          const decoded = jwt.verify(token, process.env.JWT_SECRET);
          req.user = await User.findById(decoded.id).select('-password');
          next();
      } catch (error) {
          res.status(401).json({ error: 'Not authorized' });
      }
  }

  if (!token) {
      res.status(401).json({ error: 'Not authorized, no token' });
  }
};

module.exports = { authMiddleware, adminMiddleware };

