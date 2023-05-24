import { HttpModule, HttpService } from "@nestjs/axios";
import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { LodgingController } from "./lodging.controller";
import { LodgingSchema } from "./lodging.schema";
import { LodgingService } from "./lodging.service";


@Module({
    imports: [MongooseModule.forFeature([{ name: 'Lodgings', schema: LodgingSchema }]),
  HttpModule ],
    controllers: [LodgingController],
    providers: [LodgingService],
    exports: [LodgingService],
  })
  export class LodgingModule {}
  