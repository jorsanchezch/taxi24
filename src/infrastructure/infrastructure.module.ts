import { Module, Provider } from '@nestjs/common';
import { DriverRepository, InvoiceRepository, PassengerRepository, TripRepository, UserRepository } from './persistence';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PostgresDataConfig } from './data-source';

const repos: Provider[] = [
  DriverRepository,
  PassengerRepository,
  TripRepository,
  InvoiceRepository,
  UserRepository
];

@Module({
  imports: [
    TypeOrmModule.forRoot(PostgresDataConfig)
  ],
  controllers: [],
  providers: [
    ...repos
  ],
  exports: [
    ...repos 
  ]
})
export class InfrastructureModule {}
