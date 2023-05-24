import { ConfigService } from "@nestjs/config";
const configService=new ConfigService;
const key= configService.get<number>('APP_PORT')
export const jwtConstants = {
    secret: "secret",
  };
  