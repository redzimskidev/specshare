import { ApiProperty } from '@nestjs/swagger';

export class BaseMachineSpecificationDto {
  @ApiProperty()
  id: string;
  @ApiProperty()
  name: string;
  @ApiProperty()
  type: 'DIY' | 'PREBUILT' | 'LAPTOP';
  @ApiProperty()
  modelName: string;
}
