import { Schema } from "mongoose";

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
});

export default UserSchema;