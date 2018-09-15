import {Schema} from 'mongoose';
import {Channel} from "./channel.model";
import {MyContent} from "./myContent.model";
import {App} from "./apps.model";
import {Movie} from "./movie.model";
import {Extra} from "./extra.model";


export const Preference = new Schema({
        channels: [{type: Channel}],
        myContents: [{type: MyContent}],
        apps: [{type: App}],
        films: [{type: Movie}],
        extras: [{type: Extra}],
});

