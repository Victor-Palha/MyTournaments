import "dotenv/config";
import { z } from "zod";

const globalEnvSchema = z.object({
    PORT: z.coerce.number().default(3000),
    DB_URI: z.string()
})

const _env = globalEnvSchema.safeParse(process.env);

if(!_env.success){
    throw new Error("Please Provide all the environment variables");
}

export const env = _env.data;