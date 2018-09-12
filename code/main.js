(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/_guards/auth.guard.ts":
/*!***************************************!*\
  !*** ./src/app/_guards/auth.guard.ts ***!
  \***************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthGuard = /** @class */ (function () {
    function AuthGuard(router) {
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (route, state) {
        if (localStorage.getItem('token')) {
            return true;
        }
        this.router.navigate(['/login'], {});
        return false;
    };
    AuthGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/admin/admin.component.css":
/*!*******************************************!*\
  !*** ./src/app/admin/admin.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/admin/admin.component.html":
/*!********************************************!*\
  !*** ./src/app/admin/admin.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-10\">\n\n    <button type=\"button\" routerLink=\"/form-people\" style=\"margin-left: -10px;\" class=\"btn btn-info mb-4\">Add persons</button>\n\n    <table class=\"table admin-table\">\n      <thead class=\"thead-dark\">\n        <tr class=\"row\">\n          <th class=\"col-3\">Email</th>\n          <th class=\"col-2\"> First name</th>\n          <th class=\"col-2\"> Last name</th>\n          <th class=\"col-2\">Address</th>\n          <th class=\"col-1\">Enabled</th>\n          <th class=\"col-2\">Actions</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr class=\"row\" *ngFor=\"let person of persons\">\n          <td class=\"col-3 d-inline-block text-truncate\"> {{person.email}} </td>\n          <td class=\"col-2 d-inline-block text-truncate\">{{person.first_name}}</td>\n          <td class=\"col-2 d-inline-block text-truncate\"> {{person.last_name}}</td>\n          <td class=\"col-2 d-inline-block text-truncate\"> {{person.address}}</td>\n          <td class=\"col-1 d-inline-block text-truncate\">{{person.enabled}}</td>\n          <td class=\"col-2 d-inline-block text-truncate\">\n            <div class=\"btn-group\" role=\"group\" aria-label=\"Basic example\">\n              <button type=\"button\" routerLink=\"/detail/{{person.id}}\" class=\"btn btn-outline-primary\">\n                <i class=\"fas fa-eye\"></i>\n              </button>\n              <button type=\"button\" routerLink=\"/update/{{person.id}}\" class=\"btn btn-outline-primary\">\n                <i class=\"fas fa-pencil-alt\"></i>\n              </button>\n              <button type=\"button\" class=\"btn btn-outline-primary\" (click)=\"deletePerson(person)\">\n                <i class=\"fas fa-trash-alt\"></i>\n              </button>\n              <button type=\"button\" class=\"btn btn-outline-primary\" (click)=\"togglePerson(person)\">\n                <i class=\"fas fa-check-square\" *ngIf=\"person.enabled\" ></i>\n                <i class=\"far fa-square regular\" *ngIf=\"!person.enabled\" ></i>\n              </button>\n            </div>\n          </td>\n        </tr>\n      </tbody>\n    </table>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/admin/admin.component.ts":
/*!******************************************!*\
  !*** ./src/app/admin/admin.component.ts ***!
  \******************************************/
/*! exports provided: AdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminComponent", function() { return AdminComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_persons_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/persons.service */ "./src/app/services/persons.service.ts");
/* harmony import */ var _services_alerts_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/alerts.service */ "./src/app/services/alerts.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AdminComponent = /** @class */ (function () {
    function AdminComponent(personsService, alertService) {
        this.personsService = personsService;
        this.alertService = alertService;
        this.searchPeople();
    }
    AdminComponent.prototype.togglePerson = function (person) {
        if (person.enabled) {
            this.desactivatePeople(person);
        }
        else {
            this.enablePerson(person);
        }
    };
    AdminComponent.prototype.desactivatePeople = function (person) {
        this.personsService.activatePerson(person.id)
            .subscribe(function (result) {
            person.enabled = false;
        }, this.handleError.bind(this));
    };
    AdminComponent.prototype.enablePerson = function (person) {
        this.personsService.enablePerson(person.id)
            .subscribe(function (result) {
            person.enabled = true;
        }, this.handleError.bind(this));
    };
    AdminComponent.prototype.deletePerson = function (person) {
        var _this = this;
        this.personsService.deletePerson(person.id)
            .subscribe(function (result) {
            _this.searchPeople();
        }, this.handleError.bind(this));
    };
    AdminComponent.prototype.searchPeople = function () {
        var _this = this;
        this.personsService.getPersons()
            .subscribe(function (persons) {
            _this.persons = persons;
        });
    };
    AdminComponent.prototype.handleError = function (response) {
        if (response.error && response.error.error) {
            this.alertService.sendMessage(response.error.reason, 'alert-danger');
        }
    };
    AdminComponent.prototype.ngOnInit = function () {
    };
    AdminComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-admin',
            template: __webpack_require__(/*! ./admin.component.html */ "./src/app/admin/admin.component.html"),
            styles: [__webpack_require__(/*! ./admin.component.css */ "./src/app/admin/admin.component.css")]
        }),
        __metadata("design:paramtypes", [_services_persons_service__WEBPACK_IMPORTED_MODULE_1__["PersonsService"], _services_alerts_service__WEBPACK_IMPORTED_MODULE_2__["AlertsService"]])
    ], AdminComponent);
    return AdminComponent;
}());



