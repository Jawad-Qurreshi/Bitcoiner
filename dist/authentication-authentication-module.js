(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["authentication-authentication-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/authentication/404/not-found.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/authentication/404/not-found.component.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"error-box\">\r\n    <div class=\"error-body text-center\">\r\n        <h1 class=\"error-title text-danger\">404</h1>\r\n        <h3 class=\"text-uppercase error-subtitle\">PAGE NOT FOUND !</h3>\r\n        <p class=\"text-muted m-t-30 m-b-30\">YOU SEEM TO BE TRYING TO FIND HIS WAY HOME</p>\r\n        <a href=\"#/dashboard/classic\" class=\"btn btn-danger btn-rounded waves-effect waves-light m-b-40\">Back to home</a> \r\n    </div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/authentication/Admin-lock/lock.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/authentication/Admin-lock/lock.component.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"auth-wrapper d-flex no-block justify-content-center align-items-center\" style=\"background:url(assets/images/big/auth-bg.jpg) no-repeat center center;\">\r\n    <div class=\"auth-box\">\r\n        <div>\r\n            <div class=\"logo\">\r\n                <span class=\"db\"><img src=\"\" alt=\"logo\" /></span>\r\n                <h5 class=\"font-medium m-b-20\">Admin Sign In</h5>\r\n            </div>\r\n            <!-- Form -->\r\n            <div class=\"row\">\r\n                <div class=\"col-12\">\r\n                    <form [formGroup]=\"adminForm\" class=\"form-horizontal m-t-20\" action=\"index.html\">\r\n                        \r\n                        <div class=\"form-group row\">\r\n                            <div class=\"col-12\">\r\n                                <input class=\"form-control form-control-lg\" formControlName=\"username\" type=\"username\" required=\"\" placeholder=\"Enter your Username\">\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"form-group row\">\r\n                            <div class=\"col-12\">\r\n                                <input class=\"form-control form-control-lg\" formControlName=\"password\" type=\"password\" required=\"\" placeholder=\"Enter your password\">\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"form-group text-center\">\r\n                            <div class=\"col-xs-12 p-b-20\">\r\n                                <button (click)=\"login()\" class=\"btn btn-block btn-lg btn-info\" type=\"submit\">Login</button>\r\n                            </div>\r\n                        </div>\r\n                    </form>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/authentication/lock/lock.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/authentication/lock/lock.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"auth-wrapper d-flex no-block justify-content-center align-items-center\" style=\"background:url(assets/images/big/auth-bg.jpg) no-repeat center center;\">\r\n    <div class=\"auth-box\">\r\n        <div>\r\n            <div class=\"logo\">\r\n                <span class=\"db\"><img src=\"assets/images/logo-icon.png\" alt=\"logo\" /></span>\r\n                <h5 class=\"font-medium m-b-20\">Recovery password</h5>\r\n            </div>\r\n            <!-- Form -->\r\n            <div class=\"row\">\r\n                <div class=\"col-12\">\r\n                    <form [formGroup]=\"forgotPasswordForm\" class=\"form-horizontal m-t-20\" action=\"index.html\">\r\n                        \r\n                        <div class=\"form-group row\">\r\n                            <div class=\"input-group mb-3\">\r\n                                <div class=\"input-group-prepend\">\r\n                                    <span class=\"input-group-text\" id=\"basic-addon1\"><i class=\"ti-user\"></i></span>\r\n                                </div>\r\n                                <input type=\"email\" formControlName=\"email\" class=\"form-control form-control-lg\" placeholder=\"Example@email.com\" aria-label=\"email\" aria-describedby=\"basic-addon1\">\r\n                            </div>\r\n                \r\n                        </div>\r\n                        <div class=\"form-group text-center\">\r\n                            <div class=\"col-xs-12 p-b-20\">\r\n                                <button (click)=\"sendpassword()\" class=\"btn btn-block btn-lg btn-info\" type=\"submit\">Send Recovery password</button>\r\n                            </div>\r\n                        </div>\r\n                    </form>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/authentication/login/login.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/authentication/login/login.component.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"auth-wrapper d-flex no-block justify-content-center align-items-center\"\r\n    style=\"background:url(assets/images/big/auth-bg.jpg) no-repeat center center;\">\r\n    <div class=\"auth-box\">\r\n        <div>\r\n            <div class=\"logo\">\r\n                <span class=\"db\"><img src=\"assets/images/logo-icon.png\" alt=\"logo\" /></span>\r\n                <h5 class=\"font-medium m-b-20\">Sign In</h5>\r\n            </div>\r\n            <!-- Form -->\r\n            <div class=\"row\">\r\n                <div class=\"col-12\">\r\n                    <form [formGroup]=\"loginForm\">\r\n                        <div padding>\r\n                            <div class=\"input-group mb-3\">\r\n                                <div class=\"input-group-prepend\">\r\n                                    <span class=\"input-group-text\" id=\"basic-addon1\"><i class=\"ti-user\"></i></span>\r\n                                </div>\r\n                                <input type=\"email\" formControlName=\"email\" class=\"form-control form-control-lg\" placeholder=\"Example@email.com\" aria-label=\"email\" aria-describedby=\"basic-addon1\">\r\n                            </div>\r\n                            <div class=\"input-group mb-3\">\r\n                                <div class=\"input-group-prepend\">\r\n                                    <span class=\"input-group-text\" id=\"basic-addon2\"><i class=\"ti-pencil\"></i></span>\r\n                                </div>\r\n                                <input type=\"password\" formControlName=\"password\" class=\"form-control form-control-lg\" placeholder=\"Password\" aria-label=\"Password\" aria-describedby=\"basic-addon1\">\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-md-12\">\r\n                        </div>\r\n                        \r\n                        <div class=\"form-group row\">\r\n                            <div class=\"col-md-12\">\r\n                                <div class=\"custom-control custom-checkbox\">\r\n                                    <a (click)=\"showRecoverForm()\" href=\"#/authentication/Lock\" id=\"to-recover\" class=\"text-dark float-right\"><i class=\"fa fa-lock m-r-5\"></i> Forgot pwd?</a>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n\r\n                        <div class=\"form-group row\">\r\n                            <div class=\"col-12 \">\r\n                                <div padding>\r\n                                    <button class=\"btn btn-block btn-lg btn-info\" [disabled] =\"loginForm.invalid\" \r\n                                    type=\"submit\" (click)=\"login()\">Log\r\n                                        In</button>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <br>\r\n                        <div class=\"col-sm-12 text-center\">\r\n                            Don't have an account? <a href=\"#/authentication/signup\" class=\"text-info m-l-5\"><b>Sign\r\n                                    Up</b></a>\r\n                        </div>\r\n                    </form>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div id=\"recoverform\" [ngClass]=\"{'d-block': recoverform}\">\r\n            <div class=\"logo\">\r\n                <span class=\"db\"><img src=\"assets/images/logo-icon.png\" alt=\"logo\" /></span>\r\n                <h5 class=\"font-medium m-b-20\">Recover Password</h5>\r\n                <span>Enter your Email and instructions will be sent to you!</span>\r\n            </div>\r\n            <div class=\"row m-t-20\">\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<nz-modal [(nzVisible)]=\"isVisible\" nzTitle=\"Verify yourself\" \r\n (nzOnOk)=\"handleOk()\"\r\n    [nzOkLoading]=\"isOkLoading\"\r\n    [nzFooter]=\"modalFooter\">\r\n    <div>\r\n      <label>Please send a scanned photocopy of your driving license(both sides) or\r\n      National identity card(both sides) or Passport number page for the verification purpose on my email</label>\r\n      </div>\r\n<ng-template #modalFooter>\r\n  <button nz-button nzType=\"primary\" (click)=\"handleOk()\" [nzLoading]=\"isConfirmLoading\">OK</button>\r\n</ng-template>\r\n</nz-modal>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/authentication/signup/signup.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/authentication/signup/signup.component.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"auth-wrapper d-flex no-block justify-content-center align-items-center\" style=\"background:url(assets/images/big/auth-bg.jpg) no-repeat center center;\">\r\n    <div class=\"auth-box\">\r\n        <div>\r\n            <div class=\"logo\">\r\n                <span class=\"db\"><img src=\"assets/images/logo-icon.png\" alt=\"logo\" /></span>\r\n                <h5 class=\"font-medium m-b-20\">Sign Up</h5>\r\n            </div>\r\n             <form [formGroup]=\"signupData\">\r\n                \r\n                <div class=\"form-group row \">\r\n                    <div class=\"col-12 \">\r\n                       <input class=\"form-control form-control-lg\" [(ngModel)]=\"username\" name=\"Username\" type=\"text\" formControlName=\"Username\" required=\" \" placeholder=\"UserName\">\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"form-group row\">\r\n                    <div class=\"col-12 \">\r\n                        <input class=\"form-control form-control-lg\" [(ngModel)]=\"email\" name=\"Email\" type=\"Email\" placeholder=\"your@email.com\" formControlName=\"Email\">\r\n                    </div>\r\n                </div>\r\n                <div class=\"form-group row\">\r\n                    <div class=\"col-12 \">\r\n                        <input class=\"form-control form-control-lg\" [(ngModel)]=\"password\" name=\"Password\" type=\"Password\" placeholder=\"Password\" formControlName=\"Password\">\r\n                    </div>\r\n                </div>\r\n                <div class=\"form-group row\">\r\n                    <div class=\"col-12 \">\r\n                        <input class=\"form-control form-control-lg\" name=\"Confirm\" type=\"Password\" placeholder=\"Password again\" formControlName=\"Confirm\">\r\n                    </div>\r\n                </div>\r\n                <div class=\"form-group row\">\r\n                    <div class=\"col-12 \">\r\n                        <input class=\"form-control form-control-lg\" [(ngModel)]=\"phone\" name=\"Phone\" type=\"text\" placeholder=\"Phone\" formControlName=\"Phone\">\r\n                    </div>\r\n                </div>\r\n                <div class=\"form-group row\">\r\n                    <div class=\"col-12 \">\r\n                        <input class=\"form-control form-control-lg\" [(ngModel)]=\"address\" name=\"Address\" type=\"text\" placeholder=\"Address\" formControlName=\"Address\">\r\n                    </div>\r\n                </div>\r\n                \r\n                <div class=\"form-group row\">\r\n                    <div class=\"col-md-12 \">\r\n                        <div class=\"custom-control custom-checkbox\">\r\n                            <input type=\"checkbox\" formControlName=\"checkme\" class=\"custom-control-input\" id=\"customCheck1\">\r\n                            <label class=\"custom-control-label\" for=\"customCheck1\">I agree to all <a href=\"javascript:void(0)\">Terms</a></label>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n\r\n            <button class=\"btn btn-block btn-lg btn-info \" type=\"submit\" [disabled]=\"signupData.invalid\" (click)=\"SaveToDB()\" > SIGN UP</button>\r\n\r\n            <div class=\"form-group m-b-0 m-t-10 \">\r\n                <div class=\"col-sm-12 text-center \">\r\n                    Already have an account? <a href=\"#/authentication/login \" class=\"text-info m-l-5 \"><b>Sign In</b></a>\r\n                </div>\r\n            </div>\r\n  </form>\r\n        </div> \r\n    </div>\r\n</div>\r\n\r\n<nz-modal [(nzVisible)]=\"isVisible\" nzTitle=\"Verifify me\" \r\n (nzOnOk)=\"handleOk()\"\r\n    [nzOkLoading]=\"isOkLoading\"\r\n    [nzFooter]=\"modalFooter\">\r\n    \r\n    <div>\r\n      <label>Please go to your emtered email address and send a scanned photocopy of your driving license(both sides) or\r\n      National identity card(both sides) or Passport number page for the verification purpose on my email</label>\r\n      </div>\r\n<ng-template #modalFooter>\r\n  <button nz-button nzType=\"primary\" (click)=\"handleOk()\" [nzLoading]=\"isConfirmLoading\">OK</button>\r\n</ng-template>\r\n</nz-modal>");

/***/ }),

