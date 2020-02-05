(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng2-slim-loading-bar></ng2-slim-loading-bar>\r\n<router-outlet>\r\n    <app-spinner></app-spinner>\r\n</router-outlet>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/shared/breadcrumb/breadcrumb.component.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/shared/breadcrumb/breadcrumb.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- ============================================================== -->\r\n<!-- Bread crumb and right sidebar toggle -->\r\n<!-- ============================================================== -->\r\n<!-- <div class=\"page-breadcrumb\">\r\n    <div class=\"row\">\r\n        <div class=\"col-5 align-self-center\">\r\n            <h4 class=\"page-title\">{{pageInfo?.title}}</h4>\r\n            <div class=\"d-flex align-items-center\">\r\n\r\n            </div>\r\n        </div>\r\n        <div class=\"col-7 align-self-center\">\r\n            <div class=\"d-flex no-block justify-content-end align-items-center\">\r\n                <nav aria-label=\"breadcrumb\">\r\n                    <ol class=\"breadcrumb\">\r\n                        <ng-template ngFor let-url [ngForOf]=\"pageInfo?.urls\" let-last=\"last\">\r\n                            <li class=\"breadcrumb-item\" *ngIf=\"!last\" [routerLink]=\"url.url\">\r\n                                <a href='javascript:void(0)'>{{url.title}}</a>\r\n                            </li>\r\n                            <li class=\"breadcrumb-item active\" *ngIf=\"last\">{{url.title}}</li>\r\n                        </ng-template>\r\n                    </ol>\r\n                </nav>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div> -->\r\n<!-- ============================================================== -->\r\n<!-- End Bread crumb and right sidebar toggle -->\r\n<!-- ============================================================== -->"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/shared/sidebar/sidebar.component.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/shared/sidebar/sidebar.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <nav class=\"sidebar-nav\">\r\n    <ul id=\"sidebarnav\">\r\n        \r\n        <li class=\"sidebar-item\" [ngClass]=\"[sidebarnavItem.ddclass]\" [class.active]=\"showMenu === sidebarnavItem.title\" *ngFor=\"let sidebarnavItem of sidebarnavItems\"\r\n            [routerLinkActive]=\"sidebarnavItem.submenu.length != 0 ? '' : 'active'\">\r\n            <div class=\"nav-small-cap\" *ngIf=\"sidebarnavItem.extralink === true\">{{sidebarnavItem.title}}</div>\r\n            <a class=\"sidebar-link waves-effect waves-dark\" [routerLink]=\"sidebarnavItem.class === '' ? [sidebarnavItem.path] : null\"\r\n                [ngClass]=\"[sidebarnavItem.class]\" *ngIf=\"!sidebarnavItem.extralink;\" (click)=\"addExpandClass(sidebarnavItem.title)\"\r\n                [routerLinkActive]=\"sidebarnavItem.submenu.length != 0 ? '' : 'active'\">\r\n                <i [ngClass]=\"[sidebarnavItem.icon]\"></i>\r\n                <span class=\"hide-menu\">{{sidebarnavItem.title}}</span>\r\n            </a>\r\n        \r\n            <ul aria-expanded=\"false\" class=\"collapse first-level\" *ngIf=\"sidebarnavItem.submenu.length > 0\" [ngClass]=\"{'in' : showMenu === sidebarnavItem.title }\">\r\n                <li class=\"sidebar-item\" *ngFor=\"let sidebarnavSubItem of sidebarnavItem.submenu\" [class.active]=\"showSubMenu === sidebarnavSubItem.title\"\r\n                    [routerLinkActive]=\"sidebarnavSubItem.submenu.length > 0 ? '' : 'active'\">\r\n                    <a class=\"sidebar-link\" [routerLink]=\"sidebarnavSubItem.submenu.length > 0 ? null : [sidebarnavSubItem.path]\" [routerLinkActive]=\"sidebarnavSubItem.submenu.length > 0 ? '' : 'router-link-active'\"\r\n                        [ngClass]=\"[sidebarnavSubItem.class]\" *ngIf=\"!sidebarnavSubItem.extralink;\" (click)=\"addActiveClass(sidebarnavSubItem.title)\">\r\n                        <i [ngClass]=\"[sidebarnavSubItem.icon]\"></i>\r\n                        <span class=\"hide-menu\">{{sidebarnavSubItem.title}}</span>\r\n                    </a>\r\n                    \r\n                    <ul aria-expanded=\"false\" class=\"collapse second-level\" *ngIf=\"sidebarnavSubItem.submenu.length > 0\" [ngClass]=\"{'in' : showSubMenu === sidebarnavSubItem.title }\">\r\n                        <li class=\"sidebar-item\" *ngFor=\"let sidebarnavSubsubItem of sidebarnavSubItem.submenu\" routerLinkActive=\"active\" [ngClass]=\"[sidebarnavSubsubItem.class]\">\r\n                            <a class=\"sidebar-link\" [routerLink]=\"[sidebarnavSubsubItem.path]\" *ngIf=\"!sidebarnavSubsubItem.extralink;\" [routerLinkActive]=\"sidebarnavSubsubItem.submenu.length > 0 ? '' : 'router-link-active'\">\r\n                                <i [ngClass]=\"[sidebarnavSubsubItem.icon]\"></i>\r\n                                <span class=\"hide-menu\">{{sidebarnavSubsubItem.title}}</span>\r\n                            </a>\r\n                        </li>\r\n                    </ul>\r\n                </li>\r\n            </ul>\r\n        </li>\r\n    </ul>\r\n</nav> -->"

/***/ }),

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./apps/apps.module": [
		"./src/app/apps/apps.module.ts",
		"default~apps-apps-module~dashboards-dashboard-module",
		"default~apps-apps-module~extra-component-extra-component-module",
		"apps-apps-module"
	],
	"./apps/email/mail.module": [
		"./src/app/apps/email/mail.module.ts",
		"apps-email-mail-module"
	],
	"./authentication/authentication.module": [
		"./src/app/authentication/authentication.module.ts",
		"common",
		"authentication-authentication-module"
	],
	"./cards/cards.module": [
		"./src/app/cards/cards.module.ts",
		"cards-cards-module"
	],
	"./charts/charts.module": [
		"./src/app/charts/charts.module.ts",
		"default~charts-charts-module~dashboards-dashboard-module",
		"charts-charts-module"
	],
	"./component/component.module": [
		"./src/app/component/component.module.ts",
		"component-component-module"
	],
	"./dashboards/dashboard.module": [
		"./src/app/dashboards/dashboard.module.ts",
		"default~charts-charts-module~dashboards-dashboard-module",
		"default~apps-apps-module~dashboards-dashboard-module",
		"default~dashboards-dashboard-module~table-tables-module",
		"common",
		"dashboards-dashboard-module"
	],
	"./ecommerce/ecom.module": [
		"./src/app/ecommerce/ecom.module.ts",
		"ecommerce-ecom-module"
	],
	"./extra-component/extra-component.module": [
		"./src/app/extra-component/extra-component.module.ts",
		"default~apps-apps-module~extra-component-extra-component-module",
		"extra-component-extra-component-module"
	],
	"./form/forms.module": [
		"./src/app/form/forms.module.ts",
		"default~form-forms-module~ngx-wizard-ngx-wizard-module",
		"form-forms-module"
	],
	"./icons/icons.module": [
		"./src/app/icons/icons.module.ts",
		"icons-icons-module"
	],
	"./maps/maps.module": [
		"./src/app/maps/maps.module.ts",
		"maps-maps-module"
	],
	"./ngx-wizard/ngx-wizard.module": [
		"./src/app/form/ngx-wizard/ngx-wizard.module.ts",
		"default~form-forms-module~ngx-wizard-ngx-wizard-module"
	],
	"./sample-pages/sample-pages.module": [
		"./src/app/sample-pages/sample-pages.module.ts",
		"sample-pages-sample-pages-module"
	],
	"./starter/starter.module": [
		"./src/app/starter/starter.module.ts",
		"starter-starter-module"
	],
	"./table/tables.module": [
		"./src/app/table/tables.module.ts",
		"default~dashboards-dashboard-module~table-tables-module",
		"table-tables-module"
	],
	"./timeline/timeline.module": [
		"./src/app/timeline/timeline.module.ts",
		"timeline-timeline-module"
	],
	"./widgets/widgets.module": [
		"./src/app/widgets/widgets.module.ts",
		"widgets-widgets-module"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: Approutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Approutes", function() { return Approutes; });
var Approutes = [
    {
        path: "",
        loadChildren: "./starter/starter.module#StarterModule"
    },
    {
        path: "dashboard1",
        redirectTo: "/dashboard/dashboard1",
        pathMatch: "full"
    },
    {
        path: "dashboard",
        loadChildren: "./dashboards/dashboard.module#DashboardModule"
    },
    {
        path: "component",
        loadChildren: "./component/component.module#ComponentsModule"
    },
    { path: "cards", loadChildren: "./cards/cards.module#CardsModule" },
    { path: "icons", loadChildren: "./icons/icons.module#IconsModule" },
    { path: "forms", loadChildren: "./form/forms.module#FormModule" },
    { path: "tables", loadChildren: "./table/tables.module#TablesModule" },
    { path: "charts", loadChildren: "./charts/charts.module#ChartModule" },
    {
        path: "widgets",
        loadChildren: "./widgets/widgets.module#WidgetsModule"
    },
    { path: "ecom", loadChildren: "./ecommerce/ecom.module#EcomModule" },
    {
        path: "timeline",
        loadChildren: "./timeline/timeline.module#TimelineModule"
    },
    {
        path: "extra-component",
        loadChildren: "./extra-component/extra-component.module#ExtraComponentModule"
    },
    { path: "apps", loadChildren: "./apps/apps.module#AppsModule" },
    {
        path: "apps/email",
        loadChildren: "./apps/email/mail.module#MailModule"
    },
    { path: "maps", loadChildren: "./maps/maps.module#MapsModule" },
    {
        path: "sample-pages",
        loadChildren: "./sample-pages/sample-pages.module#SamplePagesModule"
    },
    {
        path: "authentication",
        loadChildren: "./authentication/authentication.module#AuthenticationModule"
    },
    {
        path: "**",
        redirectTo: "/dashboard/dashboard1"
    }
];


/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ng2_slim_loading_bar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng2-slim-loading-bar */ "./node_modules/ng2-slim-loading-bar/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = /** @class */ (function () {
    function AppComponent(slimLoader, router) {
        var _this = this;
        this.slimLoader = slimLoader;
        this.router = router;
        // Listen the navigation events to start or complete the slim bar loading
        this.sub = this.router.events.subscribe(function (event) {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationStart"]) {
                _this.slimLoader.start();
            }
            else if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"] ||
                event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationCancel"] ||
                event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationError"]) {
                _this.slimLoader.complete();
            }
        }, function (error) {
            _this.slimLoader.complete();
        });
    }
    AppComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    AppComponent.ctorParameters = function () { return [
        { type: ng2_slim_loading_bar__WEBPACK_IMPORTED_MODULE_2__["SlimLoadingBarService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }
    ]; };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [ng2_slim_loading_bar__WEBPACK_IMPORTED_MODULE_2__["SlimLoadingBarService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/index.js");
/* harmony import */ var ng2_slim_loading_bar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng2-slim-loading-bar */ "./node_modules/ng2-slim-loading-bar/index.js");
/* harmony import */ var ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-multiselect-dropdown */ "./node_modules/ng-multiselect-dropdown/fesm5/ng-multiselect-dropdown.js");
/* harmony import */ var _shared_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./shared/sidebar/sidebar.component */ "./src/app/shared/sidebar/sidebar.component.ts");
/* harmony import */ var _shared_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./shared/breadcrumb/breadcrumb.component */ "./src/app/shared/breadcrumb/breadcrumb.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _shared_spinner_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./shared/spinner.component */ "./src/app/shared/spinner.component.ts");
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ngx-perfect-scrollbar */ "./node_modules/ngx-perfect-scrollbar/dist/ngx-perfect-scrollbar.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


















