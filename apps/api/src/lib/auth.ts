import { ConfigService } from '@nestjs/config';
import { PrismaClient } from '../generated/prisma/client';
import { prismaAdapter } from 'better-auth/adapters/prisma';
import { betterAuth } from 'better-auth';
import { EnvSchema } from '../config/configuration';

export const createAuth = (config: ConfigService<EnvSchema>, prisma: PrismaClient) =>
  betterAuth({
    database: prismaAdapter(prisma, { provider: 'postgresql' }),
    trustedOrigins: [config.getOrThrow('FRONTEND_URL')],
    secret: config.get('BETTER_AUTH_SECRET', { infer: true }),
    baseURL: config.get('BETTER_AUTH_URL', { infer: true }),
    emailAndPassword: {
      enabled: true,
      requireEmailVerification: false,
      minPasswordLength: 8,
      maxPasswordLength: 50,
      revokeSessionsOnPasswordReset: true,
    },
    advanced: {
      cookiePrefix: 'trello-clone',
      cookies: {
        sessionToken: {
          attributes: {
            sameSite: 'strict',
            httpOnly: true,
            path: '/',
            secure: config.getOrThrow('NODE_ENV') === 'production',
          },
        },
      },
    },
    experimental: { joins: true },
  });

export type Auth = ReturnType<typeof createAuth>;
