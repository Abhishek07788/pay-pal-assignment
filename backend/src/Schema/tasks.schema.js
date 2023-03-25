const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
  sprint_id: { type: String, required: true },
  task_name: { type: String, required: true },
  assignee_name: { type: String, required: true },
  status: { type: String, required: true },
  description: { type: String, required: true },
});

const Task = mongoose.model("task", taskSchema);
module.exports = Task;