/***/ }),

/***/ "./src/app/alert/alert.component.css":
/*!*******************************************!*\
  !*** ./src/app/alert/alert.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/alert/alert.component.html":
/*!********************************************!*\
  !*** ./src/app/alert/alert.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"alert\" [ngClass]=\"alertClass\" role=\"alert\">\n  {{alertMsg}}\n</div>\n"

/***/ }),

/***/ "./src/app/alert/alert.component.ts":
/*!******************************************!*\
  !*** ./src/app/alert/alert.component.ts ***!
  \******************************************/
/*! exports provided: AlertComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertComponent", function() { return AlertComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_alerts_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/alerts.service */ "./src/app/services/alerts.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AlertComponent = /** @class */ (function () {
    function AlertComponent(alertService) {
        var _this = this;
        this.alertService = alertService;
        this.alertService.getMessage().subscribe(function (msg) {
            _this.alertMsg = msg.text;
            _this.alertClass = msg.errorClass;
        });
    }
    AlertComponent.prototype.ngOnInit = function () {
    };
    AlertComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-alert',
            template: __webpack_require__(/*! ./alert.component.html */ "./src/app/alert/alert.component.html"),
            styles: [__webpack_require__(/*! ./alert.component.css */ "./src/app/alert/alert.component.css")]
        }),
        __metadata("design:paramtypes", [_services_alerts_service__WEBPACK_IMPORTED_MODULE_1__["AlertsService"]])
    ], AlertComponent);
    return AlertComponent;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-dark bg-dark\">\n  <a class=\"navbar-brand\" routerLink=\"/index\">Persons</a>\n  <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n    <ul class=\"navbar-nav mr-auto\">\n      <li class=\"nav-item active\">\n        <a class=\"nav-link\" routerLink=\"/index\">List Persons</a>\n      </li>\n      <li class=\"nav-item active\">\n        <a class=\"nav-link\" routerLink=\"/form-people\">Add Persons</a>\n      </li>\n    </ul>\n  </div>\n</nav>\n<app-alert></app-alert>\n\n<div class=\"container-fluid\">\n    <div class=\"row justify-content-md-center\">\n      <div class=\"offset-md-1 col-md-10 p-4\">\n        <router-outlet></router-outlet>\n      </div>\n    </div>\n</div>"

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
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [])
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _services_persons_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/persons.service */ "./src/app/services/persons.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_alerts_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./services/alerts.service */ "./src/app/services/alerts.service.ts");
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./_guards/auth.guard */ "./src/app/_guards/auth.guard.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _admin_admin_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./admin/admin.component */ "./src/app/admin/admin.component.ts");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./routes */ "./src/app/routes.ts");
/* harmony import */ var _interceptor_jwtInterceptor__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./interceptor/jwtInterceptor */ "./src/app/interceptor/jwtInterceptor.ts");
/* harmony import */ var _form_people_form_people_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./form-people/form-people.component */ "./src/app/form-people/form-people.component.ts");
/* harmony import */ var _alert_alert_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./alert/alert.component */ "./src/app/alert/alert.component.ts");
/* harmony import */ var _detail_detail_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./detail/detail.component */ "./src/app/detail/detail.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_9__["LoginComponent"],
                _admin_admin_component__WEBPACK_IMPORTED_MODULE_10__["AdminComponent"],
                _form_people_form_people_component__WEBPACK_IMPORTED_MODULE_13__["FormPeopleComponent"],
                _alert_alert_component__WEBPACK_IMPORTED_MODULE_14__["AlertComponent"],
                _detail_detail_component__WEBPACK_IMPORTED_MODULE_15__["DetailComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"],
                _routes__WEBPACK_IMPORTED_MODULE_11__["routing"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"]
            ],
            providers: [
                _services_alerts_service__WEBPACK_IMPORTED_MODULE_6__["AlertsService"],
                _services_persons_service__WEBPACK_IMPORTED_MODULE_4__["PersonsService"],
                _services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"],
                _guards_auth_guard__WEBPACK_IMPORTED_MODULE_7__["AuthGuard"],
                { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HTTP_INTERCEPTORS"], useClass: _interceptor_jwtInterceptor__WEBPACK_IMPORTED_MODULE_12__["JwtInterceptor"], multi: true }
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/constants/index.ts":
/*!************************************!*\
  !*** ./src/app/constants/index.ts ***!
  \************************************/
/*! exports provided: URL_SERVER */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "URL_SERVER", function() { return URL_SERVER; });
var URL_SERVER = 'api/';


/***/ }),

