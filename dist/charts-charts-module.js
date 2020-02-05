(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["charts-charts-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/charts/chart-js/chartjs.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/charts/chart-js/chartjs.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n    <div class=\"col-lg-6\">\r\n        <div class=\"card\">\r\n            <div class=\"card-body\">\r\n                <h4 class=\"card-title\">Bar Sales Chart</h4>\r\n                <h6 class=\"card-subtitle\">This is the simple example of bar chart</h6>\r\n                <canvas baseChart [datasets]=\"barChartData\" [labels]=\"barChartLabels\" [options]=\"barChartOptions\" [legend]=\"barChartLegend\"\r\n                    [chartType]=\"barChartType\" (chartHover)=\"chartHovered($event)\" [colors]=\"barChartColors\" (chartClick)=\"chartClicked($event)\">\r\n                </canvas>\r\n            </div>\r\n            <div class=\"card-footer\">\r\n                <button class=\"btn btn-info btn-sm\" (click)=\"randomize()\">Update</button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"col-lg-6\">\r\n        <div class=\"card\">\r\n            <div class=\"card-body\">\r\n                <h4 class=\"card-title\">Doughnut Chart</h4>\r\n                <h6 class=\"card-subtitle\">This is the simple example of Doughnut chart</h6>\r\n                <canvas baseChart height=\"165px\" [data]=\"doughnutChartData\" [labels]=\"doughnutChartLabels\" [chartType]=\"doughnutChartType\"\r\n                    (chartHover)=\"chartHovered($event)\" (chartClick)=\"chartClicked($event)\" [colors]=\"[{backgroundColor: ['#a1aab2', '#36bea6', '#2962FF']}]\">\r\n                </canvas>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<div class=\"row\">\r\n    <div class=\"col-lg-6\">\r\n        <div class=\"card\">\r\n            <div class=\"card-body\">\r\n                <h4 class=\"card-title\">Radar Chart</h4>\r\n                <h6 class=\"card-subtitle\">This is the simple example of Radar chart</h6>\r\n                <canvas baseChart height=\"150px\" [datasets]=\"radarChartData\" [labels]=\"radarChartLabels\" [chartType]=\"radarChartType\" (chartHover)=\"chartHovered($event)\"\r\n                    (chartClick)=\"chartClicked($event)\" [colors]=\"radarChartColors\">\r\n                </canvas>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"col-lg-6\">\r\n        <div class=\"card\">\r\n            <div class=\"card-body\">\r\n                <h4 class=\"card-title\">Pie Chart</h4>\r\n                <h6 class=\"card-subtitle\">This is the simple example of Pie chart</h6>\r\n                <canvas baseChart height=\"150px\" [data]=\"pieChartData\" [labels]=\"pieChartLabels\" [chartType]=\"pieChartType\" (chartHover)=\"chartHovered($event)\"\r\n                    (chartClick)=\"chartClicked($event)\" [colors]=\"[{backgroundColor: ['#a1aab2', '#36bea6', '#2962FF']}]\">\r\n                </canvas>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<div class=\"row\">\r\n    <div class=\"col-lg-6\">\r\n        <div class=\"card\">\r\n\r\n            <div class=\"card-body\">\r\n                <h4 class=\"card-title\">Polar Area Chart</h4>\r\n                <h6 class=\"card-subtitle\">This is the simple example of Polar Area Chart</h6>\r\n                <canvas baseChart height=\"130px\" [data]=\"polarAreaChartData\" [labels]=\"polarAreaChartLabels\" [legend]=\"polarAreaLegend\" [chartType]=\"polarAreaChartType\"\r\n                    (chartHover)=\"chartHovered($event)\" (chartClick)=\"chartClicked($event)\" [colors]=\"[{backgroundColor: ['#a1aab2', '#36bea6', '#2962FF', '#7460ee', '#f62d51']}]\">\r\n                </canvas>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"col-lg-6\">\r\n        <div class=\"card\">\r\n            <div class=\"card-body\">\r\n                <h4 class=\"card-title\">Line Chart</h4>\r\n                <h6 class=\"card-subtitle\">This is the simple example of Polar Line Chart</h6>\r\n                <canvas baseChart height=\"130\" [datasets]=\"lineChartData\" [labels]=\"lineChartLabels\" [options]=\"lineChartOptions\" [colors]=\"lineChartColors\"\r\n                    [legend]=\"lineChartLegend\" [chartType]=\"lineChartType\" (chartHover)=\"chartHovered($event)\" (chartClick)=\"chartClicked($event)\">\r\n                </canvas>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/charts/chartist-js/chartistjs.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/charts/chartist-js/chartistjs.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n    <div class=\"col-12\">\r\n        <div class=\"card\">\r\n            <div class=\"card-body\">\r\n                <h4 class=\"card-title\">Bar chart Example</h4>\r\n                <h6 class=\"card-subtitle\">This is the simple data export from the json file and creating a bar chart</h6>\r\n                <div class=\"barchrt\" style=\"height:400px;\">\r\n                    <x-chartist class=\"\" [data]=\"barChart1.data\" [type]=\"barChart1.type\" [options]=\"barChart1.options\" [responsiveOptions]=\"barChart1.responsiveOptions\"\r\n                        [events]=\"barChart1.events\"> </x-chartist>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"card\">\r\n            <div class=\"card-body\">\r\n                <h4 class=\"card-title\">Line Area chart Example</h4>\r\n                <h6 class=\"card-subtitle\">This is the simple data export from the json file and creating a Line chart</h6>\r\n                <div class=\"linearea\" style=\"height:400px;\">\r\n                    <x-chartist class=\"\" [data]=\"lineChart1.data\" [type]=\"lineChart1.type\" [options]=\"lineChart1.options\" [responsiveOptions]=\"lineChart1.responsiveOptions\"\r\n                        [events]=\"lineChart1.events\"> </x-chartist>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"card\">\r\n            <div class=\"card-body\">\r\n                <h4 class=\"card-title\">Line chart Example</h4>\r\n                <h6 class=\"card-subtitle\">This is the simple data export from the json file and creating a Line chart</h6>\r\n                <div class=\"linearea\" style=\"height:400px;\">\r\n                    <x-chartist class=\"\" [data]=\"lineChart2.data\" [type]=\"lineChart2.type\" [options]=\"lineChart2.options\" [responsiveOptions]=\"lineChart2.responsiveOptions\"\r\n                        [events]=\"lineChart2.events\"> </x-chartist>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"card\">\r\n            <div class=\"card-body\">\r\n                <h4 class=\"card-title\">Line chart 2 Example</h4>\r\n                <h6 class=\"card-subtitle\">This is the simple data export from the json file and creating a Line chart</h6>\r\n                <div class=\"linearea\" style=\"height:400px;\">\r\n                    <x-chartist class=\"\" [data]=\"lineChart3.data\" [type]=\"lineChart3.type\" [options]=\"lineChart3.options\" [responsiveOptions]=\"lineChart3.responsiveOptions\"\r\n                        [events]=\"lineChart3.events\"> </x-chartist>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"card\">\r\n            <div class=\"card-body\">\r\n                <h4 class=\"card-title\">Scatter chart Example</h4>\r\n                <h6 class=\"card-subtitle\">This is the simple data export from the json file and creating a Scatter chart</h6>\r\n                <div class=\"linearea\" style=\"height:400px;\">\r\n                    <x-chartist class=\"\" [data]=\"scatterChart1.data\" [type]=\"scatterChart1.type\" [options]=\"scatterChart1.options\" [responsiveOptions]=\"scatterChart1.responsiveOptions\"\r\n                        [events]=\"scatterChart1.events\"> </x-chartist>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"card\">\r\n            <div class=\"card-body\">\r\n                <h4 class=\"card-title\">Pie chart Example</h4>\r\n                <h6 class=\"card-subtitle\">This is the simple data export from the json file and creating a Pie chart</h6>\r\n                <div class=\"piechart\" style=\"height:250px;\">\r\n                    <x-chartist class=\"\" [data]=\"pieChart1.data\" [type]=\"pieChart1.type\" [options]=\"pieChart1.options\" [responsiveOptions]=\"pieChart1.responsiveOptions\"\r\n                        [events]=\"pieChart1.events\"> </x-chartist>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"card\">\r\n            <div class=\"card-body\">\r\n                <h4 class=\"card-title\">Donute chart Example</h4>\r\n                <h6 class=\"card-subtitle\">This is the simple data export from the json file and creating a Pie chart</h6>\r\n                <div class=\"piechart\" style=\"height:250px;\">\r\n                    <x-chartist class=\"\" [data]=\"donuteChart1.data\" [type]=\"donuteChart1.type\" [options]=\"donuteChart1.options\" [responsiveOptions]=\"donuteChart1.responsiveOptions\"\r\n                        [events]=\"donuteChart1.events\"> </x-chartist>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"card\">\r\n            <div class=\"card-body\">\r\n                <h4 class=\"card-title\">Bipollar chart Example</h4>\r\n                <h6 class=\"card-subtitle\">This is the simple data export from the json file and creating a Bipollar chart</h6>\r\n                <div class=\"barchrt\" style=\"height:400px;\">\r\n                    <x-chartist class=\"\" [data]=\"bipollarChart1.data\" [type]=\"bipollarChart1.type\" [options]=\"bipollarChart1.options\" [responsiveOptions]=\"bipollarChart1.responsiveOptions\"\r\n                        [events]=\"bipollarChart1.events\"> </x-chartist>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"card\">\r\n            <div class=\"card-body\" style=\"height:400px;\">\r\n                <app-dynamic-chart class=\"barchrt linearea\"></app-dynamic-chart>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/charts/ngx-charts/ngx-chart.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/charts/ngx-charts/ngx-chart.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n    <div class=\"col-md-6\">\r\n        <div class=\"card\">\r\n            <div class=\"card-body\">\r\n                <h4 class=\"card-title\">Vertical Bar Chart</h4>\r\n                <ngx-charts-bar-vertical class=\"chart-container\" [scheme]=\"colorScheme\" [schemeType]=\"schemeType\" [results]=\"single\" [gradient]=\"gradient\"\r\n                    [xAxis]=\"showXAxis\" [yAxis]=\"showYAxis\" [legend]=\"showLegend\" [showXAxisLabel]=\"showXAxisLabel\" [showYAxisLabel]=\"showYAxisLabel\"\r\n                    [tooltipDisabled]=\"tooltipDisabled\" [xAxisLabel]=\"xAxisLabel\" [yAxisLabel]=\"yAxisLabel\" [showGridLines]=\"showGridLines\"\r\n                    [barPadding]=\"40\" [view]=\"view\" [roundDomains]=\"roundDomains\" (select)=\"select($event)\" (legendLabelClick)=\"onLegendLabelClick($event)\">\r\n                </ngx-charts-bar-vertical>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"col-md-6\">\r\n        <div class=\"card\">\r\n            <div class=\"card-body\">\r\n                <h4 class=\"card-title\">Horizontal bar chart</h4>\r\n                <ngx-charts-bar-horizontal class=\"chart-container\" [scheme]=\"colorScheme\" [schemeType]=\"schemeType\" [results]=\"single\" [gradient]=\"gradient\"\r\n                    [xAxis]=\"showXAxis\" [yAxis]=\"showYAxis\" [legend]=\"showLegend\" [showXAxisLabel]=\"showXAxisLabel\" [showYAxisLabel]=\"showYAxisLabel\"\r\n                    [tooltipDisabled]=\"tooltipDisabled\" [xAxisLabel]=\"xAxisLabel\" [yAxisLabel]=\"yAxisLabel\" [showGridLines]=\"showGridLines\"\r\n                    [barPadding]=\"20\" [roundDomains]=\"roundDomains\" (legendLabelClick)=\"onLegendLabelClick($event)\" (select)=\"select($event)\">\r\n                </ngx-charts-bar-horizontal>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"col-md-6\">\r\n        <div class=\"card\">\r\n            <div class=\"card-body\">\r\n                <h4 class=\"card-title\">Group Vertical bar chart</h4>\r\n                <ngx-charts-bar-vertical-2d class=\"chart-container\" [scheme]=\"colorScheme\" [schemeType]=\"schemeType\" [results]=\"multi\" [gradient]=\"gradient\"\r\n                    [xAxis]=\"showXAxis\" [yAxis]=\"showYAxis\" [legend]=\"showLegend\" [showXAxisLabel]=\"showXAxisLabel\" [showYAxisLabel]=\"showYAxisLabel\"\r\n                    [tooltipDisabled]=\"tooltipDisabled\" [xAxisLabel]=\"xAxisLabel\" [yAxisLabel]=\"yAxisLabel\" (legendLabelClick)=\"onLegendLabelClick($event)\"\r\n                    [showGridLines]=\"showGridLines\" [barPadding]=\"barPadding\" [groupPadding]=\"20\" [roundDomains]=\"roundDomains\"\r\n                    (select)=\"select($event)\">\r\n                </ngx-charts-bar-vertical-2d>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"col-md-6\">\r\n        <div class=\"card\">\r\n            <div class=\"card-body\">\r\n                <h4 class=\"card-title\">Group horizontal bar chart</h4>\r\n                <ngx-charts-bar-horizontal-2d class=\"chart-container\" [scheme]=\"colorScheme\" [schemeType]=\"schemeType\" [results]=\"multi\"\r\n                    [gradient]=\"gradient\" [tooltipDisabled]=\"tooltipDisabled\" [xAxis]=\"showXAxis\" [yAxis]=\"showYAxis\" [legend]=\"showLegend\"\r\n                    (legendLabelClick)=\"onLegendLabelClick($event)\" [showXAxisLabel]=\"showXAxisLabel\" [showYAxisLabel]=\"showYAxisLabel\"\r\n                    [xAxisLabel]=\"xAxisLabel\" [yAxisLabel]=\"yAxisLabel\" [showGridLines]=\"showGridLines\" [barPadding]=\"barPadding\"\r\n                    [groupPadding]=\"20\" [roundDomains]=\"roundDomains\" (select)=\"select($event)\">\r\n                </ngx-charts-bar-horizontal-2d>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"col-md-6\">\r\n        <div class=\"card\">\r\n            <div class=\"card-body\">\r\n                <h4 class=\"card-title\">Line chart</h4>\r\n                <ngx-charts-line-chart class=\"chart-container\" [scheme]=\"colorScheme\" [schemeType]=\"schemeType\" [results]=\"dateDataWithOrWithoutRange\"\r\n                    [legend]=\"showLegend\" (legendLabelClick)=\"onLegendLabelClick($event)\" [gradient]=\"gradient\" [xAxis]=\"showXAxis\"\r\n                    [yAxis]=\"showYAxis\" [showXAxisLabel]=\"showXAxisLabel\" [showYAxisLabel]=\"showYAxisLabel\" [xAxisLabel]=\"xAxisLabel\"\r\n                    [yAxisLabel]=\"yAxisLabel\" [autoScale]=\"autoScale\" [timeline]=\"timeline\" [showGridLines]=\"showGridLines\" [curve]=\"curve\"\r\n                    [rangeFillOpacity]=\"rangeFillOpacity\" [roundDomains]=\"roundDomains\" [tooltipDisabled]=\"true\" (select)=\"select($event)\">\r\n                </ngx-charts-line-chart>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"col-md-6\">\r\n        <div class=\"card\">\r\n            <div class=\"card-body\">\r\n                <h4 class=\"card-title\">Area chart</h4>\r\n                <ngx-charts-area-chart class=\"chart-container\" [scheme]=\"colorScheme\" [schemeType]=\"schemeType\" [results]=\"dateData\" [legend]=\"showLegend\"\r\n                    (legendLabelClick)=\"onLegendLabelClick($event)\" [gradient]=\"gradient\" [xAxis]=\"showXAxis\" [yAxis]=\"showYAxis\"\r\n                    [showXAxisLabel]=\"showXAxisLabel\" [showYAxisLabel]=\"showYAxisLabel\" [xAxisLabel]=\"xAxisLabel\" [yAxisLabel]=\"yAxisLabel\"\r\n                    [autoScale]=\"autoScale\" [timeline]=\"timeline\" [showGridLines]=\"showGridLines\" [roundDomains]=\"roundDomains\"\r\n                    [curve]=\"curve\" [tooltipDisabled]=\"tooltipDisabled\" (select)=\"select($event)\">\r\n                </ngx-charts-area-chart>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"col-md-6\">\r\n        <div class=\"card\">\r\n            <div class=\"card-body\">\r\n                <h4 class=\"card-title\">Stacked chart</h4>\r\n                <ngx-charts-area-chart-stacked class=\"chart-container\" [scheme]=\"colorScheme\" [schemeType]=\"schemeType\" [results]=\"dateData\"\r\n                    [legend]=\"showLegend\" [gradient]=\"gradient\" [xAxis]=\"showXAxis\" [yAxis]=\"showYAxis\" (legendLabelClick)=\"onLegendLabelClick($event)\"\r\n                    [showXAxisLabel]=\"showXAxisLabel\" [showYAxisLabel]=\"showYAxisLabel\" [xAxisLabel]=\"xAxisLabel\" [yAxisLabel]=\"yAxisLabel\"\r\n                    [timeline]=\"timeline\" [showGridLines]=\"showGridLines\" [roundDomains]=\"roundDomains\" [tooltipDisabled]=\"tooltipDisabled\"\r\n                    [curve]=\"curve\" (select)=\"select($event)\">\r\n                </ngx-charts-area-chart-stacked>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"col-md-6\">\r\n        <div class=\"card\">\r\n            <div class=\"card-body\">\r\n                <h4 class=\"card-title\">Normalize Area chart</h4>\r\n                <ngx-charts-area-chart-normalized class=\"chart-container\" [scheme]=\"colorScheme\" [schemeType]=\"schemeType\" [results]=\"dateData\"\r\n                    [legend]=\"showLegend\" [gradient]=\"gradient\" [xAxis]=\"showXAxis\" (legendLabelClick)=\"onLegendLabelClick($event)\"\r\n                    [yAxis]=\"showYAxis\" [showXAxisLabel]=\"showXAxisLabel\" [showYAxisLabel]=\"showYAxisLabel\" [xAxisLabel]=\"xAxisLabel\"\r\n                    [yAxisLabel]=\"yAxisLabel\" [timeline]=\"timeline\" [showGridLines]=\"showGridLines\" [roundDomains]=\"roundDomains\"\r\n                    [tooltipDisabled]=\"tooltipDisabled\" [curve]=\"curve\" (select)=\"select($event)\">\r\n                </ngx-charts-area-chart-normalized>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"col-md-6\">\r\n        <div class=\"card\">\r\n            <div class=\"card-body\">\r\n                <h4 class=\"card-title\">Pie chart</h4>\r\n                <ngx-charts-pie-chart class=\"chart-container\" [scheme]=\"colorScheme\" [results]=\"single\" [legend]=\"showLegend\" [explodeSlices]=\"explodeSlices\"\r\n                    [labels]=\"showLabels\" [doughnut]=\"doughnut\" [arcWidth]=\"arcWidth\" (legendLabelClick)=\"onLegendLabelClick($event)\"\r\n                    [gradient]=\"gradient\" [tooltipDisabled]=\"tooltipDisabled\" (select)=\"select($event)\">\r\n                </ngx-charts-pie-chart>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"col-md-6\">\r\n        <div class=\"card\">\r\n            <div class=\"card-body\">\r\n                <h4 class=\"card-title\">Advanced pie chart</h4>\r\n                <ngx-charts-advanced-pie-chart class=\"chart-container\" [scheme]=\"colorScheme\" [results]=\"single\" (legendLabelClick)=\"onLegendLabelClick($event)\"\r\n                    [gradient]=\"gradient\" [tooltipDisabled]=\"tooltipDisabled\" (select)=\"select($event)\">\r\n                </ngx-charts-advanced-pie-chart>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/charts/chart-js/chartjs.component.ts":
/*!******************************************************!*\
  !*** ./src/app/charts/chart-js/chartjs.component.ts ***!
  \******************************************************/
/*! exports provided: ChartjsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChartjsComponent", function() { return ChartjsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ChartjsComponent = /** @class */ (function () {
    function ChartjsComponent() {
        // This is line chart
        // bar chart
        this.barChartOptions = {
            scaleShowVerticalLines: false,
            responsive: true,
            barThickness: 10
        };
        this.barChartLabels = [
            '2011',
            '2012',
            '2013',
            '2014',
            '2015',
            '2016',
            '2017'
        ];
        this.barChartType = 'bar';
        this.barChartLegend = true;
        this.barChartData = [
            { data: [65, 59, 80, 81, 56, 55, 40], label: 'Iphone 8' },
            { data: [28, 48, 40, 19, 86, 27, 90], label: 'Iphone X' }
        ];
        this.barChartColors = [
            { backgroundColor: '#36bea6' },
            { backgroundColor: '#2962FF' }
        ];
        // Doughnut
        this.doughnutChartLabels = [
            'Download Sales',
            'In-Store Sales',
            'Mail-Order Sales'
        ];
        this.doughnutChartData = [350, 450, 100];
        this.doughnutChartType = 'doughnut';
        // Radar
        this.radarChartLabels = [
            'Eating',
            'Drinking',
            'Sleeping',
            'Designing',
            'Coding',
            'Cycling',
            'Running'
        ];
        this.radarChartData = [
            { data: [65, 59, 90, 81, 56, 55, 40], label: 'Series A' },
            { data: [28, 48, 40, 19, 96, 27, 100], label: 'Series B' }
        ];
        this.radarChartType = 'radar';
        this.radarChartColors = [
            {
                backgroundColor: 'rgba(54,190,166,.5)',
                borderColor: 'rgba(54,190,166,1)'
            },
            { backgroundColor: 'rgb(41,98,255,.5)', borderColor: 'rgb(41,98,255,1)' }
        ];
        // Pie
        this.pieChartLabels = [
            'Download Sales',
            'In-Store Sales',
            'Mail Sales'
        ];
        this.pieChartData = [300, 500, 100];
        this.pieChartType = 'pie';
        // PolarArea
        this.polarAreaChartLabels = [
            'Download Sales',
            'In-Store Sales',
            'Mail Sales',
            'Telesales',
            'Corporate Sales'
        ];
        this.polarAreaChartData = [300, 500, 100, 40, 120];
        this.polarAreaLegend = true;
        this.polarAreaChartType = 'polarArea';
        // lineChart
        this.lineChartData = [
            { data: [65, 39, 80, 15, 76, 35, 40], label: 'Series A' },
            { data: [18, 58, 20, 69, 16, 27, 90], label: 'Series B' }
        ];
        this.lineChartLabels = [
            'January',
            'February',
            'March',
            'April',
            'May',
            'June',
            'July'
        ];
        this.lineChartOptions = {
            responsive: true
        };
        this.lineChartColors = [
            {
                // grey
                backgroundColor: 'rgba(54,190,166,.1)',
                borderColor: '#36bea6',
                pointBackgroundColor: '#36bea6',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: '#36bea6'
            },
            {
                // dark grey
                backgroundColor: 'rgb(41,98,255,.1)',
                borderColor: '#2962FF',
                pointBackgroundColor: '#2962FF',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: '#2962FF'
            }
        ];
        this.lineChartLegend = true;
        this.lineChartType = 'line';
    }
    // events
    ChartjsComponent.prototype.chartClicked = function (e) {
        // console.log(e);
    };
    ChartjsComponent.prototype.chartHovered = function (e) {
        // console.log(e);
    };
    ChartjsComponent.prototype.randomize = function () {
        // Only Change 3 values
        var data = [
            Math.round(Math.random() * 100),
            59,
            80,
            Math.random() * 100,
            56,
            Math.random() * 100,
            40
        ];
        var clone = JSON.parse(JSON.stringify(this.barChartData));
        clone[0].data = data;
        this.barChartData = clone;
        /**
         * (My guess), for Angular to recognize the change in the dataset
         * it has to change the dataset variable directly,
         * so one way around it, is to clone the data, change it and then
         * assign it;
         */
    };
    ChartjsComponent.prototype.ngAfterViewInit = function () { };
    ChartjsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! raw-loader!./chartjs.component.html */ "./node_modules/raw-loader/index.js!./src/app/charts/chart-js/chartjs.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], ChartjsComponent);
    return ChartjsComponent;
}());



/***/ }),

