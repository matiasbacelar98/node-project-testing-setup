import { createServer, PORT } from './utils/server';
import connectToMongo from './utils/db-connection';

//--------- Initialize server ---------//
const app = createServer();

app.listen(PORT, async () => {
  await connectToMongo('node-example');
  console.log(`App running in port ${PORT}`);
});
