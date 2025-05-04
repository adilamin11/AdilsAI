import dotenv from 'dotenv';
dotenv.config();

// Add validation
if (!process.env.JWT_PASSWORD) {
  throw new Error('JWT_PASSWORD is not defined in environment variables');
}

export default {
  jwtSecret: process.env.JWT_PASSWORD
};