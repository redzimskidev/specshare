import { AddMachineSpecificationHandler } from './add-machine-specification.command';
import { DeleteMachineSpecificationHandler } from './delete-machine-specification.command';
import { UpdateMachineSpecificationHandler } from './update-machine-specification.command';

export {
  DeleteMachineSpecificationCommand,
  DeleteMachineSpecificationHandler,
} from './delete-machine-specification.command';
export {
  UpdateMachineSpecificationCommand,
  UpdateMachineSpecificationHandler,
} from './update-machine-specification.command';
export {
  AddMachineSpecificationCommand,
  AddMachineSpecificationHandler,
} from './add-machine-specification.command';

export const CommandHandlers = [
  DeleteMachineSpecificationHandler,
  UpdateMachineSpecificationHandler,
  AddMachineSpecificationHandler,
];
