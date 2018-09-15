import mongoose, {Schema} from 'mongoose';

const ChannelSchema = new Schema({
        title: {type: String},
        img : {type: String},
        _id: {type: Number, default: Date.now},
        video : {type: String},
        sub : {type: String},
});

export const Channel = mongoose.model('channels', ChannelSchema);