import { model } from "mongoose";
import { CommunitySchema } from "./community.schema";
import { iCommunity, iCommunityModel } from "./community.types";

export const communityModel = model<iCommunity, iCommunityModel>('Community', CommunitySchema);