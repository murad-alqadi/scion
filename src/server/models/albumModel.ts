import { Schema } from 'mongoose';

import Database from '../dbConfigs';
import Favorite from "./favoriteModel"
import { IAlbum } from '../interfaces/IAlbum';
const { mongo: { model } } = Database;

const albumSchema: Schema<IAlbum> = new Schema<IAlbum>({
  _id: {type: Schema.Types.ObjectId, required: false},
  favorites: [Favorite.schema],
  all: [String],
  currentAlbumId: Number
});

export default model<IAlbum>('Album', albumSchema, 'album'); // THIRD PARAMETER DEFINES DEFAULT COLLECTION NAME
