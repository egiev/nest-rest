import { UseCase } from '@core/abstracts';
import { UserRepository } from '@core/repositories';

export class DeleteUserCase implements UseCase<string, unknown> {
  constructor(private readonly userRepository: UserRepository) {}

  execute(param: string): Promise<unknown> {
    return this.userRepository.delete(param);
  }
}
