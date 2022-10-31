import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { MongooseModule } from '@nestjs/mongoose';
import { CommandHandlers } from './application/commands';
import { QueryHandlers } from './application/queries';
import {
  MachineSpecification,
  MachineSpecificationSchema,
} from './infrastructure/persistence/machine-specification.schema';
import { MachineSpecificationController } from './interface/machine-specification/machine-specification.controller';
@Module({
  imports: [
    CqrsModule,
    MongooseModule.forFeature([
      { name: MachineSpecification.name, schema: MachineSpecificationSchema },
    ]),
  ],
  controllers: [MachineSpecificationController],
  providers: [...CommandHandlers, ...QueryHandlers],
})
export class MachineSpecificationModule {}
