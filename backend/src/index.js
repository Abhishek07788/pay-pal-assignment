const express = require("express");
const cors = require("cors");
const dbConnect = require("./config/db");
const UserRouter = require("./Routes/user.routes");
const sprintRouter = require("./Routes/sprint.routes");
const taskRouter = require("./Routes/tasks.routes");

const app = express();
app.use(express.json());
app.use(cors());
app.use("/user", UserRouter);
app.use("/sprint", sprintRouter);
app.use("/task", taskRouter);

app.use("/", (req, res) => {
  res.send("Hello KGS This the backend");
});

app.listen(8080, async () => {
  await dbConnect();
  console.log("Stared at http://localhost:8080");
});
