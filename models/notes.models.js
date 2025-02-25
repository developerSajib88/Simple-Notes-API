const mongoose = require("mongoose");

const notesSchema = new mongoose.Schema(
  {
    title: { 
        type: String,
        required: [true, "Tilte is required"], 
        trim: true 
    },
    content: { type: String, required: true },
    priority: { 
        type: String, 
        enum: {
            values: ["low", "medium", "high"],
            message: "Priority must be low, medium, high",
        },
        default: "medium" 
    },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
  },
  { timestamps: true } // Automatically manages createdAt & updatedAt
);

module.exports = mongoose.model("Notes", notesSchema);

