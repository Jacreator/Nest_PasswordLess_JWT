import { Injectable, Logger } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import Strategy from 'passport-magic-login';
import { AuthService } from './auth.service';

@Injectable()
export class MagicLoginStrategy extends PassportStrategy(Strategy) {
  private readonly logger = new Logger(MagicLoginStrategy.name);

  constructor(private _authService: AuthService) {
    super({
      secret: 'ngksjsfdoasifsf', // add this from environment using config file
      jwtOptions: {
        expiresIn: '5m',
      },
      callbackUrl: 'http://localhost:3000' + '/auth/login/callback', // add this from environment using config file
      sendMagicLink: async (destination, href) => {
        // TODO: send using smtp or email delivery service
        this.logger.debug(`sending Magic link to ${destination} with ${href}`);
      },
      verify: async (payload, callback) =>
        callback(null, this.validate(payload)),
    });
  }

  validate(payload: { destination: string }) {
    const user = this._authService.validateUser(payload.destination);
    return user;
  }
}
