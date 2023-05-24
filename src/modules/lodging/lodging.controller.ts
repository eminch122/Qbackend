import { Body, Controller, Get, Patch, Post, Req } from "@nestjs/common";
import { CreateLodgingDto } from "./dto/create-lodging.dto";
import { LodgingService } from "./lodging.service";

@Controller('lodging')
export class LodgingController {
  constructor(private readonly lodgingService: LodgingService) {}

  @Post('createLodging')
  async create(@Body() createLodgingDto: CreateLodgingDto) {
    return this.lodgingService.createLodging(createLodgingDto)
    
  }
 
  @Post ('update')
  async updateLodging(@Body() body: any): Promise<void> {
    const { updateTime, lodging, accessToken } = body;
    console.log(updateTime)
    return this.lodgingService.updateLodging(updateTime,lodging,accessToken)
  }
}