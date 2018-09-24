import  {Schema} from 'mongoose';

export const Movie = new Schema({
    title: {type: String},
    img : {type: String},
    url : {type: String},
    videoId: {type:String}
});

