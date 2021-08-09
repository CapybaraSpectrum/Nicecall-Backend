import { Document } from "mongoose";
import { IUserDocument } from "./users.types";

export async function setLastUpdate(this: IUserDocument): Promise<void>{
    const now = new Date();
    if(!this.lastUpdate || this.lastUpdate < now){
        this.lastUpdate = now;
        await this.save();
    }
}

export async function sameNickname(this: IUserDocument): Promise<Document[]>{
    return this.model('user').find({nickName: this.nickName});
}
