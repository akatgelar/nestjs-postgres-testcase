import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { NullableType } from '../utils/nullable.type';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
  ) {}

  async findAll(): Promise<User[]> {
    return await this.userRepository.find();
  }

  findOne(id: number): Promise<NullableType<User>> {
    return this.userRepository.findOneBy({ id });
  }

  async create(createUserDto: CreateUserDto): Promise<User> {
    const user: User = new User();
    user.email = createUserDto.email;
    user.password = createUserDto.password;
    user.fullname = createUserDto.fullname;
    user.role = createUserDto.role;
    user.is_active = createUserDto.is_active;
    return await this.userRepository.save(user);
  }

  async update(id: number, updateUserDto: UpdateUserDto): Promise<User> {
    const user: User = new User();
    user.id = id;
    user.email = updateUserDto.email;
    user.password = updateUserDto.password;
    user.fullname = updateUserDto.fullname;
    user.role = updateUserDto.role;
    user.is_active = updateUserDto.is_active;
    return await this.userRepository.save(user);
  }

  async remove(id: number): Promise<void> {
    await this.userRepository.delete(id);
  }
}