var DEFAULT_PERFECT_SCROLLBAR_CONFIG = {
    suppressScrollX: true,
    wheelSpeed: 1,
    wheelPropagation: true,
    minScrollbarLength: 20
};
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_14__["AppComponent"],
                _shared_spinner_component__WEBPACK_IMPORTED_MODULE_15__["SpinnerComponent"],
                _shared_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_12__["BreadcrumbComponent"],
                _shared_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_11__["SidebarComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbModule"].forRoot(),
                ng2_slim_loading_bar__WEBPACK_IMPORTED_MODULE_9__["SlimLoadingBarModule"].forRoot(),
                _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"].forRoot(_app_routing_module__WEBPACK_IMPORTED_MODULE_13__["Approutes"], { useHash: false }),
                ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_16__["PerfectScrollbarModule"],
                ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_10__["NgMultiSelectDropDownModule"].forRoot(),
                _agm_core__WEBPACK_IMPORTED_MODULE_8__["AgmCoreModule"].forRoot({ apiKey: 'AIzaSyBUb3jDWJQ28vDJhuQZxkC0NXr_zycm8D0' })
            ],
            providers: [
                {
                    provide: ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_16__["PERFECT_SCROLLBAR_CONFIG"],
                    useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
                },
                {
                    provide: _angular_common__WEBPACK_IMPORTED_MODULE_2__["LocationStrategy"],
                    useClass: _angular_common__WEBPACK_IMPORTED_MODULE_2__["HashLocationStrategy"]
                }
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_14__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/shared/breadcrumb/breadcrumb.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/shared/breadcrumb/breadcrumb.component.ts ***!
  \***********************************************************/
/*! exports provided: BreadcrumbComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BreadcrumbComponent", function() { return BreadcrumbComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var BreadcrumbComponent = /** @class */ (function () {
    function BreadcrumbComponent(router, activatedRoute, titleService) {
        var _this = this;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.titleService = titleService;
        this.router.events
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(function (event) { return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"]; }))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function () { return _this.activatedRoute; }))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (route) {
            while (route.firstChild) {
                route = route.firstChild;
            }
            return route;
        }))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(function (route) { return route.outlet === 'primary'; }))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["mergeMap"])(function (route) { return route.data; }))
            .subscribe(function (event) {
            _this.titleService.setTitle(event['title']);
            _this.pageInfo = event;
        });
    }
    BreadcrumbComponent.prototype.ngOnInit = function () { };
    BreadcrumbComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["Title"] }
    ]; };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], BreadcrumbComponent.prototype, "layout", void 0);
    BreadcrumbComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-breadcrumb',
            template: __webpack_require__(/*! raw-loader!./breadcrumb.component.html */ "./node_modules/raw-loader/index.js!./src/app/shared/breadcrumb/breadcrumb.component.html")
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["Title"]])
    ], BreadcrumbComponent);
    return BreadcrumbComponent;
}());



