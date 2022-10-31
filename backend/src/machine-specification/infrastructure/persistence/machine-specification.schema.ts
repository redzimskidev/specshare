import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export class Cpu {
  manufacturer: string;
  model: string;
  cores: number;
  frequency: number;
}

export class Gpu {
  manufacturer: string;
  model: string;
  memory: number;
}

export class Motherboard {
  manufacturer: string;
  model: string;
}

export class RamStick {
  manufacturer: string;
  model: string;
  frequency: number;
}

export class StorageDrive {
  manufacturer: string;
  model: string;
  type: 'SSD' | 'HDD';
  size: number;
}

@Schema()
export class MachineSpecification {
  @Prop({ unique: true })
  id: string;
  @Prop()
  name: string;
  @Prop()
  type: 'DIY' | 'PREBUILT' | 'LAPTOP';
  @Prop()
  manufacturer: string;
  @Prop()
  model: string;
  @Prop({ type: Cpu })
  cpu: Cpu;
  @Prop({ type: Gpu })
  gpu: Gpu;
  @Prop({ type: Motherboard })
  motherboard: Motherboard;
  @Prop({ type: Array<RamStick> })
  ramSticks: RamStick[];
  @Prop({ type: Array<StorageDrive> })
  storageDrives: StorageDrive[];
}

export const MachineSpecificationSchema =
  SchemaFactory.createForClass(MachineSpecification);
