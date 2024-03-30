import { Module } from '@nestjs/common';
import { MixedList, EntitySchema } from 'typeorm';
import { Driver } from "./models/driver.model";
import { User } from "./models/user.model";
import { Passenger } from "./models/passenger.model";
import { Invoice } from "./models/invoice.model";
import { Trip } from "./models/trip.model";
import { TypeOrmModule } from '@nestjs/typeorm';
import { EntityClassOrSchema } from '@nestjs/typeorm/dist/interfaces/entity-class-or-schema.type';
import Model from './models/model';

export const Entities: MixedList<string | Function | EntitySchema<any>> = [
  Model,
  Driver,
  Trip,
  User,
  Passenger,
  Invoice
];

@Module({
  imports: [
    TypeOrmModule.forFeature(Entities as EntityClassOrSchema[])
  ],
  controllers: [],
  providers: [],
})
export class DomainModule {}
