import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { RpcModule } from '../shared/modules/rpc/rpc.module';

@Module({
  imports: [RpcModule],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
