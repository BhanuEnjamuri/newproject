const express = require("express");
const categeory = require("./routes/category");
const auth = require("./routes/auth");
const post = require("./routes/post");

const app = express();

app.use("/category", categeory);
app.use("/auth", auth);
app.use("/post", post);

app.get("/products", (req, res) => {
  res.send([
    { id: 1, name: "sachin" },
    { id: 2, name: "saurev" },
  ]);
});

app.get("/template", (req, res) => {
  res.redirect("/products");
});

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.listen(5000, () => {
  console.log("first server is running on port 5000");
});
