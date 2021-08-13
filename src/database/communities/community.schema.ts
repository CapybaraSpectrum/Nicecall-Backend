import { Model, Schema } from "mongoose";
import { createCommunity, deleteCommunity, getCommunity } from "./community.static";
import { iCommunity } from "./community.types";

export const CommunitySchema = new Schema<iCommunity, Model<iCommunity>, iCommunity>({
    avatar: {type: String, required: false},
    nome: {type: String, required: true},
    descricao: {type: String, required: true},
    categoria: {type: String, required: true, default: 'Variedade'},
    dataCriacao: {
        type: Date,
        default: new Date()
      },
      lastUpdate:{
        type: Date,
        default: new Date()
      }
}) ;

CommunitySchema.statics.createCommunity = createCommunity;
CommunitySchema.statics.getCommunity = getCommunity;
CommunitySchema.statics.deleteCommunity = deleteCommunity;