import express from "express";
import env from "dotenv";
env.config();

const app = express();
const PORT = process.env.PORT || 3333;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
