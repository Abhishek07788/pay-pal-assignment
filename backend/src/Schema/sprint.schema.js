const mongoose = require("mongoose");

const sprintSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
});

const Sprint = mongoose.model("sprint", sprintSchema);
module.exports = Sprint;
