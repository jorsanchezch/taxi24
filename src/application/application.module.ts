import { Module } from '@nestjs/common';
import { DriverController, PassengerController, TripController, InvoiceController, UserController } from './controllers';
import { InfrastructureModule } from 'src/infrastructure/infrastructure.module';
import { GetDriverUseCase, GetDriversUseCase, GetAvailableDriversUseCase,
         GetAvailableNearbyDriversUseCase, CreateTripUseCase, CompleteTripUseCase, 
         GenerateInvoiceUseCase, GetTripsUseCase, CreateUserUseCase, GetNearbyDriversUseCase, 
         CreateDriverUseCase,
         CreatePassengerUseCase} from './use-cases';

@Module({
  imports: [
    InfrastructureModule,
  ],
  controllers: [
    DriverController,
    PassengerController,
    TripController,
    InvoiceController,
    UserController
  ],
  providers: [
    GetDriverUseCase,
    GetDriversUseCase,
    GetAvailableDriversUseCase,
    GetNearbyDriversUseCase,
    GetAvailableNearbyDriversUseCase,
    GetTripsUseCase,
    GenerateInvoiceUseCase,
    CreateTripUseCase,
    CreateDriverUseCase,
    CreateUserUseCase,
    CreatePassengerUseCase,
    CompleteTripUseCase,
  ],
})
export class ApplicationModule {}
