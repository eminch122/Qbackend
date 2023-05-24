import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { HttpModule } from '@nestjs/axios';
import { GoogleController } from './auth.google.controller';
import { GoogleService } from './google-auth.service';
import { UserModule } from 'src/modules/user/google/user-google.module';
import { LoginTicket } from 'google-auth-library';

@Module({
  imports: [
    UserModule,
    HttpModule,
    PassportModule.register({
      defaultStrategy: 'google',
      session: true,
    }),
    ConfigModule.forRoot({
      envFilePath: ['.env'],
    }),
  ],
  controllers: [GoogleController],
  providers: [
    ConfigService,
    GoogleService,
    LoginTicket,

  ],
  exports: [GoogleService],
})
export class GoogleModule {}
