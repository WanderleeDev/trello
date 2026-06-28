import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import configuration, { EnvSchema } from '../config/configuration';
import { AuthModule } from '@thallesp/nestjs-better-auth';
import { createAuth } from '../lib/auth';
import { PrismaModule } from './prisma/prisma.module';
import { PrismaService } from './prisma/prisma.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [configuration],
      envFilePath: '.development.env',
      validationOptions: {
        allowUnknown: false,
      },
    }),
    PrismaModule,
    AuthModule.forRootAsync({
      inject: [ConfigService, PrismaService],
      useFactory: (config: ConfigService<EnvSchema>, prisma: PrismaService) => ({
        auth: createAuth(config, prisma),
      }),
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
