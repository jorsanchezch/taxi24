import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { UserRepository } from 'src/infrastructure/persistence';
import { CreateUserRequest } from '../dtos/create-user.request';
import { CreateUserUseCase } from '../use-cases';

@Controller('users')
export class UserController {
    constructor(
        private readonly userRepo: UserRepository, 
        private readonly createUser: CreateUserUseCase
    ) {}

    @Get()
    findAll() {
        return this.userRepo.getAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.userRepo.getById(id);
    }

    @Post()
    create(@Body() params: CreateUserRequest) {
        return this.createUser.execute(params);
    }
}
