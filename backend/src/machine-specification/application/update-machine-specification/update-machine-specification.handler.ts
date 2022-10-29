import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { UpdateMachineSpecificationResponseDto } from 'src/machine-specification/interface/dtos/update-machine-specification.dto';
import { UpdateMachineSpecificationCommand } from './update-machine-specification.command';

@CommandHandler(UpdateMachineSpecificationCommand)
export class UpdateMachineSpecificationHandler
  implements ICommandHandler<UpdateMachineSpecificationCommand>
{
  async execute(
    command: UpdateMachineSpecificationCommand,
  ): Promise<UpdateMachineSpecificationResponseDto> {
    return command;
  }
}
