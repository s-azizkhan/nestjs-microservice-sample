import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { ConfigService } from './services/config/config.service';

@Module({
  imports: [],
  controllers: [UserController],
  providers: [UserService, ConfigService],
})
export class UserModule {}
