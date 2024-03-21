const express = require("express");
const cors = require("cors")
require('dotenv').config()

const app = express();
app.use(express.json());

app.use(cors({
    origin: [process.env.CLIENT_URL, 'http://127.0.0.1:3000'],
    credentials: true
}));

app.use('/api', require("./routers"));

app.listen(process.env.PORT || 5000, () => {
    console.log("Server running on port 5000");
});