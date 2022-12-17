export {};

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      PORT: number;
      MONGO_LOCAL_URL: string;
      NODE_ENV: string;
    }
  }
}