/***/ "./src/app/authentication/404/not-found.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/authentication/404/not-found.component.ts ***!
  \***********************************************************/
/*! exports provided: NotfoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotfoundComponent", function() { return NotfoundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

var NotfoundComponent = /** @class */ (function () {
    function NotfoundComponent() {
    }
    NotfoundComponent.prototype.ngAfterViewInit = function () { };
    NotfoundComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-not-found',
            template: __importDefault(__webpack_require__(/*! raw-loader!./not-found.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/authentication/404/not-found.component.html")).default
        })
    ], NotfoundComponent);
    return NotfoundComponent;
}());



/***/ }),

/***/ "./src/app/authentication/Admin-lock/lock.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/authentication/Admin-lock/lock.component.ts ***!
  \*************************************************************/
/*! exports provided: AdminLockComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminLockComponent", function() { return AdminLockComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _sdk_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../sdk/user.service */ "./sdk/user.service.ts");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};





var AdminLockComponent = /** @class */ (function () {
    function AdminLockComponent(formBuilder, userservice, message, router) {
        this.formBuilder = formBuilder;
        this.userservice = userservice;
        this.message = message;
        this.router = router;
    }
    AdminLockComponent.prototype.ngOnInit = function () {
        this.formInitializer();
    };
    AdminLockComponent.prototype.formInitializer = function () {
        this.adminForm = this.formBuilder.group({
            username: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            password: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(6)]]
        });
    };
    AdminLockComponent.prototype.login = function () {
        var _this = this;
        this.clicked = true;
        var loginData = this.adminForm.value;
        this.userservice.adminLogin(loginData).subscribe(function (response) {
            localStorage.setItem("adminToken", response.token);
            _this.message.success("Login Successful");
            _this.clicked = false;
            _this.router.navigate(["dashboard/dashboard1"]);
        }, function (err) {
            _this.message.success("Invalid Username or password");
            _this.clicked = false;
        });
    };
    AdminLockComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] },
        { type: _sdk_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] },
        { type: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__["NzMessageService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
    ]; };
    AdminLockComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-admin-lock',
            template: __importDefault(__webpack_require__(/*! raw-loader!./lock.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/authentication/Admin-lock/lock.component.html")).default
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _sdk_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"],
            ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__["NzMessageService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], AdminLockComponent);
    return AdminLockComponent;
}());



/***/ }),