/***/ "./src/app/charts/chartist-js/chartistjs.component.ts":
/*!************************************************************!*\
  !*** ./src/app/charts/chartist-js/chartistjs.component.ts ***!
  \************************************************************/
/*! exports provided: ChartistjsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChartistjsComponent", function() { return ChartistjsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var data = __webpack_require__(/*! ./data.json */ "./src/app/charts/chartist-js/data.json");
var ChartistjsComponent = /** @class */ (function () {
    function ChartistjsComponent() {
        // Barchart
        this.barChart1 = {
            type: 'Bar',
            data: data['Bar'],
            options: {
                seriesBarDistance: 15,
                axisX: {
                    showGrid: false,
                    offset: 70
                },
                axisY: {
                    showGrid: true,
                    offset: 50
                }
            },
            responsiveOptions: [
                [
                    'screen and (min-width: 640px)',
                    {
                        axisX: {
                            labelInterpolationFnc: function (value, index) {
                                return index % 1 === 0 ? "" + value : null;
                            }
                        }
                    }
                ]
            ]
        };
        // Line chart
        this.lineChart1 = {
            type: 'Line',
            data: data['LineWithArea'],
            options: {
                low: 0,
                showArea: true,
                fullWidth: true
            }
        };
        // Line chart 2
        this.lineChart2 = {
            type: 'Line',
            data: data['Line'],
            options: {
                low: 0,
                showArea: true,
                fullWidth: true
            }
        };
        // Line chart 2
        this.lineChart3 = {
            type: 'Line',
            data: data['Line2'],
            options: {
                low: 0,
                showArea: true,
                fullWidth: true
            }
        };
        // Scatter chart
        this.scatterChart1 = {
            type: 'Line',
            data: data['Scatter'],
            options: {
                showLine: false,
                axisX: {
                    labelInterpolationFnc: function (value, index) {
                        return index % 13 === 0 ? "W" + value : null;
                    }
                }
            },
            responsiveOptions: [
                [
                    'screen and (min-width: 640px)',
                    {
                        axisX: {
                            labelInterpolationFnc: function (value, index) {
                                return index % 4 === 0 ? "W" + value : null;
                            }
                        }
                    }
                ]
            ]
        };
        // Pie chart
        this.pieChart1 = {
            type: 'Pie',
            data: data['Pie'],
            options: {
                donut: true,
                donutWidth: 50,
                startAngle: 270,
                total: 200,
                showLabel: false
            }
        };
        this.donuteChart1 = {
            type: 'Pie',
            data: data['Pie'],
            options: {
                donut: true,
                showLabel: false
            }
            // events: {
            //   draw(data: any): boolean {
            //     return data;
            //   }
            // }
        };
        // Bi Poller chart
        this.bipollarChart1 = {
            type: 'Bar',
            data: data['Bi-PolarBar'],
            options: {
                high: 10,
                low: -10,
                axisX: {
                    labelInterpolationFnc: function (value, index) {
                        return index % 2 === 0 ? value : null;
                    }
                }
            }
        };
    }
    ChartistjsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! raw-loader!./chartistjs.component.html */ "./node_modules/raw-loader/index.js!./src/app/charts/chartist-js/chartistjs.component.html")
        })
    ], ChartistjsComponent);
    return ChartistjsComponent;
}());



