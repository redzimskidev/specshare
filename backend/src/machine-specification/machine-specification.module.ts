import { Module } from '@nestjs/common';
import { MachineSpecificationController } from './interface/machine-specification/machine-specification.controller';

@Module({
  controllers: [MachineSpecificationController],
})
export class MachineSpecificationModule {}
