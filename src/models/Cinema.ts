import {Document, Schema, Model, model} from "mongoose";


export const CinemaSchema = new Schema({
    name:String,
    site:String,
    logo:String
})
export const Cinema  = model('Cinema', CinemaSchema);