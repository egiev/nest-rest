import {
  CreateUserCase,
  DeleteUserCase,
  FindUserCase,
  FindUsersCase,
  UpdateUserCase,
} from '@application/use-cases/user';

export class UserAdapter {
  constructor(
    private readonly findUsersCase: FindUsersCase,
    private readonly findUserCase: FindUserCase,
    private readonly createUserCase: CreateUserCase,
    private readonly updateUserCase: UpdateUserCase,
    private readonly deleteUserCase: DeleteUserCase,
  ) {}

  findUsers() {
    return this.findUsersCase.execute();
  }
}
