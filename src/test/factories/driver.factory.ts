import { Driver } from 'src/domain/models';
import Factory from './factory';
import { faker } from '@faker-js/faker';

export class DriverFactory extends Factory<Driver> {
    fake(): Driver {
        return {
            name: `${faker.person.firstName()} ${faker.person.lastName()}`,
            position: this.fakeGeo({ radius: 5 }),
            rating: faker.number.float({ min: 0, max: 5 })
        } as Driver;
    }
}