/***/ "./src/app/detail/detail.component.css":
/*!*********************************************!*\
  !*** ./src/app/detail/detail.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/detail/detail.component.html":
/*!**********************************************!*\
  !*** ./src/app/detail/detail.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-10\">\n    <div class=\"card\">\n      <div class=\"card-body\">\n        <h5 class=\"card-title\">{{person.email}} \n          <span class=\"badge badge-secondary badge-success\" *ngIf=\"person.enabled\">enabled</span> \n          <span class=\"badge badge-secondary badge-danger\" *ngIf=\"!person.enabled\">disabled</span> \n        \n        </h5>\n        <h6 class=\"card-subtitle mb-2 text-muted\">{{person.gender}}</h6>\n        <p class=\"card-text\">{{person.first_name}} {{person.last_name}}</p>\n        <p class=\"card-text\">{{person.address}}</p>\n        \n        <a class=\"btn btn-primary\" routerLink=\"/index\">Return to list</a>\n\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/detail/detail.component.ts":
/*!********************************************!*\
  !*** ./src/app/detail/detail.component.ts ***!
  \********************************************/
/*! exports provided: DetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailComponent", function() { return DetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_persons_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/persons.service */ "./src/app/services/persons.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DetailComponent = /** @class */ (function () {
    function DetailComponent(personsService, activeRoute) {
        var _this = this;
        this.personsService = personsService;
        this.activeRoute = activeRoute;
        var routeParams = this.activeRoute.snapshot.params;
        this.personsService.getPersonById(routeParams.id)
            .subscribe(function (person) {
            _this.person = person;
        });
    }
    DetailComponent.prototype.ngOnInit = function () {
    };
    DetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-detail',
            template: __webpack_require__(/*! ./detail.component.html */ "./src/app/detail/detail.component.html"),
            styles: [__webpack_require__(/*! ./detail.component.css */ "./src/app/detail/detail.component.css")]
        }),
        __metadata("design:paramtypes", [_services_persons_service__WEBPACK_IMPORTED_MODULE_1__["PersonsService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], DetailComponent);
    return DetailComponent;
}());



/***/ }),