/***/ }),

/***/ "./src/app/shared/sidebar/menu-items.ts":
/*!**********************************************!*\
  !*** ./src/app/shared/sidebar/menu-items.ts ***!
  \**********************************************/
/*! exports provided: ROUTES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ROUTES", function() { return ROUTES; });
var ROUTES = [
    {
        path: '',
        title: 'Dashboard',
        icon: 'icon-Car-Wheel',
        class: 'has-arrow',
        ddclass: '',
        extralink: false,
        submenu: [
            {
                path: '/dashboard/dashboard1',
                title: 'Dashboard 1',
                icon: '',
                class: '',
                ddclass: '',
                extralink: false,
                submenu: []
            },
            {
                path: '/dashboard/dashboard2',
                title: 'Dashboard 2',
                icon: '',
                class: '',
                ddclass: '',
                extralink: false,
                submenu: []
            },
            {
                path: '/dashboard/dashboard3',
                title: 'Dashboard 3',
                icon: '',
                class: '',
                ddclass: '',
                extralink: false,
                submenu: []
            }
        ]
    },
    {
        path: '',
        title: 'Apps',
        icon: 'icon-Box-withFolders',
        class: 'has-arrow',
        ddclass: '',
        extralink: false,
        submenu: [
            {
                path: '/apps/email',
                title: 'Email',
                icon: 'icon-Mailbox-Empty',
                class: '',
                ddclass: '',
                extralink: false,
                submenu: []
            },
            {
                path: '/apps/ticketlist',
                title: 'Ticket List',
                icon: '',
                class: '',
                ddclass: '',
                extralink: false,
                submenu: []
            },
            {
                path: '/apps/ticketdetails',
                title: 'Ticket Details',
                icon: '',
                class: '',
                ddclass: '',
                extralink: false,
                submenu: []
            },
            {
                path: '/apps/chat',
                title: 'Chat App',
                icon: '',
                class: '',
                ddclass: '',
                extralink: false,
                submenu: []
            },
            {
                path: '/apps/fullcalendar',
                title: 'Calendar',
                icon: '',
                class: '',
                ddclass: '',
                extralink: false,
                submenu: []
            },
            {
                path: '/apps/taskboard',
                title: 'Taskboard',
                icon: '',
                class: '',
                ddclass: '',
                extralink: false,
                submenu: []
            }
        ]
    },
    {
        path: '',
        title: 'UI',
        icon: 'icon-Duplicate-Window',
        class: 'has-arrow',
        ddclass: 'mega-dropdown',
        extralink: false,
        submenu: [
            {
                path: '/component/accordion',
                title: 'Accordion',
                icon: '',
                class: '',
                ddclass: '',
                extralink: false,
                submenu: []
            },
            {
                path: '/component/alert',
                title: 'Alert',
                icon: '',
                class: '',
                ddclass: '',
                extralink: false,
                submenu: []
            },
            {
                path: '/component/carousel',
                title: 'Carousel',
                icon: '',
                class: '',
                ddclass: '',
                extralink: false,
                submenu: []
            },
            {
                path: '/component/dropdown',
                title: 'Dropdown',
                icon: '',
                class: '',
                ddclass: '',
                extralink: false,
                submenu: []
            },
            {
                path: '/component/modal',
                title: 'Modal',
                icon: '',
                class: '',
                ddclass: '',
                extralink: false,
                submenu: []
            },
            {
                path: '/component/pagination',
                title: 'Pagination',
                icon: '',
                class: '',
                ddclass: '',
                extralink: false,
                submenu: []
            },
            {
                path: '/component/poptool',
                title: 'Popover & Tooltip',
                icon: '',
                class: '',
                ddclass: '',
                extralink: false,
                submenu: []
            },
            {
                path: '/component/progressbar',
                title: 'Progressbar',
                icon: '',
                class: '',
                ddclass: '',
                extralink: false,
                submenu: []
            },
            {
                path: '/component/rating',
                title: 'Ratings',
                icon: '',
                class: '',
                ddclass: '',
                extralink: false,
                submenu: []
            },
            {
                path: '/component/tabs',
                title: 'Tabs',
                icon: '',
                class: '',
                ddclass: '',
                extralink: false,
                submenu: []
            },
            {
                path: '/component/timepicker',
                title: 'Timepicker',
                icon: '',
                class: '',
                ddclass: '',
                extralink: false,
                submenu: []
            },
            {
                path: '/component/buttons',
                title: 'Button',
                icon: '',
                class: '',
                ddclass: '',
                extralink: false,
                submenu: []
            },
            {
                path: '/component/notifier',
                title: 'Notifier',
                icon: '',
                class: '',
                ddclass: '',
                extralink: false,
                submenu: []
            },
            {
                path: '/cards/basiccards',
                title: 'Basic Cards',
                icon: '',
                class: '',
                ddclass: '',
                extralink: false,
                submenu: []
            },
            {
                path: '/cards/customcards',
                title: 'Custom Cards',
                icon: '',
                class: '',
                ddclass: '',
                extralink: false,
                submenu: []
            },
            {
                path: '/cards/weathercards',
                title: 'Weather Cards',
                icon: '',
                class: '',
                ddclass: '',
                extralink: false,
                submenu: []
            },
            {
                path: '/extra-component/toastr',
                title: 'Toastr',
                icon: '',
                class: '',
                ddclass: '',
                extralink: false,
                submenu: []
            },
            {
                path: '/extra-component/upload',
                title: 'File Upload',
                icon: '',
                class: '',
                ddclass: '',
                extralink: false,
                submenu: []
            },
            {
                path: '/extra-component/editor',
                title: 'Editor',
                icon: '',
                class: '',
                ddclass: '',
                extralink: false,
                submenu: []
            },
            {
                path: '/extra-component/dragndrop',
                title: 'Drag n Drop',
                icon: '',
                class: '',
                ddclass: '',
                extralink: false,
                submenu: []
            },
            {
                path: '/widgets/apps',
                title: 'Widget Apps',
                icon: '',
                class: '',
                ddclass: '',
                extralink: false,
                submenu: []
            },
            {
                path: '/widgets/data',
                title: 'Widget Data',
                icon: '',
                class: '',
                ddclass: '',
                extralink: false,
                submenu: []
            }
        ]
    },
    {
        path: '',
        title: 'Forms',
        icon: 'icon-File-HorizontalText',
        class: 'has-arrow',
        ddclass: 'two-column',
        extralink: false,
        submenu: [
            {
                path: '/forms/forminputs',
                title: 'Form Inputs',
                icon: '',
                class: '',
                ddclass: '',
                extralink: false,
                submenu: []
            },
            {
                path: '/forms/inputgroups',
                title: 'Input Groups',
                icon: '',
                class: '',
                ddclass: '',
                extralink: false,
                submenu: []
            },
            {
                path: '/forms/inputgrid',
                title: 'Input Grid',
                icon: '',
                class: '',
                ddclass: '',
                extralink: false,
                submenu: []
            },
            {
                path: '/forms/checkboxandradio',
                title: 'Checkbox & Radio',
                icon: '',
                class: '',
                ddclass: '',
                extralink: false,
                submenu: []
            },
            {
                path: '/forms/formbasic',
                title: 'Basic Forms',
                icon: '',
                class: '',
                ddclass: '',
                extralink: false,
                submenu: []
            },
            {
                path: '/forms/formhorizontal',
                title: 'Horizontal Forms',
                icon: '',
                class: '',
                ddclass: '',
                extralink: false,
                submenu: []
            },
            {
                path: '/forms/formactions',
                title: 'Form Actions',
                icon: '',
                class: '',
                ddclass: '',
                extralink: false,
                submenu: []
            },
            {
                path: '/forms/formrowseparator',
                title: 'Row Separator',
                icon: '',
                class: '',
                ddclass: '',
                extralink: false,
                submenu: []
            },
            {
                path: '/forms/formstripedrows',
                title: 'Striped Rows',
                icon: '',
                class: '',
                ddclass: '',
                extralink: false,
                submenu: []
            },
            {
                path: '/forms/formdetail',
                title: 'Detail Forms',
                icon: '',
                class: '',
                ddclass: '',
                extralink: false,
                submenu: []
            },
            {
                path: '/forms/formbasic',
                title: 'Basic Forms',
                icon: '',
                class: '',
                ddclass: '',
                extralink: false,
                submenu: []
            },
            {
                path: '/forms/formhorizontal',
                title: 'Horizontal Forms',
                icon: '',
                class: '',
                ddclass: '',
                extralink: false,
                submenu: []
            },
            {
                path: '/forms/formactions',
                title: 'Form Actions',
                icon: '',
                class: '',
                ddclass: '',
                extralink: false,
                submenu: []
            },
            {
                path: '/forms/formrowseparator',
                title: 'Row Separator',
                icon: '',
                class: '',
                ddclass: '',
                extralink: false,
                submenu: []
            },
            {
                path: '/forms/formstripedrows',
                title: 'Striped Rows',
                icon: '',
                class: '',
                ddclass: '',
                extralink: false,
                submenu: []
            },
            {
                path: '/forms/formdetail',
                title: 'Detail Forms',
                icon: '',
                class: '',
                ddclass: '',
                extralink: false,
                submenu: []
            },
            {
                path: '/forms/formvalidation',
                title: 'Form Validation',
                icon: '',
                class: '',
                ddclass: '',
                extralink: false,
                submenu: []
            },
            {
                path: '/forms/ngx',
                title: 'Form Wizard / Steps',
                icon: '',
                class: '',
                ddclass: '',
                extralink: false,
                submenu: []
            },
            {
                path: '/component/typehead',
                title: 'Form Typehead',
                icon: '',
                class: '',
                ddclass: '',
                extralink: false,
                submenu: []
            },
            {
                path: '/component/datepicker',
                title: 'Datepicker',
                icon: '',
                class: '',
                ddclass: '',
                extralink: false,
                submenu: []
            },
            {
                path: '/component/language-datepicker',
                title: 'Language Datepicker',
                icon: '',
                class: '',
                ddclass: '',
                extralink: false,
                submenu: []
            },
            {
                path: '/forms/multiselect',
                title: 'Multiselect',
                icon: '',
                class: '',
                ddclass: '',
                extralink: false,
                submenu: []
            }
        ]
    },
    {
        path: '',
        title: 'Tables',
        icon: 'icon-Navigation-LeftWindow',
        class: 'has-arrow',
        ddclass: '',
        extralink: false,
        submenu: [
            {
                path: '',
                title: 'Bootstrap Tables',
                icon: 'mdi mdi-border-none',
                class: 'has-arrow',
                ddclass: '',
                extralink: false,
                submenu: [
                    {
                        path: '/tables/basictables',
                        title: 'Basic Tables',
                        icon: 'mdi mdi-border-all',
                        class: '',
                        ddclass: '',
                        extralink: false,
                        submenu: []
                    },
                    {
                        path: '/tables/darktables',
                        title: 'Dark Basic Tables',
                        icon: 'mdi mdi-border-all',
                        class: '',
                        ddclass: '',
                        extralink: false,
                        submenu: []
                    },
                    {
                        path: '/tables/colortables',
                        title: 'Colored Tables',
                        icon: 'mdi mdi-border-all',
                        class: '',
                        ddclass: '',
                        extralink: false,
                        submenu: []
                    },
                    {
                        path: '/tables/tablesizing',
                        title: 'Table Sizing',
                        icon: 'mdi mdi-border-all',
                        class: '',
                        ddclass: '',
                        extralink: false,
                        submenu: []
                    }
                ]
            },
            {
                path: '/tables/smarttable',
                title: 'Smart Tables',
                icon: 'mdi mdi-border-left',
                class: '',
                ddclass: '',
                extralink: false,
                submenu: []
            },
            {
                path: '/tables/datatable',
                title: 'Data Tables',
                icon: 'mdi mdi-border-vertical',
                class: '',
                ddclass: '',
                extralink: false,
                submenu: []
            }
        ]
    },
    {
        path: '',
        title: 'Charts',
        icon: 'icon-Neutron',
        class: 'has-arrow',
        ddclass: '',
        extralink: false,
        submenu: [
            {
                path: '/charts/chartjs',
                title: 'Chart Js',
                icon: '',
                class: '',
                ddclass: '',
                extralink: false,
                submenu: []
            },
            {
                path: '/charts/chartistjs',
                title: 'Chartist Js',
                icon: '',
                class: '',
                ddclass: '',
                extralink: false,
                submenu: []
            },
            {
                path: '/charts/ngxchart',
                title: 'Ngx Charts',
                icon: '',
                class: '',
                ddclass: '',
                extralink: false,
                submenu: []
            }
        ]
    },
    {
        path: '',
        title: 'Pages',
        icon: 'icon-File-Hide',
        class: 'has-arrow',
        ddclass: 'mega-dropdown',
        extralink: false,
        submenu: [
            {
                path: '/ecom/products',
                title: 'Products',
                icon: '',
                class: '',
                ddclass: '',
                extralink: false,
                submenu: []
            },
            {
                path: '/ecom/cart',
                title: 'Cart',
                icon: '',
                class: '',
                ddclass: '',
                extralink: false,
                submenu: []
            },
            {
                path: '/ecom/edit',
                title: 'Edit Products',
                icon: '',
                class: '',
                ddclass: '',
                extralink: false,
                submenu: []
            },
            {
                path: '/ecom/details',
                title: 'Product Details',
                icon: '',
                class: '',
                ddclass: '',
                extralink: false,
                submenu: []
            },
            {
                path: '/ecom/orders',
                title: 'Orders',
                icon: '',
                class: '',
                ddclass: '',
                extralink: false,
                submenu: []
            },
            {
                path: '/ecom/checkout',
                title: 'Checkout',
                icon: '',
                class: '',
                ddclass: '',
                extralink: false,
                submenu: []
            },
            {
                path: '/maps/google',
                title: 'Google Maps',
                icon: 'icon-Location-2',
                class: '',
                ddclass: '',
                extralink: false,
                submenu: []
            },
            {
                path: '/authentication/login',
                title: 'Login',
                icon: '',
                class: '',
                ddclass: '',
                extralink: false,
                submenu: []
            },
            {
                path: '/authentication/login2',
                title: 'Login 2',
                icon: '',
                class: '',
                ddclass: '',
                extralink: false,
                submenu: []
            },
            {
                path: '/authentication/signup',
                title: 'Register',
                icon: '',
                class: '',
                ddclass: '',
                extralink: false,
                submenu: []
            },
            {
                path: '/authentication/signup2',
                title: 'Register 2',
                icon: '',
                class: '',
                ddclass: '',
                extralink: false,
                submenu: []
            },
            {
                path: '/authentication/404',
                title: '404',
                icon: '',
                class: '',
                ddclass: '',
                extralink: false,
                submenu: []
            },
            {
                path: '/authentication/lock',
                title: 'Lockscreen',
                icon: '',
                class: '',
                ddclass: '',
                extralink: false,
                submenu: []
            },
            {
                path: '/sample-pages/profile',
                title: 'Profile',
                icon: '',
                class: '',
                ddclass: '',
                extralink: false,
                submenu: []
            },
            {
                path: '/sample-pages/pricing',
                title: 'Pricing',
                icon: '',
                class: '',
                ddclass: '',
                extralink: false,
                submenu: []
            },
            {
                path: '/sample-pages/invoice',
                title: 'Invoice',
                icon: '',
                class: '',
                ddclass: '',
                extralink: false,
                submenu: []
            },
            {
                path: '/sample-pages/helperclasses',
                title: 'Helper Classes',
                icon: '',
                class: '',
                ddclass: '',
                extralink: false,
                submenu: []
            },
            {
                path: '/starter',
                title: 'Starter Page',
                icon: '',
                class: '',
                ddclass: '',
                extralink: false,
                submenu: []
            },
            {
                path: '/timeline/left',
                title: 'Left Timeline',
                icon: '',
                class: '',
                ddclass: '',
                extralink: false,
                submenu: []
            },
            {
                path: '/timeline/right',
                title: 'Right Timeline',
                icon: '',
                class: '',
                ddclass: '',
                extralink: false,
                submenu: []
            },
            {
                path: '/timeline/center',
                title: 'Center Timeline',
                icon: '',
                class: '',
                ddclass: '',
                extralink: false,
                submenu: []
            },
            {
                path: '/icons/fontawesome',
                title: 'Fontawesome',
                icon: '',
                class: '',
                ddclass: '',
                extralink: false,
                submenu: []
            },
            {
                path: '/icons/simpleline',
                title: 'Simple Line Icons',
                icon: '',
                class: '',
                ddclass: '',
                extralink: false,
                submenu: []
            },
            {
                path: '/icons/material',
                title: 'Material Icons',
                icon: '',
                class: '',
                ddclass: '',
                extralink: false,
                submenu: []
            },
            {
                path: '/icons/iconmind',
                title: 'Iconmind Icons',
                icon: '',
                class: '',
                ddclass: '',
                extralink: false,
                submenu: []
            }
        ]
    },
    {
        path: '',
        title: 'DD',
        icon: 'icon-Increase-Inedit',
        class: 'has-arrow',
        ddclass: '',
        extralink: false,
        submenu: [
            {
                path: '',
                title: 'Second Level',
                icon: '',
                class: '',
                ddclass: '',
                extralink: true,
                submenu: []
            },
            {
                path: '',
                title: 'Second Child',
                icon: '',
                class: 'has-arrow',
                ddclass: '',
                extralink: false,
                submenu: [
                    {
                        path: '',
                        title: 'Third 1.1',
                        icon: '',
                        class: '',
                        ddclass: '',
                        extralink: false,
                        submenu: []
                    },
                    {
                        path: '',
                        title: 'Third 1.2',
                        icon: '',
                        class: '',
                        ddclass: '',
                        extralink: false,
                        submenu: []
                    }
                ]
            }
        ]
    }
];


/***/ }),

