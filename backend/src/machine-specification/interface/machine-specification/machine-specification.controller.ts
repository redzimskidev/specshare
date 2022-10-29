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
import { AddMachineSpecificationCommand } from 'src/machine-specification/application/add-machine-specification/add-machine-specification.command';
import { FindMachineSpecificationQuery } from 'src/machine-specification/application/find-machine-specification/find-machine-specification.query';
import { GetAllMachineSpecificationsQuery } from 'src/machine-specification/application/get-all-machine-specifications/get-all-machine-specifications.query';
import { UpdateMachineSpecificationCommand } from 'src/machine-specification/application/update-machine-specification/update-machine-specification.command';
import {
  AddMachineSpecificationBodyDto,
  AddMachineSpecificationResponseDto,
} from '../dtos/add-machine-specification.dto';
import { BaseMachineSpecificationDto } from '../dtos/base-machine-specification.dto';
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
  private sampleMachineSpecification: BaseMachineSpecificationDto = {
    id: 'guid',
    name: 'My Battlestation',
    type: 'DIY',
    manufacturer: '',
    model: '',
    cpu: {
      manufacturer: 'AMD',
      model: 'Ryzen 3600',
      cores: 6,
      frequency: 4200,
    },
    gpu: {
      manufacturer: 'Nvidia',
      model: 'RTX 3600 Ti',
      memory: 8,
    },
    motherboard: {
      manufacturer: 'MSI',
      model: 'B350 Tomahawk',
    },
    ramSticks: [
      {
        manufacturer: 'Corsair',
        model: 'Ballistix',
        frequency: 3600,
      },
      {
        manufacturer: 'Corsair',
        model: 'Ballistix',
        frequency: 3600,
      },
    ],
    storageDrives: [
      {
        manufacturer: 'Adata',
        model: 'SPG 8200',
        type: 'SSD',
        size: 512,
      },
    ],
  };

  @Get()
  @ApiResponse({ status: 200, type: GetAllMachineSpecificatSionsResponseDto })
  async getAllMachineSpecifications(
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
    return;
  }
}
