import {IWatched} from '../interfaces/IWatched';
import Database from '../dbConfigs';
import {Schema} from 'mongoose';

const {mongo: {model}} = Database;

const watchedSchema: Schema<IWatched> = new Schema<IWatched>({
  _id: {type: Schema.Types.ObjectId, required: false},
  tokenId: {type: String, required: true},
  ownerAddress: {type: String, required: false},
  contractAddress: String,
  image: String,
  title: String,
  description: String,
  attributes: [],
  userId: String,
  watched: Boolean,
});

export default model<IWatched>('Watched', watchedSchema, 'watched'); // THIRD PARAMETER DEFINES DEFAULT COLLECTION NAME
