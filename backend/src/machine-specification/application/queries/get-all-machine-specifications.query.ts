import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { GetAllMachineSpecificatSionsResponseDto } from 'src/machine-specification/interface/dtos/get-all-machine-specifications.dto';

export class GetAllMachineSpecificationsQuery {
  constructor(public readonly page: number, public readonly pageSize: number) {}
}

@QueryHandler(GetAllMachineSpecificationsQuery)
export class GetAllMachineSpecificationsHandler
  implements IQueryHandler<GetAllMachineSpecificationsQuery>
{
  async execute(
    query: GetAllMachineSpecificationsQuery,
  ): Promise<GetAllMachineSpecificatSionsResponseDto> {
    return {
      page: query.page,
      hasNext: false,
      items: [
        {
          id: 'guid',
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
        },
      ],
    };
  }
}
