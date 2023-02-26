// const app = require('express')();
const express = require("express");
const app = express();

app.get("/", (req, res) => {
    // console.log(req.url);
    console.log("user hit the resource");

    // this has been depracated
    // res.status(201).send("Home Page");
    // use the code below
    // res.sendStatus(200);

    res.status(200).send("success");
});
// app.get("/favicon.ico", (req, res) => {
//     res.send("home");
// });
app.get("/about", (req, res) => {
    // res.;
    res.status(200).send("About Page ");
});

app.all("*", (req, res) => {
    res.status(404).send("<h1>resource not found</h1>");
});
app.listen(5000, () => {
    console.log("server is listening on port 5000...");
});

// app.get
// app.post
// app.put
// app.delete
// app.all
// app.use
// app.listen
