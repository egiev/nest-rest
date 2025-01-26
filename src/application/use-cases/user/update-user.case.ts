import { UseCase } from '@core/abstracts';
import { UserEntity } from '@core/entities';
import { UserRepository } from '@core/repositories';

export class UpdateUserCase implements UseCase<UserEntity, UserEntity> {
  constructor(private readonly userRepository: UserRepository) {}

  execute(param: UserEntity): Promise<UserEntity> {
    return this.userRepository.update(param);
  }
}
