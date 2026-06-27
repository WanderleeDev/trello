import z from 'zod';

const envSchema = z.object({
  NODE_ENV: z.enum(['development', 'production', 'test', 'provision']).default('development'),
  PORT: z.string().transform(Number).default(3000),
});

export type EnvSchema = z.infer<typeof envSchema>;

export default (): EnvSchema | never => {
  const { PORT, NODE_ENV } = envSchema.parse(process.env);

  return {
    PORT,
    NODE_ENV,
  };
};
