import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { CreateUserDto, UpdateUserDto } from '@app/contracts';

@Injectable()
export class UsersService {
  constructor(@Inject('USERS_CLIENT') private client: ClientProxy) {}
  create(createUserDto: CreateUserDto) {
    return this.client.send('users.create', createUserDto);
  }

  findAll() {
    return this.client.send('users.findAll', {});
  }

  findOne(id: number) {
    return this.client.send('users.findOne', id);
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return this.client.send('users.update', { id, ...updateUserDto });
  }

  remove(id: number) {
    return this.client.send('users.remove', id);
  }
}