/***/ "./src/app/shared/sidebar/sidebar.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/shared/sidebar/sidebar.component.ts ***!
  \*****************************************************/
/*! exports provided: SidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarComponent", function() { return SidebarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _menu_items__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu-items */ "./src/app/shared/sidebar/menu-items.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SidebarComponent = /** @class */ (function () {
    function SidebarComponent(modalService, router, route) {
        this.modalService = modalService;
        this.router = router;
        this.route = route;
        this.showMenu = '';
        this.showSubMenu = '';
    }
    // this is for the open close
    SidebarComponent.prototype.addExpandClass = function (element) {
        if (element === this.showMenu) {
            this.showMenu = '0';
        }
        else {
            this.showMenu = element;
        }
    };
    SidebarComponent.prototype.addActiveClass = function (element) {
        if (element === this.showSubMenu) {
            this.showSubMenu = '0';
        }
        else {
            this.showSubMenu = element;
        }
    };
    // End open close
    SidebarComponent.prototype.ngOnInit = function () {
        this.sidebarnavItems = _menu_items__WEBPACK_IMPORTED_MODULE_1__["ROUTES"].filter(function (sidebarnavItem) { return sidebarnavItem; });
    };
    SidebarComponent.ctorParameters = function () { return [
        { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModal"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
    ]; };
    SidebarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sidebar',
            template: __webpack_require__(/*! raw-loader!./sidebar.component.html */ "./node_modules/raw-loader/index.js!./src/app/shared/sidebar/sidebar.component.html")
        }),
        __metadata("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModal"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], SidebarComponent);
    return SidebarComponent;
}());



