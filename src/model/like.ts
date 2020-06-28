import mongoose from "mongoose";
const Schema = mongoose.Schema;

const likeSchema = new Schema({
    _id: Schema.Types.ObjectId,
    article_id: Schema.Types.ObjectId,
    user_id: Schema.Types.ObjectId,
    createdAt: { type: Date, default: Date.now() },
    updatedAt: { type: Date, default: Date.now() },
});

export default mongoose.model("like", likeSchema);
