import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MachineSpecificationModule } from './machine-specification/machine-specification.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://specshare:<password>@cluster0.urbcdk2.mongodb.net/?retryWrites=true&w=majority',
    ),
    MachineSpecificationModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
