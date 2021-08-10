import { IUserModel } from "./users.types";
import { UserModel } from "./users.model";

export async function createUser(this: IUserModel, user: {}){
        const doc = new UserModel(user);
        await this.create(doc);
        return doc;
}

export async function findMyNick (this: IUserModel, name: String){
        return this.find({name: name});
}