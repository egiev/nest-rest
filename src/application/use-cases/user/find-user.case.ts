import { UseCase } from '@core/abstracts';
import { UserEntity } from '@core/entities';
import { UserRepository } from '@core/repositories';

export class FindUserCase implements UseCase<string, UserEntity | null> {
  constructor(private readonly userRepository: UserRepository) {}

  execute(param: string): Promise<UserEntity | null> {
    return this.userRepository.findOne(param);
  }
}
