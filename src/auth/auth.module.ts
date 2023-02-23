import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UsersModule } from '../users/users.module';
import { MagicLoginStrategy } from './magiclogin.strategy';

@Module({
  controllers: [AuthController],
  providers: [AuthService, MagicLoginStrategy],
  imports: [UsersModule],
})
export class AuthModule {}
