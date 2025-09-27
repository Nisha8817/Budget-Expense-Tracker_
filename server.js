const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

// MongoDB connection
const mongoURI = "YOUR_MONGODB_URI_HERE";
mongoose.connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log("MongoDB connected successfully ✅"))
.catch(err => console.log("MongoDB connection error ❌:", err));

// Test route
app.get('/api/test-db', async (req, res) => {
    try {
        // Just fetch collections or count documents as a test
        const collections = await mongoose.connection.db.listCollections().toArray();
        res.json({ message: "MongoDB is connected!", collections });
    } catch (err) {
        res.status(500).json({ message: "Error connecting to MongoDB", error: err });
    }
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
