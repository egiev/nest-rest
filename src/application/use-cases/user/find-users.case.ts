import { UseCase } from '@core/abstracts';
import { UserEntity } from '@core/entities';
import { UserRepository } from '@core/repositories';

export class FindUsersCase implements UseCase<UserEntity, UserEntity[]> {
  constructor(private readonly userRepository: UserRepository) {}

  execute(): Promise<UserEntity[]> {
    return this.userRepository.find();
  }
}
