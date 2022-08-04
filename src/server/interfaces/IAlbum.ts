import { Document, Types } from "mongoose";

export interface IAlbum extends Document{
    _id: Types.ObjectId,
    favorites: [],
    all: [],
    currentAlbumId: number
}
