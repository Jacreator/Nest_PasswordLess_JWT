import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { User } from 'src/users/users.entity';
import { UsersService } from '../users/users.service';

@Injectable()
export class AuthService {
  constructor(
    private _userService: UsersService,
    private _jwtService: JwtService,
  ) {}

  validateUser(email: string) {
    const user = this._userService.findUserByEmail(email);

    if (!user) {
      throw new UnauthorizedException();
    }
    return user;
  }

  generateToken(user: User) {
    return {
      access_token: this._jwtService.sign({
        sub: user.id,
        email: user.email,
      }),
    };
  }
}
