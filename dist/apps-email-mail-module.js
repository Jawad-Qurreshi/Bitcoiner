(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["apps-email-mail-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/apps/email/mail-compose/mail-compose.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/apps/email/mail-compose/mail-compose.component.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card-body compose\">\r\n\r\n    <form method=\"get\" action=\"#\">\r\n        <div class=\"form-group\">\r\n            <input type=\"text\" class=\"form-control\" placeholder=\"To\">\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <input type=\"text\" class=\"form-control\" placeholder=\"Cc / Bcc\">\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <input type=\"text\" class=\"form-control\" placeholder=\"Subject\">\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <textarea class=\"form-control\" placeholder=\"Message\" rows=\"10\"></textarea>\r\n        </div>\r\n        <div class=\"form-group pull-right\">\r\n            <a [routerLink]=\"['../mail-list/inbox']\" class=\"btn btn-secondary mr-2\">Cancel</a>\r\n            <button class=\"btn btn-main\" type=\"submit\">Send</button>\r\n        </div>\r\n    </form>\r\n\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/apps/email/mail-detail/mail-detail.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/apps/email/mail-detail/mail-detail.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"mail\">  \r\n    <div class=\"card-body\">\r\n        <h4 class=\"mb-3\">{{mail.subject}}</h4>\r\n        \r\n        <div class=\"d-flex mt-4 mb-4\">\r\n            <div class=\"round mr-2 flex-shrink-0\">\r\n                <i class=\"fa fa-user\" aria-hidden=\"true\"></i>\r\n            </div>\r\n            <div class=\"\">\r\n                <span class=\"font-bold\">{{mail.sender}}</span>\r\n                <span *ngIf=\"mail.senderMail\" class=\"email text-truncate d-block w-75\">&lt;{{mail.senderMail}}&gt;</span>\r\n                <span class=\"receiver\">to me</span>\r\n            </div>\r\n\r\n            <div class=\"ml-auto\">\r\n                <span class=\"mail-date\"> {{mail.date}} </span>\r\n                \r\n            </div>\r\n        </div>\r\n        <div [innerHTML]=\"mail.body\" class=\"mailbox-body\"></div>\r\n\r\n        <div class=\"mail-attachments\" *ngIf=\"mail.attachments.length > 0\">\r\n            <hr/>\r\n            <div class=\"row\">\r\n                <div class=\"col-sm-6\">                    \r\n                    <p>\r\n                        <strong>{{mail.attachments.length}} attachments</strong> &nbsp;-&nbsp; \r\n                        <a href=\"#\">Download all attachments</a>&nbsp;&nbsp;&nbsp;\r\n                        <a href=\"#\">View all Images</a>\r\n                    </p>\r\n                    <section *ngFor=\"let attachment of mail.attachments; let i = index\" class=\"attachment\">\r\n                        <img src=\"{{attachment}}\" alt=\"\">\r\n                        <h5 class=\"title\">image-{{i + 1}}.jpg</h5>\r\n                        <p>\r\n                            457K  &nbsp;&nbsp;\r\n                            <a href=\"#\">View</a> &nbsp;&nbsp;\r\n                            <a href=\"#\">Download</a>\r\n                        </p>\r\n                    </section>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/apps/email/mail-list/mail-list.component.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/apps/email/mail-list/mail-list.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"d-flex mailbox-header-bar p-3 bg-white border-bottom align-items-center\">\r\n    <div class=\"custom-control custom-checkbox\">\r\n        <input id=\"toggle-all\" class=\"custom-control-input\" type=\"checkbox\" [(ngModel)]=\"isAllSelected\" (click)=\"toggleAll()\">\r\n        <label for=\"toggle-all\" class=\"custom-control-label\">Check all</label>\r\n    </div>\r\n\r\n    <div class=\"ml-auto\">\r\n        <input class=\"form-control form-control-sm\" id=\"table-search-input\" [(ngModel)]=\"searchText\" type=\"text\"\r\n            placeholder=\"Search mail...\">\r\n    </div>\r\n</div>\r\n<div class=\"table-responsive\">\r\n    <table class=\"table table-hover no-wrap\">\r\n        <tbody>\r\n            <tr *ngFor=\"let mail of mails | async | MailSearch : searchText\" [ngClass]=\"{'unread': mail.unread, 'selected': mail.selected}\">\r\n                <td class=\"mail-checkbox pl-3 width-50\">\r\n                    <div class=\"custom-control custom-checkbox mycustomcheckbox\">\r\n                        <input id=\"checkbox{{mail.id}}\" class=\"custom-control-input\" type=\"checkbox\" [(ngModel)]=\"mail.selected\"\r\n                            (ngModelChange)=\"toggleOne()\">\r\n                        <label attr.for=\"checkbox{{mail.id}}\" class=\"custom-control-label\"></label>\r\n                    </div>\r\n                </td>\r\n                <td class=\"mail-star width-50\" *ngIf=\"router.url != '/apps/email/mail-list/trash'\">\r\n                    <i class=\"font-18 mdi\" [ngClass]=\"{'mdi-star': mail.starred, 'mdi-star-outline': !mail.starred}\"\r\n                        (click)=\"changeStarStatus(mail)\"></i>\r\n                </td>\r\n                <td (click)=\"goToDetail(mail)\" class=\"sender\">{{ mail.sender }}</td>\r\n                <td (click)=\"goToDetail(mail)\" class=\"subject\" [innerHTML]=\"mail.subject\"></td>\r\n                <td (click)=\"goToDetail(mail)\" class=\"attachment\"><i *ngIf=\"mail.attachment\" class=\"fa fa-paperclip\"></i></td>\r\n                <td (click)=\"goToDetail(mail)\" class=\"date\">{{mail.date}}</td>\r\n            </tr>\r\n        </tbody>\r\n    </table>\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/apps/email/mail.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/apps/email/mail.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"email-container pr-3 pl-3\">\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-3 col-md-2 bg-info\">\r\n\r\n            <h3 class=\"mb-0 mt-3 text-white\"> Mailbox <a class=\"text-white float-right custom-control-button\" (click)=\"openClleft()\"\r\n                    href=\"javascript:void(0)\"><i class=\"ti-menu\"></i></a> </h3>\r\n        </div>\r\n        <div class=\"col-sm-9 col-md-10 bg-info\">\r\n            <div class=\"pb-3 pt-3 d-flex\">\r\n                <div class=\"b-btn mr-1\" [style.display]=\"(id || !type) ? 'inline-block' : 'none'\" data-toggle=\"tooltip\"\r\n                    data-placement=\"top\" data-animation=\"false\" title=\"Back to {{type}}\">\r\n                    <button (click)=\"getBack()\" type=\"button\" class=\"btn btn-dark btn-sm\">\r\n                        <i class=\"fa fa-arrow-left\"></i>\r\n                    </button>\r\n                </div>\r\n\r\n                <div class=\"b-btn mr-1\" *ngIf=\"id\" data-toggle=\"tooltip\" data-placement=\"top\" data-animation=\"false\"\r\n                    title=\"Delete\">\r\n                    <button (click)=\"trash()\" type=\"button\" class=\"btn btn-dark btn-sm\">\r\n                        <i class=\"fa fa-trash\"></i>\r\n                    </button>\r\n                </div>\r\n\r\n                <div class=\"b-btn mr-1\" [style.display]=\"(router.url == '/apps/email/mail-compose' || id) ? 'none' : 'inline-block'\"\r\n                    data-toggle=\"tooltip\" data-placement=\"top\" data-animation=\"false\" title=\"Refresh\">\r\n                    <button type=\"button\" class=\"btn btn-dark btn-sm\"><span class=\"fas fa-sync-alt\"></span></button>\r\n                </div>\r\n\r\n                <div ngbDropdown class=\"btn-group\" [style.display]=\"(router.url == '/apps/email/mail-compose') ? 'none' : 'block'\">\r\n                    <button class=\"btn btn-warning btn-sm\" type=\"button\" ngbDropdownToggle aria-controls=\"dropdown-basic\">\r\n                        More\r\n                    </button>\r\n                    <div class=\"\" id=\"dropdown-basic\" ngbDropdownMenu>\r\n                        <a class=\"dropdown-item\" href=\"javascript:void(0);\" (click)=\"setAsRead()\">Mark as read</a>\r\n                        <a class=\"dropdown-item\" href=\"javascript:void(0);\" (click)=\"setAsUnRead()\">Mark as unread</a>\r\n                        <a class=\"dropdown-item\" href=\"javascript:void(0);\" (click)=\"deleteCheckedMail()\">Delete</a>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"ml-auto\">\r\n                    <span class=\"mr-1 text-white\"><b>1</b>–<b>50</b> of <b>50</b></span>\r\n                    <div class=\"btn-group btn-group-sm\">\r\n                        <button type=\"button\" class=\"btn btn-dark\">\r\n                            <span class=\"fa fa-chevron-left\"></span>\r\n                        </button>\r\n                        <button type=\"button\" class=\"btn btn-dark\">\r\n                            <span class=\"fa fa-chevron-right\"></span>\r\n                        </button>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-md-2 bg-white  b-r\">\r\n            <div class=\"inbox-panel\" [ngClass]=\"status ? 'showlpanel' : ''\">\r\n\r\n                <a [routerLink]=\"['mail-compose']\" class=\"btn btn-danger btn-sm btn-block mt-3\" role=\"button\">COMPOSE</a>\r\n\r\n                <ul class=\"list-group mt-3 custom-group\">\r\n                    <li class=\"list-group-item d-flex justify-content-between align-items-center\"><a [routerLink]=\"['mail-list/inbox']\">\r\n                            Inbox </a><span class=\"badge badge-info badge-pill\">3</span></li>\r\n                    <li class=\"list-group-item\"><a [routerLink]=\"['mail-list/starred']\">Starred</a></li>\r\n                    <li class=\"list-group-item\"><a [routerLink]=\"['mail-list/sent']\">Sent Mail</a></li>\r\n                    <li class=\"list-group-item d-flex justify-content-between align-items-center\"><a [routerLink]=\"['mail-list/drafts']\">Drafts</a><span\r\n                            class=\"badge badge-info badge-pill\">2</span></li>\r\n                    <li class=\"list-group-item\"><a [routerLink]=\"['mail-list/trash']\">Trash</a></li>\r\n                </ul>\r\n                <hr />\r\n                <ul class=\"list-group custom-group\">\r\n                    <li class=\"list-group-item\"><span class=\"fa fa-circle text-danger mr-1\"></span><a href=\"#\">Notes</a></li>\r\n                    <li class=\"list-group-item\"><span class=\"fa fa-circle text-warning mr-1\"></span><a href=\"#\">Personal</a></li>\r\n                    <li class=\"list-group-item\"><span class=\"fa fa-circle text-info mr-1\"></span><a href=\"#\">Travel</a></li>\r\n\r\n                </ul>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-md-10 bg-light-part\">\r\n            <div class=\"inbox-right-panel\">\r\n                <router-outlet></router-outlet>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n\r\n</div>"

/***/ }),

