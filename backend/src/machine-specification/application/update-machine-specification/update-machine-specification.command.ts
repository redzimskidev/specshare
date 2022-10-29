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
