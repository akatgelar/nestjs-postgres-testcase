/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { ResponseInterceptor } from './common/interceptor/response.interceptor';
import { ValidationPipe } from '@nestjs/common';

const configService = new ConfigService();

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // validation
  app.useGlobalPipes(new ValidationPipe({ transform: true }));

  // response
  app.useGlobalInterceptors(new ResponseInterceptor());

  // swagger
  const options = new DocumentBuilder()
    .setTitle('Nestjs Postgres Testcase')
    .setDescription('Your API description')
    .setVersion('1.0')
    .addServer('http://194.233.69.244:2050/', 'Staging')
    .addServer('http://localhost:3000/', 'Local environment')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('', app, document);
  await app.listen(configService.get<number>('APP_PORT') ?? 3000);
}
bootstrap();
