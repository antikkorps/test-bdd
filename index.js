const express = require("express");

const app = express();
app.use(express.json());

app.get("/test", async(req, res) => {
    res.json("hello world");
})

app.listen(3000, () => {
    console.log("Server successfully launched")
});