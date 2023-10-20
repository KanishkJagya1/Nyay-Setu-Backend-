const { connect } = require('mongoose');
const Database = require('./database');

// Create a new instance of the Database class
const db = new Database();

// Connect to the database
db.connect('mongodb://localhost:27017', (err) => {
    if (err) {
        console.error('Error connecting to the database:', err);
        return;
    }
    console.log('Connected to the database successfully');
});

// Insert a new document into the 'users' collection
db.insert('users', { name: 'John Doe', age: 30 }, (err, result) => {
    if (err) {
        console.error('Error inserting document:', err);
        return;
    }
    console.log('Document inserted successfully:', result);
});

// Find all documents in the 'users' collection
db.find('users', {}, (err, documents) => {
    if (err) {
        console.error('Error finding documents:', err);
        return;
    }
    console.log('Documents found:', documents);
});

// Update a document in the 'users' collection
db.update('users', { name: 'John Doe' }, { $set: { age: 35 } }, (err, result) => {
    if (err) {
        console.error('Error updating document:', err);
        return;
    }
    console.log('Document updated successfully:', result);
});

// Delete a document from the 'users' collection
db.delete('users', { name: 'John Doe' }, (err, result) => {
    if (err) {
        console.error('Error deleting document:', err);
        return;
    }
    console.log('Document deleted successfully:', result);
});

// Close the connection to the database
db.close((err) => {
    if (err) {
        console.error('Error closing the database:', err);
        return;
    }
    console.log('Database connection closed successfully');
});

module.exports(connect)