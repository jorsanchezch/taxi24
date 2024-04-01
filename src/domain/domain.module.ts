import { Module } from '@nestjs/common';
import { MixedList, EntitySchema } from 'typeorm';
import { Driver, User, Passenger, Invoice, Trip } from "./models";
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
