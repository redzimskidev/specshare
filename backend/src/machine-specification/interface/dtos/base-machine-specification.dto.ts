import { ApiProperty } from '@nestjs/swagger';

export class CpuDto {
  @ApiProperty()
  manufacturer: string;
  @ApiProperty()
  model: string;
  @ApiProperty()
  cores: number;
  @ApiProperty()
  frequency: number;
}

export class GpuDto {
  @ApiProperty()
  manufacturer: string;
  @ApiProperty()
  model: string;
  @ApiProperty()
  memory: number;
}

export class MotherboardDto {
  @ApiProperty()
  manufacturer: string;
  @ApiProperty()
  model: string;
}
export class RamStickDto {
  @ApiProperty()
  manufacturer: string;
  @ApiProperty()
  model: string;
  @ApiProperty()
  frequency: number;
}

export class storageDriveDto {
  @ApiProperty()
  manufacturer: string;
  @ApiProperty()
  model: string;
  @ApiProperty()
  type: 'SSD' | 'HDD';
  @ApiProperty()
  size: number;
}
export class BaseMachineSpecificationDto {
  @ApiProperty()
  id: string;
  @ApiProperty()
  name: string;
  @ApiProperty()
  type: 'DIY' | 'PREBUILT' | 'LAPTOP';
  @ApiProperty()
  manufacturer: string;
  @ApiProperty()
  model: string;
  @ApiProperty()
  cpu: CpuDto;
  @ApiProperty()
  gpu: GpuDto;
  @ApiProperty()
  motherboard: MotherboardDto;
  @ApiProperty()
  ramSticks: RamStickDto[];
  @ApiProperty()
  storageDrives: storageDriveDto[];
}
