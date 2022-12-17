import { Request, Response } from 'express';
import UserModel from './user-model';
import sendErrorMessage from '../../utils/error';

// IGNORE 'REQ NOT USED'
// eslint-disable-next-line
// @ts-ignore
export const getAllUsers = async (req: Request, res: Response) => {
  try {
    const users = await UserModel.find({});
    return res.status(200).json({ users });
  } catch (error) {
    return sendErrorMessage(error, res, 500);
  }
};

export const createUser = async (req: Request, res: Response) => {
  const { username, email } = req.body;

  try {
    if (!username || !email) {
      return sendErrorMessage('User & email are required', res, 404);
    }

    const user = await UserModel.create({
      name: username,
      email: email,
    });

    return res.json({ user });
  } catch (error) {
    return sendErrorMessage(error, res, 500);
  }
};
