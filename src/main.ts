import { ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { config } from './configuration/config';


async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService=app.get(ConfigService);
  const appConfig = config(configService);
  app.enableCors();
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(appConfig.port);
}
bootstrap();

