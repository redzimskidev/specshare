import { Test, TestingModule } from '@nestjs/testing';
import { MachineSpecificationController } from './machine-specification.controller';

describe('MachineSpecificationController', () => {
  let controller: MachineSpecificationController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MachineSpecificationController],
    }).compile();

    controller = module.get<MachineSpecificationController>(
      MachineSpecificationController,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
