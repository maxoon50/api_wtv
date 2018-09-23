import mongoose, {Schema} from 'mongoose';

const AppsModalSchema = new Schema({
    title : String,
    img : String,
    id : String,
    url : String,
});

export const AppsModal = mongoose.model('apps', AppsModalSchema);
