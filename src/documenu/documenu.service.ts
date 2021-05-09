import { Injectable } from '@nestjs/common';
import * as Documenu from 'documenu';
import axios from 'axios';

@Injectable()
export class DocumenuService {
  async findByZipCode(zipCode: string): Promise<any> {
    try {
      const accessToken = '2da71c6a661934dd2491178158e169d1';
      const url = `https://api.documenu.com/v2/restaurants/zip_code/${zipCode}`;
      const response = await axios.get(url, {
        headers: { 'X-API-KEY': accessToken },
      });

      return response.data;
    } catch (error) {
      return error.response.data;
    }
  }

  async findByState(state: string): Promise<any> {
    try {
      Documenu.configure('2da71c6a661934dd2491178158e169d1');
      const restaurants = await Documenu.Restaurants.getByState(state);

      return restaurants;
    } catch (error) {
      return error;
    }
  }
}
