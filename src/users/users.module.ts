import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Profile } from 'src/profiles/entities/profile.entity';
import { ProfilesService } from 'src/profiles/profiles.service';
import { ProfilesController } from 'src/profiles/profiles.controller';

@Module({
  imports: [TypeOrmModule.forFeature([User, Profile])], // Importa o repositório do User
  providers: [UsersService, ProfilesService],
  controllers: [UsersController, ProfilesController],
})
export class UserModule {}
