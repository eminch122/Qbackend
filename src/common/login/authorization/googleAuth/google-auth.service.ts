import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { LoginTicket, OAuth2Client } from 'google-auth-library';
import { Request } from 'express';
import { User } from '../types/user.interface';
import { GoogleUser } from 'src/modules/user/google/user-google.schema';
import { UserService } from 'src/modules/user/google/user-google.service';
import axios from 'axios';
@Injectable()
export class GoogleService {
  private readonly oAuth2Client: OAuth2Client;
  constructor(private readonly configService: ConfigService ,private loginTicket:LoginTicket,
    private readonly userservice: UserService) {
    this.oAuth2Client = new OAuth2Client({
      clientId: this.configService.get('CLIENT_ID'),
      clientSecret: this.configService.get('CLIENT_SECRET'),
      redirectUri: "http://localhost:3001",
      
    });
  }

  async getAccessTokenFromCode(code: string): Promise<any> {
      const { tokens } = await this.oAuth2Client.getToken(code);
      console.log(tokens)
      const loginTicket = await this.oAuth2Client.verifyIdToken({
        idToken: tokens.id_token,
      });
      const payload = loginTicket.getPayload();
      const newUser={
        email: payload.email,
        name: payload.name,
        picture: payload.picture,
        accessToken: tokens.access_token,
        refreshToken: tokens.refresh_token
      }
      this.findOrCreateUser(newUser)
      return {accessToken:tokens.access_token}
  }


  async findOrCreateUser(user: User): Promise<GoogleUser> {
    const existingUser = await this.userservice.findByEmail(user.email);
    if (existingUser) {
      existingUser as GoogleUser;
      return this.userservice.createUser(existingUser);
    } else {
      const googleUser = user as GoogleUser;
      return this.userservice.createUser(googleUser);
    }
  }
}
