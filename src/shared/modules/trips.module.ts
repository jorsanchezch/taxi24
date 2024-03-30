import { Module } from '@nestjs/common';
import { DriverController } from 'src/application/controllers/driver.controller';
import { DriverRepository } from 'src/infrastructure/persistence/driver.repository';

@Module({
  imports: [],
  controllers: [
    DriverController
  ],
  providers: [
    DriverRepository
  ],
})
export class TripsModule {}
