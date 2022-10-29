import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { AddMachineSpecificationResponseDto } from 'src/machine-specification/interface/dtos/add-machine-specification.dto';
import { AddMachineSpecificationCommand } from './add-machine-specification.command';

@CommandHandler(AddMachineSpecificationCommand)
export class AddMachineSpecificationHandler
  implements ICommandHandler<AddMachineSpecificationCommand>
{
  async execute(
    command: AddMachineSpecificationCommand,
  ): Promise<AddMachineSpecificationResponseDto> {
    return { ...command, id: '' };
  }
}