/***/ "./node_modules/rxjs-compat/_esm5/add/operator/switchMap.js":
/*!******************************************************************!*\
  !*** ./node_modules/rxjs-compat/_esm5/add/operator/switchMap.js ***!
  \******************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _operator_switchMap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../operator/switchMap */ "./node_modules/rxjs-compat/_esm5/operator/switchMap.js");


rxjs__WEBPACK_IMPORTED_MODULE_0__["Observable"].prototype.switchMap = _operator_switchMap__WEBPACK_IMPORTED_MODULE_1__["switchMap"];
//# sourceMappingURL=switchMap.js.map

/***/ }),

/***/ "./node_modules/rxjs-compat/_esm5/operator/switchMap.js":
/*!**************************************************************!*\
  !*** ./node_modules/rxjs-compat/_esm5/operator/switchMap.js ***!
  \**************************************************************/
/*! exports provided: switchMap */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "switchMap", function() { return switchMap; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");

function switchMap(project) {
    return Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["switchMap"])(project)(this);
}
//# sourceMappingURL=switchMap.js.map

/***/ }),

/***/ "./src/app/apps/email/app.state.ts":
/*!*****************************************!*\
  !*** ./src/app/apps/email/app.state.ts ***!
  \*****************************************/
/*! exports provided: AppState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppState", function() { return AppState; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_Subject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/Subject */ "./node_modules/rxjs-compat/_esm5/Subject.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppState = /** @class */ (function () {
    function AppState() {
        var _this = this;
        this._data = new rxjs_Subject__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this._dataStream$ = this._data.asObservable();
        this._subscriptions = new Map();
        this._dataStream$.subscribe(function (data) { return _this._onEvent(data); });
    }
    AppState.prototype.notifyDataChanged = function (event, value) {
        var current = this._data[event];
        if (current !== value) {
            this._data[event] = value;
            this._data.next({
                event: event,
                data: this._data[event]
            });
        }
    };
    AppState.prototype.subscribe = function (event, callback) {
        var subscribers = this._subscriptions.get(event) || [];
        subscribers.push(callback);
        this._subscriptions.set(event, subscribers);
    };
    AppState.prototype._onEvent = function (data) {
        var subscribers = this._subscriptions.get(data['event']) || [];
        subscribers.forEach(function (callback) {
            callback.call(null, data['data']);
        });
    };
    AppState = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], AppState);
    return AppState;
}());



