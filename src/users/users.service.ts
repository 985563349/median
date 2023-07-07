import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { UserEntity } from './entities/user.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async create(createUserDto: CreateUserDto) {
    return new UserEntity(
      await this.prisma.user.create({ data: createUserDto }),
    );
  }

  async findAll() {
    const users = await this.prisma.user.findMany();
    return users.map((user) => new UserEntity(user));
  }

  async findOne(id: number) {
    return new UserEntity(await this.prisma.user.findUnique({ where: { id } }));
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    return new UserEntity(
      await this.prisma.user.update({ where: { id }, data: updateUserDto }),
    );
  }

  async remove(id: number) {
    return new UserEntity(await this.prisma.user.delete({ where: { id } }));
  }
}
