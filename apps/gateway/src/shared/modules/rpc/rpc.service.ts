import { Inject, Injectable, OnModuleInit } from '@nestjs/common';
import { ClientGrpcProxy } from '@nestjs/microservices';
import { Observable } from 'rxjs';

interface UserService {
  findOne(data: { id: number }): Observable<any>;
}

@Injectable()
export class RpcService implements OnModuleInit {
  private userRpcService: UserService;

  constructor(
    @Inject('USER_SERVICE') private readonly client: ClientGrpcProxy) {}

  async onModuleInit() {
    this.userRpcService = this.client.getService<UserService>('UserService');
  }

  public getUser(id: number): Promise<any> {
    return this.userRpcService.findOne({ id }).toPromise();
  }
}
