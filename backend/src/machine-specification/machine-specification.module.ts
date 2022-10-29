import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { FindMachineSpecificationHandler } from './application/find-machine-specification/find-machine-specification.handler';
import { GetAllMachineSpecificationsHandler } from './application/get-all-machine-specifications/get-all-machine-specifications.handler';
import { MachineSpecificationController } from './interface/machine-specification/machine-specification.controller';

const QUERY_HANDLERS = [
  GetAllMachineSpecificationsHandler,
  FindMachineSpecificationHandler,
];
@Module({
  imports: [CqrsModule],
  controllers: [MachineSpecificationController],
  providers: [...QUERY_HANDLERS],
})
export class MachineSpecificationModule {}