/***/ }),

/***/ "./src/app/charts/chartist-js/data.json":
/*!**********************************************!*\
  !*** ./src/app/charts/chartist-js/data.json ***!
  \**********************************************/
/*! exports provided: Bar, Line, Line2, Scatter, LineWithArea, Bi-PolarBar, DistributedSeries, Pie, default */
/***/ (function(module) {

module.exports = {"Bar":{"labels":["Jan","Feb","Mar","Apr","May","Jun"],"series":[[5,4,3,7,5,10],[3,2,9,5,4,6]]},"Line":{"labels":["Monday","Tuesday","Wednesday","Thursday","Friday"],"series":[[12,9,7,8,5],[2,1,3.5,7,3],[1,3,4,5,6]]},"Line2":{"labels":[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16],"series":[[5,5,10,8,7,5,4,null,null,null,10,10,7,8,6,9],[10,15,null,12,null,10,12,15,null,null,12,null,14,null,null,null],[null,null,null,null,3,4,1,3,4,6,7,9,5,null,null,null]]},"Scatter":{"labels":[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52],"series":[[53.761530227932376,55.06077543488965,90.15619763154757,37.945743703232026,90.15064659594809,72.37213982905773,29.242023161826005,10.613377393892765,41.13272180459888,66.89170357483623,85.47173517613665,80.61313435041848,33.86466777842112,6.993834151672074,58.93321826442517,84.4944785171936,66.47863439014286,26.61792342884319,64.7715312645164,66.7721238997995,24.81459377695263,82.09485043326285,94.28939258245515,81.16315118589196,26.285515136087987,94.25034710171474,82.86738500874603,42.275860431799764,7.252221593822195,12.509815755028853,57.592396396889086,16.98227807583916,82.13296667627357,20.7798608815297,1.4886093931434141,27.717128889831557,83.02006467579533,46.825802760236044,4.449951322677559,63.949111152579285,76.2705142938321,92.84217568625859,33.34033701723147,83.32421059421287,30.95015406095809,99.26555827017742,64.73104862164556,58.3205528852039,98.07205383638176,34.217237701943006,76.84029415694194,77.51086205882534],[68.01743447487219,33.569040390627556,55.83518094287856,6.424873491809824,40.24108430485855,12.867529962712322,33.9171424717146,66.13486382709537,75.36042883674916,37.18758127466557,46.080488500245266,40.98286341759507,25.372664387026923,40.063178151024424,73.6495194240123,48.56310577188692,22.903651846539972,91.5635618730181,84.08459591966795,49.153284675642595,34.82239557500657,38.7753190443602,77.57931404198679,78.24594487949813,42.96149738863182,68.87344162290039,73.35891706187205,79.20638493178991,39.862955442611494,67.72254472880542,32.5667298714178,67.8951691474951,68.22845079029227,24.013142038835245,84.77387385278308,81.96540495436318,21.938120212431865,20.591735159801374,44.392082366517926,99.42917256114683,75.80197000496361,44.95928290576234,56.30251437622547,81.39575345403685,46.6480941362678,60.30444929651577,63.904344644822956,96.31525902388087,80.79036620032171,67.94970208668927,81.84914397158013,64.34930133297705],[94.83796449464408,0.05012881656139001,78.03842883107683,86.85066315022306,63.09834842166116,23.82558487142836,95.04013234951407,91.84355248378253,12.28927042529946,91.59027939302398,44.15426456286402,38.40309269293461,3.0323072732378,51.442756807992104,51.067878308530304,68.87925798432126,9.786004373688861,93.42472024399827,7.196590706996409,90.61672585107475,82.64800742042794,29.33983554466535,27.575295787547738,63.76900610636933,44.31691167371892,35.02049600051234,77.91406665575869,9.594366007019817,33.17507518940415,45.94854823450043,6.028395302814493,97.36303808493578,20.735238575670635,11.577295085428618,49.377810037702986,7.984978938697163,81.52380171386066,86.62152122764415,46.81516933597669,72.70055546352265,39.482785893198404,2.1729768023229346,32.730007414228865,11.8384494034782,97.04367174876609,37.87839695714026,96.1605067491887,24.340714355822968,90.92986653306863,1.9182109464024322,36.43773292877359,51.562138311337314],[90.93023971442824,91.24607758668748,83.11135627737995,38.89630350329263,47.48702934796674,83.10718371512166,93.40725921590878,62.65211828434698,76.93458061916239,94.13663459332706,15.47636651231441,93.70144628274673,80.7911280644665,32.06886936152644,6.458421962605865,14.668285135928372,10.700783089925082,46.997088144127886,53.02589740808132,15.662154340561152,94.70275097718405,59.27632659816442,53.88591373783527,21.602789791233846,29.326094253488066,8.159091366607441,52.57892041859127,71.68439221439431,61.773032787481455,43.02319475997418,97.7745443722398,41.77024219267196,32.79576671635134,26.614574588124352,96.60428591791621,68.90454201273897,33.39711159158707,94.56531035270376,83.77269890317353,72.91107164394433,50.31188574983041,54.67801129631369,69.65510719649639,59.96153020907791,50.66882388014429,97.73196339743835,12.936677564924759,30.197501751145396,7.071721221094629,60.85688790258899,51.276925828485446,30.951614223635193]]},"LineWithArea":{"labels":[1,2,3,4,5,6,7,8],"series":[[0,5000,15000,8000,15000,9000,30000,0],[0,3000,5000,2000,8000,1000,5000,0]]},"Bi-PolarBar":{"labels":["W1","W2","W3","W4","W5","W6","W7","W8","W9","W10"],"series":[[1,2,4,8,6,-2,-1,-4,-6,-2]]},"DistributedSeries":{"labels":["XS","S","M","L","XL","XXL","XXXL"],"series":[20,60,120,200,180,20,10]},"Pie":{"series":[20,10,30,40]}};

/***/ }),

