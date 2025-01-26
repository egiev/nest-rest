import { UseCase } from '@core/abstracts';
import { UserEntity } from '@core/entities';
import { UserRepository } from '@core/repositories';

export class FindUserCase implements UseCase<string, UserEntity> {
  constructor(private readonly userRepository: UserRepository) {}

  execute(param: string): Promise<UserEntity> {
    return this.userRepository.findOne(param);
  }
}
