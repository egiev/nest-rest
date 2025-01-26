import { Controller, Get } from '@nestjs/common';

import { UserAdapter } from '@application/adapters';

@Controller('user')
export class UserController {
  constructor(private readonly userAdapter: UserAdapter) {}

  @Get()
  async getAll() {
    const a = await this.userAdapter.findUsers();
    console.log(a);
    return 'Hello';
  }
}
