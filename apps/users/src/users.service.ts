import { Injectable } from '@nestjs/common';
import { CreateUserDto, UpdateUserDto, User } from '@app/contracts';

@Injectable()
export class UsersService {
  private users: User[] = [];
  getHello(): string {
    return 'Hello World!';
  }

  create(createUserDto: CreateUserDto): string {
    this.users.push({ id: this.users.length + 1, ...createUserDto });
    return 'This action adds a new user with microservices';
  }

  findAll(): string {
    return `This action returns all users with microservices`;
  }

  findOne(id: number): string {
    return `This action returns a #${id} user with microservices`;
  }

  update(id: number, updateUserDto: UpdateUserDto): string {
    this.users = this.users.map((user) =>
      user.id === id ? { ...user, ...updateUserDto } : user,
    );
    return `This action updates a #${id} user with microservices`;
  }

  remove(id: number): string {
    this.users = this.users.filter((user) => user.id !== id);
    return `This action removes a #${id} user with microservices`;
  }
}
