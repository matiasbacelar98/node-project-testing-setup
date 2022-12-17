import mongoose, { Document } from 'mongoose';

type UserFields = {
  name: string;
  email: {
    type: string;
    require: boolean;
    unique: boolean;
  };
};

type UserDocument = UserFields & Document;

const userSchema = new mongoose.Schema({
  name: String,
  email: {
    type: String,
    require: true,
    unique: true,
  },
});

const UserModel = mongoose.model<UserDocument>('User', userSchema);
export default UserModel;
