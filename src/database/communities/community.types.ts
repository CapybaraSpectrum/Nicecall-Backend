import { Model } from "mongoose";

export interface iCommunity{
    nome: string,
    dataCriacao?: Date,
    lastUpdate?: Date,
    descricao: string,
    avatar?: string,
    categoria: string   
}

export interface iCommunityModel extends Model<iCommunity>{
    createCommunity(this: iCommunityModel, community: {}): Promise<iCommunityModel>;
    getCommunity(this: iCommunityModel, communityID: string): Promise<iCommunity>;
    deleteCommunity(this: iCommunityModel, communityID: string): Promise<iCommunity>;
}

