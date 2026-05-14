import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Profile } from 'src/profiles/entities/profile.entity';
import { ProfilesService } from 'src/profiles/profiles.service';
import { ProfilesController } from 'src/profiles/profiles.controller';
import { Post } from 'src/posts/entities/post.entity';
import { PostsService } from 'src/posts/posts.service';
import { PostsController } from 'src/posts/posts.controller';

@Module({
  imports: [TypeOrmModule.forFeature([User, Profile, Post])], // Importa o repositório do User
  providers: [UsersService, ProfilesService, PostsService],
  controllers: [UsersController, ProfilesController, PostsController],
})
export class UserModule {}
