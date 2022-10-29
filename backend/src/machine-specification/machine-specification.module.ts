import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { AddMachineSpecificationHandler } from './application/add-machine-specification/add-machine-specification.handler';
import { FindMachineSpecificationHandler } from './application/find-machine-specification/find-machine-specification.handler';
import { GetAllMachineSpecificationsHandler } from './application/get-all-machine-specifications/get-all-machine-specifications.handler';
import { UpdateMachineSpecificationHandler } from './application/update-machine-specification/update-machine-specification.handler';
import { MachineSpecificationController } from './interface/machine-specification/machine-specification.controller';

const QUERY_HANDLERS = [
  GetAllMachineSpecificationsHandler,
  FindMachineSpecificationHandler,
];

const COMMAND_HANDLERS = [
  AddMachineSpecificationHandler,
  UpdateMachineSpecificationHandler,
];
@Module({
  imports: [CqrsModule],
  controllers: [MachineSpecificationController],
  providers: [...QUERY_HANDLERS, ...COMMAND_HANDLERS],
})
export class MachineSpecificationModule {}