/***/ "./src/app/charts/chartist-js/dynamic.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/charts/chartist-js/dynamic.component.ts ***!
  \*********************************************************/
/*! exports provided: DynamicChartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DynamicChartComponent", function() { return DynamicChartComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var data = __webpack_require__(/*! ./data.json */ "./src/app/charts/chartist-js/data.json");
var DynamicChartComponent = /** @class */ (function () {
    function DynamicChartComponent() {
        this.chartTypes = ['Bar', 'Line'];
        this.type = 'Bar';
        this.data = data['Bar'];
        this.options = {
            axisX: {
                showLabel: false
            },
            axisY: {
                showLabel: false
            }
        };
    }
    DynamicChartComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dynamic-chart',
            template: "\n    <div class=\"row\">\n      <div class=\"col-md-6\">\n        <h4>Dynamic Chart Types</h4>\n      </div>\n      <div class=\"col-md-6\">\n        <select class=\"form-control\" [(ngModel)]=\"type\">\n          <option *ngFor=\"let type of chartTypes\" [ngValue]=\"type\">{{type}}</option>\n        </select>\n      </div>\n    </div>\n    <x-chartist\n      [data]=\"data\"\n      [type]=\"type\"\n      [options]=\"options\">\n    </x-chartist>\n  "
        }),
        __metadata("design:paramtypes", [])
    ], DynamicChartComponent);
    return DynamicChartComponent;
}());



