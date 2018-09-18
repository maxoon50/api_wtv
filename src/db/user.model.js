import mongoose, {Schema} from 'mongoose';
import {Channel} from "./channel.model";
import {MyContent} from "./myContent.model";
import {App} from "./apps.model";
import {Movie} from "./movie.model";
import {Extra} from "./extra.model";


const UserSchema = new Schema({
        name: {type: String},
        preferences: {
            channels: [{type: Channel}],
            myContents: [{type: MyContent}],
            apps: [{type: App}],
            films: [{type: Movie}],
            extras: [{type: Extra}],
            keywords: [{type : String}]
        }
});

export const User = mongoose.model('users', UserSchema);