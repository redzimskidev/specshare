import { ApiProperty } from '@nestjs/swagger';

export class DeleteMachineSpecificationParamDto {
  @ApiProperty({
    minLength: 24,
    maxLength: 24,
    example: '4cdfb11e1f3c000000007822',
  })
  readonly id: string;
}
