const express = require("express");
const { addNotes, editNotes, allNotes, deleteNote, updateIsPinned } = require("../controllers/noteController");
const { authenticateToken } = require("../utilities");
const noteRouter = express.Router();

noteRouter.post("/add-note",authenticateToken,addNotes);
noteRouter.put("/edit-note/:noteId",authenticateToken,editNotes);
noteRouter.get("/get-all-notes",authenticateToken,allNotes);
noteRouter.delete("/delete-note/:noteId",authenticateToken,deleteNote);
noteRouter.put("/update-note-pinned/:noteId",authenticateToken,updateIsPinned);

module.exports = noteRouter;
