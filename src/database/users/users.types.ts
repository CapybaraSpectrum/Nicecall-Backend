import { Model, Document } from "mongoose";

export interface IUser {
    nome: string,
    nickName: string,
    dataNascimento: Date,
    email: string,
    senha: string,
    dataCriacao?: Date,
    lastUpdate?: Date   
}

export interface IUserDocument extends IUser, Document {
    setLastUpdate: (this: IUserDocument) => Promise<void>;
    sameNickname: (this: IUserDocument) => Promise<Document[]>;
}
export interface IUserModel extends Model<IUserDocument> {
    findOneOrCreate: (
        this: IUserModel,
        {
            nome,
            nickName,
            dataNascimento,
            email,
            senha,
        }: {nome: string, nickName: string, dataNascimento: Date, email: string, senha: string}
    ) => Promise<IUserDocument>;
}