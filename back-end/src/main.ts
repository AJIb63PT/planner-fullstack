import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as cp from 'cookie-parser';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api');
  app.use(cp());
  app.enableCors({
    credentials: true,
    origin: ['http://localhost:3001'],
    exposedHeaders: 'set-cookie',
  });

  await app.listen(4200);
}
bootstrap();
