import { Schema, model } from "mongoose";
import { IUser } from "./user.interface";

const userSchema = new Schema<IUser>({

    id: { type: String, required: true },
    role: { type: String, enum: ["teacher", "student"], required: true },
    password: { type: String, required: true },
    name: {
        first: { type: String, required: true },
        middle: { type: String },
        last: { type: String, required: true },
    },
    dataOfBirth: { type: String },
    gender: { type: String, enum: ["male", "female", "other"], required: true },
    email: { type: String },
    phone: { type: String },
    emargencyContact: { type: String },
    presentAddress: { type: String },
    permanentAddress: { type: String },

    // organization: { type: Schema.Types.ObjectId, ref: 'Organization' }
});

export const User = model<IUser>("User", userSchema);