import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { DeleteMachineSpecificationCommand } from './delete-machine-specification.command';

@CommandHandler(DeleteMachineSpecificationCommand)
export class DeleteMachineSpecificationHandler
  implements ICommandHandler<DeleteMachineSpecificationCommand>
{
  async execute(command: DeleteMachineSpecificationCommand): Promise<void> {
    return;
  }
}
