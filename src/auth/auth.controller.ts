/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller()
export class AuthController {
  constructor(private·authService: AuthService) {}

  @Post('signup')
  SignUp() {
    return 'I am sign up';
  }

  @Post('signin')
  SignIn() {
    return 'I am sign in';
  }
}
