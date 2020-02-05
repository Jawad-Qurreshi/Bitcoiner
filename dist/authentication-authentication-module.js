(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["authentication-authentication-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/authentication/404/not-found.component.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/authentication/404/not-found.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"error-box\">\r\n    <div class=\"error-body text-center\">\r\n        <h1 class=\"error-title text-danger\">404</h1>\r\n        <h3 class=\"text-uppercase error-subtitle\">PAGE NOT FOUND !</h3>\r\n        <p class=\"text-muted m-t-30 m-b-30\">YOU SEEM TO BE TRYING TO FIND HIS WAY HOME</p>\r\n        <a href=\"#/dashboard/classic\" class=\"btn btn-danger btn-rounded waves-effect waves-light m-b-40\">Back to home</a> \r\n    </div>\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/authentication/login/login.component.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/authentication/login/login.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"auth-wrapper d-flex no-block justify-content-center align-items-center\" style=\"background:url(assets/images/big/auth-bg.jpg) no-repeat center center;\">\r\n    <div class=\"auth-box\">\r\n        <div >\r\n            <div class=\"logo\">\r\n                <span class=\"db\"><img src=\"assets/images/logo-icon.png\" alt=\"logo\" /></span>\r\n                <h5 class=\"font-medium m-b-20\">Sign In to Admin</h5>\r\n            </div>\r\n            <!-- Form -->\r\n            <div class=\"row\">\r\n                <div class=\"col-12\">\r\n                    <form [formGroup]=\"loginForm\">\r\n                             \r\n                              \r\n                              <div padding>\r\n                                \r\n                                <input type=\"email\" formControlName=\"username\" class=\"form-control form-control-lg\" placeholder=\"Username\" aria-label=\"Username\" aria-describedby=\"basic-addon1\">\r\n                                  <!-- <input name=\"username\" type=\"email\" placeholder=\"your@email.com\" formControlName=\"username\">\r\n                             -->\r\n                             <input type=\"password\" formControlName=\"password\" class=\"form-control form-control-lg\" placeholder=\"Password\" aria-label=\"Password\" aria-describedby=\"basic-addon1\">\r\n                                  <!-- <input name=\"password\" type=\"password\" placeholder=\"Password\" formControlName=\"password\"> -->\r\n                                \r\n                              </div>\r\n                              <div class=\"col-md-12\">\r\n                                <div class=\"custom-control custom-checkbox\">\r\n                                    <input type=\"checkbox\" class=\"custom-control-input\" id=\"customCheck1\">\r\n                                    <label class=\"custom-control-label\" for=\"customCheck1\">Remember me</label>\r\n                                    <a (click)=\"showRecoverForm()\" href=\"javascript:void(0)\" id=\"to-recover\" class=\"text-dark float-right\"><i class=\"fa fa-lock m-r-5\"></i> Forgot pwd?</a>\r\n                                </div>\r\n                            </div>\r\n                              <div padding>\r\n                                <!-- <button  size=\"large\" (click)=\"login()\" expand=\"block\" shape=\"round\">Login -->\r\n                                    <button class=\"btn btn-block btn-lg btn-info\" type=\"submit\" (click)=\"login()\">Log In</button>\r\n                              </div>\r\n                              <div class=\"col-sm-12 text-center\">\r\n                                Don't have an account? <a href=\"#/authentication/signup\" class=\"text-info m-l-5\"><b>Sign Up</b></a>\r\n                            </div>\r\n                              <div text-center>\r\n                                <button  size=\"small\" (click)=\"forgotPassword()\" shape=\"round\">Forgot Password?</button>\r\n                              </div>\r\n                        \r\n                      </form>\r\n                    <!-- <form claform-horizontal m-t-20\" [formGroup]=\"loginData\">\r\n                        <div class=\"t-group mb-3\">\r\n                            <div cl\"input-group-prepend\">\r\n                                <sclass=\"input-group-text\" id=\"basic-addon1\"><i class=\"ti-user\"></i></span>\r\n                            </div>\r\n                        <input type=\"text\" formControlName=\"username\" class=\"form-control form-control-lg\" placeholder=\"Username\" aria-label=\"Username\" aria-describedby=\"basic-addon1\">\r\n                    </div>\r\n                        <div class=\"input-group mb-3\">\r\n                            <div class=\"input-group-prepend\">\r\n                                <span class=\"input-group-text\" id=\"basic-addon2\"><i class=\"ti-pencil\"></i></span>\r\n                            </div>\r\n                            <input type=\"text\" formControlName=\"password\" class=\"form-control form-control-lg\" placeholder=\"Password\" aria-label=\"Password\" aria-describedby=\"basic-addon1\">\r\n                        </div>\r\n                        <div class=\"form-group row\">\r\n                            <div class=\"col-md-12\">\r\n                                <div class=\"custom-control custom-checkbox\">\r\n                                    <input type=\"checkbox\" class=\"custom-control-input\" id=\"customCheck1\">\r\n                                    <label class=\"custom-control-label\" for=\"customCheck1\">Remember me</label>\r\n                                    <a (click)=\"showRecoverForm()\" href=\"javascript:void(0)\" id=\"to-recover\" class=\"text-dark float-right\"><i class=\"fa fa-lock m-r-5\"></i> Forgot pwd?</a>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"form-group text-center\">\r\n                            <div class=\"col-xs-12 p-b-20\">\r\n                                <button class=\"btn btn-block btn-lg btn-info\" type=\"submit\" (click)=\"login()\">Log In</button>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"row\">\r\n                            <div class=\"col-xs-12 col-sm-12 col-md-12 m-t-10 text-center\">\r\n                                <div class=\"social\">\r\n                                    <a href=\"javascript:void(0)\" class=\"btn btn-facebook m-r-5\" data-toggle=\"tooltip\" title=\"\" data-original-title=\"Login with Facebook\"> <i aria-hidden=\"true\" class=\"fab fa-facebook\"></i> </a>\r\n                                    <a href=\"javascript:void(0)\" class=\"btn btn-googleplus\" data-toggle=\"tooltip\" title=\"\" data-original-title=\"Login with Google\"> <i aria-hidden=\"true\" class=\"fab fa-google-plus\"></i> </a>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"form-group m-b-0 m-t-10\">\r\n                            <div class=\"col-sm-12 text-center\">\r\n                                Don't have an account? <a href=\"#/authentication/signup\" class=\"text-info m-l-5\"><b>Sign Up</b></a>\r\n                            </div>\r\n                        </div>\r\n                    </form> -->\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div id=\"recoverform\" [ngClass]=\"{'d-block': recoverform}\">\r\n            <div class=\"logo\">\r\n                <span class=\"db\"><img src=\"assets/images/logo-icon.png\" alt=\"logo\" /></span>\r\n                <h5 class=\"font-medium m-b-20\">Recover Password</h5>\r\n                <span>Enter your Email and instructions will be sent to you!</span>\r\n            </div>\r\n            <div class=\"row m-t-20\">\r\n                \r\n                <!-- <form class=\"col-12\" [formGroup]=\"recoveryData\">\r\n                    \r\n                    <div class=\"row\">\r\n                        <div class=\"col-12\">\r\n                            <input class=\"form-control form-control-lg\" formControlName=\"recoveryemail\" type=\"email\" required=\"\" placeholder=\"Username\">\r\n                        </div>\r\n                    </div>\r\n                    \r\n                    <div class=\"row m-t-20\">\r\n                        <div class=\"col-12\">\r\n                            <button class=\"btn btn-block btn-lg btn-danger\" formControlName=\"resetpassword\" type=\"submit\" name=\"action\">Reset</button>\r\n                        </div>\r\n                    </div>\r\n                </form> -->\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/authentication/signup/signup.component.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/authentication/signup/signup.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"auth-wrapper d-flex no-block justify-content-center align-items-center\" style=\"background:url(assets/images/big/auth-bg.jpg) no-repeat center center;\">\r\n    <div class=\"auth-box\">\r\n        <div>\r\n            <div class=\"logo\">\r\n                <span class=\"db\"><img src=\"assets/images/logo-icon.png\" alt=\"logo\" /></span>\r\n                <h5 class=\"font-medium m-b-20\">Sign Up to Admin</h5>\r\n            </div>\r\n             <form [formGroup]=\"signupData\">\r\n                \r\n                <div class=\"form-group row \">\r\n                    <div class=\"col-12 \">\r\n                       <input class=\"form-control form-control-lg\"   name=\"name\" type=\"text\" formControlName=\"username\" required=\" \" placeholder=\"Name\">\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"form-group row\">\r\n                    <div class=\"col-12 \">\r\n                        <input class=\"form-control form-control-lg\" name=\"email\" type=\"email\" placeholder=\"your@email.com\" formControlName=\"email\">\r\n                    </div>\r\n                </div>\r\n                <div class=\"form-group row\">\r\n                    <div class=\"col-12 \">\r\n                        <input class=\"form-control form-control-lg\" name=\"password\" type=\"password\" placeholder=\"Password\" formControlName=\"password\">\r\n                    </div>\r\n                </div>\r\n                <div class=\"form-group row\">\r\n                    <div class=\"col-12 \">\r\n                        <input class=\"form-control form-control-lg\" name=\"confirm\" type=\"password\" placeholder=\"Password again\" formControlName=\"confirm\">\r\n                    </div>\r\n                </div>\r\n                \r\n                <div class=\"form-group row\">\r\n                    <div class=\"col-md-12 \">\r\n                        <div class=\"custom-control custom-checkbox\">\r\n                            <input type=\"checkbox\" class=\"custom-control-input\" id=\"customCheck1\">\r\n                            <label class=\"custom-control-label\" for=\"customCheck1\">I agree to all <a href=\"javascript:void(0)\">Terms</a></label>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n\r\n            <button class=\"btn btn-block btn-lg btn-info \" type=\"submit\" (click)=\"SaveToDB()\" > SIGN UP</button>\r\n\r\n            <div class=\"form-group m-b-0 m-t-10 \">\r\n                <div class=\"col-sm-12 text-center \">\r\n                    Already have an account? <a href=\"#/authentication/login \" class=\"text-info m-l-5 \"><b>Sign In</b></a>\r\n                </div>\r\n            </div>\r\n  </form>\r\n            <!-- <div class=\"row\">\r\n                <div class=\"col-12\">\r\n                    <form class=\"form-horizontal m-t-20\" action=\"index.html\">\r\n                        <div class=\"form-group row \">\r\n                            <div class=\"col-12 \">\r\n                                <input class=\"form-control form-control-lg\" type=\"text\" required=\" \" placeholder=\"Name\">\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"form-group row\">\r\n                            <div class=\"col-12 \">\r\n                                <input class=\"form-control form-control-lg\" type=\"text\" required=\" \" placeholder=\"Email\">\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"form-group row\">\r\n                            <div class=\"col-12 \">\r\n                                <input class=\"form-control form-control-lg\" type=\"password\" required=\" \" placeholder=\"Password\">\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"form-group row\">\r\n                            <div class=\"col-12 \">\r\n                                <input class=\"form-control form-control-lg\" type=\"password\" required=\" \" placeholder=\"Confirm Password\">\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"form-group row\">\r\n                            <div class=\"col-md-12 \">\r\n                                <div class=\"custom-control custom-checkbox\">\r\n                                    <input type=\"checkbox\" class=\"custom-control-input\" id=\"customCheck1\">\r\n                                    <label class=\"custom-control-label\" for=\"customCheck1\">I agree to all <a href=\"javascript:void(0)\">Terms</a></label>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"form-group text-center \">\r\n                            <div class=\"col-xs-12 p-b-20 \">\r\n                                <button class=\"btn btn-block btn-lg btn-info \" type=\"submit \">SIGN UP</button>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"form-group m-b-0 m-t-10 \">\r\n                            <div class=\"col-sm-12 text-center \">\r\n                                Already have an account? <a href=\"#/authentication/login \" class=\"text-info m-l-5 \"><b>Sign In</b></a>\r\n                            </div>\r\n                        </div>\r\n                    </form>\r\n                </div>\r\n            </div>-->\r\n        </div> \r\n    </div>\r\n</div>"

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

var NotfoundComponent = /** @class */ (function () {
    function NotfoundComponent() {
    }
    NotfoundComponent.prototype.ngAfterViewInit = function () { };
    NotfoundComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-not-found',
            template: __webpack_require__(/*! raw-loader!./not-found.component.html */ "./node_modules/raw-loader/index.js!./src/app/authentication/404/not-found.component.html")
        })
    ], NotfoundComponent);
    return NotfoundComponent;
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _404_not_found_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./404/not-found.component */ "./src/app/authentication/404/not-found.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login/login.component */ "./src/app/authentication/login/login.component.ts");
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./signup/signup.component */ "./src/app/authentication/signup/signup.component.ts");
/* harmony import */ var _authentication_routing__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./authentication.routing */ "./src/app/authentication/authentication.routing.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






