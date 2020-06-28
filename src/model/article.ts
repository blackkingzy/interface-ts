import mongoose from "mongoose";
const Schema = mongoose.Schema;

const articleSchema = new Schema({
    _id: Schema.Types.ObjectId,
    title: String,
    tags: [{ _id: Schema.Types.ObjectId }],
    description: String,
    content: String,
    author_id: Schema.Types.ObjectId,
    createdAt: { type: Date, default: Date.now() },
    updatedAt: { type: Date, default: Date.now() },
});

export default mongoose.model("article", articleSchema);
