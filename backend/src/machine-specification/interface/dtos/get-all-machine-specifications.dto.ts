import { ApiProperty } from '@nestjs/swagger';
import { BaseMachineSpecificationDto } from './base-machine-specification.dto';

export class GetAllMachineSpecificationsQueryDto {
  @ApiProperty({ required: false, default: 0, minimum: 0 })
  readonly page: number = 0;

  @ApiProperty({ required: false, default: 10, minimum: 1, maximum: 20 })
  readonly pageSize: number = 10;
}

export class ItemInGetAllMachineSpecificationByIdResponseDto extends BaseMachineSpecificationDto {}
export class GetAllMachineSpecificatSionsResponseDto {
  @ApiProperty()
  page: number;
  @ApiProperty()
  items: ItemInGetAllMachineSpecificationByIdResponseDto[];
  @ApiProperty()
  hasNext: boolean;
}
