export interface User {
    email: string;
    name?: string;
    picture?: string;
    accessToken?:string;
    refreshToken?:string;
  }