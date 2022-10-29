import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MachineSpecificationModule } from './machine-specification/machine-specification.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.MONGO_CONNECTION_STRING),
    MachineSpecificationModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
