import { Response } from 'express';

const sendErrorMessage = (error: unknown, res: Response, statusCode: number) => {
  res.status(statusCode);

  // Error is object
  if (error instanceof Error)
    return res.json({
      message: error.message,
      stack: process.env.NODE_ENV === 'prod' ? null : error.stack,
    });

  // Is not an error, transform to string if is not
  return res.json({ message: String(error) });
};

export default sendErrorMessage;
