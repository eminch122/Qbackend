import { Module } from '@nestjs/common';
import { ConfigModule} from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GoogleModule } from './common/login/authorization/googleAuth/google-auth.module';
import { DatabaseModule } from './configuration/database.module';
import { LodgingModule } from './modules/lodging/lodging.module';
import { UserModule } from './modules/user/google/user-google.module';

@Module({
  
  imports: [

    ConfigModule.forRoot({
      isGlobal:true,
    }),
    DatabaseModule,
    UserModule,
    GoogleModule,
    LodgingModule
  ],
  
  controllers: [AppController],
  providers: [AppService],

})
export class AppModule {}
