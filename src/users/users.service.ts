import { Injectable } from '@nestjs/common';
import { User } from './users.entity';

@Injectable()
export class UsersService {
  private readonly user: User[] = [
    {
      id: 1,
      name: 'John Smith',
      email: 'john.smith@gmail.com',
    },
    {
      id: 2,
      name: 'Doe Smith',
      email: 'doe.smith@gmail.com',
    },
  ];

  findUserByEmail(email: string): User | undefined {
    return this.user.find((user) => user.email === email);
  }

  findUserById(id: number): User | undefined {
    return this.user.find((user) => user.id === id);
  }
}
