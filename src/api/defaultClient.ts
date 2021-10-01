import axios from "axios";
import env from 'dotenv';

const baseURL: any = env.config() ?? "";

const defaultClient = axios.create({
    baseURL,
});

export default defaultClient;