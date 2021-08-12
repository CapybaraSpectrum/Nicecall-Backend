import { Model } from "mongoose";

// export interface IUserDocument extends IUser, Document {
//     setLastUpdate: (this: IUserDocument) => Promise<void>;
//     sameNickname: (this: IUserDocument) => Promise<Document[]>;
// }
// export interface IUserModel extends Model<IUserDocument> {
//     findOneOrCreate: (
//         this: IUserModel,
//         {
//             nome,
//             nickName,
//             dataNascimento,
//             email,
//             senha,
//         }: {nome: string, nickName: string, dataNascimento: Date, email: string, senha: string}
//     ) => Promise<IUserDocument>;
//     createUser: (
//         this: IUserModel,
//         user: IUserModel
//     ) => Promise<IUserDocument>;
//}

export interface iUser {
    nome: string,
    nickName: string,
    avatar?: string,
    dataNascimento: Date,
    email: string,
    senha: string,
    dataCriacao?: Date,
    lastUpdate?: Date   
}

export interface IUserModel extends Model<iUser> {
    createUser(this: IUserModel, user: {}):  Promise<iUser>;
    updateNome(this: IUserModel, userId: string, newNome: string);

    getUsers(this: IUserModel): Promise<iUser[]>;
    teste(this: IUserModel);
    deleteUser(this: IUserModel, userId: string);

    updateUser(this: IUserModel, userId: string, newInfo: {});
}