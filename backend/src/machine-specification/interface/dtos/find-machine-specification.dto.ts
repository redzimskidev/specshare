import { ApiProperty } from '@nestjs/swagger';
import { BaseMachineSpecificationDto } from './base-machine-specification.dto';

export class FindMachineSpecificationByIdParamDto {
  @ApiProperty({
    format: 'uuid',
    example: '3fa85f64-5717-4562-b3fc-2c963f66afa6',
  })
  readonly id: string;
}

export class FindMachineSpecificationByIdResponseDto extends BaseMachineSpecificationDto {}
