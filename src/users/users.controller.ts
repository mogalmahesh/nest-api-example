import {
  Controller,
  Get,
  Query,
  Param,
  Post,
  Body,
  Ip,
  HttpCode,
  HttpStatus,
  Header,
} from '@nestjs/common';

import { UserFilterDto } from './dto/usersFilter.dto';
import { CreateUserDto } from './dto/createUser.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  @Header('Cache-Control', 'none')
  findAll(): string {
    return this.usersService.findAll();
  }

  @Get('/filter')
  @HttpCode(HttpStatus.OK)
  findAllWithFilter(@Query() query: UserFilterDto): string {
    console.log({ query });
    return `This will return a list of users filter by ${query.email} for page ${query.page} and count ${query.count}`;
  }

  @Get(':id')
  findOne(@Param('id') id: string): string {
    console.log({ id });
    return this.usersService.findById(id);
  }

  @Post()
  create(@Body() data: CreateUserDto, @Ip() ip: string) {
    console.log(`request coming from ${ip}`);
    console.log({ data });
    return this.usersService.create(data);
  }
}
