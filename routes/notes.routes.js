const express = require("express");
const { allNotes, addNotes, updateNotes, deleteNotes } = require("../controllers/notes.controllers");
const router = express.Router();

router.get("/all", allNotes);
router.post("/add", addNotes);
router.put("/update/:id", updateNotes);
router.delete("/delete/:id", deleteNotes);

module.exports = router;