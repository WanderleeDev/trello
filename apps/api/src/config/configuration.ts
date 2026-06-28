import z from 'zod';

const envSchema = z.object({
  NODE_ENV: z.enum(['development', 'production', 'test']).default('development'),
  PORT: z.string().transform(Number).default(3000),
  BETTER_AUTH_SECRET: z.string().min(1),
  BETTER_AUTH_URL: z.url(),
  DATABASE_URL: z.url(),
  FRONTEND_URL: z.url(),
  GLOBAL_PREFIX: z.string().min(3),
});

export type EnvSchema = z.infer<typeof envSchema>;

export default (): EnvSchema | never => envSchema.parse(process.env);
