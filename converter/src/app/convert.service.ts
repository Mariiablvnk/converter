import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ConvertService {
  apiUrl = 'https://v6.exchangerate-api.com/v6/3bd2bbf3dc59778efc14d8fd';

  constructor(private http: HttpClient) {}

  getConversionResult(base: string, target: string, amount: string): Promise<any> {
    return this.http.get(`${this.apiUrl}/pair/${base}/${target}/${amount}`).toPromise()
      .catch(error => {
        const message = `An error has occurred: ${error.statusText}`;
        throw new Error(message);
      });
  }

  getConversionToUah(): Promise<any> {
    return this.http.get(`${this.apiUrl}/latest/UAH`).toPromise()
      .catch(error => {
        const message = `An error has occurred: ${error.statusText}`;
        throw new Error(message);
      });
  }
}
