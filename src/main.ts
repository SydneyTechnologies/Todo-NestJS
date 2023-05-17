import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const apiConfiguration = new DocumentBuilder().setTitle("NestJS Todo Api")
  .setDescription("This is a simple CRUD application for a todo application written in NestJS")
  .setVersion("1.0").
  build()

  const document = SwaggerModule.createDocument(app, apiConfiguration)
  SwaggerModule.setup("docs", app, document)
  app.useGlobalPipes(new ValidationPipe({transform: true}));
  await app.listen(process.env.PORT || 3000);
}
bootstrap();
