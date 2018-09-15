import {Schema} from 'mongoose';

export const MyContent = new Schema({
    title: {type: String},
    img : {type: String},
    video : {type: String},
    sub : {type: String},
});

