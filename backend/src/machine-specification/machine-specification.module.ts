import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { GetAllMachineSpecificationsHandler } from './application/get-all-machine-specifications/get-all-machine-specifications.handler';
import { MachineSpecificationController } from './interface/machine-specification/machine-specification.controller';

const QUERY_HANDLERS = [GetAllMachineSpecificationsHandler];
@Module({
  imports: [CqrsModule],
  controllers: [MachineSpecificationController],
  providers: [...QUERY_HANDLERS],
})
export class MachineSpecificationModule {}
