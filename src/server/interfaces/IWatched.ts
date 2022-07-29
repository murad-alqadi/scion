import {Document, Types} from "mongoose";

export interface IWatched extends Document{
    _id: Types.ObjectId,
    tokenId: string,
    ownerAddress: string,
    contractAddress: string,
    image: string,
    title: string,
    description: string,
    attributes: [],
    userId: string,
    watched: boolean,
}

