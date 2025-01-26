import { Provider } from '@nestjs/common';

import { UserRepository } from '@core/repositories';

import { UserAdapter } from '@application/adapters';
import {
  CreateUserCase,
  DeleteUserCase,
  FindUserCase,
  FindUsersCase,
  UpdateUserCase,
} from '@application/use-cases/user';

import { UserService } from '../implementations';

export const UserProvider: Provider[] = [
  {
    provide: UserAdapter,
    useFactory: (
      findUsersCase: FindUsersCase,
      findUserCase: FindUserCase,
      createUserCase: CreateUserCase,
      updateUserCase: UpdateUserCase,
      deleteUserCase: DeleteUserCase,
    ) =>
      new UserAdapter(
        findUsersCase,
        findUserCase,
        createUserCase,
        updateUserCase,
        deleteUserCase,
      ),
    inject: [
      FindUsersCase,
      FindUserCase,
      CreateUserCase,
      UpdateUserCase,
      DeleteUserCase,
    ],
  },
  { provide: UserRepository, useClass: UserService },
  ...[
    FindUsersCase,
    FindUserCase,
    CreateUserCase,
    UpdateUserCase,
    DeleteUserCase,
  ].map((UseCase) => ({
    provide: UseCase,
    useFactory: (userRepository: UserRepository) => new UseCase(userRepository),
    inject: [UserRepository],
  })),
];
