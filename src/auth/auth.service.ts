/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */

import { Injectable } from '@nestjs/common';
@Injectable({})
export class AuthService {
  signin() {
    return { msg: 'I am sign in'};
  }

  signup() {
    return { msg: 'I a sign up '};
  }
}