/***/ "./src/app/authentication/authentication.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/authentication/authentication.module.ts ***!
  \*********************************************************/
/*! exports provided: AuthenticationModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationModule", function() { return AuthenticationModule; });
/* harmony import */ var _authentication_routing__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./authentication.routing */ "./src/app/authentication/authentication.routing.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login/login.component */ "./src/app/authentication/login/login.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _404_not_found_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./404/not-found.component */ "./src/app/authentication/404/not-found.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./signup/signup.component */ "./src/app/authentication/signup/signup.component.ts");
/* harmony import */ var _lock_lock_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./lock/lock.component */ "./src/app/authentication/lock/lock.component.ts");
/* harmony import */ var _Admin_lock_lock_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Admin-lock/lock.component */ "./src/app/authentication/Admin-lock/lock.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};












//import { Signup2Component } from './signup2/signup2.component';
var AuthenticationModule = /** @class */ (function () {
    function AuthenticationModule() {
    }
    AuthenticationModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterModule"].forChild(_authentication_routing__WEBPACK_IMPORTED_MODULE_0__["AuthenticationRoutes"]),
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"],
                ng_zorro_antd__WEBPACK_IMPORTED_MODULE_4__["NgZorroAntdModule"]
            ],
            declarations: [_404_not_found_component__WEBPACK_IMPORTED_MODULE_6__["NotfoundComponent"], _Admin_lock_lock_component__WEBPACK_IMPORTED_MODULE_11__["AdminLockComponent"], _lock_lock_component__WEBPACK_IMPORTED_MODULE_10__["LockComponent"], _login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"], _signup_signup_component__WEBPACK_IMPORTED_MODULE_9__["SignupComponent"]]
        })
    ], AuthenticationModule);
    return AuthenticationModule;
}());



