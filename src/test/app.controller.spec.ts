import { Test, TestingModule } from '@nestjs/testing';
import { DriverController } from 'src/application/controllers/driver.controller';
import { GetDriversUseCase } from 'src/application/use-cases/get-drivers.use-case';

describe('DriverController', () => {
  let controller: DriverController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [DriverController],
      providers: [GetDriversUseCase],
    }).compile();

    controller = app.get<DriverController>(DriverController);
  });

  describe('root', () => {
    it('should return an array', () => {
      expect(controller.findAll()).toBeDefined();
    });
  });
});
