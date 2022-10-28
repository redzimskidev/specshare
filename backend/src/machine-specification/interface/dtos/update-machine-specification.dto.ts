import { ApiProperty, OmitType } from '@nestjs/swagger';
import { BaseMachineSpecificationDto } from './base-machine-specification.dto';

export class UpdateMachineSpecificationParamDto {
  @ApiProperty({
    format: 'uuid',
    example: '3fa85f64-5717-4562-b3fc-2c963f66afa6',
  })
  readonly id: string;
}

export class UpdateMachineSpecificationBodyDto extends OmitType(
  BaseMachineSpecificationDto,
  ['id'] as const,
) {}

export class UpdateMachineSpecificationResponseDto extends BaseMachineSpecificationDto {}