/***/ }),

/***/ "./src/app/authentication/authentication.routing.ts":
/*!**********************************************************!*\
  !*** ./src/app/authentication/authentication.routing.ts ***!
  \**********************************************************/
/*! exports provided: AuthenticationRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationRoutes", function() { return AuthenticationRoutes; });
/* harmony import */ var _404_not_found_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./404/not-found.component */ "./src/app/authentication/404/not-found.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login/login.component */ "./src/app/authentication/login/login.component.ts");
/* harmony import */ var _lock_lock_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lock/lock.component */ "./src/app/authentication/lock/lock.component.ts");
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./signup/signup.component */ "./src/app/authentication/signup/signup.component.ts");
/* harmony import */ var _Admin_lock_lock_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Admin-lock/lock.component */ "./src/app/authentication/Admin-lock/lock.component.ts");
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};





var AuthenticationRoutes = [
    {
        path: '',
        children: [
            {
                path: '404',
                component: _404_not_found_component__WEBPACK_IMPORTED_MODULE_0__["NotfoundComponent"]
            },
            {
                path: 'signup',
                component: _signup_signup_component__WEBPACK_IMPORTED_MODULE_3__["SignupComponent"]
            },
            {
                path: 'login',
                component: _login_login_component__WEBPACK_IMPORTED_MODULE_1__["LoginComponent"]
            },
            {
                path: 'Lock',
                component: _lock_lock_component__WEBPACK_IMPORTED_MODULE_2__["LockComponent"]
            },
            {
                path: 'Admin',
                component: _Admin_lock_lock_component__WEBPACK_IMPORTED_MODULE_4__["AdminLockComponent"]
            },
        ]
    }
];


