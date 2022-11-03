import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { MachineSpecificationRepository } from 'src/machine-specification/infrastructure/persistence/machine-specification.repository';

export class DeleteMachineSpecificationCommand {
  constructor(public id: string) {}
}
@CommandHandler(DeleteMachineSpecificationCommand)
export class DeleteMachineSpecificationHandler
  implements ICommandHandler<DeleteMachineSpecificationCommand>
{
  constructor(private repository: MachineSpecificationRepository) {}

  async execute(command: DeleteMachineSpecificationCommand): Promise<void> {
    await this.repository.delete(command.id);
  }
}
