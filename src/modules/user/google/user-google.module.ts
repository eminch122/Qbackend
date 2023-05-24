import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserController } from './user-google.controller';
import { UserSchema } from './user-google.schema';
import { UserService } from './user-google.service';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'GoogleUser', schema: UserSchema }])],
  controllers: [UserController],
  providers: [UserService],
  exports:[UserService]
})
export class UserModule {}