/***/ }),

/***/ "./src/app/authentication/lock/lock.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/authentication/lock/lock.component.ts ***!
  \*******************************************************/
/*! exports provided: LockComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LockComponent", function() { return LockComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _sdk_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../sdk/user.service */ "./sdk/user.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};



var LockComponent = /** @class */ (function () {
    function LockComponent(formBuilder, service) {
        this.formBuilder = formBuilder;
        this.service = service;
    }
    LockComponent.prototype.ngOnInit = function () {
        this.formInitializer();
    };
    LockComponent.prototype.formInitializer = function () {
        this.forgotPasswordForm = this.formBuilder.group({
            email: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]]
        });
    };
    LockComponent.prototype.sendpassword = function () {
        var _this = this;
        try {
            this.clicked = true;
            var forgotData = this.forgotPasswordForm.value;
            console.log('ForgotPaswordData:', forgotData);
            this.service.userForgotPassword(forgotData).subscribe(function (data) {
                console.log('got response from server', data);
                alert('Password sent! Check your Email');
                _this.clicked = false;
            }, function (error) {
                console.log('error', error);
                alert('User does not exist! Please sign up first.');
                _this.clicked = false;
            });
        }
        catch (ex) {
            console.log('ex', ex);
        }
    };
    LockComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] },
        { type: _sdk_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] }
    ]; };
    LockComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-lock',
            template: __importDefault(__webpack_require__(/*! raw-loader!./lock.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/authentication/lock/lock.component.html")).default
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], _sdk_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]])
    ], LockComponent);
    return LockComponent;
}());



/***/ }),

/***/ "./src/app/authentication/login/login.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/authentication/login/login.component.ts ***!
  \*********************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var sdk_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! sdk/user.service */ "./sdk/user.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};





