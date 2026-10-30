const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;

app.use(express.json());

// Serve static files from public folder
app.use(express.static(path.join(__dirname, "public")));

// GET route
app.get("/api/products", (req, res) => {
    res.sendFile(path.join(__dirname, "VIEW", "products.html"));
});

// POST route
app.post("/api/products", (req, res) => {
    const product = req.body;

    console.log("Product received:", product);

    res.status(201).json({
        message: "Product added successfully!",
        product: product
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});