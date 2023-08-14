const express = require('express');
const apiRouter = require('./routes');

const app = express();

const authToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZGVudGlmaWVyIjoic3BpbiIsImlhdCI6MTY5MTk3MjM5M30.O7OzHJfkIxdZSrE2Kxo9-yYvHMLaSulWWcvN5r7jBxU'; // Replace with the token you generated

// Middleware to authenticate the token
const authenticateToken = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if (token !== authToken) {
        return res.sendStatus(401); // Unauthorized
    }

    next(); // Pass the control to the next middleware or route handler
};

app.use(express.json());

// Use the authentication middleware
app.use('/api/', authenticateToken, apiRouter);

app.listen(process.env.PORT || '3000', () => {
    console.log(`Server is running on port: ${process.env.PORT || '3000'}`);
});
