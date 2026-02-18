import mongoose from "mongoose";
const { Schema } = mongoose;

const wordSchema = new Schema(
  {
    front: { type: String, required: true },
    back: { type: String, required: true },
  },
  { _id: true },
);

const languageSchema = new Schema({
  name: { type: String, required: true, unique: true },
  words: [wordSchema],
});

export default mongoose.model("Language", languageSchema);
