import { ValidationArguments, ValidatorConstraint, ValidatorConstraintInterface } from 'class-validator';
  import { Injectable } from '@nestjs/common';
  import { Repository } from 'typeorm'; 
  import Model from 'src/domain/models/model';
  
  @ValidatorConstraint({ name: 'EntityExists', async: true })
  @Injectable()
  export class EntityExistsValidator implements ValidatorConstraintInterface {
    constructor(
      private repo: Repository<Model>
    ) {}
  
    async validate(value: any, args: ValidationArguments): Promise<boolean> {
      const entity = await this.repo.findOne(value);
      return !!entity;
    }
  }
