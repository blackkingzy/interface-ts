import mongoose from "mongoose";
import { ObjectId } from "mongodb";
const Schema = mongoose.Schema;

const readingSchema = new Schema({
    _id: Schema.Types.ObjectId,
    count: Number,
    article_id: Schema.Types.ObjectId,
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
});

export default mongoose.model("reading", readingSchema);
