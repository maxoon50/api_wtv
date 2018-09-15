import  {Schema} from 'mongoose';

export const App = new Schema({
        title: {type: String},
        img : {type: String},
        url : {type: String},
});

