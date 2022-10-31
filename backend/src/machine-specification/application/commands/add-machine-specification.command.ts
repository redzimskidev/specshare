import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { InjectModel } from '@nestjs/mongoose';
import { OmitType } from '@nestjs/swagger';
import { Model } from 'mongoose';
import { MachineSpecification } from 'src/machine-specification/infrastructure/persistence/machine-specification.schema';
import { AddMachineSpecificationResponseDto } from 'src/machine-specification/interface/dtos/add-machine-specification.dto';
import {
  BaseMachineSpecificationModel,
  CpuModel,
  GpuModel,
  MotherboardModel,
  RamStickModel,
  storageDriveModel,
} from '../models/machine-specification.model';

export class AddMachineSpecificationCommand extends OmitType(
  BaseMachineSpecificationModel,
  ['id'] as const,
) {
  constructor(
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
    super();
    this.name = name;
    this.type = type;
    this.manufacturer = manufacturer;
    this.model = model;
    this.cpu = cpu;
    this.gpu = gpu;
    this.motherboard = motherboard;
    this.ramSticks = ramSticks;
    this.storageDrives = storageDrives;
  }
}

@CommandHandler(AddMachineSpecificationCommand)
export class AddMachineSpecificationHandler
  implements ICommandHandler<AddMachineSpecificationCommand>
{
  constructor(
    @InjectModel(MachineSpecification.name)
    private model: Model<MachineSpecification>,
  ) {}

  async execute(
    command: AddMachineSpecificationCommand,
  ): Promise<AddMachineSpecificationResponseDto> {
    await this.model.create(command);
    return { ...command, id: '' };
  }
}
