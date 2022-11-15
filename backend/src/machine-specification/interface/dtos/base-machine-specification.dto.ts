import { ApiProperty } from '@nestjs/swagger';
import {
  IsInt,
  IsOptional,
  IsString,
  Length,
  Max,
  Min,
  ValidateIf,
} from 'class-validator';

export class CpuDto {
  @ApiProperty()
  @IsString()
  @Length(2, 20)
  manufacturer: string;
  @ApiProperty()
  @IsString()
  @Length(2, 20)
  model: string | undefined;
  @ApiProperty()
  @IsInt()
  @Min(1)
  @Max(128)
  cores: number;
  @ApiProperty()
  @IsInt()
  @Min(100)
  @Max(10000)
  frequency: number;
}

export class GpuDto {
  @ApiProperty()
  @IsString()
  @Length(2, 20)
  manufacturer: string;
  @ApiProperty()
  @IsString()
  @Length(2, 20)
  model: string;
  @ApiProperty()
  @IsInt()
  @Min(1)
  @Max(64)
  memory: number;
}

export class MotherboardDto {
  @ApiProperty()
  @IsString()
  @Length(2, 20)
  manufacturer: string;
  @ApiProperty()
  @IsString()
  @Length(2, 20)
  model: string;
}
export class RamStickDto {
  @ApiProperty()
  @IsString()
  @Length(2, 20)
  manufacturer: string;
  @ApiProperty()
  @IsString()
  @Length(2, 20)
  model: string;
  @ApiProperty()
  @IsInt()
  @Min(1333)
  @Max(10000)
  frequency: number;
}

export class StorageDriveDto {
  @ApiProperty()
  @IsString()
  @Length(2, 20)
  manufacturer: string;
  @ApiProperty()
  @IsString()
  @Length(2, 20)
  model: string;
  @ApiProperty()
  type: 'SSD' | 'HDD';
  @ApiProperty()
  @IsInt()
  @Min(1)
  @Max(10240)
  size: number;
}
export class BaseMachineSpecificationDto {
  @ApiProperty()
  id: string;
  @ApiProperty()
  @IsString()
  @Length(2, 20)
  name: string;
  @ApiProperty()
  type: 'DIY' | 'PREBUILT' | 'LAPTOP';
  @ApiProperty()
  @IsString()
  @Length(2, 20)
  @ValidateIf((o) => o.type !== 'DIY')
  manufacturer: string;
  @ApiProperty()
  @IsString()
  @Length(2, 20)
  @ValidateIf((o) => o.type !== 'DIY')
  model: string;
  @ApiProperty()
  cpu: CpuDto;
  @ApiProperty()
  gpu: GpuDto;
  @ApiProperty()
  motherboard: MotherboardDto;
  @ApiProperty({ isArray: true, type: RamStickDto })
  ramSticks: RamStickDto[];
  @ApiProperty({ isArray: true, type: StorageDriveDto })
  storageDrives: StorageDriveDto[];
}
