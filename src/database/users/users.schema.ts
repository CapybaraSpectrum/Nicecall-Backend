import { Schema } from "mongoose";
import { sameNickname, setLastUpdate } from "./users.methods";
import { findOneOrCreate } from "./users.statics";

const UserSchema = new Schema({
    nome: String,
    nickName: String,
    dataNascimento: Date,
    email: String,
    senha: String,
    dataCriacao: {
        type: Date,
        default: new Date()
      },
    lastUpdate:{
      type: Date,
      default: new Date()
    }
});

UserSchema.statics.findOneOrCreate = findOneOrCreate;

UserSchema.methods.sameNickname = sameNickname;
UserSchema.methods.setLastUpdate = setLastUpdate;

export default UserSchema;