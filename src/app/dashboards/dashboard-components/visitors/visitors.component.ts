import { Component } from '@angular/core';
import * as shape from 'd3-shape';
import * as d3 from 'd3';
import { multi } from './data';
import { colorSets } from '@swimlane/ngx-charts/release/utils/color-sets';

@Component({
  selector: 'app-visitors',
  templateUrl: './visitors.component.html',
  styleUrls: ['./visitors.component.scss']
})
export class VisitorsComponent {
  multi: any[];
  // options
   germany: Number;
   usa: Number;
   india: Number;
   others: Number;
   
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = false;
  showXAxisLabel = true;
  tooltipDisabled = false;
  xAxisLabel = 'Country';
  showYAxisLabel = true;
  yAxisLabel = 'Visits';
  showGridLines = true;
  innerPadding = 0;
  autoScale = true;
  timeline = false;
  barPadding = 2;
  groupPadding = 0;
  roundDomains = false;
  maxRadius = 10;
  minRadius = 3;
  view = '';
  showLabels = true;
  explodeSlices = false;
  doughnut = false;
  arcWidth = 0.25;
  rangeFillOpacity = 0;

  colorScheme = {
    domain: ['#2962FF', '#4fc3f7', '#a1aab2']
  };
  schemeType = 'ordinal';

  constructor() {
    this.germany = +Math.floor(Math.random() * 15) + 1;
    this.usa = +Math.floor(Math.random() * 35) + 1;
    this.india = +Math.floor(Math.random() * 15) + 1;
    this.others = 100;
    Object.assign(this, {
      multi
    });
  }
}