var LoginComponent = /** @class */ (function () {
    function LoginComponent(router, formBuilder, service, message) {
        this.router = router;
        this.formBuilder = formBuilder;
        this.service = service;
        this.message = message;
        this.isVisible = false;
        // loginform = true;
        this.recoverform = false;
    }
    LoginComponent.prototype.forgotPassword = function () {
        this.router.navigateByUrl("/authentication/Lock");
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.clicked = true;
        try {
            var loginData = this.loginForm.value;
            this.service.userLogin(loginData).subscribe(function (data) {
                if (data.isVerified === false) {
                    _this.isVisible = true;
                    localStorage.setItem("token", data.token);
                    // localStorage.setItem("ID", data.id);
                }
                else {
                    localStorage.setItem("token", data.token);
                    // localStorage.setItem("ID", data.id);
                    _this.message.success("Login Successful");
                    _this.router.navigate(["dashboard/dashboard2"]);
                }
            }, function (error) {
                _this.clicked = false;
                _this.loading = false;
                console.log("error", error);
                _this.message.error("Wrong email or password!");
                // alert("Wrong email or password!");
            });
        }
        catch (ex) {
            console.log("ex", ex);
        }
    };
    // tslint:disable-next-line: use-lifecycle-interface
    LoginComponent.prototype.ngOnInit = function () {
        this.clicked = false;
        this.formInitializer();
    };
    LoginComponent.prototype.formInitializer = function () {
        this.loginForm = this.formBuilder.group({
            email: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]],
            password: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]]
        });
    };
    LoginComponent.prototype.handleOk = function () {
        var _this = this;
        this.isOkLoading = true;
        this.message.success("Login Successful");
        this.router.navigate(["dashboard/dashboard2"]);
        setTimeout(function () {
            _this.isVisible = false;
            _this.isOkLoading = false;
        }, 100);
    };
    LoginComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] },
        { type: sdk_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"] },
        { type: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_2__["NzMessageService"] }
    ]; };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-login",
            template: __importDefault(__webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/authentication/login/login.component.html")).default
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            sdk_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"],
            ng_zorro_antd__WEBPACK_IMPORTED_MODULE_2__["NzMessageService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/authentication/signup/signup.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/authentication/signup/signup.component.ts ***!
  \***********************************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var sdk_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! sdk/user.service */ "./sdk/user.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};





var SignupComponent = /** @class */ (function () {
    function SignupComponent(fb, router, userService, message) {
        this.fb = fb;
        this.router = router;
        this.userService = userService;
        this.message = message;
        this.loading = false;
        this.clicked = false;
        this.isVisible = false;
        this.isOkLoading = false;
    }
    SignupComponent.prototype.ngOnInit = function () {
        this.formInitializer();
    };
    SignupComponent.prototype.formInitializer = function () {
        this.signupData = this.fb.group({
            Username: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
            Email: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].email]],
            Password: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].minLength(6)]],
            Confirm: [
                "",
                [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].minLength(6),
                    this.matchOtherValidator("password")
                ]
            ],
            Phone: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
            //DOB: ['', [Validators.required]],
            Address: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]],
            checkme: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]
        });
    };
    SignupComponent.prototype.showModel = function () {
        this.isVisible = true;
    };
    SignupComponent.prototype.handleOk = function () {
        var _this = this;
        this.isOkLoading = true;
        this.router.navigate(["/authentication/login"]);
        setTimeout(function () {
            _this.isVisible = false;
            _this.isOkLoading = false;
        }, 100);
    };
    SignupComponent.prototype.matchOtherValidator = function (otherControlName) {
        return function (control) {
            var otherControl = control.root.get(otherControlName);
            if (otherControl) {
                var subscription_1 = otherControl.valueChanges.subscribe(function () {
                    control.updateValueAndValidity();
                    subscription_1.unsubscribe();
                });
            }
            return otherControl && control.value !== otherControl.value
                ? { match: true }
                : null;
        };
    };
    SignupComponent.prototype.SaveToDB = function () {
        var _this = this;
        this.clicked = true;
        this.loading = true;
        var body = {
            username: this.username,
            password: this.password,
            email: this.email,
            phone: this.phone,
            address: this.address
        };
        this.userService.userRegister(body).subscribe(function (data) {
            if (data.isSuccess == false) {
                _this.message.error("User already exists");
            }
            else {
                console.log("got response from server", data);
                _this.showModel();
            }
        }, function (error) {
            _this.message.error("Unable to Sign up");
        });
    };
    SignupComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: sdk_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"] },
        { type: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_2__["NzMessageService"] }
    ]; };
    SignupComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-signup",
            template: __importDefault(__webpack_require__(/*! raw-loader!./signup.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/authentication/signup/signup.component.html")).default
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            sdk_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"],
            ng_zorro_antd__WEBPACK_IMPORTED_MODULE_2__["NzMessageService"]])
    ], SignupComponent);
    return SignupComponent;
}());



/***/ })

}]);
//# sourceMappingURL=authentication-authentication-module.js.map