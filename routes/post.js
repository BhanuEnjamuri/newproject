const express = require("express");
const { route } = require("./category");
const router = express.Router();

const posts = [
  { id: 1, title: "objet 1", content: "Contenu du objet 1" },
  { id: 2, title: "objet 2", content: "Contenu du objet 2" },
  { id: 3, title: "objet 3", content: "Contenu du objet 3" },
];

router.get("/all", (req, res) => {
  res.json(posts);
});

router.get("/:id", (req, res) => {
  const postId = parseInt(req.params.id);
  const post = posts.find((post) => post.id === postId);
  if (!post) {
    res.status(404).send("Post not found");
  } else {
    res.json(post);
  }
});

module.exports = router;
