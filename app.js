const express = require("express");
const cors = require("cors");
const notesRouter = require("./routes/notes.routes");
const { notFoundMiddleware } = require("./middlewares/notfound.middleware");
const { errorMiddleWare } = require("./middlewares/error.middleware");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/notes", notesRouter);

// 404 Not Found Middleware
app.use(notFoundMiddleware);

// Global Error Handling Middleware (Optional)
app.use(errorMiddleWare);

module.exports = app;
