import { NotFoundException } from '@nestjs/common';
import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { MachineSpecificationRepository } from 'src/machine-specification/infrastructure/persistence/machine-specification.repository';
import { FindMachineSpecificationResponseDto } from 'src/machine-specification/interface/dtos/find-machine-specification.dto';

export class FindMachineSpecificationQuery {
  constructor(public id: string) {}
}
@QueryHandler(FindMachineSpecificationQuery)
export class FindMachineSpecificationHandler
  implements IQueryHandler<FindMachineSpecificationQuery>
{
  constructor(private repository: MachineSpecificationRepository) {}

  async execute(
    query: FindMachineSpecificationQuery,
  ): Promise<FindMachineSpecificationResponseDto> {
    const result = await this.repository.find(query.id);

    if (result == null) throw new NotFoundException();

    return result;
  }
}
