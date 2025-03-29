const express = require('express');
const connectDB = require('./config/db');
const productRoutes = require('./routes/product.routes');
const errorHandler = require('./middlewares/errorHandler');
require('dotenv').config();

const app = express();
app.use(express.json()); // Middleware to parse incoming JSON requests
app.use(express.urlencoded({ extended: false }));

// Connect Database
connectDB();

// Routes
app.use('/api/products', productRoutes);

// Error handling middleware
app.use(errorHandler);

// Start Server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
