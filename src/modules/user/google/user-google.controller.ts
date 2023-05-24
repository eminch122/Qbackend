import { Controller, Post, Body } from '@nestjs/common';
import { CreateUserDto } from '../dto/create-user.dto';
import { GoogleUser } from './user-google.schema';
import { UserService } from './user-google.service';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  
}
