import { Controller,Post, Body } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { OAuth2Client } from 'google-auth-library';
import { GoogleService } from './google-auth.service';

@Controller()
export class GoogleController {
  private readonly oAuth2Client: OAuth2Client;
  constructor(private readonly googleService: GoogleService,private readonly configService: ConfigService) {
    this.oAuth2Client = new OAuth2Client({
      clientId: this.configService.get('CLIENT_ID'),
      clientSecret: this.configService.get('CLIENT_SECRET'),
      redirectUri: "http://localhost:3001",
    });
  }

  
  @Post('register')
  async exchangeAuthCode(@Body() body: { code: string }): Promise<any> {
    return this.googleService.getAccessTokenFromCode(body.code)
  }

  

}
