import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsString, Length, Max, Min, ValidateIf } from 'class-validator';

export class CpuDto {
  @ApiProperty({
    minLength: 2,
    maxLength: 20,
    example: 'AMD',
  })
  @IsString()
  @Length(2, 20)
  manufacturer: string;
  @ApiProperty({
    minLength: 2,
    maxLength: 20,
    example: '5700x',
  })
  @IsInt()
  @Length(2, 20)
  model: string;
  @ApiProperty({
    minimum: 1,
    maximum: 128,
    example: 6,
  })
  @IsInt()
  @Min(1)
  @Max(128)
  cores: number;
  @ApiProperty({
    minimum: 100,
    maximum: 10000,
    example: 5100,
  })
  @Min(100)
  @Max(10000)
  frequency: number;
}

export class GpuDto {
  @ApiProperty({
    minLength: 2,
    maxLength: 20,
    example: 'NVidia',
  })
  @IsString()
  @Length(2, 20)
  manufacturer: string;
  @ApiProperty({
    minLength: 2,
    maxLength: 20,
    example: '3060 Ti',
  })
  @IsString()
  @Length(2, 20)
  model: string;
  @ApiProperty({
    minimum: 1,
    maximum: 64,
    example: 12,
  })
  @IsInt()
  @Min(1)
  @Max(64)
  memory: number;
}

export class MotherboardDto {
  @ApiProperty({
    minLength: 2,
    maxLength: 20,
    example: 'MSI',
  })
  @IsString()
  @Length(2, 20)
  manufacturer: string;
  @ApiProperty({
    minLength: 2,
    maxLength: 20,
    example: 'x570 Tomahawk',
  })
  @IsString()
  @Length(2, 20)
  model: string;
}
export class RamStickDto {
  @ApiProperty({
    minLength: 2,
    maxLength: 20,
    example: 'Corsair',
  })
  @IsString()
  @Length(2, 20)
  manufacturer: string;
  @ApiProperty({
    minLength: 2,
    maxLength: 20,
    example: 'Vengeance',
  })
  @IsString()
  @Length(2, 20)
  model: string;
  @ApiProperty({
    minimum: 1,
    maximum: 128,
    example: 3266,
  })
  @IsInt()
  @Min(1333)
  @Max(10000)
  frequency: number;
}

export class StorageDriveDto {
  @ApiProperty({
    minLength: 2,
    maxLength: 20,
    example: 'Samsung',
  })
  @IsString()
  @Length(2, 20)
  manufacturer: string;
  @ApiProperty({
    minLength: 2,
    maxLength: 20,
    example: '870 Evo',
  })
  @IsString()
  @Length(2, 20)
  model: string;
  @ApiProperty()
  type: 'SSD' | 'HDD';
  @ApiProperty({
    minimum: 1,
    maximum: 10240,
    example: 1024,
  })
  @IsInt()
  @Min(1)
  @Max(10240)
  size: number;
}
export class BaseMachineSpecificationDto {
  @ApiProperty({
    minLength: 24,
    maxLength: 24,
    example: '4cdfb11e1f3c000000007822',
  })
  id: string;
  @ApiProperty({
    minLength: 2,
    maxLength: 20,
    example: 'My PC',
  })
  @IsString()
  @Length(2, 20)
  name: string;
  @ApiProperty()
  type: 'DIY' | 'PREBUILT' | 'LAPTOP';
  @ApiProperty({
    minLength: 2,
    maxLength: 20,
    example: undefined,
  })
  @IsString()
  @Length(2, 20)
  @ValidateIf((o) => o.type !== 'DIY')
  manufacturer: string | undefined;
  @ApiProperty({
    minLength: 2,
    maxLength: 20,
    example: undefined,
  })
  @IsString()
  @Length(2, 20)
  @ValidateIf((o) => o.type !== 'DIY')
  model: string | undefined;
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
