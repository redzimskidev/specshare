import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';

export class DeleteMachineSpecificationCommand {
  constructor(public id: string) {}
}
@CommandHandler(DeleteMachineSpecificationCommand)
export class DeleteMachineSpecificationHandler
  implements ICommandHandler<DeleteMachineSpecificationCommand>
{
  async execute(command: DeleteMachineSpecificationCommand): Promise<void> {
    return;
  }
}
