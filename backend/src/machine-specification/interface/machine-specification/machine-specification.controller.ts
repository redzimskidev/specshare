import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ApiResponse } from '@nestjs/swagger';
import { AddMachineSpecificationBodyDto } from '../dtos/add-machine-specification.dto';
import {
  FindMachineSpecificationByIdParamDto,
  FindMachineSpecificationByIdResponseDto,
} from '../dtos/find-machine-specification.dto';
import { GetAllMachineSpecificatSionsResponseDto } from '../dtos/get-all-machine-specifications.dto';
import {
  UpdateMachineSpecificationBodyDto,
  UpdateMachineSpecificationParamDto,
  UpdateMachineSpecificationResponseDto,
} from '../dtos/update-machine-specification.dto';

@Controller('machine-specification')
export class MachineSpecificationController {
  @Get()
  @ApiResponse({ status: 200, type: GetAllMachineSpecificatSionsResponseDto })
  async getAll(): Promise<GetAllMachineSpecificatSionsResponseDto> {
    return [];
  }

  @Get('/:id')
  @ApiResponse({ status: 200, type: FindMachineSpecificationByIdResponseDto })
  @ApiResponse({ status: 404 })
  async find(
    @Param() param: FindMachineSpecificationByIdParamDto,
  ): Promise<FindMachineSpecificationByIdResponseDto> {
    return {} as any;
  }

  @Post()
  @ApiResponse({ status: 201 })
  async addMachineSpecification(
    @Body() Body: AddMachineSpecificationBodyDto,
  ): Promise<void> {
    return;
  }

  @Put('/:id')
  @ApiResponse({ status: 200 })
  async updateMachineSpecification(
    @Param() param: UpdateMachineSpecificationParamDto,
    @Body() body: UpdateMachineSpecificationBodyDto,
  ): Promise<UpdateMachineSpecificationResponseDto> {
    return {} as any;
  }

  @Delete('/:id')
  @ApiResponse({ status: 200, type: UpdateMachineSpecificationResponseDto })
  async deleteMachineSpecification(
    @Param() param: UpdateMachineSpecificationParamDto,
    @Body() body: UpdateMachineSpecificationBodyDto,
  ): Promise<UpdateMachineSpecificationResponseDto> {
    return {} as any;
  }
}
