import { Component } from '@angular/core';
import { ChartOptions, ChartType, ChartDataset } from 'chart.js';
// import { labels } from 'ng2-charts';
import {  BaseChartDirective } from 'ng2-charts';
import { Array_json } from './array-json';


@Component({
  selector: 'aplicacio',
  templateUrl: './grafics.html',
  styleUrls: ['./grafics.css']
})



export class BarChartComponent {
  grafics: any = new Array_json;

  constructor() {
    console.log(this.grafics.paisos.serie["Population, total"]);
  }

  barChartOptions: ChartOptions = {
    responsive: true,
  };
  barChartLabels: BaseChartDirective["labels"] = ['Spain', 'Afghanistan'];
  barChartType: ChartType = 'bar';
  barChartLegend = true;
  barChartPlugins = [];
  barChartData: ChartDataset[] = [
    { data: [this.grafics.paisos], label: 'Best Fruits' }
  ];
}