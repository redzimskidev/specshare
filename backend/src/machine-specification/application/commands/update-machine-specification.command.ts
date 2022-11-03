import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { MachineSpecification } from 'src/machine-specification/infrastructure/persistence/machine-specification.schema';
import { UpdateMachineSpecificationResponseDto } from 'src/machine-specification/interface/dtos/update-machine-specification.dto';
import {
  BaseMachineSpecificationModel,
  CpuModel,
  GpuModel,
  MotherboardModel,
  RamStickModel,
  storageDriveModel,
} from '../models/machine-specification.model';

export class UpdateMachineSpecificationCommand extends BaseMachineSpecificationModel {
  constructor(
    id: string,
    name: string,
    type: 'DIY' | 'PREBUILT' | 'LAPTOP',
    manufacturer: string,
    model: string,
    cpu: CpuModel,
    gpu: GpuModel,
    motherboard: MotherboardModel,
    ramSticks: RamStickModel[],
    storageDrives: storageDriveModel[],
  ) {
    super(
      id,
      name,
      type,
      manufacturer,
      model,
      cpu,
      gpu,
      motherboard,
      ramSticks,
      storageDrives,
    );
  }
}

@CommandHandler(UpdateMachineSpecificationCommand)
export class UpdateMachineSpecificationHandler
  implements ICommandHandler<UpdateMachineSpecificationCommand>
{
  constructor(
    @InjectModel(MachineSpecification.name)
    private model: Model<MachineSpecification>,
  ) {}

  async execute(
    command: UpdateMachineSpecificationCommand,
  ): Promise<UpdateMachineSpecificationResponseDto> {
    return this.model.findOneAndUpdate({ id: command.id }, command, {
      new: true,
    });
  }
}
