import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import {
  AddMachineSpecificationHandler,
  DeleteMachineSpecificationHandler,
  UpdateMachineSpecificationHandler,
} from './application/commands';
import {
  GetAllMachineSpecificationsHandler,
  FindMachineSpecificationHandler,
} from './application/queries';
import { MachineSpecificationController } from './interface/machine-specification/machine-specification.controller';

const QUERY_HANDLERS = [
  GetAllMachineSpecificationsHandler,
  FindMachineSpecificationHandler,
];

const COMMAND_HANDLERS = [
  AddMachineSpecificationHandler,
  UpdateMachineSpecificationHandler,
  DeleteMachineSpecificationHandler,
];
@Module({
  imports: [CqrsModule],
  controllers: [MachineSpecificationController],
  providers: [...QUERY_HANDLERS, ...COMMAND_HANDLERS],
})
export class MachineSpecificationModule {}
