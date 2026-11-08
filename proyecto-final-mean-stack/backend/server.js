require("dotenv").config();

const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");

const authRoutes = require("./routes/authRoutes")
const productRoutes = require("./routes/productRoutes");

const app = express();

app.use(cors({
    origin: "http://localhost:4200"
}));

app.use(express.json());

app.get("/api/health", (req, res) => {
    res.status(200).json({
        message: "Mini Store API running"
    });
});

app.use("/api/auth", authRoutes);
app.use("/api/products", productRoutes);

const PORT = process.env.PORT || 3000;

async function startServer() {
    try {
        await connectDB();

        app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
        });
    } catch (error) {
        console.error("Server startup failed:", error.message);
        process.exit(1);
    }
}

startServer();
