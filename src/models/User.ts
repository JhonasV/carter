import { Schema, model } from "mongoose";

const UserSchema = new Schema({
  username: {
    type: String,
    Required: "The username is required",
    unique: true
  },
  email: { type: String, required: true, unique: true },
  password: { type: String, Required: true }
});

export const User = model("User", UserSchema);
