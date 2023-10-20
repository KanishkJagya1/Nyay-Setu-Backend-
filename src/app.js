const express = require('express');
const app = express();
const port = 3000;

// Middleware to handle JSON data
app.use(express.json());

// Middleware to handle URL-encoded data
app.use(express.urlencoded({ extended: true }));

// Serve static files from the 'public' folder
app.use(express.static('public'));

// Route to handle GET requests to the root URL ('/')
app.get('/', (req, res) => {
 res.sendFile(__dirname + '/views/index.html');
});

// Route to handle POST requests to the '/submit' URL
app.post('/submit', (req, res) => {
 console.log('Form data received:', req.body);
 res.send('Form data received!');
});

// Start the server
app.listen(port, () => {
 console.log(`Server is running on port ${port}`);
});