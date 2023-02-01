import { Component, OnInit } from '@angular/core';
import { ConvertService } from '../convert.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  constructor(private  convertService: ConvertService) {

  }
  eur?: string | number
  usd?: string | number
  gbp?: string | number
  updateHeader() {
    this.convertService.getConversionToUah().then((obj) => {
      this.eur = obj.conversion_rates.EUR;
      this.usd = obj.conversion_rates.USD;
      this.gbp = obj.conversion_rates.GBP;
    })
  }
  ngOnInit(): void {
    this.updateHeader()
  }
}
