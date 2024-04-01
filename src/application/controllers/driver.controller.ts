import { Controller, Get, Post, Body, Param, Query } from '@nestjs/common';
import { GetDriverUseCase, GetDriversUseCase, GetAvailableDriversUseCase, GetAvailableNearbyDriversUseCase, CreateDriverUseCase  } from '../use-cases';
import { CreateDriverRequest, GetNearbyDriversRequest } from '../dtos';

@Controller('drivers')
export class DriverController {
    constructor(
        private readonly getDrivers: GetDriversUseCase, 
        private readonly getDriver: GetDriverUseCase,
        private readonly getAvailableDrivers: GetAvailableDriversUseCase,
        private readonly getAvailableNearbyDrivers: GetAvailableNearbyDriversUseCase,
        private readonly createDriver: CreateDriverUseCase,
    ) {}

    @Get()
    findAll() {
        return this.getDrivers.execute();
    }

    @Get('available')
    findAvailable(){
        return this.getAvailableDrivers.execute();
    }

    @Get('nearby')
    findAvailableNearby(@Query() params: GetNearbyDriversRequest) {
        return this.getAvailableNearbyDrivers.execute(params);
    }

    @Get(':id')
    findOne(@Param('id') id: number) {
        return this.getDriver.execute(id);
    }

    @Post()
    create(@Body() params: CreateDriverRequest){

        return this.createDriver.execute(params);
    }
}
