import { Module } from '@nestjs/common';
import { UserService } from './user/user.controller';

@Module({
  imports: [],
  controllers: [UserService],
})
export class AppModule {}