/***/ }),

/***/ "./src/app/charts/charts.module.ts":
/*!*****************************************!*\
  !*** ./src/app/charts/charts.module.ts ***!
  \*****************************************/
/*! exports provided: ChartModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChartModule", function() { return ChartModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng2-charts */ "./node_modules/ng2-charts/index.js");
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(ng2_charts__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var ng_chartist__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-chartist */ "./node_modules/ng-chartist/dist/ng-chartist.js");
/* harmony import */ var ng_chartist__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(ng_chartist__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @swimlane/ngx-charts */ "./node_modules/@swimlane/ngx-charts/release/esm.js");
/* harmony import */ var _charts_routing__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./charts.routing */ "./src/app/charts/charts.routing.ts");
/* harmony import */ var _chartist_js_chartistjs_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./chartist-js/chartistjs.component */ "./src/app/charts/chartist-js/chartistjs.component.ts");
/* harmony import */ var _chartist_js_dynamic_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./chartist-js/dynamic.component */ "./src/app/charts/chartist-js/dynamic.component.ts");
/* harmony import */ var _chart_js_chartjs_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./chart-js/chartjs.component */ "./src/app/charts/chart-js/chartjs.component.ts");
/* harmony import */ var _ngx_charts_ngx_chart_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./ngx-charts/ngx-chart.component */ "./src/app/charts/ngx-charts/ngx-chart.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var ChartModule = /** @class */ (function () {
    function ChartModule() {
    }
    ChartModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                ng2_charts__WEBPACK_IMPORTED_MODULE_4__["ChartsModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"],
                ng_chartist__WEBPACK_IMPORTED_MODULE_6__["ChartistModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(_charts_routing__WEBPACK_IMPORTED_MODULE_8__["ChartsRoutes"]),
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_7__["NgxChartsModule"]
            ],
            declarations: [
                _chart_js_chartjs_component__WEBPACK_IMPORTED_MODULE_11__["ChartjsComponent"],
                _chartist_js_dynamic_component__WEBPACK_IMPORTED_MODULE_10__["DynamicChartComponent"],
                _chartist_js_chartistjs_component__WEBPACK_IMPORTED_MODULE_9__["ChartistjsComponent"],
                _ngx_charts_ngx_chart_component__WEBPACK_IMPORTED_MODULE_12__["NgxChartComponent"]
            ]
        })
    ], ChartModule);
    return ChartModule;
}());



