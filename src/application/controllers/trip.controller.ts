import { Controller, Get, Post, Put, Delete, Body, Param, Query } from '@nestjs/common';
import { CompleteTripUseCase, CreateTripUseCase, GetNearbyDriversUseCase, GetTripsUseCase } from '../use-cases';
import { CreateTripRequest } from '../dtos';
import { TripStatus } from 'src/domain/enums';
import { GetNearbyDriversForTripUseCase } from '../use-cases/get-nearby-drivers-for-trip.use-case';

@Controller('trips')
export class TripController {
    constructor(
        private readonly createTrip: CreateTripUseCase, 
        private readonly completeTrip: CompleteTripUseCase,
        private readonly getTrips: GetTripsUseCase,
        private readonly getNearbyDrivers: GetNearbyDriversForTripUseCase
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
    
    @Get(':id/nearby')
    findDrivers(@Param('id') id: number) {
        return this.getNearbyDrivers.execute(id);
    }

    @Post()
    create(@Body() params: CreateTripRequest) {
        return this.createTrip.execute(params);
    }
}
