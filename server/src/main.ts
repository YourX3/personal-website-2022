import * as dotEnv from 'dotenv';
const path = require('path'); 
dotEnv.config({ path: path. path.join(__dirname.substring(0, __dirname.lastIndexOf('/')), '.env') });
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { json, urlencoded } from 'express';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(json({ limit: '50mb' }));
  app.use(urlencoded({ extended: true, limit: '50mb' }));
  if(process.env.ENV === 'dev') {
    app.enableCors({
      "origin": "*",
      "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
      "preflightContinue": false,
      "optionsSuccessStatus": 204
    });
  }
 
  await app.listen(process.env.PORT || 3000);
}
bootstrap();