/***/ }),

/***/ "./src/app/charts/charts.routing.ts":
/*!******************************************!*\
  !*** ./src/app/charts/charts.routing.ts ***!
  \******************************************/
/*! exports provided: ChartsRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChartsRoutes", function() { return ChartsRoutes; });
/* harmony import */ var _chartist_js_chartistjs_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./chartist-js/chartistjs.component */ "./src/app/charts/chartist-js/chartistjs.component.ts");
/* harmony import */ var _chart_js_chartjs_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./chart-js/chartjs.component */ "./src/app/charts/chart-js/chartjs.component.ts");
/* harmony import */ var _ngx_charts_ngx_chart_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ngx-charts/ngx-chart.component */ "./src/app/charts/ngx-charts/ngx-chart.component.ts");



var ChartsRoutes = [
    {
        path: '',
        children: [
            {
                path: 'chartistjs',
                component: _chartist_js_chartistjs_component__WEBPACK_IMPORTED_MODULE_0__["ChartistjsComponent"],
                data: {
                    title: 'Chartis js',
                    urls: [
                        { title: 'Dashboard', url: '/dashboard' },
                        { title: 'Chartis js Page' }
                    ]
                }
            },
            {
                path: 'chartjs',
                component: _chart_js_chartjs_component__WEBPACK_IMPORTED_MODULE_1__["ChartjsComponent"],
                data: {
                    title: 'Chart js',
                    urls: [
                        { title: 'Dashboard', url: '/dashboard' },
                        { title: 'Chart js Page' }
                    ]
                }
            },
            {
                path: 'ngxchart',
                component: _ngx_charts_ngx_chart_component__WEBPACK_IMPORTED_MODULE_2__["NgxChartComponent"],
                data: {
                    title: 'Ngx Charts',
                    urls: [
                        { title: 'Dashboard', url: '/dashboard' },
                        { title: 'Ngx Charts' }
                    ]
                }
            }
        ]
    }
];


/***/ }),

/***/ "./src/app/charts/ngx-charts/chartData.ts":
/*!************************************************!*\
  !*** ./src/app/charts/ngx-charts/chartData.ts ***!
  \************************************************/
