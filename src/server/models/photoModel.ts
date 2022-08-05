import { Schema } from 'mongoose';

import Database from '../dbConfigs';
import Album from "./albumModel"
import { IPhoto } from '../interfaces/IPhoto';
const { mongo: { model } } = Database;

const userSchema: Schema<IPhoto> = new Schema<IPhoto>({
  _id: {type: Schema.Types.ObjectId, required: false},
  authId: {type: String, required: false},
  firstName: String,
  lastName: String,
  albums: [Album.schema]
});

// THIRD PARAMETER DEFINES DEFAULT COLLECTION NAME
export default model<IPhoto>('Photo', userSchema, 'photo');
