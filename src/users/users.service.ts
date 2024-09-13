import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/createUser.dto';

@Injectable()
export class UsersService {
  findAll(): string {
    return `This is the list of all users`;
  }

  findById(id: string): string {
    return `This action returns a #${id} user`;
  }

  create(data: CreateUserDto): string {
    return `This action will create a new user with email ${data.email} and name ${data.name} and with password ${data.password}`;
  }
}
