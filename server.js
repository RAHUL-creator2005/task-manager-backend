require('dotenv').config();
import express, { json } from 'express';
import cors from 'cors';
import connectDB from './config/db';

// Connect to database
connectDB();

const app = express();

// Init Middleware
app.use(cors());
app.use(json());

app.get("/", (req, res) => {
  res.send("Backend is running successfully");
});

// Define Routes
app.use('/api/auth', require('./routes/authRoutes'));
app.use('/api/tasks', require('./routes/taskRoutes'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
