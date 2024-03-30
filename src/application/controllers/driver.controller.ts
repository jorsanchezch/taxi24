import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { GetDriverUseCase, GetDriversUseCase, GetAvailableDriversUseCase, GetAvailableDriversWithinRadiusUseCase  } from '../use-cases';

@Controller('drivers')
export class DriverController {
    constructor(
        private readonly getDrivers: GetDriversUseCase, 
        private readonly getDriver: GetDriverUseCase,
        private readonly getAvailableDrivers: GetAvailableDriversUseCase,
        private readonly getAvailableDriversWithinRadius: GetAvailableDriversWithinRadiusUseCase
    ) {}

    @Get()
    findAll() {
        return this.getDrivers.execute();
    }

    @Get(':id')
    findOne(@Param('id') id: number) {
        return this.getDriver.execute(id);
    }

    @Get('available')
    findAvailable(){
        return this.getAvailableDrivers.execute();
    }

    @Get('available/:radius')
    findAvailableWithinRadius(@Param('radius') radius: number){
        return this.getAvailableDriversWithinRadius.execute(radius);
    }
    
    // @Post()
    // create(@Body() createDriverDto: CreateDriverDto) {
    //     return this.driverRepo.create(createDriverDto);
    // }

    // @Put(':id')
    // update(@Param('id') id: string, @Body() updateDriverDto: UpdateDriverDto) {
    //     return this.driverRepo.update(id, updateDriverDto);
    // }

    @Delete(':id')
    remove(@Param('id') id: string) {
        // return this.driverRepo.delete(id);
    }
}
