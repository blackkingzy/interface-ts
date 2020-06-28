import mongoose from "mongoose";
const Schema = mongoose.Schema;

const tagSchema = new Schema({
    _id: Schema.Types.ObjectId,
    name: String,
    createdAt: { type: Date, default: Date.now() },
    updatedAt: { type: Date, default: Date.now() },
});

export default mongoose.model("tag", tagSchema);
