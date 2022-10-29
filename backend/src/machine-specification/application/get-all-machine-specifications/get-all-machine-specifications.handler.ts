import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { GetAllMachineSpecificationsQuery } from './get-all-machine-specifications.query';

@QueryHandler(GetAllMachineSpecificationsQuery)
export class GetAllMachineSpecificationsHandler
  implements IQueryHandler<GetAllMachineSpecificationsQuery>
{
  async execute(query: GetAllMachineSpecificationsQuery): Promise<any> {
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