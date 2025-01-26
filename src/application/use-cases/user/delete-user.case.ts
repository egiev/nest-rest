import { UseCase } from '@core/abstracts';
import { UserRepository } from '@core/repositories';

export class DeleteUserCase implements UseCase<string, void> {
  constructor(private readonly userRepository: UserRepository) {}

  execute(param: string): Promise<void> {
    return this.userRepository.delete(param);
  }
}
