export class CpuModel {
  manufacturer: string;
  model: string;
  cores: number;
  frequency: number;

  constructor(
    manufacturer: string,
    model: string,
    cores: number,
    frequency: number,
  ) {
    this.manufacturer = manufacturer;
    this.model = model;
    this.cores = cores;
    this.frequency = frequency;
  }
}

export class GpuModel {
  manufacturer: string;
  model: string;
  memory: number;

  constructor(manufacturer: string, model: string, memory: number) {
    this.manufacturer = manufacturer;
    this.model = model;
    this.memory = memory;
  }
}

export class MotherboardModel {
  manufacturer: string;
  model: string;

  constructor(manufacturer: string, model: string) {
    this.manufacturer = manufacturer;
    this.model = model;
  }
}
export class RamStickModel {
  manufacturer: string;
  model: string;
  frequency: number;

  constructor(manufacturer: string, model: string, frequency: number) {
    this.manufacturer = manufacturer;
    this.model = model;
    this.frequency = frequency;
  }
}

export class storageDriveModel {
  manufacturer: string;
  model: string;
  type: 'SSD' | 'HDD';
  size: number;

  constructor(
    manufacturer: string,
    model: string,
    type: 'SSD' | 'HDD',
    size: number,
  ) {
    this.manufacturer = manufacturer;
    this.model = model;
    this.type = type;
    this.size = size;
  }
}
export class BaseMachineSpecificationModel {
  id: string;
  name: string;
  type: 'DIY' | 'PREBUILT' | 'LAPTOP';
  manufacturer: string;
  model: string;
  cpu: CpuModel;
  gpu: GpuModel;
  motherboard: MotherboardModel;
  ramSticks: RamStickModel[];
  storageDrives: storageDriveModel[];

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
    this.id = id;
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
