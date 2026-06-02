import express from "express"
import cors from "cors"
import { middleware } from "./middleware";

const app = express();

app.use(express.json());
app.use(cors());

app.post("/buy", middleware, (req, res) => {

    console.log("BUY ROUTE HIT");

    res.json({
        message: "Hi"
    })
})

app.post("/sell", middleware, (req, res) => {

})

app.post("/split", middleware, (req, res) => {

})

app.post("/merge", middleware, (req, res) => {

})

app.get("/balance", middleware, (req, res) => {

})

app.get("/position", middleware, (req, res) => {

})

app.get("/history", middleware, (req, res) => {

})

app.listen(3000, () => {
    console.log("Server running on port 3000");
});