/***/ }),

/***/ "./src/app/apps/email/mail-compose/mail-compose.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/apps/email/mail-compose/mail-compose.component.ts ***!
  \*******************************************************************/
/*! exports provided: MailComposeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MailComposeComponent", function() { return MailComposeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var MailComposeComponent = /** @class */ (function () {
    function MailComposeComponent() {
    }
    MailComposeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-mail-compose',
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            template: __webpack_require__(/*! raw-loader!./mail-compose.component.html */ "./node_modules/raw-loader/index.js!./src/app/apps/email/mail-compose/mail-compose.component.html")
        })
    ], MailComposeComponent);
    return MailComposeComponent;
}());



/***/ }),

/***/ "./src/app/apps/email/mail-detail/mail-detail.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/apps/email/mail-detail/mail-detail.component.ts ***!
  \*****************************************************************/
/*! exports provided: MailDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MailDetailComponent", function() { return MailDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _mail_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../mail.service */ "./src/app/apps/email/mail.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MailDetailComponent = /** @class */ (function () {
    function MailDetailComponent(service, route, router) {
        this.service = service;
        this.route = route;
        this.router = router;
        this.replyMessage = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    MailDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.switchMap(function (params) { return _this.service.getMail(+params['id']); }).subscribe(function (mail) { return (_this.mail = mail); });
    };
    MailDetailComponent.prototype.goToReply = function (mail) {
        this.replyMessage.emit(mail);
    };
    MailDetailComponent.prototype.trash = function (id) {
        this.service.getMail(id).then(function (mail) {
            mail.trash = true;
            mail.sent = false;
            mail.draft = false;
            mail.starred = false;
        });
        this.router.navigate(['apps/email/mail-list/inbox']);
    };
    MailDetailComponent.ctorParameters = function () { return [
        { type: _mail_service__WEBPACK_IMPORTED_MODULE_2__["MailService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }
    ]; };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], MailDetailComponent.prototype, "replyMessage", void 0);
    MailDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-mail-detail',
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            template: __webpack_require__(/*! raw-loader!./mail-detail.component.html */ "./node_modules/raw-loader/index.js!./src/app/apps/email/mail-detail/mail-detail.component.html")
        }),
        __metadata("design:paramtypes", [_mail_service__WEBPACK_IMPORTED_MODULE_2__["MailService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], MailDetailComponent);
    return MailDetailComponent;
}());



/***/ }),

