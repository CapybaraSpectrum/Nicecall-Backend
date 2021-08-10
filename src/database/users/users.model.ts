import { model } from "mongoose";
import { userSchema } from "./users.schema";
import { iUser, IUserModel } from "./users.types";

export const UserModel = model<iUser, IUserModel>('User', userSchema)

