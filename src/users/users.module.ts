import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User])], // Importa o repositório do User
  providers: [UsersService],
  controllers: [UsersController],
  exports: [UsersService], // Exporta o serviço para ser usado em outros módulos, como o AuthModule
})
export class UsersModule {}
