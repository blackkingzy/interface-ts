import mongoose from "mongoose";
const Schema = mongoose.Schema;

const articleSchema = new Schema({
    title: String,
    tags: [String],
    description: String,
    content: String,
    author_id: String,
    status: { type: String, default: "draft" },
    publish_time: { type: Date},
}, { timestamps: true });

export default mongoose.model("article", articleSchema);
