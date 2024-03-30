import { Module } from '@nestjs/common';
import { DriverController } from './controllers/driver.controller';
import { InfrastructureModule } from 'src/infrastructure/infrastructure.module';
import { GetDriversUseCase } from './use-cases/get-drivers.use-case';

@Module({
  imports: [
    InfrastructureModule,
  ],
  controllers: [
    DriverController
  ],
  providers: [
    GetDriversUseCase
  ],
})
export class ApplicationModule {}
