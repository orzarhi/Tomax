const express = require("express");
const cors = require("cors")

const app = express();
app.use(express.json());

app.use(cors({
    origin: [process.env.CLIENT_URL],
    credentials: true
}));

app.use('/api', require("./routers"));

app.listen(process.env.PORT || 5000, () => {
    console.log("Server running on port 3000");
});