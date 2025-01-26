import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { Repository } from 'typeorm';

import { UserRepository } from '@core/repositories';

import { UserEntity } from '../entities';

@Injectable()
export class UserService implements UserRepository {
  constructor(
    @InjectRepository(UserEntity)
    private readonly repository: Repository<UserEntity>,
  ) {}

  find(query: Partial<UserEntity>): Promise<UserEntity[]> {
    return this.repository.find({ where: query });
  }

  findOne(id: string): Promise<UserEntity | null> {
    return this.repository.findOneBy({ id });
  }

  create(item: UserEntity): Promise<UserEntity> {
    return this.repository.save(item);
  }

  update(item: UserEntity): Promise<UserEntity> {
    return this.repository.save(item);
  }

  delete(id: string): Promise<any> {
    return this.repository.delete(id);
  }
}
