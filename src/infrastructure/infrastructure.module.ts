import { Module, Provider } from '@nestjs/common';
import { DriverRepository } from './persistence/driver.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PostgresDataConfig } from './data-source';
import { DataSource } from 'typeorm';

const repos: Provider[] = [
  DriverRepository
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