/*! exports provided: single, multi, bubble, countries, generateGraph, generateData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "single", function() { return single; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "multi", function() { return multi; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bubble", function() { return bubble; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "countries", function() { return countries; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateGraph", function() { return generateGraph; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateData", function() { return generateData; });
var single = [
    {
        name: 'Germany',
        value: 40
    },
    {
        name: 'USA',
        value: 49
    },
    {
        name: 'France',
        value: 36
    },
    {
        name: 'United Kingdom',
        value: 36
    },
    {
        name: 'Spain',
        value: 33
    },
    {
        name: 'Italy',
        value: 35
    }
];
var multi = [
    {
        name: 'Germany',
        series: [
            {
                name: '2010',
                value: 40
            },
            {
                name: '2000',
                value: 36
            },
            {
                name: '1990',
                value: 31
            }
        ]
    },
    {
        name: 'USA',
        series: [
            {
                name: '2010',
                value: 49
            },
            {
                name: '2000',
                value: 45
            },
            {
                name: '1990',
                value: 37
            }
        ]
    },
    {
        name: 'France',
        series: [
            {
                name: '2010',
                value: 36
            },
            {
                name: '2000',
                value: 34
            },
            {
                name: '1990',
                value: 29
            }
        ]
    },
    {
        name: 'United Kingdom',
        series: [
            {
                name: '2010',
                value: 36
            },
            {
                name: '2000',
                value: 32
            },
            {
                name: '1990',
                value: 26
            }
        ]
    }
];
var bubble = [
    {
        name: 'Germany',
        series: [
            {
                name: new Date(Math.floor(1473700105009 + Math.random() * 1000000000)),
                x: new Date(Math.floor(1473700105009 + Math.random() * 1000000000)),
                y: 80.3,
                r: 80.4
            },
            {
                name: new Date(Math.floor(1473700105009 + Math.random() * 1000000000)),
                x: new Date(Math.floor(1473700105009 + Math.random() * 1000000000)),
                y: 80.3,
                r: 78
            },
            {
                name: new Date(Math.floor(1473700105009 + Math.random() * 1000000000)),
                x: new Date(Math.floor(1473700105009 + Math.random() * 1000000000)),
                y: 75.4,
                r: 79
            }
        ]
    },
    {
        name: 'USA',
        series: [
            {
                name: new Date(Math.floor(1473700105009 + Math.random() * 1000000000)),
                x: new Date(Math.floor(1473700105009 + Math.random() * 1000000000)),
                y: 78.8,
                r: 310
            },
            {
                name: new Date(Math.floor(1473700105009 + Math.random() * 1000000000)),
                x: new Date(Math.floor(1473700105009 + Math.random() * 1000000000)),
                y: 76.9,
                r: 283
            },
            {
                name: new Date(Math.floor(1473700105009 + Math.random() * 1000000000)),
                x: new Date(Math.floor(1473700105009 + Math.random() * 1000000000)),
                y: 75.4,
                r: 253
            }
        ]
    },
    {
        name: 'France',
        series: [
            {
                name: new Date(Math.floor(1473700105009 + Math.random() * 1000000000)),
                x: new Date(Math.floor(1473700105009 + Math.random() * 1000000000)),
                y: 81.4,
                r: 63
            },
            {
                name: new Date(Math.floor(1473700105009 + Math.random() * 1000000000)),
                x: new Date(Math.floor(1473700105009 + Math.random() * 1000000000)),
                y: 79.1,
                r: 59.4
            },
            {
                name: new Date(Math.floor(1473700105009 + Math.random() * 1000000000)),
                x: new Date(Math.floor(1473700105009 + Math.random() * 1000000000)),
                y: 77.2,
                r: 56.9
            }
        ]
    },
    {
        name: 'United Kingdom',
        series: [
            {
                name: new Date(Math.floor(1473700105009 + Math.random() * 1000000000)),
                x: new Date(Math.floor(1473700105009 + Math.random() * 1000000000)),
                y: 80.2,
                r: 62.7
            },
            {
                name: new Date(Math.floor(1473700105009 + Math.random() * 1000000000)),
                x: new Date(Math.floor(1473700105009 + Math.random() * 1000000000)),
                y: 77.8,
                r: 58.9
            },
            {
                name: new Date(Math.floor(1473700105009 + Math.random() * 1000000000)),
                x: new Date(Math.floor(1473700105009 + Math.random() * 1000000000)),
                y: 75.7,
                r: 57.1
            }
        ]
    }
];
var countries = [
    'Abkhazia',
    'Afghanistan',
    'Akrotiri and Dhekelia',
    'Aland',
    'Albania',
    'Algeria',
    'American Samoa',
    'Andorra',
    'Angola',
    'Anguilla',
    'Antigua and Barbuda',
    'Argentina',
    'Armenia',
    'Aruba',
    'Ascension Island',
    'Australia',
    'Austria',
    'Azerbaijan',
    'Bahamas, The',
    'Bahrain',
    'Bangladesh',
    'Barbados',
    'Belarus',
    'Belgium',
    'Belize',
    'Benin',
    'Bermuda',
    'Bhutan',
    'Bolivia',
    'Bosnia and Herzegovina',
    'Botswana',
    'Brazil',
    'Brunei',
    'Bulgaria',
    'Burkina Faso',
    'Burundi',
    'Cambodia',
    'Cameroon',
    'Canada',
    'Cape Verde',
    'Cayman Islands',
    'Central Africa Republic',
    'Chad',
    'Chile',
    'China',
    'Christmas Island',
    'Cocos (Keeling) Islands',
    'Colombia',
    'Comoros',
    'Congo',
    'Cook Islands',
    'Costa Rica',
    'Cote dlvoire',
    'Croatia',
    'Cuba',
    'Cyprus',
    'Czech Republic',
    'Denmark',
    'Djibouti',
    'Dominica',
    'Dominican Republic',
    'East Timor Ecuador',
    'Egypt',
    'El Salvador',
    'Equatorial Guinea',
    'Eritrea',
    'Estonia',
    'Ethiopia',
    'Falkland Islands',
    'Faroe Islands',
    'Fiji',
    'Finland',
    'France',
    'French Polynesia',
    'Gabon',
    'Cambia, The',
    'Georgia',
    'Germany',
    'Ghana',
    'Gibraltar',
    'Greece',
    'Greenland',
    'Grenada',
    'Guam',
    'Guatemala',
    'Guemsey',
    'Guinea',
    'Guinea-Bissau',
    'Guyana',
    'Haiti',
    'Honduras',
    'Hong Kong',
    'Hungary',
    'Iceland',
    'India',
    'Indonesia',
    'Iran',
    'Iraq',
    'Ireland',
    'Isle of Man',
    'Israel',
    'Italy',
    'Jamaica',
    'Japan',
    'Jersey',
    'Jordan',
    'Kazakhstan',
    'Kenya',
    'Kiribati',
    'Korea, N',
    'Korea, S',
    'Kosovo',
    'Kuwait',
    'Kyrgyzstan',
    'Laos',
    'Latvia',
    'Lebanon',
    'Lesotho',
    'Liberia',
    'Libya',
    'Liechtenstein',
    'Lithuania',
    'Luxembourg',
    'Macao',
    'Macedonia',
    'Madagascar',
    'Malawi',
    'Malaysia',
    'Maldives',
    'Mali',
    'Malta',
    'Marshall Islands',
    'Mauritania',
    'Mauritius',
    'Mayotte',
    'Mexico',
    'Micronesia',
    'Moldova',
    'Monaco',
    'Mongolia',
    'Montenegro',
    'Montserrat',
    'Morocco',
    'Mozambique',
    'Myanmar',
    'Nagorno-Karabakh',
    'Namibia',
    'Nauru',
    'Nepal',
    'Netherlands',
    'Netherlands Antilles',
    'New Caledonia',
    'New Zealand',
    'Nicaragua',
    'Niger',
    'Nigeria',
    'Niue',
    'Norfolk Island',
    'Northern Cyprus',
    'Northern Mariana Islands',
    'Norway',
    'Oman',
    'Pakistan',
    'Palau',
    'Palestine',
    'Panama',
    'Papua New Guinea',
    'Paraguay',
    'Peru',
    'Philippines',
    'Pitcaim Islands',
    'Poland',
    'Portugal',
    'Puerto Rico',
    'Qatar',
    'Romania',
    'Russia',
    'Rwanda',
    'Sahrawi Arab Democratic Republic',
    'Saint-Barthelemy',
    'Saint Helena',
    'Saint Kitts and Nevis',
    'Saint Lucia',
    'Saint Martin',
    'Saint Pierre and Miquelon',
    'Saint Vincent and Grenadines',
    'Samos',
    'San Marino',
    'Sao Tome and Principe',
    'Saudi Arabia',
    'Senegal',
    'Serbia',
    'Seychelles',
    'Sierra Leone',
    'Singapore',
    'Slovakia',
    'Slovenia',
    'Solomon Islands',
    'Somalia',
    'Somaliland',
    'South Africa',
    'South Ossetia',
    'Spain',
    'Sri Lanka',
    'Sudan',
    'Suriname',
    'Svalbard',
    'Swaziland',
    'Sweden',
    'Switzerland',
    'Syria',
    'Tajikistan',
    'Tanzania',
    'Thailand',
    'Togo',
    'Tokelau',
    'Tonga',
    'Transnistria',
    'Trinidad and Tobago',
    'Tristan da Cunha',
    'Tunisia',
    'Turkey',
    'Turkmenistan',
    'Turks and Caicos Islands',
    'Tuvalu',
    'Uganda',
    'Ukraine',
    'United Arab Emirates',
    'United Kingdom',
    'United States',
    'Uruguay',
    'Uzbekistan',
    'Vanuatu',
    'Vatican City',
    'Venezuela',
    'Vietnam',
    'Virgin Islands, British',
    'Virgin Islands, U.S.',
    'Wallis and Futuna',
    'Yemen',
    'Zambia',
    'Zimbabwe'
];
function generateGraph(nodeCount) {
    var nodes = [];
    var links = [];
    for (var i = 0; i < nodeCount; i++) {
        var country = countries[Math.floor(Math.random() * countries.length)];
        nodes.push({
            value: country
        });
        for (var j = 0; j < nodes.length - 1; j++) {
            if (Math.random() < 0.03) {
                links.push({
                    source: country,
                    target: nodes[j].value
                });
            }
        }
    }
    return { links: links, nodes: nodes };
}
function generateData(seriesLength, includeMinMaxRange) {
    var results = [];
    var domain = []; // array of time stamps in milliseconds
    for (var j = 0; j < 8; j++) {
        // random dates between Sep 12, 2016 and Sep 24, 2016
        domain.push(new Date(Math.floor(1473700105009 + Math.random() * 1000000000)));
    }
    for (var i = 0; i < seriesLength; i++) {
        var country = countries[Math.floor(Math.random() * countries.length)];
        var series = {
            name: country,
            series: []
        };
        for (var j = 0; j < domain.length; j++) {
            var value = Math.floor(2 + Math.random() * 5);
            // let timestamp = Math.floor(1473700105009 + Math.random() * 1000000000);
            var timestamp = domain[j];
            if (includeMinMaxRange) {
                var errorMargin = 0.02 + Math.random() * 0.08;
                series.series.push({
                    value: value,
                    name: timestamp,
                    min: Math.floor(value * (1 - errorMargin)),
                    max: Math.ceil(value * (1 + errorMargin))
                });
            }
            else {
                series.series.push({
                    value: value,
                    name: timestamp
                });
            }
        }
        results.push(series);
    }
    return results;
}


/***/ }),

