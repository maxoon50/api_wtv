import mongoose, {Schema} from 'mongoose';

const ChannelModalSchema = new Schema({
    title : String,
    img : String,
    video : String,
    sub : String,
});

export const ChannelModal = mongoose.model('channels', ChannelModalSchema);