/***/ "./src/app/form-people/form-people.component.css":
/*!*******************************************************!*\
  !*** ./src/app/form-people/form-people.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/form-people/form-people.component.html":
/*!********************************************************!*\
  !*** ./src/app/form-people/form-people.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"offset-3 col-4\">\n    <div class=\"card\">\n      <div class=\"card-body\">\n        <form [formGroup]=\"formPeople\" (ngSubmit)=\"save()\">\n          <div class=\"form-group\">\n            <label for=\"email\">Email address</label>\n            <input type=\"email\" class=\"form-control\" id=\"email\" formControlName=\"email\" placeholder=\"Enter your email\">\n            <div *ngIf=\"formSubmited && formPeople.controls.email.errors && formPeople.controls.email.errors.required\">\n              <div class=\"alert alert-danger mt-3\" role=\"alert\">\n                Email is required\n              </div>\n            </div>\n          </div>\n\n          <div class=\"input-group mt-3\">\n            <div class=\"input-group\">\n              <button class=\"btn btn-outline-secondary dropdown-toggle\" type=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n                {{formControl.gender.value || 'Gender'}}\n              </button>\n              <div class=\"dropdown-menu\">\n                <a class=\"dropdown-item\" (click)=\"setGender('male')\">Male</a>\n                <a class=\"dropdown-item\" (click)=\"setGender('female')\">Female</a>\n              </div>\n            </div>\n          </div>\n          <div *ngIf=\"formSubmited && formPeople.controls.gender.errors && formPeople.controls.gender.errors.required\">\n            <div class=\"alert alert-danger mt-3\" role=\"alert\">\n              Gender is required\n            </div>\n          </div>\n\n          <div class=\"form-group\">\n            <label for=\"email\">First name</label>\n            <input type=\"text\" class=\"form-control\" id=\"firstName\" formControlName=\"firstName\" placeholder=\"Enter your firstName\">\n            <div *ngIf=\"formSubmited && formPeople.controls.firstName.errors && formPeople.controls.firstName.errors.required\">\n              <div class=\"alert alert-danger mt-3\" role=\"alert\">\n                First name is required\n              </div>\n            </div>\n          </div>\n\n          <div class=\"form-group\">\n            <label for=\"email\">Last name</label>\n            <input type=\"text\" class=\"form-control\" id=\"lastName\" formControlName=\"lastName\" placeholder=\"Enter your lastName\">\n            <div *ngIf=\"formSubmited && formPeople.controls.lastName.errors && formPeople.controls.lastName.errors.required\">\n              <div class=\"alert alert-danger mt-3\" role=\"alert\">\n                Last name is required\n              </div>\n            </div>\n          </div>\n\n          <div class=\"form-group\">\n            <label for=\"email\">Address</label>\n            <input type=\"text\" class=\"form-control\" id=\"address\" formControlName=\"address\" placeholder=\"Enter your address\">\n            <div *ngIf=\"formSubmited && formPeople.controls.address.errors && formPeople.controls.address.errors.required\">\n              <div class=\"alert alert-danger mt-3\" role=\"alert\">\n                Address is required\n              </div>\n            </div>\n          </div>\n\n          <button type=\"submit\" class=\"btn btn-primary\">Save</button>\n        </form>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/form-people/form-people.component.ts":
/*!******************************************************!*\
  !*** ./src/app/form-people/form-people.component.ts ***!
  \******************************************************/
/*! exports provided: FormPeopleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormPeopleComponent", function() { return FormPeopleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_alerts_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/alerts.service */ "./src/app/services/alerts.service.ts");
/* harmony import */ var _services_persons_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/persons.service */ "./src/app/services/persons.service.ts");
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





