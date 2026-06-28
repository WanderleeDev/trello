import { Logger, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';
import { ConfigService } from '@nestjs/config';
import { EnvSchema } from './config/configuration';
import { setupSwagger } from './config/setupSwagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    bodyParser: false,
  });
  const configService = app.get(ConfigService<EnvSchema>);
  const globalPrefix = configService.getOrThrow('GLOBAL_PREFIX', { infer: true });
  const env = configService.getOrThrow('NODE_ENV', { infer: true });
  const port = configService.getOrThrow('PORT', { infer: true });
  const frontendUrl = configService.getOrThrow('FRONTEND_URL', { infer: true });

  app.setGlobalPrefix(globalPrefix);
  app.enableCors({
    origin: [frontendUrl],
    credentials: true,
  });
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      transform: true,
    }),
  );

  if (env !== 'production') {
    setupSwagger(app, globalPrefix);
  }

  await app.listen(port);
  Logger.log(
    `🚀 [${env} mode] Application is running on: http://localhost:${port}/${globalPrefix}`,
  );
}

bootstrap().catch(err => console.log(err));
