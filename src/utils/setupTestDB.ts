import mongoose from 'mongoose';

const testErrorMessage = (error: unknown) => {
  if (error instanceof Error) console.error(error.message);
};

const removeAllDocuments = async () => {
  const collections = Object.keys(mongoose.connection.collections);

  for (const collectionName of collections) {
    try {
      const collection = mongoose.connection.collections[collectionName];
      await collection.deleteMany({});
    } catch (error) {
      testErrorMessage(error);
    }
  }

  return true;
};

const dropAllCollections = async () => {
  const collections = Object.keys(mongoose.connection.collections);

  for (const collectionName of collections) {
    try {
      const collection = mongoose.connection.collections[collectionName];
      await collection.drop();
    } catch (error) {
      testErrorMessage(error);
    }
  }
};

const setupTestDB = (databaseName: string) => {
  // Connect to Mongoose
  beforeAll(async () => {
    const url = `${process.env.MONGO_LOCAL_URL}/${databaseName}`;
    await mongoose.connect(url);
  });

  // Cleans up database between each test
  afterEach(async () => {
    await removeAllDocuments();
  });

  // Disconnect Mongoose
  afterAll(async () => {
    await dropAllCollections();
    await mongoose.connection.close();
  });
};

export default setupTestDB;
