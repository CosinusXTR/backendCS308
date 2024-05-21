import dotenv from 'dotenv';
import express from 'express';
import connectMongo from './db/connectMongo.js';
import authRoutes from './routes/auth.routes.js';
import passengerRoutes from './routes/passenger.routes.js';
import pilotRoutes from './routes/pilot.routes.js';

dotenv.config();

const app = express();
app.use(express.json());

// Connect to MongoDB
connectMongo();

// Routes
app.use('/api/auth', authRoutes); // Use the auth routes
app.use('/api/passengers', passengerRoutes); // Use the passenger routes
app.use('/api/pilots', pilotRoutes);

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
