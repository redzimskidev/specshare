import { OmitType } from '@nestjs/swagger';
import { BaseMachineSpecificationDto } from './base-machine-specification.dto';

export class AddMachineSpecificationBodyDto extends OmitType(
  BaseMachineSpecificationDto,
  ['id'] as const,
) {}

export class AddMachineSpecificationResponseDto extends BaseMachineSpecificationDto {}
