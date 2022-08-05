import { Document, Types } from "mongoose";

export interface IUser extends Document{
    _id: Types.ObjectId,
    tokenId: string,
    ownerAddress: string,
    contractAddress: string,
    image: string,
    title: string,
    description: string,
    attributes: [],
    userId: string,
    favorite: boolean,
}
