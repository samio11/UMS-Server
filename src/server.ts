import mongoose from 'mongoose';
import app from './app';
import { Server } from 'http';
import config from './app/config';

let server: Server;

async function startServer() {
  try {
    await mongoose.connect(config.database as string);
    server = app.listen(config.port, () => {
      console.log(`Server Run at PORT:- ${config.port}`);
    });
  } catch (err: any) {
    console.log(`Server Error:- ${err}`);
  }
}

process.on('unhandledRejection', (error) => {
  console.log(`Unhandled Rejection:- ${error}`);
  if (server) {
    server.close(() => {
      process.exit(1);
    });
  }
  process.exit(1);
});
process.on('uncaughtException', (error) => {
  console.log(`UnCaught Rejection:- ${error}`);
  if (server) {
    server.close(() => {
      process.exit(1);
    });
  }
  process.exit(1);
});

process.on('SIGTERM', () => {
  console.log(`Signal Termination`);
  if (server) {
    server.close(() => {
      process.exit(1);
    });
  }
  process.exit(1);
});

startServer();
