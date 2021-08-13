import { Query } from "mongoose";
import { communityModel } from "./community.model";
import { iCommunity, iCommunityModel } from "./community.types";

export async function createCommunity(this: iCommunityModel, community: {}):Promise<iCommunity>{
    const doc = new communityModel(community);
    await this.create(doc);
    return doc;
}

export async function getCommunity(this: iCommunityModel, communityID: string): Promise<iCommunity>{
    const doc = await this.findOne({_id: communityID});
    return doc;
}

export async function deleteCommunity(this: iCommunityModel, communityID: string): Promise<iCommunity>{
    const doc = await this.deleteOne({_id: communityID});
    return doc;
}