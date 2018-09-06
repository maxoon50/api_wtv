import mongoose, {Schema} from 'mongoose';

const UserSchema = new Schema({
    user: {
        _id: {type: Number, default: Date.now},
        name: {type: String},
        preferences: {
            channels: {
                title: {type: String},
                img : {type: String},
                _id: {type: Number, default: Date.now},
                video : {type: String},
                sub : {type: String},
            },
            myContents: {
                title: {type: String},
                img : {type: String},
                _id: {type: Number, default: Date.now},
                video : {type: String},
                sub : {type: String},
            },
            apps: {
                title: {type: String},
                img : {type: String},
                _id: {type: Number, default: Date.now},
                url : {type: String},
            },
            films: {
                title: {type: String},
                img : {type: String},
                _id: {type: Number, default: Date.now},
                url : {type: String}
            },
            extras: {
                title: {type: String},
                img : {type: String},
                _id: {type: Number, default: Date.now},
            }
        }
    },
});

export const User = mongoose.model('users', UserSchema);