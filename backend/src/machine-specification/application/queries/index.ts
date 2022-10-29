import { FindMachineSpecificationHandler } from './find-machine-specification.query';
import { GetAllMachineSpecificationsHandler } from './get-all-machine-specifications.query';

export {
  FindMachineSpecificationHandler,
  FindMachineSpecificationQuery,
} from './find-machine-specification.query';
export {
  GetAllMachineSpecificationsHandler,
  GetAllMachineSpecificationsQuery,
} from './get-all-machine-specifications.query';

export const QueryHandlers = [
  FindMachineSpecificationHandler,
  GetAllMachineSpecificationsHandler,
];
