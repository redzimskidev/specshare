import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { MachineSpecification } from 'src/machine-specification/infrastructure/persistence/machine-specification.schema';
import { GetAllMachineSpecificatSionsResponseDto } from 'src/machine-specification/interface/dtos/get-all-machine-specifications.dto';

export class GetAllMachineSpecificationsQuery {
  constructor(public readonly page: number, public readonly pageSize: number) {}
}

@QueryHandler(GetAllMachineSpecificationsQuery)
export class GetAllMachineSpecificationsHandler
  implements IQueryHandler<GetAllMachineSpecificationsQuery>
{
  constructor(
    @InjectModel(MachineSpecification.name)
    private model: Model<MachineSpecification>,
  ) {}

  async execute(
    query: GetAllMachineSpecificationsQuery,
  ): Promise<GetAllMachineSpecificatSionsResponseDto> {
    const items = await this.model
      .find()
      .skip(query.page * query.pageSize)
      .limit(query.pageSize)
      .exec();

    const count = await this.model.count();
    const hasNext = count <= (query.page + 1) * query.pageSize;

    return { items, page: query.page, hasNext };
  }
}
