import { ConfigService } from "@nestjs/config";


export const config=(configService:ConfigService) =>({
  port:configService.get<number>('APP_PORT'),
  secret:configService.get<string>('SECRET_KEY')
})