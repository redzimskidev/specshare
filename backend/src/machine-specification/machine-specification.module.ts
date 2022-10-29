import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { CommandHandlers } from './application/commands';
import { QueryHandlers } from './application/queries';
import { MachineSpecificationController } from './interface/machine-specification/machine-specification.controller';
@Module({
  imports: [CqrsModule],
  controllers: [MachineSpecificationController],
  providers: [...CommandHandlers, ...QueryHandlers],
})
export class MachineSpecificationModule {}
