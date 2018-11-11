import {Schema, model}from "mongoose";

const ActorSchema = new Schema({
    name:String,
    bio:String,
    picture: String
})

export const Actor = model('Actor', ActorSchema);