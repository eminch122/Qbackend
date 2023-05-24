import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { GoogleUser } from './user-google.schema';

@Injectable()
export class UserService {
  constructor(@InjectModel(GoogleUser.name) private userModel: Model<GoogleUser>) {}

  async createUser(createUserDto: GoogleUser): Promise<GoogleUser> {
    const createdUser = new this.userModel(createUserDto);
    return createdUser.save();
  }

  async findByEmail(email: string): Promise<GoogleUser> {
    return this.userModel.findOne({ email }).exec();
  }
  async getAccessToken(email: string): Promise<string> {
    const googleUser = await this.userModel.findOne({ email }, 'accessToken');
    if (googleUser) {
      return googleUser.accessToken;
    } else {
      throw new Error('User not found.');
    }
  }
  
}