/***/ "./src/app/apps/email/mail-list/mail-list.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/apps/email/mail-list/mail-list.component.ts ***!
  \*************************************************************/
/*! exports provided: MailListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MailListComponent", function() { return MailListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_add_operator_switchMap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/add/operator/switchMap */ "./node_modules/rxjs-compat/_esm5/add/operator/switchMap.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _mail_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../mail.service */ "./src/app/apps/email/mail.service.ts");
/* harmony import */ var _app_state__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../app.state */ "./src/app/apps/email/app.state.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MailListComponent = /** @class */ (function () {
    function MailListComponent(service, route, router, state) {
        var _this = this;
        this.service = service;
        this.route = route;
        this.router = router;
        this.state = state;
        this.router.events.subscribe(function (event) {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"]) {
                _this.unSelectAll();
                _this.searchText = '';
            }
        });
        this.state.subscribe('markAsRead', function (val) {
            _this.markAllAsRead();
        });
        this.state.subscribe('markAsUnRead', function (val) {
            _this.markAllAsUnRead();
        });
        this.state.subscribe('deleteChecked', function (val) {
            _this.deleteAllCheckedMail();
        });
    }
    MailListComponent.prototype.ngOnInit = function () {
        this.getMails();
    };
    MailListComponent.prototype.getMails = function () {
        var _this = this;
        this.mails = this.route.params.switchMap(function (params) {
            _this.type = params['type'];
            switch (_this.type) {
                case 'inbox':
                    return _this.service.getInboxMails();
                case 'starred':
                    return _this.service.getStarredMails();
                case 'sent':
                    return _this.service.getSentMails();
                case 'drafts':
                    return _this.service.getDraftMails();
                case 'trash':
                    return _this.service.getTrashMails();
                default:
                    return _this.service.getInboxMails();
            }
        });
    };
    MailListComponent.prototype.toggleAll = function () {
        var toggleStatus = !this.isAllSelected;
        this.mails.subscribe(function (result) {
            result.forEach(function (mail) {
                mail.selected = toggleStatus;
            });
        });
    };
    MailListComponent.prototype.toggleOne = function () {
        var _this = this;
        this.mails.subscribe(function (result) {
            _this.isAllSelected = result.every(function (mail) {
                return mail.selected === true;
            });
        });
    };
    MailListComponent.prototype.unSelectAll = function () {
        this.isAllSelected = false;
        if (this.mails) {
            this.mails.subscribe(function (result) {
                result.forEach(function (mail) {
                    mail.selected = false;
                });
            });
        }
    };
    MailListComponent.prototype.markAllAsRead = function () {
        this.mails.subscribe(function (result) {
            result.forEach(function (mail) {
                // tslint:disable-next-line:curly
                if (mail.selected)
                    mail.unread = false;
            });
        });
    };
    MailListComponent.prototype.markAllAsUnRead = function () {
        this.mails.subscribe(function (result) {
            result.forEach(function (mail) {
                // tslint:disable-next-line:curly
                if (mail.selected)
                    mail.unread = true;
            });
        });
    };
    MailListComponent.prototype.deleteAllCheckedMail = function () {
        this.mails.subscribe(function (result) {
            result.forEach(function (mail) {
                if (mail.selected) {
                    mail.trash = true;
                    mail.sent = false;
                    mail.draft = false;
                    mail.starred = false;
                }
            });
        });
        this.getMails();
        this.isAllSelected = false;
    };
    MailListComponent.prototype.goToDetail = function (mail) {
        mail.unread = false;
        this.router.navigate(['apps/email/mail-list/' + this.type, mail.id]);
    };
    MailListComponent.prototype.changeStarStatus = function (mail) {
        mail.starred = !mail.starred;
    };
    MailListComponent.ctorParameters = function () { return [
        { type: _mail_service__WEBPACK_IMPORTED_MODULE_3__["MailService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _app_state__WEBPACK_IMPORTED_MODULE_4__["AppState"] }
    ]; };
    MailListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-inbox-list',
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            template: __webpack_require__(/*! raw-loader!./mail-list.component.html */ "./node_modules/raw-loader/index.js!./src/app/apps/email/mail-list/mail-list.component.html")
        }),
        __metadata("design:paramtypes", [_mail_service__WEBPACK_IMPORTED_MODULE_3__["MailService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _app_state__WEBPACK_IMPORTED_MODULE_4__["AppState"]])
    ], MailListComponent);
    return MailListComponent;
}());



/***/ }),

