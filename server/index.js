const express = require('express');
const app = express();

const PORT = process.env.PORT || 3030;

//================ CORS ================================
const cors = require('cors');
app.use(cors());

// routes
app.use('/phones', require('./routes/phones_routes.js'));

app.listen(PORT, () => console.log(`listening on port ${PORT}`));