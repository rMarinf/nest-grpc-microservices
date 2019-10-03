import { Controller } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { UserById } from './interfaces/userById.interface';
import { User } from './interfaces/User.interface';

@Controller()
export class UserService {

  @GrpcMethod('UserService', 'FindOne')
  findOne(data: UserById, metadata: any): User {
    const items: User[] = [
      { id: 1, name: 'Foo' },
      { id: 2, name: 'Bar' },
    ];
    return items.find(({ id }) => id === data.id);
  }
}
