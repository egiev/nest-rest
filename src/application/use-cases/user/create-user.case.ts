import { UseCase } from '@core/abstracts';
import { UserEntity } from '@core/entities';
import { UserRepository } from '@core/repositories';

export class CreateUserUseCase implements UseCase<any, UserEntity> {
  constructor(private readonly userRepository: UserRepository) {}

  execute(param: UserEntity): Promise<UserEntity> {
    return this.userRepository.create(param);
  }
}
