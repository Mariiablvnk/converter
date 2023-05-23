import { Component, OnInit } from '@angular/core';
import { ConvertService } from '../convert.service';

@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.css']
})
export class BaseComponent implements OnInit {
  currencyArray = ['UAH', 'USD', 'EUR', 'GBP'];
  unitIn: string | null = null;
  unitOut: string | null = null;
  input?: string | number;
  output?: string | number;

  constructor(private convertService: ConvertService) { }

  getResultAndUpdate(e: Event): void {
    const targetId = (e.target as HTMLInputElement).id;
    console.log(targetId);
    e.preventDefault();

    if (this.unitIn !== null && this.unitOut !== null) {
      const inputNumber = String(this.input).replace(/[^0-9\.\,]/g, '');
      const outputNumber = String(this.output).replace(/[^0-9\.\,]/g, '');

      if (targetId === 'input' || targetId === 'unitIn' || targetId === 'unitOut') {
        this.convertService.getConversionResult(this.unitIn, this.unitOut, inputNumber)
          .then(value => {
            this.output = value.conversion_result;
          });
      }

      if (targetId === 'output') {
        this.convertService.getConversionResult(this.unitOut, this.unitIn, outputNumber)
          .then(value => {
            this.input = value.conversion_result;
          });
      }
    }
  }

  ngOnInit(): void {
    
  }
}
