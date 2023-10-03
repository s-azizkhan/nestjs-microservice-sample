import { Injectable } from '@nestjs/common';
import { ConfigService } from './services/config/config.service';
import { IUser } from './interfaces/user.interface';

@Injectable()
export class UserService {
  constructor(private readonly configService: ConfigService) {}
  public async searchUserById(id: string): Promise<IUser> {
    return {
      id,
      name: 'aziz',
    };
  }
}
