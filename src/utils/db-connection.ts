import mongoose from 'mongoose';

type Connection = (databaseName: string) => void;

const connectToMongo: Connection = async databaseName => {
  try {
    const connection = await mongoose.connect(`${process.env.MONGO_LOCAL_URL}/${databaseName}`);
    console.log(`Mongodb connected: ${connection.connection.host}`);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

export default connectToMongo;
