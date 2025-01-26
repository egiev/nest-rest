import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { UserEntity } from '@infrastructure/database/postgres/entities';
import { UserProvider } from '@infrastructure/database/postgres/providers/user.provider';

import { UserController } from './user.controller';

@Module({
  imports: [TypeOrmModule.forFeature([UserEntity])],
  providers: [...UserProvider],
  controllers: [UserController],
})
export class UserModule {}
