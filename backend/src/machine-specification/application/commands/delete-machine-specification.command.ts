import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { MachineSpecification } from 'src/machine-specification/infrastructure/persistence/machine-specification.schema';

export class DeleteMachineSpecificationCommand {
  constructor(public id: string) {}
}
@CommandHandler(DeleteMachineSpecificationCommand)
export class DeleteMachineSpecificationHandler
  implements ICommandHandler<DeleteMachineSpecificationCommand>
{
  constructor(
    @InjectModel(MachineSpecification.name)
    private model: Model<MachineSpecification>,
  ) {}

  async execute(command: DeleteMachineSpecificationCommand): Promise<void> {
    this.model.deleteOne({ id: command.id });
  }
}
