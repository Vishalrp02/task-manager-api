const express = require("express");
require("./db/mongoose.js");
const User = require("./models/user.js");
const Task = require("./models/task.js");
const UserRouter = require("./routers/user.js");
const TaskRouter = require("./routers/task.js");

const app = express();
const port = process.env.PORT;

// app.use((req, res, next) => {
//   if (req.method === "GET") {
//     res.send("Get requests are disabled");
//   } else {
//     next();
//   }
// });

// app.use((req, res, next) => {
//   res.status(503).send("Maintainence Time");
// });

app.use(express.json());
app.use(UserRouter);
app.use(TaskRouter);

app.listen(port, () => {
  console.log("Server is up on port" + port);
});

// const multer = require("multer");
// const upload = multer({
//   dest: "images",
//   limits: {
//     fileSize: 1000000,
//   },
//   fileFilter(req, file, callback) {
//     if (!file.originalname.match(/\.(doc|docx)$/)) {
//       return callback(new Error("Please upload a word document"));
//     }

//     callback(undefined, true);
//     // callback(new Error("file must be a PDF"));
//     // callback(undefined, true);
//     // callback(undefined, false);
//   },
// });
// const errorMessage = (req, res, next) => {
//   throw new Error("from my middleware");
// };
// app.post(
//   "/upload",
//   upload.single("upload"),
//   (req, res) => {
//     res.send();
//   },
//   (error, req, res, next) => {
//     res.status(400).send({ error: error.message });
//   }
// );

//const bcrypt = require("bcryptjs");
// const myFunction = async () => {
//   const password = "Blue12345!";
//   const hassedPassword = await bcrypt.hash(password, 8);
//   console.log(password);
//   console.log(hassedPassword);

//   const isMatch = await bcrypt.compare(password, hassedPassword);
//   console.log(isMatch);
// };
//myFunction();

//const jwt = require("jsonwebtoken");

// const myFunction = async () => {
//   const token = jwt.sign({ _id: "abc123" }, "thisismynewcourse", {
//     expiresIn: "7 days",
//   });
//   console.log(token);
//   const data = jwt.verify(token, "thisismynewcourse");
//   console.log(data);
// };
// myFunction();

//const Task = require("./models/task.js");

// const main = async () => {
//   //   const task = await Task.findById("68ab3214ba41f9f69f1de53d");
//   //   await task.populate([{ path: "owner" }]);
//   //   console.log(task.owner);
//   const user = await User.findById("68ab31fcba41f9f69f1de532");
//   await user.populate([{ path: "tasks" }]);
//   console.log(user.tasks);
// };
// main();
