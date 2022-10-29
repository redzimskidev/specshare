import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { MachineSpecificationController } from './interface/machine-specification/machine-specification.controller';

@Module({
  imports: [CqrsModule],
  controllers: [MachineSpecificationController],
  providers: [],
})
export class MachineSpecificationModule {}
