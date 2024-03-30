import { Driver } from 'src/domain/models/driver.model';
import Factory from './factory';
import { faker } from '@faker-js/faker';

export class DriverFactory extends Factory<Driver> {
    make(): Driver {
        return {
            name: `${faker.person.firstName()} ${faker.person.lastName()}`,
            position: faker.location.nearbyGPSCoordinate({ radius: 5 }).toString(),
            rating: faker.number.float({ min: 0, max: 5 })
        } as Driver;
    }
}