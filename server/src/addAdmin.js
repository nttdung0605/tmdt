const mongoose = require('mongoose');

// Replace with your MongoDB connection string from .env
const dbURI = "mongodb://localhost:27017/tmdt";

// Connect to MongoDB
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;

// Define the User schema (adjust fields based on your actual schema)
const userSchema = new mongoose.Schema({
    username: String,
    password: String, // Ensure passwords are hashed in production
    role: String, // 'admin' for admin accounts
});

const User = mongoose.model('User', userSchema);

db.once('open', async () => {
    console.log('Connected to MongoDB');

    try {
        // Add a new admin account
        const newAdmin = new User({
            username: 'admin', // Replace with desired username
            password: 'securepassword', // Replace with a hashed password
            role: 'admin',
        });

        await newAdmin.save();
        console.log('Admin account added successfully:', newAdmin);
    } catch (error) {
        console.error('Error adding admin account:', error);
    } finally {
        mongoose.connection.close();
    }
});

db.on('error', console.error.bind(console, 'Connection error:'));