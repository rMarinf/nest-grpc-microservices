import { Module } from '@nestjs/common';
import { RpcService } from './rpc.service';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { UserMicroserviceOptions } from '../../../../../shared/configuration/user.grpc.options';

const userClientOptions = { ...UserMicroserviceOptions, url: 'users:5000' };

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'USER_SERVICE',
        transport: Transport.GRPC,
        options: userClientOptions,
      },
    ]),
  ],
  providers: [RpcService],
  exports: [RpcService],
})
export class RpcModule {}
