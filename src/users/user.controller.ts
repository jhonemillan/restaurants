import { Controller, Post, Body } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('user')
export class UserController {
  constructor(private userService: UsersService) {}

  @Post('new')
  async newUser(@Body() req) {
    return this.userService.create(req);
  }
}