var FormPeopleComponent = /** @class */ (function () {
    function FormPeopleComponent(formBuilder, alertService, personsService, router, activeRoute) {
        this.formBuilder = formBuilder;
        this.alertService = alertService;
        this.personsService = personsService;
        this.router = router;
        this.activeRoute = activeRoute;
        this.formSubmited = false;
        this.formWithErrors = false;
        this.isUpdating = false;
        var routeParams = this.activeRoute.snapshot.params;
        this.formPeople = this.formBuilder.group({
            gender: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            firstName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            lastName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            address: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
        if (routeParams.id) {
            this.isUpdating = true;
            this.getPeople(routeParams.id);
        }
    }
    FormPeopleComponent.prototype.ngOnInit = function () {
    };
    Object.defineProperty(FormPeopleComponent.prototype, "formControl", {
        get: function () { return this.formPeople.controls; },
        enumerable: true,
        configurable: true
    });
    FormPeopleComponent.prototype.save = function () {
        this.formSubmited = true;
        if (this.formPeople.invalid) {
            return;
        }
        var personsForm = this.prepareForm();
        if (this.isUpdating) {
            this.updatePeople(personsForm);
        }
        else {
            this.savePeople(personsForm);
        }
    };
    FormPeopleComponent.prototype.updatePeople = function (personsForm) {
        var _this = this;
        this.personsService.updatePeople(this.person.id, personsForm)
            .subscribe(function (user) {
            _this.alertService.sendMessage('Person updated correctly', 'alert-success');
            _this.router.navigate(['index']);
        }, this.handleError.bind(this));
    };
    FormPeopleComponent.prototype.savePeople = function (personsForm) {
        var _this = this;
        this.personsService.savePersons(personsForm)
            .subscribe(function (user) {
            _this.alertService.sendMessage('Person save correctly', 'alert-success');
            _this.router.navigate(['index']);
        }, this.handleError.bind(this));
    };
    FormPeopleComponent.prototype.prepareForm = function () {
        return {
            gender: this.formControl.gender.value,
            enabled: true,
            first_name: this.formControl.firstName.value,
            last_name: this.formControl.lastName.value,
            email: this.formControl.email.value,
            address: this.formControl.address.value
        };
    };
    FormPeopleComponent.prototype.handleError = function (response) {
        if (response.error && response.error.error) {
            this.alertService.sendMessage(response.error.reason, 'alert-danger');
        }
        this.formWithErrors = true;
    };
    FormPeopleComponent.prototype.setGender = function (gender) {
        this.formControl.gender.patchValue(gender);
    };
    FormPeopleComponent.prototype.getPeople = function (id) {
        var _this = this;
        this.personsService.getPersonById(id)
            .subscribe(function (person) {
            _this.person = person;
            _this.setPersonForUpdate(person);
        });
    };
    FormPeopleComponent.prototype.setPersonForUpdate = function (person) {
        this.formControl.firstName.patchValue(person.first_name);
        this.formControl.lastName.patchValue(person.last_name);
        this.formControl.email.patchValue(person.email);
        this.formControl.gender.patchValue(person.gender);
        this.formControl.address.patchValue(person.address);
    };
    FormPeopleComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-form-people',
            template: __webpack_require__(/*! ./form-people.component.html */ "./src/app/form-people/form-people.component.html"),
            styles: [__webpack_require__(/*! ./form-people.component.css */ "./src/app/form-people/form-people.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], _services_alerts_service__WEBPACK_IMPORTED_MODULE_2__["AlertsService"],
            _services_persons_service__WEBPACK_IMPORTED_MODULE_3__["PersonsService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]])
    ], FormPeopleComponent);
    return FormPeopleComponent;
}());



/***/ }),

/***/ "./src/app/interceptor/jwtInterceptor.ts":
/*!***********************************************!*\
  !*** ./src/app/interceptor/jwtInterceptor.ts ***!
  \***********************************************/
/*! exports provided: JwtInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JwtInterceptor", function() { return JwtInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var JwtInterceptor = /** @class */ (function () {
    function JwtInterceptor() {
    }
    JwtInterceptor.prototype.intercept = function (request, next) {
        var token = localStorage.getItem('token');
        if (token) {
            request = request.clone({
                setHeaders: {
                    Authorization: "Bearer " + token
                }
            });
        }
        return next.handle(request);
    };
    JwtInterceptor = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], JwtInterceptor);
    return JwtInterceptor;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"offset-3 col-4\">\n    <div class=\"card\">\n      <div class=\"card-body\">\n        <form [formGroup]=\"loginForm\" (ngSubmit)=\"login()\">\n          <div class=\"form-group\">\n            <label for=\"email\">Email address</label>\n            <input type=\"email\" class=\"form-control\" id=\"email\" formControlName=\"email\" placeholder=\"Enter email\">\n            <div *ngIf=\"formSubmited && loginForm.controls.email.errors && loginForm.controls.email.errors.required\">\n              <div class=\"alert alert-danger\" role=\"alert\">\n                Email is required\n              </div>\n            </div>\n          </div>\n          <div class=\"form-group\">\n            <label for=\"password\">Password</label>\n            <input type=\"password\" class=\"form-control\" id=\"password\" formControlName=\"password\" placeholder=\"Password\">\n            <div *ngIf=\"formSubmited && loginForm.controls.email.errors && loginForm.controls.email.errors.required\">\n              <div class=\"alert alert-danger\" role=\"alert\">\n                Password is required\n              </div>\n            </div>\n\n            <div *ngIf=\"formSubmited && formWithErrors\">\n              <div class=\"alert alert-danger\" role=\"alert\">\n                Username or password are incorrect.\n              </div>\n            </div>\n          </div>\n          <button type=\"submit\" class=\"btn btn-primary\">Submit</button>\n        </form>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
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
    function LoginComponent(formBuilder, authService, router) {
        this.formBuilder = formBuilder;
        this.authService = authService;
        this.router = router;
        this.formSubmited = false;
        this.formWithErrors = false;
        this.loginForm = this.formBuilder.group({
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
        this.authService.clearStorage();
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.formSubmited = true;
        if (this.loginForm.invalid) {
            return;
        }
        var formData = {
            username: this.loginForm.controls.email.value,
            password: this.loginForm.controls.password.value
        };
        this.authService.login(formData)
            .subscribe(function (user) {
            console.log(user);
            _this.router.navigate(['index']);
        }, function (error) {
            console.error(error);
            _this.formWithErrors = true;
        });
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/routes.ts":
/*!***************************!*\
  !*** ./src/app/routes.ts ***!
  \***************************/
/*! exports provided: routing */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routing", function() { return routing; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _admin_admin_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./admin/admin.component */ "./src/app/admin/admin.component.ts");
/* harmony import */ var _form_people_form_people_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./form-people/form-people.component */ "./src/app/form-people/form-people.component.ts");
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_guards/auth.guard */ "./src/app/_guards/auth.guard.ts");
/* harmony import */ var _detail_detail_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./detail/detail.component */ "./src/app/detail/detail.component.ts");

// import { HomeComponent } from './home';





var appRoutes = [
    // { path: '', component: HomeComponent, canActivate: [AuthGuard] },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_1__["LoginComponent"] },
    { path: 'index', component: _admin_admin_component__WEBPACK_IMPORTED_MODULE_2__["AdminComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]] },
    { path: 'form-people', component: _form_people_form_people_component__WEBPACK_IMPORTED_MODULE_3__["FormPeopleComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]] },
    { path: 'detail/:id', component: _detail_detail_component__WEBPACK_IMPORTED_MODULE_5__["DetailComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]] },
    { path: 'update/:id', component: _form_people_form_people_component__WEBPACK_IMPORTED_MODULE_3__["FormPeopleComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]] },
    // otherwise redirect to home
    { path: '**', redirectTo: 'login' }
];
var routing = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(appRoutes);


/***/ }),

/***/ "./src/app/services/alerts.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/alerts.service.ts ***!
  \********************************************/
/*! exports provided: AlertsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertsService", function() { return AlertsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AlertsService = /** @class */ (function () {
    function AlertsService() {
        this.subject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
    }
    AlertsService.prototype.sendMessage = function (message, errorClass) {
        var _this = this;
        if (errorClass === void 0) { errorClass = 'alert-success'; }
        this.subject.next({ text: message, errorClass: errorClass });
        setTimeout(function () {
            _this.clearMessage();
        }, 3000);
    };
    AlertsService.prototype.clearMessage = function () {
        this.subject.next({});
    };
    AlertsService.prototype.getMessage = function () {
        return this.subject;
    };
    AlertsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], AlertsService);
    return AlertsService;
}());



/***/ }),

/***/ "./src/app/services/auth.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants */ "./src/app/constants/index.ts");
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




var AuthService = /** @class */ (function () {
    function AuthService(http) {
        this.http = http;
    }
    AuthService.prototype.login = function (params) {
        return this.http.post(_constants__WEBPACK_IMPORTED_MODULE_2__["URL_SERVER"] + 'auth/login', params)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (user) {
            if (user && user.access_token) {
                localStorage.setItem('token', user.access_token);
                localStorage.setItem('userName', user.user.name);
            }
            return user;
        }));
    };
    AuthService.prototype.clearStorage = function () {
        localStorage.setItem('token', '');
        localStorage.setItem('userName', '');
    };
    AuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/services/persons.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/persons.service.ts ***!
  \*********************************************/
/*! exports provided: PersonsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PersonsService", function() { return PersonsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants */ "./src/app/constants/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PersonsService = /** @class */ (function () {
    function PersonsService(http) {
        this.http = http;
    }
    PersonsService.prototype.getPersons = function () {
        return this.http.get(_constants__WEBPACK_IMPORTED_MODULE_2__["URL_SERVER"] + 'persons');
    };
    PersonsService.prototype.savePersons = function (people) {
        return this.http.post(_constants__WEBPACK_IMPORTED_MODULE_2__["URL_SERVER"] + 'persons', people);
    };
    PersonsService.prototype.activatePerson = function (id) {
        return this.http.post(_constants__WEBPACK_IMPORTED_MODULE_2__["URL_SERVER"] + ("persons/" + id + "/deactivate"), {});
    };
    PersonsService.prototype.enablePerson = function (id) {
        return this.http.post(_constants__WEBPACK_IMPORTED_MODULE_2__["URL_SERVER"] + ("persons/" + id + "/activate"), {});
    };
    PersonsService.prototype.getPersonById = function (id) {
        return this.http.get(_constants__WEBPACK_IMPORTED_MODULE_2__["URL_SERVER"] + ("persons/" + id), {});
    };
    PersonsService.prototype.deletePerson = function (id) {
        return this.http.delete(_constants__WEBPACK_IMPORTED_MODULE_2__["URL_SERVER"] + ("persons/" + id), {});
    };
    PersonsService.prototype.updatePeople = function (id, people) {
        return this.http.put(_constants__WEBPACK_IMPORTED_MODULE_2__["URL_SERVER"] + ("persons/" + id), people);
    };
    PersonsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], PersonsService);
    return PersonsService;
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
 * In development mode, for easier debugging, you can ignore zone related error
 * stack frames such as `zone.run`/`zoneDelegate.invokeTask` by importing the
 * below file. Don't forget to comment it out in production mode
 * because it will have a performance impact when errors are thrown
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

module.exports = __webpack_require__(/*! /Users/lenin/Documents/sandbox/test-alliot/sandbox-ngrx-angular/code/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map