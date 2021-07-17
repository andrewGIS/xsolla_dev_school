import express from "express";
import mongoose from "mongoose";
import router from "./router.js";

const PORT = process.env.PORT || 3000;
const DB_URL =
    "mongodb+srv://atarasov:mongopass@cluster0.dxiwz.mongodb.net/myFirstDatabase";

const app = express();

app.use(express.json());
app.use("/api", router);

async function startApp() {
    try {
        await mongoose.connect(DB_URL, {
            useNewUrlParser: true,
            useFindAndModify: false,
        });
        app.listen(3000, () => {
            console.log(`server has been started on port ${PORT}...`);
        });
    } catch (error) {
        console.log(error);
    }
}

startApp();