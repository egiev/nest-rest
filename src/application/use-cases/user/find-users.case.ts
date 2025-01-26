import { UseCase } from '@core/abstracts';
import { UserEntity } from '@core/entities';
import { UserRepository } from '@core/repositories';

export class FindUsersCase implements UseCase<unknown, UserEntity[]> {
  constructor(private readonly userRepository: UserRepository) {}

  execute(param?: unknown): Promise<UserEntity[]> {
    return this.userRepository.find(param);
  }
}
