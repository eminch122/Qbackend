import { IsNotEmpty, IsString } from 'class-validator';

export class TokenDto {
  @IsNotEmpty()
  @IsString()
  readonly accessToken: string;

  @IsNotEmpty()
  @IsString()
  readonly refreshToken: string;
}
