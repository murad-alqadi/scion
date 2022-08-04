import { Schema } from 'mongoose';

import Database from '../dbConfigs';
import Album from "./albumModel"
import { IUser } from '../interfaces/IUser';
const { mongo: { model } } = Database;

const userSchema: Schema<IUser> = new Schema<IUser>({
  _id: {type: Schema.Types.ObjectId, required: false},
  authId: {type: String, required: false},
  firstName: String,
  lastName: String,
  albums: [Album.schema]
});

// THIRD PARAMETER DEFINES DEFAULT COLLECTION NAME
export default model<IUser>('User', userSchema, 'user');