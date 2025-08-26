import { createServer } from "./createServer.js";
import 'dotenv/config';

const { POSTGRES_PORT } = process.env;

createServer().listen(POSTGRES_PORT, () => { })
