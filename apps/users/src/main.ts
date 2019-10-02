import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Transport } from '@nestjs/microservices';
import { UserMicroserviceOptions } from './grpc.options';

async function bootstrap() {
  const app = await NestFactory.createMicroservice(AppModule, {
    transport: Transport.GRPC,
    options: UserMicroserviceOptions,
  });
  app.listen(() => console.log('Microservice is listening'));
}
bootstrap();
