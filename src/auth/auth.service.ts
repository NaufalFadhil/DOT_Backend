import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async login(
    email: string,
    pass: string,
  ): Promise<{
    meta: {
      code: number;
      status: string;
      message: string;
    };
    data: {
      access_token: string;
    };
  }> {
    const user = await this.usersService.findOne(email);
    if (user?.password !== pass) {
      return {
        meta: {
          code: 200,
          status: 'OK',
          message: 'Email or password is incorrect',
        },
        data: {
          access_token: '',
        },
      };
    }

    const payload = { sub: user.userId, email: user.email };
    return {
      meta: {
        code: 200,
        status: 'OK',
        message: 'Login successful',
      },
      data: {
        access_token: this.jwtService.sign(payload),
      },
    };
  }
}
