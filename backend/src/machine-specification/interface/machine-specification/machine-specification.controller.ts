import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { ApiResponse } from '@nestjs/swagger';
import { AddMachineSpecificationCommand } from 'src/machine-specification/application/commands/add-machine-specification.command';
import { DeleteMachineSpecificationCommand } from 'src/machine-specification/application/commands/delete-machine-specification.command';
import { FindMachineSpecificationQuery } from 'src/machine-specification/application/queries/find-machine-specification.query';
import { GetAllMachineSpecificationsQuery } from 'src/machine-specification/application/queries/get-all-machine-specifications.query';
import { UpdateMachineSpecificationCommand } from 'src/machine-specification/application/commands/update-machine-specification.command';
import {
  AddMachineSpecificationBodyDto,
  AddMachineSpecificationResponseDto,
} from '../dtos/add-machine-specification.dto';
import { DeleteMachineSpecificationParamDto } from '../dtos/delete-machine-specification.dto';
import {
  FindMachineSpecificationParamDto,
  FindMachineSpecificationResponseDto,
} from '../dtos/find-machine-specification.dto';
import {
  GetAllMachineSpecificationsQueryDto,
  GetAllMachineSpecificatSionsResponseDto,
} from '../dtos/get-all-machine-specifications.dto';
import {
  UpdateMachineSpecificationBodyDto,
  UpdateMachineSpecificationParamDto,
  UpdateMachineSpecificationResponseDto,
} from '../dtos/update-machine-specification.dto';

@Controller('machine-specification')
export class MachineSpecificationController {
  constructor(
    private readonly commandBus: CommandBus,
    private readonly queryBus: QueryBus,
  ) {}

  @Get()
  @ApiResponse({ status: 200, type: GetAllMachineSpecificatSionsResponseDto })
  async getAll(
    @Query() query: GetAllMachineSpecificationsQueryDto,
  ): Promise<GetAllMachineSpecificatSionsResponseDto> {
    return this.queryBus.execute(
      new GetAllMachineSpecificationsQuery(query.page, query.pageSize),
    );
  }

  @Get('/:id')
  @ApiResponse({ status: 200, type: FindMachineSpecificationResponseDto })
  @ApiResponse({ status: 404 })
  async find(
    @Param() param: FindMachineSpecificationParamDto,
  ): Promise<FindMachineSpecificationResponseDto> {
    return this.queryBus.execute(new FindMachineSpecificationQuery(param.id));
  }

  @Post()
  @ApiResponse({ status: 201 })
  async addMachineSpecification(
    @Body() body: AddMachineSpecificationBodyDto,
  ): Promise<AddMachineSpecificationResponseDto> {
    return this.commandBus.execute(
      new AddMachineSpecificationCommand(
        body.name,
        body.type,
        body.manufacturer,
        body.model,
        body.cpu,
        body.gpu,
        body.motherboard,
        body.ramSticks,
        body.storageDrives,
      ),
    );
  }

  @Put('/:id')
  @ApiResponse({ status: 200 })
  async updateMachineSpecification(
    @Param() param: UpdateMachineSpecificationParamDto,
    @Body() body: UpdateMachineSpecificationBodyDto,
  ): Promise<UpdateMachineSpecificationResponseDto> {
    return this.commandBus.execute(
      new UpdateMachineSpecificationCommand(
        param.id,
        body.name,
        body.type,
        body.manufacturer,
        body.model,
        body.cpu,
        body.gpu,
        body.motherboard,
        body.ramSticks,
        body.storageDrives,
      ),
    );
  }

  @Delete('/:id')
  @ApiResponse({ status: 200, type: UpdateMachineSpecificationResponseDto })
  async deleteMachineSpecification(
    @Param() param: DeleteMachineSpecificationParamDto,
  ): Promise<void> {
    this.commandBus.execute(new DeleteMachineSpecificationCommand(param.id));
  }
}
