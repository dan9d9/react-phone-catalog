const express = require('express');
const app = express();
const cors = require('cors');

const PORT = process.env.PORT || 3030;

// Middleware
app.use(cors());

// Routes
app.use('/phones', require('./routes/phones_routes.js'));

app.listen(PORT, () => console.log(`listening on port ${PORT}`));
