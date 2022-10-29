import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { FindMachineSpecificationResponseDto } from 'src/machine-specification/interface/dtos/find-machine-specification.dto';

export class FindMachineSpecificationQuery {
  constructor(public id: string) {}
}
@QueryHandler(FindMachineSpecificationQuery)
export class FindMachineSpecificationHandler
  implements IQueryHandler<FindMachineSpecificationQuery>
{
  async execute(
    query: FindMachineSpecificationQuery,
  ): Promise<FindMachineSpecificationResponseDto> {
    return {
      id: query.id,
      name: 'My Battlestation',
      type: 'DIY',
      manufacturer: '',
      model: '',
      cpu: {
        manufacturer: 'AMD',
        model: 'Ryzen 3600',
        cores: 6,
        frequency: 4200,
      },
      gpu: {
        manufacturer: 'Nvidia',
        model: 'RTX 3600 Ti',
        memory: 8,
      },
      motherboard: {
        manufacturer: 'MSI',
        model: 'B350 Tomahawk',
      },
      ramSticks: [
        {
          manufacturer: 'Corsair',
          model: 'Ballistix',
          frequency: 3600,
        },
        {
          manufacturer: 'Corsair',
          model: 'Ballistix',
          frequency: 3600,
        },
      ],
      storageDrives: [
        {
          manufacturer: 'Adata',
          model: 'SPG 8200',
          type: 'SSD',
          size: 512,
        },
      ],
    };
  }
}