/***/ "./src/app/apps/email/mail.component.scss":
/*!************************************************!*\
  !*** ./src/app/apps/email/mail.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".email-container {\n  overflow: hidden;\n}\n.email-container .unread {\n  font-weight: 800;\n}\n.email-container .mail-star .fa-star {\n  color: #f9a913;\n}\n.email-container .inbox-right-panel, .email-container .inbox-panel {\n  min-height: calc(100vh - 300px);\n}\n.email-container .inbox-right-panel {\n  margin: 0 -10px;\n}\n.email-container .inbox-right-panel .table tr {\n  cursor: pointer;\n}\n.email-container .subject, .email-container .sender {\n  max-width: 350px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.email-container .sender {\n  max-width: 150px;\n}\n.email-container .custom-control-button {\n  display: none;\n}\n.email-container .width-50 {\n  width: 50px;\n}\n.email-container .custom-group .list-group-item {\n  border: 0px;\n  padding: 0.75rem 0.25rem;\n}\n.email-container .custom-group .list-group-item a {\n  color: #3E556A;\n}\n@media (max-width: 767px) {\n  .email-container .inbox-panel {\n    position: absolute;\n    width: 200px;\n    min-height: 100%;\n    height: 100%;\n    background: white;\n    left: -202px;\n    z-index: 10;\n    box-shadow: 0 2px 20px rgba(0, 0, 0, 0.1);\n    padding: 0 10px;\n  }\n  .email-container .inbox-panel.showlpanel {\n    left: 0px;\n  }\n  .email-container .custom-control-button {\n    display: block;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwcy9lbWFpbC9EOlxcYml0Y29pbmVyIHByb2plY3RcXG5ld2x5IHVwZGF0ZWQvc3JjXFxhcHBcXGFwcHNcXGVtYWlsXFxtYWlsLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hcHBzL2VtYWlsL21haWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDUSxnQkFBQTtBQ0NSO0FEQ0E7RUFDRyxnQkFBQTtBQ0NIO0FEQ0E7RUFDSSxjQUFBO0FDQ0o7QURDQTtFQUNJLCtCQUFBO0FDQ0o7QURDQTtFQUNJLGVBQUE7QUNDSjtBREFJO0VBQ0ksZUFBQTtBQ0VSO0FEQ0E7RUFDSSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7QUNDSjtBRENBO0VBQ0ksZ0JBQUE7QUNDSjtBRENBO0VBQ0ksYUFBQTtBQ0NKO0FERUE7RUFDQyxXQUFBO0FDQUQ7QURHSTtFQUNJLFdBQUE7RUFDQSx3QkFBQTtBQ0RSO0FERVk7RUFDSSxjQUFBO0FDQWhCO0FESUk7RUFDUTtJQUNJLGtCQUFBO0lBQ0EsWUFBQTtJQUNBLGdCQUFBO0lBQ0EsWUFBQTtJQUNBLGlCQUFBO0lBQ0EsWUFBQTtJQUNBLFdBQUE7SUFDQSx5Q0FBQTtJQUNBLGVBQUE7RUNGZDtFREdjO0lBQ0ksU0FBQTtFQ0RsQjtFREtVO0lBQ0ksY0FBQTtFQ0hkO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9hcHBzL2VtYWlsL21haWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZW1haWwtY29udGFpbmVye1xyXG4gICAgICAgIG92ZXJmbG93OmhpZGRlbjtcclxuXHJcbi51bnJlYWR7XHJcbiAgIGZvbnQtd2VpZ2h0OjgwMDsgXHJcbn1cclxuLm1haWwtc3RhciAuZmEtc3RhcntcclxuICAgIGNvbG9yOiNmOWE5MTM7XHJcbn1cclxuLmluYm94LXJpZ2h0LXBhbmVsLCAuaW5ib3gtcGFuZWwge1xyXG4gICAgbWluLWhlaWdodDogY2FsYygxMDB2aCAtIDMwMHB4KTtcclxufVxyXG4uaW5ib3gtcmlnaHQtcGFuZWx7XHJcbiAgICBtYXJnaW46IDAgLTEwcHg7XHJcbiAgICAudGFibGUgdHJ7XHJcbiAgICAgICAgY3Vyc29yOnBvaW50ZXI7XHJcbiAgICB9XHJcbn1cclxuLnN1YmplY3QsIC5zZW5kZXJ7XHJcbiAgICBtYXgtd2lkdGg6MzUwcHg7XHJcbiAgICBvdmVyZmxvdzpoaWRkZW47XHJcbiAgICB0ZXh0LW92ZXJmbG93OmVsbGlwc2lzO1xyXG59XHJcbi5zZW5kZXJ7XHJcbiAgICBtYXgtd2lkdGg6MTUwcHg7XHJcbn1cclxuLmN1c3RvbS1jb250cm9sLWJ1dHRvbntcclxuICAgIGRpc3BsYXk6bm9uZTtcclxufVxyXG5cclxuLndpZHRoLTUwIHtcclxuXHR3aWR0aDogNTBweDtcclxufVxyXG4uY3VzdG9tLWdyb3Vwe1xyXG4gICAgLmxpc3QtZ3JvdXAtaXRlbXtcclxuICAgICAgICBib3JkZXI6MHB4O1xyXG4gICAgICAgIHBhZGRpbmc6MC43NXJlbSAwLjI1cmVtO1xyXG4gICAgICAgICAgICBhIHtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAjM0U1NTZBO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XHJcbiAgICAgICAgICAgIC5pbmJveC1wYW5lbHtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAyMDBweDtcclxuICAgICAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgICAgICAgICAgICAgIGxlZnQ6IC0yMDJweDtcclxuICAgICAgICAgICAgICAgIHotaW5kZXg6IDEwO1xyXG4gICAgICAgICAgICAgICAgYm94LXNoYWRvdzowIDJweCAyMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6MCAxMHB4O1xyXG4gICAgICAgICAgICAgICAgJi5zaG93bHBhbmVse1xyXG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6MHB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAuY3VzdG9tLWNvbnRyb2wtYnV0dG9ue1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTpibG9jaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxufSIsIi5lbWFpbC1jb250YWluZXIge1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuLmVtYWlsLWNvbnRhaW5lciAudW5yZWFkIHtcbiAgZm9udC13ZWlnaHQ6IDgwMDtcbn1cbi5lbWFpbC1jb250YWluZXIgLm1haWwtc3RhciAuZmEtc3RhciB7XG4gIGNvbG9yOiAjZjlhOTEzO1xufVxuLmVtYWlsLWNvbnRhaW5lciAuaW5ib3gtcmlnaHQtcGFuZWwsIC5lbWFpbC1jb250YWluZXIgLmluYm94LXBhbmVsIHtcbiAgbWluLWhlaWdodDogY2FsYygxMDB2aCAtIDMwMHB4KTtcbn1cbi5lbWFpbC1jb250YWluZXIgLmluYm94LXJpZ2h0LXBhbmVsIHtcbiAgbWFyZ2luOiAwIC0xMHB4O1xufVxuLmVtYWlsLWNvbnRhaW5lciAuaW5ib3gtcmlnaHQtcGFuZWwgLnRhYmxlIHRyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLmVtYWlsLWNvbnRhaW5lciAuc3ViamVjdCwgLmVtYWlsLWNvbnRhaW5lciAuc2VuZGVyIHtcbiAgbWF4LXdpZHRoOiAzNTBweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG59XG4uZW1haWwtY29udGFpbmVyIC5zZW5kZXIge1xuICBtYXgtd2lkdGg6IDE1MHB4O1xufVxuLmVtYWlsLWNvbnRhaW5lciAuY3VzdG9tLWNvbnRyb2wtYnV0dG9uIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cbi5lbWFpbC1jb250YWluZXIgLndpZHRoLTUwIHtcbiAgd2lkdGg6IDUwcHg7XG59XG4uZW1haWwtY29udGFpbmVyIC5jdXN0b20tZ3JvdXAgLmxpc3QtZ3JvdXAtaXRlbSB7XG4gIGJvcmRlcjogMHB4O1xuICBwYWRkaW5nOiAwLjc1cmVtIDAuMjVyZW07XG59XG4uZW1haWwtY29udGFpbmVyIC5jdXN0b20tZ3JvdXAgLmxpc3QtZ3JvdXAtaXRlbSBhIHtcbiAgY29sb3I6ICMzRTU1NkE7XG59XG5AbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgLmVtYWlsLWNvbnRhaW5lciAuaW5ib3gtcGFuZWwge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDogMjAwcHg7XG4gICAgbWluLWhlaWdodDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgbGVmdDogLTIwMnB4O1xuICAgIHotaW5kZXg6IDEwO1xuICAgIGJveC1zaGFkb3c6IDAgMnB4IDIwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xuICAgIHBhZGRpbmc6IDAgMTBweDtcbiAgfVxuICAuZW1haWwtY29udGFpbmVyIC5pbmJveC1wYW5lbC5zaG93bHBhbmVsIHtcbiAgICBsZWZ0OiAwcHg7XG4gIH1cbiAgLmVtYWlsLWNvbnRhaW5lciAuY3VzdG9tLWNvbnRyb2wtYnV0dG9uIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxufSJdfQ== */"

