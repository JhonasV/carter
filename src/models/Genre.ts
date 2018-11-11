import * as mongoose from 'mongoose';

const {Schema} = mongoose;

const GenreSchema = new Schema({
    name:{type:String, Required:true},
    details:{type:String}
})

mongoose.model('Genre', GenreSchema);
