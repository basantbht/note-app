const express = require("express");
const {getNotes} = require("../controllers/getNotes");
const noteRouter = express.Router();

noteRouter.get("/", getNotes);


module.exports = noteRouter;