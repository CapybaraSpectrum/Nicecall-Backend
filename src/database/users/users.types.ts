import { Model, Document } from "mongoose";

export interface IUser {
    nome: string,
    nickName: string,
    dataNascimento: Date,
    email: string,
    senha: string,
    dataCriacao: Date
}

export interface IUserDocument extends IUser, Document {}
export interface IUserModel extends Model<IUserDocument> {}