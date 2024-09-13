import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersController } from './users/users.controller';
import { UssersService } from './ussers/ussers.service';
import { UsersService } from './users/users.service';

@Module({
  imports: [],
  controllers: [AppController, UsersController],
  providers: [AppService, UssersService, UsersService],
})
export class AppModule {}
