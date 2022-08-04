import { Schema } from 'mongoose';

import Database from '../dbConfigs';
import { IFavorite } from '../interfaces/IFavorite';
const { mongo: { model } } = Database;

const favoriteSchema: Schema<IFavorite> = new Schema<IFavorite>({
  _id: {type: Schema.Types.ObjectId, required: false},
  tokenId: {type: String, required: true},
  ownerAddress: {type: String, required: false},
  contractAddress: String,
  image: String,
  title: String,
  description: String,
  attributes: [],
  album: String
});

export default model<IFavorite>('Favorite', favoriteSchema, 'favorite'); // THIRD PARAMETER DEFINES DEFAULT COLLECTION NAME
