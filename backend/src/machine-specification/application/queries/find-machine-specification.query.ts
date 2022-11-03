import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { MachineSpecification } from 'src/machine-specification/infrastructure/persistence/machine-specification.schema';
import { FindMachineSpecificationResponseDto } from 'src/machine-specification/interface/dtos/find-machine-specification.dto';

export class FindMachineSpecificationQuery {
  constructor(public id: string) {}
}
@QueryHandler(FindMachineSpecificationQuery)
export class FindMachineSpecificationHandler
  implements IQueryHandler<FindMachineSpecificationQuery>
{
  constructor(
    @InjectModel(MachineSpecification.name)
    private model: Model<MachineSpecification>,
  ) {}

  async execute(
    query: FindMachineSpecificationQuery,
  ): Promise<FindMachineSpecificationResponseDto> {
    return this.model.findById(query.id);
  }
}
