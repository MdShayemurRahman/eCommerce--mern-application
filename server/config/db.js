import mongoose from 'mongoose';
import { dev } from './config.js';

export const connectDB = async () => {
  try {
    await mongoose.connect(dev.app.databaseURI, {
      useNewUrlParser: true,
    });
    console.log('Mongoose conneted!!');
  } catch (error) {
    console.error(error.message);
    process.exit(1);
  }
};
