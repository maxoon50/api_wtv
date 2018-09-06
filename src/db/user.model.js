import mongoose, {Schema} from 'mongoose';

const UserSchema = new Schema({
    _id: { type: Number, default: Date.now },
    titre: { type: String, required : true},
    resume: { type: String, required : true},
    img: { type: String, required : false},
});

export const User = mongoose.model('User', UserSchema);