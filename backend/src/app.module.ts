import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MachineSpecificationModule } from './machine-specification/machine-specification.module';

@Module({
  imports: [MachineSpecificationModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