/***/ }),

/***/ "./src/app/apps/email/mail.component.ts":
/*!**********************************************!*\
  !*** ./src/app/apps/email/mail.component.ts ***!
  \**********************************************/
/*! exports provided: MailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MailComponent", function() { return MailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _mail_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mail.service */ "./src/app/apps/email/mail.service.ts");
/* harmony import */ var _app_state__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.state */ "./src/app/apps/email/app.state.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MailComponent = /** @class */ (function () {
    function MailComponent(service, route, router, state) {
        var _this = this;
        this.service = service;
        this.route = route;
        this.router = router;
        this.state = state;
        this.markAsRead = false;
        this.markAsUnRead = false;
        this.deleteChecked = false;
        this.status = false;
        this.router.events.subscribe(function (event) {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"]) {
                _this.id = _this.route.snapshot.firstChild.params['id'];
                _this.type = _this.route.snapshot.firstChild.params['type'];
                setTimeout(function () {
                    // jQuery('[data-toggle="tooltip"]').tooltip({ trigger: 'hover' });
                });
            }
        });
    }
    MailComponent.prototype.getBack = function () {
        if (this.type) {
            this.router.navigate(['apps/email/mail-list/' + this.type]);
        }
        else {
            this.router.navigate(['apps/email/mail-list/inbox']);
        }
    };
    MailComponent.prototype.trash = function () {
        // jQuery('[data-toggle="tooltip"]').tooltip('hide');
        this.service.getMail(this.id).then(function (mail) {
            mail.trash = true;
            mail.sent = false;
            mail.draft = false;
            mail.starred = false;
        });
        this.router.navigate(['apps/email/mail-list/inbox']);
    };
    MailComponent.prototype.setAsRead = function () {
        this.markAsRead = !this.markAsRead;
        this.state.notifyDataChanged('markAsRead', this.markAsRead);
    };
    MailComponent.prototype.setAsUnRead = function () {
        this.markAsUnRead = !this.markAsUnRead;
        this.state.notifyDataChanged('markAsUnRead', this.markAsUnRead);
    };
    MailComponent.prototype.deleteCheckedMail = function () {
        this.deleteChecked = !this.deleteChecked;
        this.state.notifyDataChanged('deleteChecked', this.deleteChecked);
    };
    MailComponent.prototype.openClleft = function () {
        this.status = !this.status;
    };
    MailComponent.ctorParameters = function () { return [
        { type: _mail_service__WEBPACK_IMPORTED_MODULE_2__["MailService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] },
        { type: _app_state__WEBPACK_IMPORTED_MODULE_3__["AppState"] }
    ]; };
    MailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-mail',
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            template: __webpack_require__(/*! raw-loader!./mail.component.html */ "./node_modules/raw-loader/index.js!./src/app/apps/email/mail.component.html"),
            providers: [_mail_service__WEBPACK_IMPORTED_MODULE_2__["MailService"]],
            styles: [__webpack_require__(/*! ./mail.component.scss */ "./src/app/apps/email/mail.component.scss")]
        }),
        __metadata("design:paramtypes", [_mail_service__WEBPACK_IMPORTED_MODULE_2__["MailService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _app_state__WEBPACK_IMPORTED_MODULE_3__["AppState"]])
    ], MailComponent);
    return MailComponent;
}());



