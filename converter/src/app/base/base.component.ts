import { Component, OnInit } from '@angular/core';
import { NgModel, FormsModule } from '@angular/forms';
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
  resultValue: string | number | null = null;
  constructor(private convertService: ConvertService) {
  }
  getResultAndUpdate(e: Event) {
    //@ts-ignore
    const targetId = e.target.id;
    console.log(targetId)
    e.preventDefault();
    if(this.unitIn !== null && this.unitOut !== null) {
      if(targetId === 'input') {
        this.convertService.getConversionResult(this.unitIn, this.unitOut, String(this.input).replace(/[^0-9\.\,]/g, '')).then((value) => {this.output = value.conversion_result})
      }
      if(targetId === 'output') {
        this.convertService.getConversionResult(this.unitOut, this.unitIn, String(this.output).replace(/[^0-9\.\,]/g, '')).then((value) => {this.input = value.conversion_result})
      }  
      if(targetId === 'unitIn' || targetId === 'unitOut')   {
        this.convertService.getConversionResult(this.unitIn, this.unitOut, String(this.input).replace(/[^0-9\.\,]/g, '')).then((value) => {this.output = value.conversion_result})
      }  
    }
  }
  ngOnInit(): void {
    
  }
}
