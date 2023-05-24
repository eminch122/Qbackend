import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class GoogleUser extends Document {
  @Prop({ required: true })
  email: string;

  @Prop()
  name?: string;

  @Prop()
  picture?: string;

  @Prop()
  accessToken?: string;

  @Prop()
  refreshToken?: string;
}

export const UserSchema = SchemaFactory.createForClass(GoogleUser);