/***/ }),

/***/ "./src/app/apps/email/mail.module.ts":
/*!*******************************************!*\
  !*** ./src/app/apps/email/mail.module.ts ***!
  \*******************************************/
/*! exports provided: routes, MailModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MailModule", function() { return MailModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pipes/pipes.module */ "./src/app/apps/email/pipes/pipes.module.ts");
/* harmony import */ var _app_state__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.state */ "./src/app/apps/email/app.state.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _mail_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./mail.component */ "./src/app/apps/email/mail.component.ts");
/* harmony import */ var _mail_compose_mail_compose_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./mail-compose/mail-compose.component */ "./src/app/apps/email/mail-compose/mail-compose.component.ts");
/* harmony import */ var _mail_list_mail_list_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./mail-list/mail-list.component */ "./src/app/apps/email/mail-list/mail-list.component.ts");
/* harmony import */ var _mail_detail_mail_detail_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./mail-detail/mail-detail.component */ "./src/app/apps/email/mail-detail/mail-detail.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var routes = [
    {
        path: '',
        component: _mail_component__WEBPACK_IMPORTED_MODULE_7__["MailComponent"],
        children: [
            { path: '', redirectTo: 'mail-list/inbox', pathMatch: 'full' },
            { path: 'mail-list/:type', component: _mail_list_mail_list_component__WEBPACK_IMPORTED_MODULE_9__["MailListComponent"] },
            { path: 'mail-compose', component: _mail_compose_mail_compose_component__WEBPACK_IMPORTED_MODULE_8__["MailComposeComponent"] },
            { path: 'mail-list/:type/:id', component: _mail_detail_mail_detail_component__WEBPACK_IMPORTED_MODULE_10__["MailDetailComponent"] }
        ]
    }
];
var MailModule = /** @class */ (function () {
    function MailModule() {
    }
    MailModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_4__["PipesModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModule"].forRoot(),
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)
            ],
            declarations: [
                _mail_component__WEBPACK_IMPORTED_MODULE_7__["MailComponent"],
                _mail_compose_mail_compose_component__WEBPACK_IMPORTED_MODULE_8__["MailComposeComponent"],
                _mail_list_mail_list_component__WEBPACK_IMPORTED_MODULE_9__["MailListComponent"],
                _mail_detail_mail_detail_component__WEBPACK_IMPORTED_MODULE_10__["MailDetailComponent"]
            ],
            providers: [_app_state__WEBPACK_IMPORTED_MODULE_5__["AppState"]]
        })
    ], MailModule);
    return MailModule;
}());



/***/ }),

/***/ "./src/app/apps/email/mail.service.ts":
/*!********************************************!*\
  !*** ./src/app/apps/email/mail.service.ts ***!
  \********************************************/
/*! exports provided: Mail, MailService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Mail", function() { return Mail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MailService", function() { return MailService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var Mail = /** @class */ (function () {
    function Mail(id, sender, senderMail, subject, date, body, attachment, attachments, unread, sent, starred, draft, trash, selected) {
        this.id = id;
        this.sender = sender;
        this.senderMail = senderMail;
        this.subject = subject;
        this.date = date;
        this.body = body;
        this.attachment = attachment;
        this.attachments = attachments;
        this.unread = unread;
        this.sent = sent;
        this.starred = starred;
        this.draft = draft;
        this.trash = trash;
        this.selected = selected;
    }
    Mail.ctorParameters = function () { return [
        { type: Number },
        { type: String },
        { type: String },
        { type: String },
        { type: String },
        { type: String },
        { type: Boolean },
        { type: Array },
        { type: Boolean },
        { type: Boolean },
        { type: Boolean },
        { type: Boolean },
        { type: Boolean },
        { type: Boolean }
    ]; };
    return Mail;
}());

