import { ApiProperty } from '@nestjs/swagger';
import { BaseMachineSpecificationDto } from './base-machine-specification.dto';

export class FindMachineSpecificationParamDto {
  @ApiProperty({
    minLength: 24,
    maxLength: 24,
    example: '4cdfb11e1f3c000000007822',
  })
  readonly id: string;
}

export class FindMachineSpecificationResponseDto extends BaseMachineSpecificationDto {}
