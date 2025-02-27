const responseService = require("../services/response.service");
const ResponseService = require("../services/response.service");
const Notes = require("../models/notes.models");

module.exports.allNotes = async (req, res) => {
    try {
      const notes = await Notes.find();
      return ResponseService.success({
        res: res, 
        message: "All notes retrieved successfully", 
        data: notes
      });
    } catch (error) {
      console.error("Error fetching notes:", error); // Debugging log
      ResponseService.internalServerError({res: res, error: error.message});
    }
  };
  
module.exports.addNotes = async (req, res) => {
    try {
      const newNote = new Notes(req.body);
      await newNote.save(); // Save to DB
      return ResponseService.success({
        res: res,
        data: newNote,
        status: 201
      });
    } catch (error) {
      console.error("Error adding note:", error); // Debugging log
      ResponseService.internalServerError({res: res, error: error.message});
    }
};

module.exports.updateNotes = async (req, res)=>{
    try{
      const updateNote = await Notes.findByIdAndUpdate(
        req.params.id,
        {$set: req.body},
        {new: true}
      );
      ResponseService.success({
        res: res,
        data: updateNote,
        message: "Successfully Updated."
      });
    }catch(error){
      ResponseService.internalServerError({res: res, error: error.message});
    }
}


module.exports.deleteNotes = async (req, res)=>{
    try{
      const note = await Notes.findByIdAndDelete(req.params.id);
      responseService.success({res: res, data: note, message: "Successfully Deleted."});
    }catch(error){
      ResponseService.internalServerError({res: res, error: error.message});
    }
}