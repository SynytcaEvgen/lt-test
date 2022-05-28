import 'dotenv/config';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

const Port = process.env.PORT || 4888;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(Port);
  console.log(`App started in a Port ${Port}`);
  console.log(process.env.PORT);
}
bootstrap();
