import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { CompleteTripUseCase, CreateTripUseCase, GetTripsUseCase } from '../use-cases';
import { CreateTripRequest } from '../dtos';
import { TripStatus } from 'src/domain/enums';

@Controller('trips')
export class TripController {
    constructor(
        private readonly createTrip: CreateTripUseCase, 
        private readonly completeTrip: CompleteTripUseCase,
        private readonly getTrips: GetTripsUseCase
    ) {}

    @Get()
    findAll() {
        return this.getTrips.execute();
    }

    @Get('available')
    findActive(){
        return this.getTrips.execute({
            status: TripStatus.IN_PROGRESS
        });
    }

    @Put('complete/:id')
    complete(@Param('id') id: number) {
        return this.completeTrip.execute(id);
    }

    @Post()
    create(@Body() params: CreateTripRequest) {
        return this.createTrip.execute(params);
    }
}
