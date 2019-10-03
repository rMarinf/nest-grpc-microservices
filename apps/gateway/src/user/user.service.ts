import { Injectable } from '@nestjs/common';
import { RpcService } from '../shared/modules/rpc/rpc.service';

@Injectable()
export class UserService {
  constructor(private readonly rpcService: RpcService) {
  }

  getUser(id: number): Promise<any> {
    return this.rpcService.getUser(id);
  }
}
