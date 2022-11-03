import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { MachineSpecification } from './machine-specification.schema';

export class MachineSpecificationRepository {
  constructor(
    @InjectModel(MachineSpecification.name)
    private model: Model<MachineSpecification>,
  ) {}

  async getCount(): Promise<number> {
    return await this.model.count();
  }

  async getPage(
    page: number,
    pageSize: number,
  ): Promise<MachineSpecification[]> {
    return await this.model
      .find()
      .skip(page * pageSize)
      .limit(pageSize)
      .exec();
  }

  async find(id: string): Promise<MachineSpecification | null> {
    return this.model.findById(id);
  }

  async create(
    machineSpecification: Omit<MachineSpecification, 'id'>,
  ): Promise<MachineSpecification> {
    return this.model.create(machineSpecification);
  }

  async update(
    machineSpecification: MachineSpecification,
  ): Promise<MachineSpecification> {
    return this.model.findOneAndUpdate(
      { id: machineSpecification.id },
      machineSpecification,
      {
        new: true,
      },
    );
  }

  async delete(id: string): Promise<void> {
    this.model.deleteOne({ id });
  }
}
