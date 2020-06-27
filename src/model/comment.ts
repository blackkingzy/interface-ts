import mongoose from "mongoose";
const Schema = mongoose.Schema;

const commentSchema = new Schema({
    _id: Schema.Types.ObjectId,
    content: String,
    article_id: Schema.Types.ObjectId,
    author_id: Schema.Types.ObjectId,
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
});

export default mongoose.model("comment", commentSchema);
