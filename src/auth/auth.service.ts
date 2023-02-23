import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../users/users.service';

@Injectable()
export class AuthService {
  constructor(private _userService: UsersService) {}

  validateUser(email: string) {
    const user = this._userService.findUserByEmail(email);

    if (!user) {
      throw new UnauthorizedException();
    }
    return user;
  }
}
