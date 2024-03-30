import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { DriverRepository } from 'src/infrastructure/persistence/driver.repository'; // Import the driver repository
import { CreateDriverRequest } from '../dtos/create-driver.request';

@Controller('drivers')
export class TripController {
    constructor(
        private readonly driverRepo: DriverRepository, 
    ) {}

    @Get()
    findAll() {
        return this.driverRepo.getAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.driverRepo.getById(id);
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
        return this.driverRepo.delete(id);
    }
}
