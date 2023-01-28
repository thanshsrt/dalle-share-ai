import mongoose from "mongoose";

const postSChema = new mongoose.Schema({
  name: { type: String, required: true },
  prompt: { type: String, required: true },
  photo: { type: String, required: true },
});

const postModel = mongoose.model("Post", postSChema);

export default postModel;
