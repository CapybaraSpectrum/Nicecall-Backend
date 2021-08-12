import { Model, Schema } from "mongoose";
import { createUser, deleteUser, getUsers, updateNome, updateUser } from "./users.statics";
import { iUser } from "./users.types";

export const userSchema = new Schema<iUser, Model<iUser>, iUser>({
  nome: { type: String, required: true },
  nickName: { type: String, required: true },
  avatar:{type: String, required: false, default: 'https://pbs.twimg.com/profile_images/1293925081542995971/s2la3KS9_400x400.png'},
  dataNascimento: { type: Date, required: true },
  email: { type: String, required: true },
  senha: { type: String, required: true },
  dataCriacao: {
    type: Date,
    default: new Date()
  },
  lastUpdate:{
    type: Date,
    default: new Date()
  }
});

userSchema.statics.createUser = createUser;
userSchema.statics.getUsers = getUsers;
userSchema.statics.updateNome = updateNome; 
userSchema.statics.deleteUser = deleteUser;
userSchema.statics.updateUser = updateUser;
