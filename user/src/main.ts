import { TcpOptions, Transport } from '@nestjs/microservices';
import { NestFactory } from '@nestjs/core';
import { ConfigService } from './services/config/config.service';
import { UserModule } from './user.module';

async function bootstrap() {
  const config = new ConfigService();
  const app = await NestFactory.createMicroservice(UserModule, {
    transport: Transport.TCP,
    options: {
      host: config.get('host'),
      port: config.get('port'),
    },
  } as TcpOptions);
  await app.listen();
}
bootstrap();