/***/ "./src/app/charts/ngx-charts/ngx-chart.component.scss":
/*!************************************************************!*\
  !*** ./src/app/charts/ngx-charts/ngx-chart.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".chart-container {\n  display: block;\n  position: relative;\n}\n\n.w100 {\n  width: 100%;\n  height: 300px;\n  overflow: hidden;\n  display: block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2hhcnRzL25neC1jaGFydHMvRDpcXGJpdGNvaW5lciBwcm9qZWN0XFxuZXdseSB1cGRhdGVkL3NyY1xcYXBwXFxjaGFydHNcXG5neC1jaGFydHNcXG5neC1jaGFydC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY2hhcnRzL25neC1jaGFydHMvbmd4LWNoYXJ0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBQTtFQUNBLGtCQUFBO0FDQ0Y7O0FEQ0E7RUFDRSxXQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQ0VGIiwiZmlsZSI6InNyYy9hcHAvY2hhcnRzL25neC1jaGFydHMvbmd4LWNoYXJ0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNoYXJ0LWNvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcbi53MTAwIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDMwMHB4O1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuIiwiLmNoYXJ0LWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi53MTAwIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMzAwcHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGRpc3BsYXk6IGJsb2NrO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/charts/ngx-charts/ngx-chart.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/charts/ngx-charts/ngx-chart.component.ts ***!
  \**********************************************************/
/*! exports provided: NgxChartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxChartComponent", function() { return NgxChartComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var d3_shape__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! d3-shape */ "./node_modules/d3-shape/index.js");
/* harmony import */ var _chartData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./chartData */ "./src/app/charts/ngx-charts/chartData.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NgxChartComponent = /** @class */ (function () {
    function NgxChartComponent() {
        this.range = false;
        // options
        this.showXAxis = true;
        this.showYAxis = true;
        this.gradient = false;
        this.showLegend = false;
        this.showXAxisLabel = true;
        this.tooltipDisabled = false;
        this.xAxisLabel = 'Country';
        this.showYAxisLabel = true;
        this.yAxisLabel = 'GDP Per Capita';
        this.showGridLines = true;
        this.innerPadding = 0;
        this.autoScale = true;
        this.timeline = false;
        this.barPadding = 8;
        this.groupPadding = 0;
        this.roundDomains = false;
        this.maxRadius = 10;
        this.minRadius = 3;
        this.view = '';
        this.showLabels = true;
        this.explodeSlices = false;
        this.doughnut = false;
        this.arcWidth = 0.25;
        this.rangeFillOpacity = 0.15;
        this.colorScheme = {
            domain: ['#4798e8', '#22c6ab', '#ffbc34', '#ef6e6e', '#01c0c8', '#e6f2fa']
        };
        this.schemeType = 'ordinal';
        // line interpolation
        this.curve = d3_shape__WEBPACK_IMPORTED_MODULE_1__["curveLinear"];
        Object.assign(this, {
            single: _chartData__WEBPACK_IMPORTED_MODULE_2__["single"],
            multi: _chartData__WEBPACK_IMPORTED_MODULE_2__["multi"]
        });
        this.dateData = Object(_chartData__WEBPACK_IMPORTED_MODULE_2__["generateData"])(6, false);
        this.dateDataWithRange = Object(_chartData__WEBPACK_IMPORTED_MODULE_2__["generateData"])(2, true);
    }
    Object.defineProperty(NgxChartComponent.prototype, "dateDataWithOrWithoutRange", {
        get: function () {
            if (this.range) {
                return this.dateDataWithRange;
            }
            else {
                return this.dateData;
            }
        },
        enumerable: true,
        configurable: true
    });
    NgxChartComponent.prototype.select = function (data) {
        console.log('Item clicked', data);
    };
    NgxChartComponent.prototype.onLegendLabelClick = function (entry) {
        console.log('Legend clicked', entry);
    };
    NgxChartComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-ngxchart',
            template: __webpack_require__(/*! raw-loader!./ngx-chart.component.html */ "./node_modules/raw-loader/index.js!./src/app/charts/ngx-charts/ngx-chart.component.html"),
            styles: [__webpack_require__(/*! ./ngx-chart.component.scss */ "./src/app/charts/ngx-charts/ngx-chart.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], NgxChartComponent);
    return NgxChartComponent;
}());



/***/ })

}]);
//# sourceMappingURL=charts-charts-module.js.map