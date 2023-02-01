import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConvertService {
  fetchUrl = 'https://v6.exchangerate-api.com/v6/3bd2bbf3dc59778efc14d8fd'
  constructor() {

  }
  async getConversionResult(base: string, target: string, amount: string) {
    const response = await fetch(`${this.fetchUrl}/pair/${base}/${target}/${amount}`);
    if (!response.ok) {
      const message = `An error has occured: ${response.status}`;
      throw new Error(message);
    }
    return await response.json()
  }

  async getConversionToUah() {
    const response = await fetch(`${this.fetchUrl}/latest/UAH`);
    if (!response.ok) {
      const message = `An error has occured: ${response.status}`;
      throw new Error(message);
    }
    return await response.json()
  }
  

}
