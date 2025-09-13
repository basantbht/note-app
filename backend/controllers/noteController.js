const noteModel = require("../models/noteModel");

// Add note
const addNotes = async (req, res) => {
  const { title, content, tags } = req.body;
  const { user } = req.user;

  if (!title) {
    return res.status(400).json({ error: true, messsage: "Title is required" });
  }

  if (!content) {
    return res
      .status(400)
      .json({ error: true, messsage: "Content is required" });
  }

  try {
    const note = new noteModel({
      title,
      content,
      tags: tags || [],
      userId: user._id,
    });

    await note.save();

    return res.json({
      error: false,
      note,
      message: "Note added successfully",
    });
  } catch (error) {
    return res
      .status(500)
      .json({ error: true, messsage: "Internal server error" });
  }
};

// Edit note
const editNotes = async (req, res) => {
  const noteId = req.params.noteId;
  const { title, content, tags, isPinned } = req.body;
  const { user } = req.user;

  if (!title && !content && !tags) {
    return res
      .status(400)
      .json({ error: true, messsage: "No changes provided" });
  }

  try {
    const note = await noteModel.findOne({ _id: noteId, userId: user._id });

    if (!note) {
      return res.status(404).json({ error: true, message: "Note not found" });
    }

    if (title) note.title = title;
    if (content) note.content = content;
    if (tags) note.tags = tags;
    if (isPinned) note.isPinned = isPinned;

    await note.save();

    return res.json({
      error: false,
      note,
      message: "Note updated successfully",
    });
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ error: true, messsage: "Internal server error" });
  }
};

// Get all notes
const allNotes = async (req, res) => {

    const {user} = req.user;

  try {
    const notes = await noteModel.find({userId: user._id}).sort({ isPinned: -1 });

    return res.json({ 
        error: false,
        notes,
        message: "All notes retrieved successfully" 
    });

  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ error: true, messsage: error.message });
  }
};

// Delete note
const deleteNote = async (req, res) => {
const noteId = req.params.noteId;
    const {user} = req.user;

  try {
    const note = await noteModel.findOne({_id: noteId, userId: user._id});

    if(!note){
        return res.status(404).json({
            error: true,
            message: "Note not found"
        });
    }

    await noteModel.deleteOne({_id: noteId, userId: user._id});

    return res.json({ 
        error: false,
        message: "Note deleted successfully" 
    });

  } catch (error) {
    return res
      .status(500)
      .json({ error: true, messsage: error.message });
  }
};

// Update isPinned value
const updateIsPinned = async (req, res) => {
const noteId = req.params.noteId;
  const { isPinned } = req.body;
  const { user } = req.user;

  try {
    const note = await noteModel.findOne({ _id: noteId, userId: user._id });

    if (!note) {
      return res.status(404).json({ error: true, message: "Note not found" });
    }

    note.isPinned = isPinned;

    await note.save();

    return res.json({
      error: false,
      note,
      message: "Note updated successfully",
    });
  } catch (error) {
    console.log(error);
     return res
      .status(500)
      .json({ error: true, messsage: error.message });
  }
};

module.exports = { addNotes, editNotes, allNotes,deleteNote,updateIsPinned };
