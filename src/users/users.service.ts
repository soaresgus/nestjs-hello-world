import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>, // Injeção do repositório do User via TypeORM
  ) {}

  async create(createUserDto: CreateUserDto): Promise<User> {
    const { email } = createUserDto;

    const userExists = await this.usersRepository.findOne({ where: { email } });

    if (userExists) {
      throw new ConflictException(`User with email ${email} already exists.`);
    }

    const newUser = this.usersRepository.create(createUserDto);
    return await this.usersRepository.save(newUser);
  }

  async findAll(): Promise<User[]> {
    const users = await this.usersRepository.find();
    return users;
  }

  async findOne(id: number): Promise<User> {
    const user = await this.usersRepository.findOne({ where: { id } });

    if (!user) {
      throw new NotFoundException(`User with id ${id} not founded.`);
    }

    return user;
  }

  async delete(id: number): Promise<User> {
    const user = await this.findOne(id);

    await this.usersRepository.delete(id);

    return user;
  }

  async update(id: number, updateUserDto: UpdateUserDto): Promise<User> {
    const { email } = updateUserDto;

    if (email) {
      const userWithEmail = await this.usersRepository.findOne({
        where: { email },
      });

      if (userWithEmail && userWithEmail.id !== id) {
        throw new ConflictException(`User with email ${email} already exists.`);
      }
    }

    await this.usersRepository.update(id, updateUserDto);

    return this.findOne(id);
  }
}
