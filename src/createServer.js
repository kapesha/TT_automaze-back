'use strict';
import express from "express";
import cors from 'cors';
import path from 'path';
import taskRoutes from './routes/taskRoute.js';
import { Task } from "./models/Task.js";

export function createServer() {
  Task.sync()
  const app = express();
  app.use('/uploads', express.static(path.resolve('uploads')));
  app.use(cors());
  app.use(express.json());
  app.use(taskRoutes);

  return app
}