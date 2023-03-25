const express = require("express");
const Task = require("../Schema/tasks.schema");
const app = express.Router();

// ---------- (post Task) -------------
app.post("/", async (req, res) => {
  try {
    await Task.create(req.body);
    res.send("Task Added!!");
  } catch (e) {
    res.status(404).send(e);
  }
});

// ---------- (Get Task) -------------
app.get("/", async (req, res) => {
  try {
    const tasks = await Task.find();
    res.send(tasks);
  } catch (e) {
    res.status(404).send(e);
  }
});

// ---------- (Get Task by id) -------------
app.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const tasks = await Task.findOne({ _id: id });
    res.send(tasks);
  } catch (e) {
    res.status(404).send(e);
  }
});

// ---------- (Get Task by sprint id) -------------
app.get("/sprint/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const tasks = await Task.find({ sprint_id: id });
    if (tasks.length) {
      return res.send(tasks);
    } else {
      return res.send([]);
    }
  } catch (e) {
    res.status(404).send(e);
  }
});

// ---------- (Get Task by name ) -------------
app.get("/name/:assignee_name", async (req, res) => {
  const { assignee_name} = req.params;
  try {
    const tasks = await Task.find({ assignee_name: assignee_name });
    if (tasks.length) {
      return res.send(tasks);
    } else {
      return res.send([]);
    }
  } catch (e) {
    res.status(404).send(e);
  }
});

// ---------- (delete Task) -------------
app.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    await Task.deleteOne({ _id: id });
    res.send("Task Deleted");
  } catch (e) {
    res.status(404).send(e);
  }
});

// ---------- (delete Task) -------------
app.patch("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    await Task.updateOne({ _id: id }, { $set: req.body });
    res.send("Task Updated");
  } catch (e) {
    res.status(404).send(e);
  }
});
module.exports = app;