var Mails = [
    new Mail(1, 'Seth Wright', 'info@wrappixel.com', 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.', '6:08 PM', '<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.</p>', false, [], true, false, false, false, false, false),
    new Mail(2, 'Leo Jons', 'info@wrappixel.com', 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.', '12:55 PM', '<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.</p>', true, ['assets/images/gallery/chair.png', 'assets/images/gallery/chair2.png'], true, false, true, false, false, false),
    new Mail(3, 'Aron Shaur', 'info@wrappixel.com', 'consectetuer adipiscing elit.', '01.11.2018', '<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.</p>', false, [], false, false, false, false, false, false),
    new Mail(4, 'Emily Rhodes', 'info@wrappixel.com', 'Aenean commodo ligula eget dolor. Aenean massa.', '21.07.2018', '<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.</p>', false, [], true, false, false, false, false, false),
    new Mail(5, 'Draft', '', 'no subject', '2:14 PM', '', false, [], false, false, false, true, false, false),
    new Mail(6, 'Draft', '', 'Please confirm your account for furthur process', 'Jan 7', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elementum interdum ex, sed aliquet nisl maximus imperdiet.', false, [], false, false, false, true, false, false),
    new Mail(7, 'Kendra', 'info@wrappixel.com', 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.', '27.05.2018', '<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.</p>', false, [], false, false, false, false, false, false),
    new Mail(8, 'Jimmy Fallon', 'info@wrappixel.com', 'consectetuer adipiscing elit.', '14.05.2018', '<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.</p>', false, [], false, false, true, false, false, false),
    new Mail(9, 'Sam Tighe', 'info@wrappixel.com', 'Aenean commodo ligula eget dolor. Aenean massa.', '03.05.2018', '<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.</p>', false, [], false, false, false, false, false, false),
    new Mail(10, 'Saul', 'info@wrappixel.com', 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.', '30.04.2018', '<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.</p>', false, [], false, true, false, false, false, false),
    new Mail(11, 'Nathan James', 'info@wrappixel.com', 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.', '24.04.2018', '<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.</p>', false, [], false, false, false, false, false, false),
    new Mail(12, 'Mia Green', 'info@wrappixel.com', 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.', '11.04.2018', '<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.</p>', false, [], false, false, false, false, false, false),
    new Mail(13, 'Mario Gomez', 'info@wrappixel.com', 'Download the freebies from the site wrappixel.com all the admin template for free', '24.02.2018', '<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.</p>', false, [], false, false, false, false, false, false)
];
var mailsPromise = Promise.resolve(Mails);
var MailService = /** @class */ (function () {
    function MailService() {
    }
    MailService.prototype.getInboxMails = function () {
        return mailsPromise.then(function (mails) { return mails.filter(function (mail) { return mail.sent === false && mail.draft === false && mail.trash === false; }); });
    };
    MailService.prototype.getStarredMails = function () {
        return mailsPromise.then(function (mails) { return mails.filter(function (mail) { return mail.starred === true; }); });
    };
    MailService.prototype.getSentMails = function () {
        return mailsPromise.then(function (mails) { return mails.filter(function (mail) { return mail.sent === true; }); });
    };
    MailService.prototype.getDraftMails = function () {
        return mailsPromise.then(function (mails) { return mails.filter(function (mail) { return mail.draft === true; }); });
    };
    MailService.prototype.getTrashMails = function () {
        return mailsPromise.then(function (mails) { return mails.filter(function (mail) { return mail.trash === true; }); });
    };
    MailService.prototype.getMail = function (id) {
        return mailsPromise.then(function (mails) { return mails.find(function (mail) { return mail.id === +id; }); });
    };
    MailService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], MailService);
    return MailService;
}());



/***/ }),

/***/ "./src/app/apps/email/pipes/mail-search.pipe.ts":
/*!******************************************************!*\
  !*** ./src/app/apps/email/pipes/mail-search.pipe.ts ***!
  \******************************************************/
/*! exports provided: MailSearchPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MailSearchPipe", function() { return MailSearchPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var MailSearchPipe = /** @class */ (function () {
    function MailSearchPipe() {
    }
    MailSearchPipe.prototype.transform = function (value, args) {
        var searchText = new RegExp(args, 'ig');
        if (value) {
            return value.filter(function (mail) {
                if (mail.sender || mail.subject) {
                    if (mail.sender.search(searchText) !== -1 || mail.subject.search(searchText) !== -1) {
                        return true;
                    }
                }
            });
        }
    };
    MailSearchPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'MailSearch'
        })
    ], MailSearchPipe);
    return MailSearchPipe;
}());



/***/ }),

/***/ "./src/app/apps/email/pipes/pipes.module.ts":
/*!**************************************************!*\
  !*** ./src/app/apps/email/pipes/pipes.module.ts ***!
  \**************************************************/
/*! exports provided: PipesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PipesModule", function() { return PipesModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _mail_search_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mail-search.pipe */ "./src/app/apps/email/pipes/mail-search.pipe.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var PipesModule = /** @class */ (function () {
    function PipesModule() {
    }
    PipesModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
            ],
            declarations: [
                _mail_search_pipe__WEBPACK_IMPORTED_MODULE_2__["MailSearchPipe"]
            ],
            exports: [
                _mail_search_pipe__WEBPACK_IMPORTED_MODULE_2__["MailSearchPipe"]
            ]
        })
    ], PipesModule);
    return PipesModule;
}());



/***/ })

}]);
//# sourceMappingURL=apps-email-mail-module.js.map