import { iUser, IUserModel } from "./users.types";
import { UserModel } from "./users.model";
const mongoose = require('mongoose');

export async function createUser(this: IUserModel, user: {}):Promise<iUser>{
        const doc = new UserModel(user);
        await this.create(doc);
        return doc;
}
export async function getUsers(this: IUserModel): Promise<iUser[]>{
        const doc = await this.find({});
        return doc;
}
export async function updateNome( userId: string, newNome: string){
        const doc = await UserModel.updateOne({_id: userId}, {nome: newNome});
        return doc;
}

export async function updateNick(userId: string, newNick: string){
        return await UserModel.updateOne({_id: userId}, {nickName: newNick});
}
    
export async function updateEmail(userId: string, newEmail: string){
        return await UserModel.updateOne({_id: userId}, {email: newEmail});
}
    
export async function updateSenha(userId: string, newSenha: string){
        return await UserModel.updateOne({_id: userId}, {senha: newSenha});
}

export async function deleteUser(this: IUserModel, userId: string){
        return await this.deleteOne({_id: userId});
}

export async function updateUser(this: IUserModel, userId: string, newInfo: iUser){
        const user = newInfo;
        return await this.updateOne({_id: userId}, 
                {nome: user.nome, 
                nickName: user.nickName,
                email: user.email,
                dataNascimento: user.dataNascimento,
                senha: user.senha,
                avatar: user.avatar, 
        });
}