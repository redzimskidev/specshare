import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { MachineSpecificationRepository } from 'src/machine-specification/infrastructure/persistence/machine-specification.repository';
import { GetAllMachineSpecificatSionsResponseDto } from 'src/machine-specification/interface/dtos/get-all-machine-specifications.dto';

export class GetAllMachineSpecificationsQuery {
  constructor(public readonly page: number, public readonly pageSize: number) {}
}

@QueryHandler(GetAllMachineSpecificationsQuery)
export class GetAllMachineSpecificationsHandler
  implements IQueryHandler<GetAllMachineSpecificationsQuery>
{
  constructor(private repository: MachineSpecificationRepository) {}

  async execute(
    query: GetAllMachineSpecificationsQuery,
  ): Promise<GetAllMachineSpecificatSionsResponseDto> {
    const items = await this.repository.getPage(query.page, query.pageSize);
    const count = await this.repository.getCount();

    const hasNext = count <= (query.page + 1) * query.pageSize;

    return { items, page: query.page, hasNext };
  }
}