/***/ }),

/***/ "./src/app/shared/spinner.component.ts":
/*!*********************************************!*\
  !*** ./src/app/shared/spinner.component.ts ***!
  \*********************************************/
/*! exports provided: SpinnerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpinnerComponent", function() { return SpinnerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



var SpinnerComponent = /** @class */ (function () {
    function SpinnerComponent(router, document) {
        var _this = this;
        this.router = router;
        this.document = document;
        this.isSpinnerVisible = true;
        this.backgroundColor = 'rgba(0, 115, 170, 0.69)';
        this.router.events.subscribe(function (event) {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationStart"]) {
                _this.isSpinnerVisible = true;
            }
            else if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"] ||
                event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationCancel"] ||
                event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationError"]) {
                _this.isSpinnerVisible = false;
            }
        }, function () {
            _this.isSpinnerVisible = false;
        });
    }
    SpinnerComponent.prototype.ngOnDestroy = function () {
        this.isSpinnerVisible = false;
    };
    SpinnerComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] },
        { type: Document, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"],] }] }
    ]; };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], SpinnerComponent.prototype, "backgroundColor", void 0);
    SpinnerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-spinner',
            template: "<div class=\"preloader\" *ngIf=\"isSpinnerVisible\">\n        <div class=\"spinner\">\n          <div class=\"double-bounce1\"></div>\n          <div class=\"double-bounce2\"></div>\n        </div>\n    </div>",
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"])),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            Document])
    ], SpinnerComponent);
    return SpinnerComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\bitcoiner project\newly updated\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map