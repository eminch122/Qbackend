import { HttpService } from "@nestjs/axios";
import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import axios, { AxiosRequestConfig } from "axios";
import { response } from "express";
import { Model } from "mongoose";

@Injectable()
export class LodgingService {
  constructor(@InjectModel('Lodgings') private lodgingModel: Model<Lodgings> ,private readonly httpService: HttpService) {}
  
  
  async createLodging(CreateLodgingDto: Lodgings): Promise<Lodgings> {
      const createdLodging = new this.lodgingModel(CreateLodgingDto);
      return createdLodging.save();
    }
    
 
  async  getLodging(accessToken: string): Promise<any> {
    const url = `https://mybusinesslodging.googleapis.com/v1/locations/2979043596041265839/lodging`;
    const headers = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessToken}`,
    };
  
    const config: AxiosRequestConfig = {
      url,
      method: 'GET',
      headers,
    };
  
    try {
      const response = await axios(config);
      console.log(response.data)
      return response.data;
    } catch (error) {
      // Handle error
      console.error('Error retrieving lodging data:', error);
      throw error;
    }
  }

  async updateLodging(update_Time: Date, lodging: any ,accessToken: string): Promise<void> {
    const endpoint = `https://mybusinesslodging.googleapis.com/v1/locations/2979043596041265839/lodging?updateMask=*`;

    const body = {
      metadata: {
        updateTime: update_Time,
      },
      ...lodging,
    };
    console.log(body)
    const access_Token = accessToken; 

    const headers = {
       Authorization: `Bearer ${access_Token}`,
     };

      try {
         await axios.patch(endpoint, body, { headers });
          console.log(response.json,'Lodging updated successfully.');
         } catch (error) {
          console.error('Failed to update lodging:', error.response.data);
         }
  }

  
}

 
