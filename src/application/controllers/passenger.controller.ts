import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { PassengerRepository } from 'src/infrastructure/persistence';
import { CreatePassengerUseCase } from '../use-cases';
import { CreatePassengerRequest } from '../dtos';

@Controller('passengers')
export class PassengerController {
    constructor(
        private readonly passengerRepo: PassengerRepository,
        private readonly createPassenger: CreatePassengerUseCase,
    ) {}

    @Get()
    findAll() {
        return this.passengerRepo.getAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.passengerRepo.getById(id);
    }

    @Post()
    create(@Body() params: CreatePassengerRequest){

        return this.createPassenger.execute(params);
    }
}
