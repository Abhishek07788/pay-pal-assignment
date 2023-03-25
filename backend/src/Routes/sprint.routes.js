const express = require("express");
const Sprint = require("../Schema/sprint.schema");
const app = express.Router();

// ---------- (post Sprint) -------------
app.post("/", async (req, res) => {
  try {
    await Sprint.create(req.body);
    res.send("Sprint Added!!");
  } catch (e) {
    res.status(404).send(e);
  }
});

// ---------- (Get Sprint) -------------
app.get("/", async (req, res) => {
  try {
    const sprint = await Sprint.find();
    res.send(sprint);
  } catch (e) {
    res.status(404).send(e);
  }
});

// ---------- (Get Sprint by id) -------------
app.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const sprint = await Sprint.findOne({ _id: id });
    res.send(sprint);
  } catch (e) {
    res.status(404).send(e);
  }
});

// ---------- (delete Sprint) -------------
app.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    await Sprint.deleteOne({ _id: id });
    res.send("Sprint Deleted");
  } catch (e) {
    res.status(404).send(e);
  }
});

module.exports = app;
