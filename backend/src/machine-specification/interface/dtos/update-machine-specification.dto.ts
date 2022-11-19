import { ApiProperty, OmitType } from '@nestjs/swagger';
import { BaseMachineSpecificationDto } from './base-machine-specification.dto';

export class UpdateMachineSpecificationParamDto {
  @ApiProperty({
    example: '4cdfb11e1f3c000000007822',
  })
  readonly id: string;
}

export class UpdateMachineSpecificationBodyDto extends OmitType(
  BaseMachineSpecificationDto,
  ['id'] as const,
) {}

export class UpdateMachineSpecificationResponseDto extends BaseMachineSpecificationDto {}
