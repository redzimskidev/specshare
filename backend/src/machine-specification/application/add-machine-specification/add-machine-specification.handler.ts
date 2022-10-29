import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { AddMachineSpecificationCommand } from './add-machine-specification.command';

@CommandHandler(AddMachineSpecificationCommand)
export class AddMachineSpecificationHandler
  implements ICommandHandler<AddMachineSpecificationCommand>
{
  async execute(command: AddMachineSpecificationCommand): Promise<void> {
    return;
  }
}