//import { Login2Component } from './login2/login2.component';

//import { Signup2Component } from './signup2/signup2.component';


var AuthenticationModule = /** @class */ (function () {
    function AuthenticationModule() {
    }
    AuthenticationModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(_authentication_routing__WEBPACK_IMPORTED_MODULE_7__["AuthenticationRoutes"]),
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModule"]
            ],
            declarations: [
                _404_not_found_component__WEBPACK_IMPORTED_MODULE_4__["NotfoundComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"],
                _signup_signup_component__WEBPACK_IMPORTED_MODULE_6__["SignupComponent"]
            ]
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
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./signup/signup.component */ "./src/app/authentication/signup/signup.component.ts");


//import { Login2Component } from './login2/login2.component';

//import { Signup2Component } from './signup2/signup2.component';
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
                component: _signup_signup_component__WEBPACK_IMPORTED_MODULE_2__["SignupComponent"]
            },
            {
                path: 'login',
                component: _login_login_component__WEBPACK_IMPORTED_MODULE_1__["LoginComponent"]
            },
        ]
    }
];


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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var sdk_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! sdk/user.service */ "./sdk/user.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = /** @class */ (function () {
    function LoginComponent(router, formBuilder, service) {
        this.router = router;
        this.formBuilder = formBuilder;
        this.service = service;
        this.loginform = true;
        this.recoverform = false;
    }
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.clicked = true;
        try {
            var loginData = this.loginForm.value;
            console.log('loginData', loginData);
            this.service.userLogin(loginData).subscribe(function (data) {
                console.log('got response from server', data);
                //localStorage.setItem('token', 'mytoken');
                // localStorage.setItem('name', loginData.email);
                //this.loading = false;
                _this.router.navigate(['/dashboard1']);
            }, function (error) {
                _this.clicked = false;
                _this.loading = false;
                console.log('error', error);
                alert('Wrong email or password!');
            });
        }
        catch (ex) {
            console.log('ex', ex);
        }
    };
    // tslint:disable-next-line: use-lifecycle-interface
    LoginComponent.prototype.ngOnInit = function () {
        this.clicked = false;
        this.formInitializer();
    };
    LoginComponent.prototype.formInitializer = function () {
        this.loginForm = this.formBuilder.group({
            username: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]],
            password: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]]
        });
        this.recoveryForm = this.formBuilder.group({
            recoveryemail: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]],
            resetpassword: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]]
        });
    };
    LoginComponent.prototype.showRecoverForm = function () {
        this.loginform = !this.loginform;
        this.recoverform = !this.recoverform;
    };
    LoginComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: sdk_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"] }
    ]; };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/index.js!./src/app/authentication/login/login.component.html")
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], sdk_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]])
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var sdk_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! sdk/user.service */ "./sdk/user.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SignupComponent = /** @class */ (function () {
    function SignupComponent(fb, router, userService) {
        this.fb = fb;
        this.router = router;
        this.userService = userService;
        this.loading = false;
        this.clicked = false;
    }
    SignupComponent.prototype.ngOnInit = function () {
        this.formInitializer();
    };
    SignupComponent.prototype.formInitializer = function () {
        this.signupData = this.fb.group({
            username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(6)]],
            confirm: [
                '',
                [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(6),
                    this.matchOtherValidator('password')
                ]
            ]
        });
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
        this.userService.userRegister(this.signupData.value).subscribe(function (data) {
            console.log('got response from server', data);
            // alert('Registeration Successfull!');
            // this.loading = false;
            _this.router.navigate(['/login']);
        }, function (error) {
            _this.clicked = false;
            _this.loading = false;
            console.log('error', error);
            alert('Registeration Failed! User Already Exists');
        });
    };
    SignupComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: sdk_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"] }
    ]; };
    SignupComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-signup',
            template: __webpack_require__(/*! raw-loader!./signup.component.html */ "./node_modules/raw-loader/index.js!./src/app/authentication/signup/signup.component.html")
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], sdk_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]])
    ], SignupComponent);
    return SignupComponent;
}());



/***/ })

}]);
//# sourceMappingURL=authentication-authentication-module.js.map