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
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/allregions/allregions.component.css":
/*!*****************************************************!*\
  !*** ./src/app/allregions/allregions.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card {\r\n    -ms-grid-row-align: center;\r\n        align-self: center;\r\n    border-radius: 10px;\r\n    display: block;\r\n    width: 50vw;\r\n    height: auto;\r\n    align-content: center;\r\n    border:   6px double;\r\n    background-color:darkslategrey;\r\n    box-shadow:2px 6px 8px indigo;\r\n}\r\n.card .card-header {\r\n    font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;\r\n    text-align: center;\r\n    font-weight: 500;\r\n    padding: 8px;\r\n    font-size: 4rem;\r\n    text-shadow: 2px 4px 1px midnightblue;\r\n    color: silver;\r\n}\r\n.flag {\r\n    height: 30px;\r\n    width: 100px;\r\n    border-radius: 2px;\r\n    border:purple 1px ridge;\r\n}\r\n.card .list-group .list-group-item {\r\n    overflow: hidden;\r\n    font-weight: 500;\r\n    padding: 8px;\r\n    font-size: 2rem;\r\n    font-family:Cambria, Cochin;\r\n    color: oldlace;\r\n    background-color:darkslategrey;\r\n    width: auto;\r\n    height: auto;\r\n    -webkit-text-decoration-line: none;\r\n            text-decoration-line: none;\r\n    \r\n}\r\n.card .list-group .list-group-item a {\r\n    color: oldlace;\r\n}\r\n.card .list-group .list-group-item a:hover {\r\n    font-weight: 600;\r\n    color: paleturquoise;\r\n    -webkit-text-decoration-line: overline;\r\n            text-decoration-line: overline;\r\n    cursor: pointer;\r\n}\r\n@media screen and (min-width:480 px) and (max-width: 600px) {\r\n    .list-group-item a {\r\n        font-weight: 200;\r\n        font-size: 1rem;\r\n        height: auto;\r\n    }    \r\n}\r\n@media screen and (min-width:437 px) and (max-width: 479px) {\r\n    .list-group-item a {\r\n        font-weight: 200;\r\n        font-size: 1rem;\r\n        height: auto;\r\n    }    \r\n}\r\n@media screen and (min-width: 328px) and (max-width: 436px) {\r\n    .card .card-header {\r\n        font-weight: 500;\r\n        font-size: 3rem;\r\n    }\r\n    .list-group-item {\r\n        font-size: 2rem;\r\n    }\r\n}\r\n@media screen and (min-width: 200px) and (max-width: 327px) {\r\n    .card .card-header {\r\n        font-weight: 400;\r\n        font-size: 2rem;\r\n    }\r\n    .list-group-item {\r\n        font-size: 0.7rem;\r\n    }\r\n}"

/***/ }),

/***/ "./src/app/allregions/allregions.component.html":
/*!******************************************************!*\
  !*** ./src/app/allregions/allregions.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\" >\n    <h4 class=\"card-header\">All Regions</h4>\n    <ul class=\"list-group list-group-flush\" *ngFor =\"let i of finalarray\">\n        <li  class=\"list-group-item\"><span class=\"glyphicon glyphicon-flag\"></span>&nbsp;&nbsp;<a \n         (click)=\"showdetails(curname=i)\">{{i}}</a></li>\n    </ul>\n</div>\n<br/><br/>\n\n<div class=\"card\" id=\"showdiv\" *ngIf=\"show\" >\n    <h3 class=\"card-header\">{{r}}</h3>\n  <div class=\"card-body\">\n    <ul class=\"list-group list-group-flush\" *ngFor =\"let c of ctrdetails\">\n      <li class=\"list-group-item\"><span class=\"glyphicon glyphicon-grain\"></span>&nbsp;&nbsp;<a \n      (click)=\"gotocountry()\">{{c}}</a></li>\n  </ul>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/allregions/allregions.component.ts":
/*!****************************************************!*\
  !*** ./src/app/allregions/allregions.component.ts ***!
  \****************************************************/
/*! exports provided: AllregionsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AllregionsComponent", function() { return AllregionsComponent; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _httpservice_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../httpservice.service */ "./src/app/httpservice.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AllregionsComponent = /** @class */ (function () {
    function AllregionsComponent(_route, router, httpservice, location, toastr, vcr) {
        this._route = _route;
        this.router = router;
        this.httpservice = httpservice;
        this.location = location;
        this.toastr = toastr;
        this.arrayname = [];
        this.finalarray = [];
        this.show = false;
        this.ctrdetails = [];
        console.log("Region constructor is called");
        console.log(vcr);
    }
    AllregionsComponent.prototype.goback = function () {
        //window.history.back();
        this.location.back();
        console.log("Back");
        this.toastr.success("Back");
    };
    AllregionsComponent.prototype.getallregions = function () {
        var _this = this;
        this.httpservice = this.httpservice.getallregions().subscribe(function (data) {
            _this.toastr.info("All regions-1 view​  displaying.");
            console.log(data);
            _this.ctrdata = data;
            for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
                var i = data_1[_i];
                console.log(i.region);
                _this.arrayname.push(i.region);
            }
            console.log(_this.arrayname);
            function removeDuplicateregion(arr) {
                var rarr = arr.filter(function (elem, index, self) {
                    return index == self.indexOf(elem);
                });
                return rarr;
            }
            _this.finalarray = removeDuplicateregion(_this.arrayname);
            console.log(_this.finalarray);
        }, function (error) {
            _this.errormsg = true;
            console.log(_this.errormsg);
            console.log("some error occured");
            console.log(error.errorMessage);
        });
    }; //end method
    AllregionsComponent.prototype.showdetails = function (iname) {
        this.show = !this.show;
        //console.log(iname);
        console.log(this.ctrdata);
        for (var _i = 0, _a = this.ctrdata; _i < _a.length; _i++) {
            var k = _a[_i];
            console.log(k.name);
            console.log(k.name);
            if (iname == k.region) {
                this.r = k.region;
                console.log(k.region);
                this.ctrdetails.push(k.name);
                console.log(this.ctrdetails);
            }
        }
        console.log(this.ctrdetails);
        this.toastr.show("Click on Any country and see 'ALL COUNTRIES VIEW'");
    };
    AllregionsComponent.prototype.gotocountry = function () {
        this.router.navigate(['/allcountry']);
    };
    AllregionsComponent.prototype.ngOnInit = function () {
        this.getallregions();
    };
    AllregionsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-allregions',
            template: __webpack_require__(/*! ./allregions.component.html */ "./src/app/allregions/allregions.component.html"),
            styles: [__webpack_require__(/*! ./allregions.component.css */ "./src/app/allregions/allregions.component.css")],
            providers: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"]]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_0__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_0__["Router"], _httpservice_service__WEBPACK_IMPORTED_MODULE_2__["HttpserviceService"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"]])
    ], AllregionsComponent);
    return AllregionsComponent;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container-fluid {\r\n    background-color:honeydew;\r\n    min-height: 100vh;\r\n}\r\n.container-fluid .ttl {\r\n    font-size: 5rem;\r\n    font-weight: 700;\r\n    font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;\r\n    color:midnightblue;\r\n    text-shadow: 2px 4px 1px lightslategrey;\r\n}\r\n.parent {\r\n    align-self: center;\r\n    display: flex;\r\n    margin-left: 50px;\r\n    align-items: center;\r\n    height:auto ;\r\n    padding:20px;\r\n}\r\n.childlink {\r\n    font-family:'Trebuchet MS',sans-serif;\r\n    -webkit-transform: translate(-50%, -50%);\r\n            transform: translate(-50%, -50%);\r\n    -ms-transform: translate(-50%, -50%);\r\n     color:navy;\r\n    font-size: 3rem;\r\n    cursor: pointer;\r\n    font-weight: 700;\r\n    -webkit-text-decoration-line: none;\r\n            text-decoration-line: none;\r\n}\r\n.childlink:hover {\r\n    color:darkcyan;\r\n}\r\n.back {\r\n    color:darkblue;\r\n    width: 30px;\r\n    height: 30px;\r\n    border-radius: 1px;\r\n    position:fixed;\r\n    cursor: pointer;\r\n}\r\n.back :hover {\r\n    cursor: pointer;\r\n    width: 23px;\r\n    height: 23px;\r\n    \r\n}\r\n.readme {\r\n    -webkit-text-decoration-style: none;\r\n            text-decoration-style: none;\r\n    margin-left: 10vw;\r\n    justify-content: right;\r\n    color:rgb(9, 31, 22);\r\n    font-size: 1.5rem;\r\n    font-family:'Franklin Gothic Medium', sans-serif;\r\n    position:fixed;\r\n    cursor: pointer;\r\n}\r\n.readme :hover {\r\n    -webkit-text-decoration-line:overline;\r\n            text-decoration-line:overline;\r\n    -webkit-text-decoration-style: double;\r\n            text-decoration-style: double;\r\n    cursor: pointer;\r\n    font-size: 2rem;\r\n}\r\n@media screen and (min-width: 390px) and (max-width: 510px) {\r\n    .container-fluid .ttl {\r\n        font-size: 4rem;\r\n    }\r\n    .childlink {\r\n        font-size: 2rem;\r\n    }\r\n    .readme {\r\n        font-size: 1.5rem;\r\n    }\r\n}\r\n@media screen and (min-width: 300px) and (max-width: 389px) {\r\n    .container-fluid .ttl {\r\n        font-size: 3rem;\r\n    }\r\n    .childlink {\r\n        font-size: 2rem;\r\n    }\r\n    .readme {\r\n        font-size: 1.5rem;\r\n    }\r\n}\r\n@media screen and (min-width: 200px) and (max-width: 299px) {\r\n    .container-fluid .ttl {\r\n        font-size: 2rem;\r\n    }\r\n    .childlink {\r\n        font-size: 1rem;\r\n    }\r\n    .readme {\r\n        font-size: 1rem;\r\n    }\r\n}"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<head>\n  <link rel=\"stylesheet\" href=\"https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/css/bootstrap.min.css\" \n  integrity=\"sha384-9gVQ4dYFwwWSjIDZnLEWnxCjeSWFphJiwGPXr1jddIhOegiu1FwO5qRGvFXOdJZ4\" crossorigin=\"anonymous\">\n</head>\n  <div class=\"container-fluid\">\n      <a  (click)=\"goback()\"  ><span class=\"back glyphicon glyphicon-hand-left\">\n      </span>&nbsp;&nbsp;&nbsp;&nbsp;Back</a>\n      <a class=\"readme\" href=\"../assets/readme.txt\" >About-App</a><br/>\n      <h1 class=\"ttl\">{{title}}</h1>\n      \n  <br/>\n  <div class=\"parent\">\n      <a class=\"childlink\" [routerLink]=\"[allregions]\">All Regions</a>&nbsp;&nbsp;&nbsp;&nbsp;\n      <a class=\"childlink\" (click)=\"gofilter()\" style=\"color:navy;\">Filters</a>\n  </div>\n          <router-outlet></router-outlet>    \n      \n    \n\n  </div>  \n\n"

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
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
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
    function AppComponent(_route, router, location, toastr) {
        this._route = _route;
        this.router = router;
        this.location = location;
        this.toastr = toastr;
        this.title = 'Rest Countries';
        this.allregions = "/allregions";
        this.filters = "/filters/currency";
        console.log("constructor is called");
    }
    AppComponent.prototype.goback = function () {
        //window.history.back();
        this.location.back();
        console.log("Back");
        this.toastr.info("Back");
    };
    AppComponent.prototype.gofilter = function () {
        this.router.navigate(['/currency']);
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")],
            providers: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"]]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"], ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]])
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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _httpservice_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./httpservice.service */ "./src/app/httpservice.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _country_country_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./country/country.module */ "./src/app/country/country.module.ts");
/* harmony import */ var _allregions_allregions_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./allregions/allregions.component */ "./src/app/allregions/allregions.component.ts");
/* harmony import */ var _filters_filters_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./filters/filters.module */ "./src/app/filters/filters.module.ts");
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
                _app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"],
                _allregions_allregions_component__WEBPACK_IMPORTED_MODULE_11__["AllregionsComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _country_country_module__WEBPACK_IMPORTED_MODULE_10__["CountryModule"],
                _filters_filters_module__WEBPACK_IMPORTED_MODULE_12__["FiltersModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
                ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrModule"].forRoot(),
                _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot([
                    { path: 'allregions', component: _allregions_allregions_component__WEBPACK_IMPORTED_MODULE_11__["AllregionsComponent"] },
                ])
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]
            ],
            providers: [_httpservice_service__WEBPACK_IMPORTED_MODULE_6__["HttpserviceService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/country/allcountry/allcountry.component.css":
/*!*************************************************************!*\
  !*** ./src/app/country/allcountry/allcountry.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container-fluid {\r\n    background-color:honeydew;\r\n    min-height: 100vh;\r\n}\r\n.ttl {\r\n    font-size: 3rem;\r\n    font-weight: 700;\r\n    font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;\r\n    color:rgb(41, 13, 65);\r\n    text-shadow: 2px 3px 1px lightslategrey;\r\n}\r\n.parent {\r\n    align-self: center;\r\n    display: flex;\r\n    flex-direction: row;\r\n    align-items: center;\r\n    height:auto ;\r\n    padding: 20px;\r\n}\r\n.childlink {\r\n    font-family:'Trebuchet MS',sans-serif;\r\n    -webkit-transform: translate(-50%, -50%);\r\n            transform: translate(-50%, -50%);\r\n    -ms-transform: translate(-50%, -50%);\r\n     color:indigo;\r\n    font-size: 3rem;\r\n    cursor: pointer;\r\n    font-weight: 700;\r\n    margin-left: 6vw;\r\n    -webkit-text-decoration-line: none;\r\n            text-decoration-line: none;\r\n    border-radius: 20px;\r\n    background-color: cornflowerblue\r\n}\r\n.childlink:hover {\r\n    color:slateblue;\r\n}\r\n.btn-group .btn {\r\n    border:lightslategray 3px;\r\n    box-shadow:1px 4px 3px lightslategray;\r\n    color: beige;\r\n    background-color: rgba(15, 42, 59, 0.925);\r\n    font-family: 'Lucida Sans', Arial, sans-serif;\r\n    font-size: 2rem;\r\n}\r\n.dropdown-menu .list-group .list-group-item {\r\n    color: beige;\r\n    background-color: rgba(15, 42, 59, 0.925);\r\n    font-family: 'Lucida Sans', Arial, sans-serif;\r\n    font-size: 2rem;\r\n    min-width:17vw;\r\n}\r\n.list-group .list-group-item a {\r\n    overflow: hidden;\r\n    -webkit-text-decoration-line: none;\r\n            text-decoration-line: none;\r\n    cursor: pointer;\r\n    min-width:17vw;\r\n}\r\n.card .list-group .list-group-item a:hover {\r\n    font-weight: 600;\r\n    color: moccasin;\r\n    -webkit-text-decoration-line: overline;\r\n            text-decoration-line: overline;\r\n    cursor: pointer;\r\n}\r\n.carddiv  {\r\n    width:50vw;\r\n    background-color:cornsilk ;\r\n    color:  darkslateblue;\r\n    font-family: 'Trebuchet MS', sans-serif;\r\n    font-size: 2rem;\r\n}\r\n.card-title {\r\n    font-size: 2rem;\r\n}\r\n.carddiv .card-img-top {\r\n    width:38vw;\r\n}\r\n@media screen and (min-width: 390px) and (max-width: 510px) {\r\n    .container-fluid .ttl {\r\n        font-size: 4rem;\r\n    }\r\n    .carddiv  {\r\n        font-size: 1.5rem;\r\n    }\r\n    .card-title {\r\n        font-size: 1.5rem;\r\n    }\r\n    .childlink {\r\n        font-size: 2rem;\r\n        font-weight: 500;\r\n    }\r\n    .dropdown-menu .list-group .list-group-item {\r\n        font-size: 1.5rem;\r\n    }\r\n}\r\n@media screen and (min-width: 300px) and (max-width: 389px) {\r\n    .container-fluid .ttl {\r\n        font-size: 3rem;\r\n    }\r\n    .carddiv  {\r\n        font-size: 1.5rem;\r\n    }\r\n    .card-title {\r\n        font-size: 1.5rem;\r\n    }\r\n    .childlink {\r\n        font-size: 2rem;\r\n        font-weight: 500;\r\n    }\r\n    .dropdown-menu .list-group .list-group-item {\r\n        font-size: 1.2rem;\r\n    }\r\n}\r\n@media screen and (min-width: 200px) and (max-width: 299px) {\r\n    .container-fluid .ttl {\r\n        font-size: 2rem;\r\n    }\r\n    .carddiv  {\r\n        font-size: 1rem;\r\n    }\r\n    .card-title {\r\n        font-size: 1rem;\r\n    }\r\n    .childlink {\r\n        font-size: 1.5rem;\r\n        font-weight: 300;\r\n    }\r\n    .dropdown-menu .list-group .list-group-item {\r\n        font-size: 1rem;\r\n    }\r\n    \r\n}"

/***/ }),

/***/ "./src/app/country/allcountry/allcountry.component.html":
/*!**************************************************************!*\
  !*** ./src/app/country/allcountry/allcountry.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<head>\n  <link rel=\"stylesheet\" href=\"https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/css/bootstrap.min.css\" \n  integrity=\"sha384-9gVQ4dYFwwWSjIDZnLEWnxCjeSWFphJiwGPXr1jddIhOegiu1FwO5qRGvFXOdJZ4\" crossorigin=\"anonymous\">\n</head>\n<div class=\"parent\">\n    <button type=\"button\" class=\"btn childlink\" (click)=\"getcountries()\">All Contries</button>\n    <button type=\"button\" class=\"btn childlink\" (click)=\"gotosinglecon()\">Single Country</button>\n</div>\n\n<div *ngIf=\"showr\" >\n  <div class=\"btn-group\" style=\"border-radius:10px;margin-right: 30vw\">\n    <button type=\"button\" class=\"btn btn-lg\">Regions</button>\n    <button type=\"button\" class=\"btn dropdown-toggle dropdown-toggle-split\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n      <span class=\"sr-only\">Toggle Dropdown</span>\n    </button>\n    <div class=\"dropdown-menu\">\n        <ul class=\"list-group list-group-flush\" *ngFor =\"let i of finalarray\">\n            <li  class=\"list-group-item\"><span class=\"glyphicon glyphicon-flag\"></span>&nbsp;&nbsp;<a \n             (click)=\"showdetails(curname=i)\">{{i}}</a></li>\n        </ul>\n    </div>\n  </div>\n  \n  <div class=\"btn-group\" *ngIf=\"show\" style=\"border-radius:10px;\">\n      <button type=\"button\" class=\"btn btn-lg\">{{r}}</button>\n      <button type=\"button\" class=\"btn dropdown-toggle dropdown-toggle-split\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n        <span class=\"sr-only\">Toggle Dropdown</span>\n      </button>\n      <div class=\"dropdown-menu\">\n          <ul class=\"list-group list-group-flush\" *ngFor =\"let c of ctrdetails\">\n              <li  class=\"list-group-item\"><span class=\"glyphicon glyphicon-flag\"></span>&nbsp;&nbsp;<a \n               (click)=\"getcountriesdetails(cnname=c)\">{{c}}</a></li>\n          </ul>\n      </div>\n    </div>\n</div>  \n<br/>\n<!-- Show current contries information -->\n\n    <div class=\"card carddiv\"  *ngIf=\"cntrdet\">\n      <img class=\"card-img-top\" [src]=\"f\">\n      <div class=\"card-body\">\n        <h5 class=\"card-title\">Name<span class=\"glyphicon glyphicon-triangle-right\"></span>&nbsp;{{n}}</h5>\n        <p class=\"card-text\">Capital<span class=\"glyphicon glyphicon-triangle-right\"></span>&nbsp;{{cap}}<br/>subregion<span class=\"glyphicon glyphicon-triangle-right\"></span>&nbsp;{{subr}}</p>\n        <p class=\"card-text\" *ngFor =\"let cr of curr\">Currencies<span class=\"glyphicon glyphicon-triangle-right\"></span>&nbsp;{{cr}}</p>\n      </div>\n      <div class=\"card-footer\">\n        <small class=\"text-muted\" *ngFor =\"let t of tim\">TimeZones<span class=\"glyphicon glyphicon-triangle-right\"></span>&nbsp;{{t}}</small>\n      \n      </div>\n    </div>\n"

/***/ }),

/***/ "./src/app/country/allcountry/allcountry.component.ts":
/*!************************************************************!*\
  !*** ./src/app/country/allcountry/allcountry.component.ts ***!
  \************************************************************/
/*! exports provided: AllcountryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AllcountryComponent", function() { return AllcountryComponent; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_httpservice_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/httpservice.service */ "./src/app/httpservice.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AllcountryComponent = /** @class */ (function () {
    function AllcountryComponent(_route, router, httpservice, location, toastr, vcr) {
        this._route = _route;
        this.router = router;
        this.httpservice = httpservice;
        this.location = location;
        this.toastr = toastr;
        this.arrayname = [];
        this.finalarray = [];
        this.show = false;
        this.ctrdetails = [];
        console.log("All country constructor is called");
        console.log(vcr);
    }
    AllcountryComponent.prototype.goback = function () {
        //window.history.back();
        this.location.back();
        console.log("Back");
        this.toastr.success("Back");
    };
    AllcountryComponent.prototype.getallregions = function () {
        var _this = this;
        this.httpservice = this.httpservice.getallregions().subscribe(function (data) {
            _this.toastr.info("All Countries-2 view​  displaying.");
            console.log(data);
            _this.ctrdata = data;
            for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
                var i = data_1[_i];
                console.log(i.region);
                _this.arrayname.push(i.region);
            }
            console.log(_this.arrayname);
            function removeDuplicateregion(arr) {
                var rarr = arr.filter(function (elem, index, self) {
                    return index == self.indexOf(elem);
                });
                return rarr;
            }
            _this.finalarray = removeDuplicateregion(_this.arrayname);
            console.log(_this.finalarray);
        }, function (error) {
            _this.errormsg = true;
            console.log(_this.errormsg);
            console.log("some error occured");
            console.log(error.errorMessage);
        });
    }; //end method
    AllcountryComponent.prototype.showdetails = function (iname) {
        this.show = !this.show;
        //console.log(iname);
        console.log(this.ctrdata);
        for (var _i = 0, _a = this.ctrdata; _i < _a.length; _i++) {
            var k = _a[_i];
            console.log(k.name);
            console.log(k.name);
            if (iname == k.region) {
                this.r = k.region;
                console.log(k.region);
                this.ctrdetails.push(k.name);
                console.log(this.ctrdetails);
            }
        }
        console.log(this.ctrdetails);
        this.toastr.show("Click on Any country and see 'ALL COUNTRIES VIEW'");
    };
    AllcountryComponent.prototype.gotosinglecon = function () {
        this.router.navigate(['/singlecountry']);
    };
    AllcountryComponent.prototype.getcountries = function () {
        this.showr = !this.showr;
        this.toastr.show("Select Region and Contry.");
    };
    AllcountryComponent.prototype.getcountriesdetails = function (cname) {
        this.cntrdet = !this.cntrdet;
        this.toastr.show("Select Region and Contry.");
        console.log(this.ctrdata);
        for (var _i = 0, _a = this.ctrdata; _i < _a.length; _i++) {
            var k = _a[_i];
            console.log(k.name);
            console.log(k.name);
            if (cname == k.name) {
                this.reg = k.region;
                this.n = k.name;
                this.cap = k.capital;
                this.f = k.flag;
                this.tim = k.timezones;
                this.curr = k.currencies.name;
                this.subr = k.subregion;
                console.log(k.region);
            }
        }
    };
    AllcountryComponent.prototype.ngOnInit = function () {
        this.getallregions();
    };
    AllcountryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-allcountry',
            template: __webpack_require__(/*! ./allcountry.component.html */ "./src/app/country/allcountry/allcountry.component.html"),
            styles: [__webpack_require__(/*! ./allcountry.component.css */ "./src/app/country/allcountry/allcountry.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_0__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_0__["Router"], src_app_httpservice_service__WEBPACK_IMPORTED_MODULE_2__["HttpserviceService"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"]])
    ], AllcountryComponent);
    return AllcountryComponent;
}());



/***/ }),

/***/ "./src/app/country/country.module.ts":
/*!*******************************************!*\
  !*** ./src/app/country/country.module.ts ***!
  \*******************************************/
/*! exports provided: CountryModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CountryModule", function() { return CountryModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _httpservice_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../httpservice.service */ "./src/app/httpservice.service.ts");
/* harmony import */ var _allcountry_allcountry_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./allcountry/allcountry.component */ "./src/app/country/allcountry/allcountry.component.ts");
/* harmony import */ var _singlecountry_singlecountry_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./singlecountry/singlecountry.component */ "./src/app/country/singlecountry/singlecountry.component.ts");
/* harmony import */ var _pipe_objedisplay_pipe__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pipe/objedisplay.pipe */ "./src/app/country/pipe/objedisplay.pipe.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var CountryModule = /** @class */ (function () {
    function CountryModule() {
    }
    CountryModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
                ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrModule"].forRoot(),
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([
                    { path: 'allcountry', component: _allcountry_allcountry_component__WEBPACK_IMPORTED_MODULE_7__["AllcountryComponent"], pathMatch: 'full' },
                    { path: 'singlecountry', component: _singlecountry_singlecountry_component__WEBPACK_IMPORTED_MODULE_8__["SinglecountryComponent"] }
                ])
            ],
            providers: [_httpservice_service__WEBPACK_IMPORTED_MODULE_6__["HttpserviceService"]],
            declarations: [_allcountry_allcountry_component__WEBPACK_IMPORTED_MODULE_7__["AllcountryComponent"], _singlecountry_singlecountry_component__WEBPACK_IMPORTED_MODULE_8__["SinglecountryComponent"], _pipe_objedisplay_pipe__WEBPACK_IMPORTED_MODULE_9__["objectdisplay"]],
            exports: [
                _allcountry_allcountry_component__WEBPACK_IMPORTED_MODULE_7__["AllcountryComponent"],
                _singlecountry_singlecountry_component__WEBPACK_IMPORTED_MODULE_8__["SinglecountryComponent"],
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]
            ]
        })
    ], CountryModule);
    return CountryModule;
}());



/***/ }),

/***/ "./src/app/country/pipe/objedisplay.pipe.ts":
/*!**************************************************!*\
  !*** ./src/app/country/pipe/objedisplay.pipe.ts ***!
  \**************************************************/
/*! exports provided: objectdisplay */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "objectdisplay", function() { return objectdisplay; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var objectdisplay = /** @class */ (function () {
    function objectdisplay() {
    }
    objectdisplay.prototype.transform = function (value, args) {
        var trans = [];
        for (var key in value) {
            trans.push({ key: key, value: value[key] });
        }
        return trans;
    };
    objectdisplay = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'trans'
        })
    ], objectdisplay);
    return objectdisplay;
}());



/***/ }),

/***/ "./src/app/country/singlecountry/singlecountry.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/country/singlecountry/singlecountry.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container-fluid {\r\n    background-color:honeydew;\r\n    min-height: 100vh;\r\n    height: auto;\r\n}\r\n.ttl {\r\n    font-size: 3rem;\r\n    font-weight: 700;\r\n    font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;\r\n    color:rgb(41, 13, 65);\r\n    text-shadow: 2px 3px 1px lightslategrey;\r\n}\r\n.btn-group .btn {\r\n    width: auto;\r\n    border:lightslategray 3px;\r\n    box-shadow:1px 4px 3px lightslategray;\r\n    color: beige;\r\n    background-color: rgba(15, 42, 59, 0.925);\r\n    font-family: 'Lucida Sans', Arial, sans-serif;\r\n    font-size: 2rem;\r\n}\r\n.dropdown-menu .list-group .list-group-item {\r\n    color: beige;\r\n    background-color: rgba(15, 42, 59, 0.925);\r\n    font-family: 'Lucida Sans', Arial, sans-serif;\r\n    font-size: 2rem;\r\n    min-width:17vw;\r\n    width: auto;\r\n    cursor: pointer;\r\n}\r\n.carddiv  {\r\n    width:80vw;\r\n    background-color:darkgrey ;\r\n    border: dimgray  2px groove;\r\n    color:rgba(10, 30, 54, 0.87);\r\n    font-family: 'Trebuchet MS', sans-serif;\r\n    font-size: 2rem;\r\n}\r\n.card-title {\r\n    font-size: 2rem;\r\n}\r\n.carddiv .card-img-top {\r\n    width:70vw;\r\n}\r\n@media screen and (min-width: 390px) and (max-width: 510px) {\r\n    .container-fluid .ttl {\r\n        font-size: 4rem;\r\n    }\r\n    .carddiv  {\r\n        font-size: 1.5rem;\r\n    }\r\n    .card-title {\r\n        font-size: 1.5rem;\r\n    }\r\n    .btn-group .btn {\r\n        font-size: 1.5rem;\r\n    }\r\n    .dropdown-menu .list-group .list-group-item {\r\n        font-size: 1.5rem;\r\n    }\r\n    \r\n}\r\n@media screen and (min-width: 300px) and (max-width: 389px) {\r\n    .container-fluid .ttl {\r\n        font-size: 3rem;\r\n    }\r\n    .carddiv  {\r\n        font-size: 1.5rem;\r\n    }\r\n    .card-title {\r\n        font-size: 1.5rem;\r\n    }\r\n    .btn-group .btn {\r\n        font-size: 1.3rem;\r\n    }\r\n    .dropdown-menu .list-group .list-group-item {\r\n        font-size: 1.3rem;\r\n    }\r\n    \r\n}\r\n@media screen and (min-width: 200px) and (max-width: 299px) {\r\n    .container-fluid .ttl {\r\n        font-size: 2rem;\r\n    }\r\n    .carddiv  {\r\n        font-size: 1rem;\r\n    }\r\n    .card-title {\r\n        font-size: 1rem;\r\n    }\r\n    .btn-group .btn {\r\n        font-size: 1rem;\r\n    }\r\n    .dropdown-menu .list-group .list-group-item {\r\n        font-size: 1rem;\r\n    }\r\n    \r\n}"

/***/ }),

/***/ "./src/app/country/singlecountry/singlecountry.component.html":
/*!********************************************************************!*\
  !*** ./src/app/country/singlecountry/singlecountry.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<head>\n    <link rel=\"stylesheet\" href=\"https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/css/bootstrap.min.css\" \n    integrity=\"sha384-9gVQ4dYFwwWSjIDZnLEWnxCjeSWFphJiwGPXr1jddIhOegiu1FwO5qRGvFXOdJZ4\" crossorigin=\"anonymous\">\n  </head>\n  \n  <div  >\n    <div class=\"btn-group\" style=\"border-radius:10px;margin-right: 30vw\">\n      <button type=\"button\" class=\"btn btn-lg\">Regions</button>\n      <button type=\"button\" class=\"btn dropdown-toggle dropdown-toggle-split\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n        <span class=\"sr-only\">Toggle Dropdown</span>\n      </button>\n      <div class=\"dropdown-menu\">\n          <ul class=\"list-group list-group-flush\" *ngFor =\"let i of finalarray\">\n              <li  class=\"list-group-item\"><span class=\"glyphicon glyphicon-flag\"></span>&nbsp;&nbsp;<a \n               (click)=\"showdetails(curname=i)\">{{i}}</a></li>\n          </ul>\n      </div>\n    </div>\n    \n    <div class=\"btn-group\" *ngIf=\"show\" style=\"border-radius:10px;\">\n        <button type=\"button\" class=\"btn btn-lg\">{{r}}</button>\n        <button type=\"button\" class=\"btn dropdown-toggle dropdown-toggle-split\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n          <span class=\"sr-only\">Toggle Dropdown</span>\n        </button>\n        <div class=\"dropdown-menu\">\n            <ul class=\"list-group list-group-flush\" *ngFor =\"let c of ctrdetails\">\n                <li  class=\"list-group-item\"><span class=\"glyphicon glyphicon-flag\"></span>&nbsp;&nbsp;<a \n                 (click)=\"getcountriesdetails(cnname=c)\">{{c}}</a></li>\n            </ul>\n        </div>\n      </div>\n  </div>  \n  <br/>\n  <!-- Show current contries information -->\n  \n      <div class=\"card carddiv\"  *ngIf=\"cntrdet\">\n        <img class=\"card-img-top\" [src]=\"mydata.flag\">\n        <div class=\"card-body\">\n          <h5 class=\"card-title\"><b>Name<span class=\"glyphicon glyphicon-menu-right\"></span></b>&nbsp;{{mydata.name}}</h5>\n          <p class=\"card-text\"><b>Capital<span class=\"glyphicon glyphicon-menu-right\"></span></b>&nbsp;{{mydata.capital}}</p>\n          <p class=\"card-text\"><b>Region<span class=\"glyphicon glyphicon-menu-right\"></span>&nbsp;</b>{{mydata.region}}</p>\n          <p class=\"card-text\"><b>Subregion<span class=\"glyphicon glyphicon-menu-right\"></span>&nbsp;</b>{{mydata.subregion}}</p>\n          <p class=\"card-text\" ><b>Alpha2Code<span class=\"glyphicon glyphicon-menu-right\"></span>&nbsp;</b>{{mydata.alpha2Code}}</p>\n          <p class=\"card-text\" ><b>Alpha3Code<span class=\"glyphicon glyphicon-menu-right\"></span>&nbsp;</b>{{mydata.alpha3Code}}</p>\n          <p class=\"card-text\" ><b>Population<span class=\"glyphicon glyphicon-menu-right\"></span>&nbsp;</b>{{mydata.population}}</p>\n          <p class=\"card-text\" ><b>Demonym<span class=\"glyphicon glyphicon-menu-right\"></span>&nbsp;</b>{{mydata.demonym}}</p>\n          <p class=\"card-text\" ><b>Area<span class=\"glyphicon glyphicon-menu-right\"></span>&nbsp;</b>{{mydata.area}}</p>\n          <p class=\"card-text\" ><b>Gini<span class=\"glyphicon glyphicon-menu-right\"></span>&nbsp;</b>{{mydata.gini}}</p>\n          <p class=\"card-text\" ><b>NativeName<span class=\"glyphicon glyphicon-menu-right\"></span>&nbsp;</b>{{mydata.nativeName}}</p>\n          <p class=\"card-text\" ><b>NumericCode<span class=\"glyphicon glyphicon-menu-right\"></span>&nbsp;</b>{{mydata.numericCode}}</p>\n          <p class=\"card-text\" *ngFor=\"let cr of mydata.currencies\"><b>Currencies<span class=\"glyphicon glyphicon-menu-right\"></span>&nbsp;</b><br/>\n            Code:&nbsp;{{cr.code}}<br/>\n            Name:&nbsp;{{cr.name}}<br/>\n            Symbol:&nbsp;{{cr.symbol}}<br/></p>\n          <p class=\"card-text\" *ngFor =\"let tp of mydata.topLevelDomain\"><b>TopLevelDomain<span class=\"glyphicon glyphicon-menu-right\"></span>&nbsp;</b>{{tp}}</p>\n          <p class=\"card-text\" *ngFor =\"let cc of mydata.callingCodes\"><b>CallingCodes<span class=\"glyphicon glyphicon-menu-right\"></span>&nbsp;</b>{{cc}}</p>\n          <p class=\"card-text\" ><b>AltSpellings<span class=\"glyphicon glyphicon-menu-right\"></span>&nbsp;</b>\n            <span *ngFor =\"let al of mydata.altSpellings\">{{al}}<br/></span></p>\n          <p class=\"card-text\" ><b>Latlng<span class=\"glyphicon glyphicon-menu-right\"></span>&nbsp;</b><span *ngFor =\"let la of mydata.latlng\">{{la}}<br/></span></p>\n          <p class=\"card-text\"><b>borders<span class=\"glyphicon glyphicon-menu-right\"></span>&nbsp;</b><span *ngFor =\"let b of mydata.borders\">{{b}}<br/></span></p>\n          <p class=\"card-text\" ><b>Languages<span class=\"glyphicon glyphicon-menu-right\"></span>&nbsp;</b><span *ngFor =\"let lan of mydata.languages\"><br/>\n            iso639_1 :&nbsp;{{lan.iso639_1}}<br/>\n            iso639_2 :&nbsp;{{lan.iso639_2}}<br/>\n            Name :&nbsp;{{lan.name}}<br/>\n            NativeName:&nbsp;{{lan.nativeName}}<br/></span></p>\n          <p class=\"card-text\" ><b>Translations<span class=\"glyphicon glyphicon-menu-right\"></span>&nbsp;</b>          \n                 <span *ngFor=\"let trs of mydata.translations | trans\">{{trs.key}}<span class=\"glyphicon glyphicon-menu-right\"></span>&nbsp; {{trs.value}}<br/></span>\n          </p>\n          <p class=\"card-text\" ><b>RegionalBlocs<span class=\"glyphicon glyphicon-menu-right\"></span>&nbsp;</b><span *ngFor =\"let rb of mydata.regionalBlocs\"><br/>\n            Acronym:&nbsp;{{rb.acronym}}<br/>\n            Name:&nbsp;{{rb.name}}<br/>\n            OtherAcronyms:&nbsp;<span *ngFor =\"let rbn of rb.otherAcronyms\"></span>{{rbn}}<br/>\n            OtherNames:&nbsp;<span *ngFor =\"let rbo of rb.otherNames\"></span>{{rbo}}<br/></span></p>\n        </div>\n        <div class=\"card-footer\">\n          <small class=\"text-muted\" ><b>TimeZones<span class=\"glyphicon glyphicon-menu-right\"></span>&nbsp;</b><span *ngFor =\"let tz of mydata.timezones\">{{tz}}<br/></span></small><br/>\n          <small class=\"text-muted\" ><b>Cioc<span class=\"glyphicon glyphicon-menu-right\"></span>&nbsp;</b>{{mydata.cioc}}</small>\n        </div>\n      </div>\n  "

/***/ }),

/***/ "./src/app/country/singlecountry/singlecountry.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/country/singlecountry/singlecountry.component.ts ***!
  \******************************************************************/
/*! exports provided: SinglecountryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SinglecountryComponent", function() { return SinglecountryComponent; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_httpservice_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/httpservice.service */ "./src/app/httpservice.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _pipe_objedisplay_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../pipe/objedisplay.pipe */ "./src/app/country/pipe/objedisplay.pipe.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var SinglecountryComponent = /** @class */ (function () {
    function SinglecountryComponent(_route, router, httpservice, location, toastr, vcr) {
        this._route = _route;
        this.router = router;
        this.httpservice = httpservice;
        this.location = location;
        this.toastr = toastr;
        this.arrayname = [];
        this.finalarray = [];
        this.show = false;
        this.ctrdetails = [];
        console.log("Single constructor is called");
        console.log(vcr);
    }
    SinglecountryComponent.prototype.goback = function () {
        //window.history.back();
        this.location.back();
        console.log("Back");
        this.toastr.success("Back");
    };
    SinglecountryComponent.prototype.getallregions = function () {
        var _this = this;
        this.httpservice = this.httpservice.getallregions().subscribe(function (data) {
            _this.toastr.info("Single Countries-3 view​  displaying.");
            console.log(data);
            _this.ctrdata = data;
            for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
                var i = data_1[_i];
                console.log(i.region);
                _this.arrayname.push(i.region);
            }
            console.log(_this.arrayname);
            function removeDuplicateregion(arr) {
                var rarr = arr.filter(function (elem, index, self) {
                    return index == self.indexOf(elem);
                });
                return rarr;
            }
            _this.finalarray = removeDuplicateregion(_this.arrayname);
            console.log(_this.finalarray);
        }, function (error) {
            _this.errormsg = true;
            console.log(_this.errormsg);
            console.log("some error occured");
            console.log(error.errorMessage);
        });
    }; //end method
    SinglecountryComponent.prototype.showdetails = function (iname) {
        this.show = !this.show;
        //console.log(iname);
        console.log(this.ctrdata);
        for (var _i = 0, _a = this.ctrdata; _i < _a.length; _i++) {
            var k = _a[_i];
            console.log(k.name);
            console.log(k.name);
            if (iname == k.region) {
                this.r = k.region;
                console.log(k.region);
                this.ctrdetails.push(k.name);
                console.log(this.ctrdetails);
            }
        }
        console.log(this.ctrdetails);
        //this.toastr.show("Click on Any country and see 'ALL COUNTRIES VIEW'");
    };
    SinglecountryComponent.prototype.getcountries = function () {
        this.showr = !this.showr;
        this.toastr.show("Select Region and Contry.");
    };
    SinglecountryComponent.prototype.getcountriesdetails = function (cname) {
        this.cntrdet = !this.cntrdet;
        this.toastr.show("See Single countries all details.");
        console.log(this.ctrdata);
        for (var _i = 0, _a = this.ctrdata; _i < _a.length; _i++) {
            var k = _a[_i];
            console.log(k.name);
            if (cname == k.name) {
                this.mydata = k;
                console.log(this.mydata);
                console.log(k.cioc);
                console.log(k.currencies);
                for (var _b = 0, _c = k.currencies; _b < _c.length; _b++) {
                    var ck = _c[_b];
                    console.log(ck.code);
                }
            }
        }
    };
    SinglecountryComponent.prototype.ngOnInit = function () {
        this.getallregions();
    };
    SinglecountryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-singlecountry',
            template: __webpack_require__(/*! ./singlecountry.component.html */ "./src/app/country/singlecountry/singlecountry.component.html"),
            styles: [__webpack_require__(/*! ./singlecountry.component.css */ "./src/app/country/singlecountry/singlecountry.component.css")],
            providers: [_pipe_objedisplay_pipe__WEBPACK_IMPORTED_MODULE_5__["objectdisplay"]]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_0__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_0__["Router"], src_app_httpservice_service__WEBPACK_IMPORTED_MODULE_2__["HttpserviceService"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"]])
    ], SinglecountryComponent);
    return SinglecountryComponent;
}());



/***/ }),

/***/ "./src/app/filters/currency/currency.component.css":
/*!*********************************************************!*\
  !*** ./src/app/filters/currency/currency.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container-fluid {\r\n    background-color:honeydew;\r\n    min-height: 100vh;\r\n    height: auto;\r\n}\r\n.ttl {\r\n    font-size: 3rem;\r\n    font-weight: 700;\r\n    font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;\r\n    color:rgb(41, 13, 65);\r\n    text-shadow: 2px 3px 1px lightslategrey;\r\n}\r\n.parent {\r\n    align-self: center;\r\n    display: flex;\r\n    flex-direction: row;\r\n    align-items: center;\r\n    height:auto ;\r\n    padding: 20px;\r\n}\r\n.childlink {\r\n    font-family:'Trebuchet MS',sans-serif;\r\n    -webkit-transform: translate(-50%, -50%);\r\n            transform: translate(-50%, -50%);\r\n    -ms-transform: translate(-50%, -50%);\r\n     color:rgba(76, 32, 102, 0.925);\r\n    font-size: 3rem;\r\n    cursor: pointer;\r\n    font-weight: 700;\r\n    margin-left: 6vw;\r\n    -webkit-text-decoration-line: none;\r\n            text-decoration-line: none;\r\n    border-radius: 20px;\r\n}\r\n.childlink:hover {\r\n    color:slateblue;\r\n}\r\n.btn-group .btn {\r\n    width: auto;\r\n    border:lightslategray 3px;\r\n    box-shadow:1px 4px 3px lightslategray;\r\n    color: beige;\r\n    background-color: rgba(15, 42, 59, 0.925);\r\n    font-family: 'Lucida Sans', Arial, sans-serif;\r\n    font-size: 2rem;\r\n}\r\n.dropdown-menu .list-group .list-group-item {\r\n    cursor: pointer;\r\n    color: beige;\r\n    background-color: rgba(15, 42, 59, 0.925);\r\n    font-family: 'Lucida Sans', Arial, sans-serif;\r\n    font-size: 2rem;\r\n    min-width:17vw;\r\n    width: auto;\r\n}\r\n.carddiv  {\r\n    width:80vw;\r\n    background-color:darkgrey ;\r\n    border: dimgray  2px groove;\r\n    color:rgba(10, 30, 54, 0.87);\r\n    font-family: 'Trebuchet MS', sans-serif;\r\n    font-size: 2rem;\r\n}\r\n.card-title {\r\n    font-size: 2rem;\r\n}\r\n.carddiv .card-img-top {\r\n    width:70vw;\r\n}\r\n@media screen and (min-width: 390px) and (max-width: 510px) {\r\n    .container-fluid .ttl {\r\n        font-size: 4rem;\r\n    }\r\n    .carddiv  {\r\n        font-size: 1.5rem;\r\n    }\r\n    .card-title {\r\n        font-size: 1.5rem;\r\n    }\r\n    .btn-group .btn {\r\n        font-size: 1.5rem;\r\n    }\r\n    .dropdown-menu .list-group .list-group-item {\r\n        font-size: 1.5rem;\r\n    }\r\n    .childlink {\r\n        font-size: 2rem;\r\n        font-weight: 500;\r\n    }\r\n    \r\n}\r\n@media screen and (min-width: 300px) and (max-width: 389px) {\r\n    .container-fluid .ttl {\r\n        font-size: 3rem;\r\n    }\r\n    .carddiv  {\r\n        font-size: 1.5rem;\r\n    }\r\n    .card-title {\r\n        font-size: 1.5rem;\r\n    }\r\n    .btn-group .btn {\r\n        font-size: 1.3rem;\r\n    }\r\n    .dropdown-menu .list-group .list-group-item {\r\n        font-size: 1.3rem;\r\n    }\r\n    .childlink {\r\n        font-size: 1.5rem;\r\n        font-weight: 400;\r\n    }\r\n    \r\n}\r\n@media screen and (min-width: 200px) and (max-width: 299px) {\r\n    .container-fluid .ttl {\r\n        font-size: 2rem;\r\n    }\r\n    .carddiv  {\r\n        font-size: 1rem;\r\n    }\r\n    .card-title {\r\n        font-size: 1rem;\r\n    }\r\n    .btn-group .btn {\r\n        font-size: 1rem;\r\n    }\r\n    .dropdown-menu .list-group .list-group-item {\r\n        font-size: 1rem;\r\n    }\r\n    .childlink {\r\n        font-size: 1rem;\r\n        font-weight: 300;\r\n    }\r\n    \r\n}"

/***/ }),

/***/ "./src/app/filters/currency/currency.component.html":
/*!**********************************************************!*\
  !*** ./src/app/filters/currency/currency.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<head>\n    <link rel=\"stylesheet\" href=\"https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/css/bootstrap.min.css\" \n    integrity=\"sha384-9gVQ4dYFwwWSjIDZnLEWnxCjeSWFphJiwGPXr1jddIhOegiu1FwO5qRGvFXOdJZ4\" crossorigin=\"anonymous\">\n  </head>\n  <div class=\"parent\">\n      <button type=\"button\" class=\"btn childlink\" (click)=\"getcurren()\">Currency</button>\n      <button type=\"button\" class=\"btn childlink\" (click)=\"golan()\">Languages</button>\n  </div>\n\n\n  <div  *ngIf=\"showr\">\n      <div class=\"btn-group\" style=\"border-radius:10px;margin-right: 30vw\">\n        <button type=\"button\" class=\"btn btn-lg\">Currencies</button>\n        <button type=\"button\" class=\"btn dropdown-toggle dropdown-toggle-split\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n          <span class=\"sr-only\">Toggle Dropdown</span>\n        </button>\n        <div class=\"dropdown-menu\">\n            <ul class=\"list-group list-group-flush\" *ngFor =\"let i of finalarray\">\n                <li  class=\"list-group-item\"><span class=\"glyphicon glyphicon-gbp\"></span>&nbsp;&nbsp;<a \n                 (click)=\"showdetails(curname=i)\">{{i}}</a></li>\n            </ul>\n        </div>\n      </div>\n      \n      <div class=\"btn-group\" *ngIf=\"show\" style=\"border-radius:10px;\">\n          <button type=\"button\" class=\"btn btn-lg\">{{r}}</button>\n          <button type=\"button\" class=\"btn dropdown-toggle dropdown-toggle-split\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n            <span class=\"sr-only\">Toggle Dropdown</span>\n          </button>\n          <div class=\"dropdown-menu\">\n              <ul class=\"list-group list-group-flush\" *ngFor =\"let c of ctrdetails\">\n                  <li  class=\"list-group-item\"><span class=\"glyphicon glyphicon-flag\"></span>&nbsp;&nbsp;<a \n                   (click)=\"getcountriesdetails(cnname=c)\">{{c}}</a></li>\n              </ul>\n          </div>\n        </div>\n    </div>  \n    <br/>\n    <!-- Show current contries information -->\n    \n        <div class=\"card carddiv\"  *ngIf=\"cntrdet\">\n          <img class=\"card-img-top\" [src]=\"mydata.flag\">\n          <div class=\"card-body\">\n            <h5 class=\"card-title\"><b>Name<span class=\"glyphicon glyphicon-chevron-right\t\"></span></b>&nbsp;{{mydata.name}}</h5>\n            <p class=\"card-text\"><b>Capital<span class=\"glyphicon glyphicon-chevron-right\t\"></span></b>&nbsp;{{mydata.capital}}</p>\n            <p class=\"card-text\"><b>Region<span class=\"glyphicon glyphicon-chevron-right\t\"></span>&nbsp;</b>{{mydata.region}}</p>\n            <p class=\"card-text\"><b>Subregion<span class=\"glyphicon glyphicon-chevron-right\t\"></span>&nbsp;</b>{{mydata.subregion}}</p>\n            <p class=\"card-text\" ><b>Alpha2Code<span class=\"glyphicon glyphicon-chevron-right\t\"></span>&nbsp;</b>{{mydata.alpha2Code}}</p>\n            <p class=\"card-text\" ><b>Alpha3Code<span class=\"glyphicon glyphicon-chevron-right\t\"></span>&nbsp;</b>{{mydata.alpha3Code}}</p>\n            <p class=\"card-text\" ><b>Population<span class=\"glyphicon glyphicon-chevron-right\t\"></span>&nbsp;</b>{{mydata.population}}</p>\n            <p class=\"card-text\" ><b>Demonym<span class=\"glyphicon glyphicon-chevron-right\t\"></span>&nbsp;</b>{{mydata.demonym}}</p>\n            <p class=\"card-text\" ><b>Area<span class=\"glyphicon glyphicon-chevron-right\t\"></span>&nbsp;</b>{{mydata.area}}</p>\n            <p class=\"card-text\" ><b>Gini<span class=\"glyphicon glyphicon-chevron-right\t\"></span>&nbsp;</b>{{mydata.gini}}</p>\n            <p class=\"card-text\" ><b>NativeName<span class=\"glyphicon glyphicon-chevron-right\t\"></span>&nbsp;</b>{{mydata.nativeName}}</p>\n            <p class=\"card-text\" ><b>NumericCode<span class=\"glyphicon glyphicon-chevron-right\t\"></span>&nbsp;</b>{{mydata.numericCode}}</p>\n            <p class=\"card-text\" *ngFor=\"let cr of mydata.currencies\"><b>Currencies<span class=\"glyphicon glyphicon-chevron-right\t\"></span>&nbsp;</b><br/>\n              Code:&nbsp;{{cr.code}}<br/>\n              Name:&nbsp;{{cr.name}}<br/>\n              Symbol:&nbsp;{{cr.symbol}}<br/></p>\n            <p class=\"card-text\" *ngFor =\"let tp of mydata.topLevelDomain\"><b>TopLevelDomain<span class=\"glyphicon glyphicon-chevron-right\t\"></span>&nbsp;</b>{{tp}}</p>\n            <p class=\"card-text\" *ngFor =\"let cc of mydata.callingCodes\"><b>CallingCodes<span class=\"glyphicon glyphicon-chevron-right\t\"></span>&nbsp;</b>{{cc}}</p>\n            <p class=\"card-text\" ><b>AltSpellings<span class=\"glyphicon glyphicon-chevron-right\t\"></span>&nbsp;</b>\n              <span *ngFor =\"let al of mydata.altSpellings\">{{al}}<br/></span></p>\n            <p class=\"card-text\" ><b>Latlng<span class=\"glyphicon glyphicon-chevron-right\t\"></span>&nbsp;</b><span *ngFor =\"let la of mydata.latlng\">{{la}}<br/></span></p>\n            <p class=\"card-text\"><b>borders<span class=\"glyphicon glyphicon-chevron-right\t\"></span>&nbsp;</b><span *ngFor =\"let b of mydata.borders\">{{b}}<br/></span></p>\n            <p class=\"card-text\" ><b>Languages<span class=\"glyphicon glyphicon-chevron-right\t\"></span>&nbsp;</b><span *ngFor =\"let lan of mydata.languages\"><br/>\n              iso639_1 :&nbsp;{{lan.iso639_1}}<br/>\n              iso639_2 :&nbsp;{{lan.iso639_2}}<br/>\n              Name :&nbsp;{{lan.name}}<br/>\n              NativeName:&nbsp;{{lan.nativeName}}<br/></span></p>\n             <p class=\"card-text\" ><b>Translations<span class=\"glyphicon glyphicon-chevron-right\t\"></span>&nbsp;</b>           \n                   <span *ngFor=\"let trs of mydata.translations | trans\">{{trs.key}}<span class=\"glyphicon glyphicon-chevron-right\t\"></span>&nbsp; {{trs.value}}<br/></span>\n            </p> \n            <p class=\"card-text\" ><b>RegionalBlocs<span class=\"glyphicon glyphicon-chevron-right\t\"></span>&nbsp;</b><span *ngFor =\"let rb of mydata.regionalBlocs\"><br/>\n              Acronym:&nbsp;{{rb.acronym}}<br/>\n              Name:&nbsp;{{rb.name}}<br/>\n              OtherAcronyms:&nbsp;<span *ngFor =\"let rbn of rb.otherAcronyms\"></span>{{rbn}}<br/>\n              OtherNames:&nbsp;<span *ngFor =\"let rbo of rb.otherNames\"></span>{{rbo}}<br/></span></p>\n          </div>\n          <div class=\"card-footer\">\n            <small class=\"text-muted\" ><b>TimeZones<span class=\"glyphicon glyphicon-chevron-right\t\"></span>&nbsp;</b><span *ngFor =\"let tz of mydata.timezones\">{{tz}}<br/></span></small><br/>\n            <small class=\"text-muted\" ><b>Cioc<span class=\"glyphicon glyphicon-chevron-right\t\"></span>&nbsp;</b>{{mydata.cioc}}</small>\n          </div>\n        </div>\n    "

/***/ }),

/***/ "./src/app/filters/currency/currency.component.ts":
/*!********************************************************!*\
  !*** ./src/app/filters/currency/currency.component.ts ***!
  \********************************************************/
/*! exports provided: CurrencyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CurrencyComponent", function() { return CurrencyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_httpservice_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/httpservice.service */ "./src/app/httpservice.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _pipe_objoffilter_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../pipe/objoffilter.pipe */ "./src/app/filters/pipe/objoffilter.pipe.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var CurrencyComponent = /** @class */ (function () {
    function CurrencyComponent(_route, router, httpservice, location, toastr, vcr) {
        this._route = _route;
        this.router = router;
        this.httpservice = httpservice;
        this.location = location;
        this.toastr = toastr;
        this.arrayname = [];
        this.finalarray = [];
        this.show = false;
        this.ctrdetails = [];
        console.log("Currency constructor is called");
        console.log(vcr);
    }
    CurrencyComponent.prototype.goback = function () {
        //window.history.back();
        this.location.back();
        console.log("Back");
        this.toastr.success("Back");
    };
    CurrencyComponent.prototype.getcurrency = function () {
        var _this = this;
        this.httpservice = this.httpservice.getcurrency().subscribe(function (data) {
            _this.toastr.success("Currencies Filter-4 view​  displaying.");
            console.log(data);
            _this.ctrdata = data;
            for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
                var i = data_1[_i];
                console.log(i.currencies);
                for (var _a = 0, _b = i.currencies; _a < _b.length; _a++) {
                    var ic = _b[_a];
                    _this.arrayname.push(ic.code);
                }
            }
            console.log(_this.arrayname);
            function removeDuplicateregion(arr) {
                var rarr = arr.filter(function (elem, index, self) {
                    return index == self.indexOf(elem);
                });
                return rarr;
            }
            _this.finalarray = removeDuplicateregion(_this.arrayname);
            console.log(_this.finalarray);
        }, function (error) {
            _this.errormsg = true;
            console.log(_this.errormsg);
            console.log("some error occured");
            console.log(error.errorMessage);
        });
    }; //end method
    CurrencyComponent.prototype.showdetails = function (iname) {
        this.show = !this.show;
        //console.log(iname);
        console.log(this.ctrdata);
        for (var _i = 0, _a = this.ctrdata; _i < _a.length; _i++) {
            var k = _a[_i];
            console.log(k.currencies.code);
            for (var _b = 0, _c = k.currencies; _b < _c.length; _b++) {
                var kc = _c[_b];
                if (iname == kc.code) {
                    this.r = kc.code;
                    console.log(kc.code);
                    this.ctrdetails.push(k.name);
                    //console.log(this.ctrdetails);
                }
            }
        }
        console.log(this.ctrdetails);
        //this.toastr.show("Click on Any country and see 'ALL COUNTRIES VIEW'");
    };
    CurrencyComponent.prototype.golan = function () {
        this.router.navigate(['/language']);
    };
    CurrencyComponent.prototype.getcurren = function () {
        this.showr = !this.showr;
        this.toastr.show("Select Currency and Contry.");
    };
    CurrencyComponent.prototype.getcountriesdetails = function (cname) {
        this.cntrdet = !this.cntrdet;
        this.toastr.show("See Single countries all details.");
        console.log(this.ctrdata);
        for (var _i = 0, _a = this.ctrdata; _i < _a.length; _i++) {
            var cd = _a[_i];
            console.log(cd.name);
            if (cname == cd.name) {
                this.mydata = cd;
                console.log(this.mydata);
                console.log(cd.cioc);
                console.log(cd.currencies);
                for (var _b = 0, _c = cd.currencies; _b < _c.length; _b++) {
                    var ck = _c[_b];
                    console.log(ck.code);
                }
            }
        }
    };
    CurrencyComponent.prototype.ngOnInit = function () {
        this.getcurrency();
    };
    CurrencyComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-currency',
            template: __webpack_require__(/*! ./currency.component.html */ "./src/app/filters/currency/currency.component.html"),
            styles: [__webpack_require__(/*! ./currency.component.css */ "./src/app/filters/currency/currency.component.css")],
            providers: [_pipe_objoffilter_pipe__WEBPACK_IMPORTED_MODULE_5__["objoffilter"]]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], src_app_httpservice_service__WEBPACK_IMPORTED_MODULE_2__["HttpserviceService"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]])
    ], CurrencyComponent);
    return CurrencyComponent;
}());



/***/ }),

/***/ "./src/app/filters/filters.module.ts":
/*!*******************************************!*\
  !*** ./src/app/filters/filters.module.ts ***!
  \*******************************************/
/*! exports provided: FiltersModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiltersModule", function() { return FiltersModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _language_language_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./language/language.component */ "./src/app/filters/language/language.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _httpservice_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../httpservice.service */ "./src/app/httpservice.service.ts");
/* harmony import */ var _pipe_objoffilter_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pipe/objoffilter.pipe */ "./src/app/filters/pipe/objoffilter.pipe.ts");
/* harmony import */ var _currency_currency_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./currency/currency.component */ "./src/app/filters/currency/currency.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var FiltersModule = /** @class */ (function () {
    function FiltersModule() {
    }
    FiltersModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
                ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrModule"].forRoot(),
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild([
                    { path: 'currency', component: _currency_currency_component__WEBPACK_IMPORTED_MODULE_9__["CurrencyComponent"], pathMatch: 'full' },
                    { path: 'language', component: _language_language_component__WEBPACK_IMPORTED_MODULE_2__["LanguageComponent"] }
                ])
            ],
            providers: [_httpservice_service__WEBPACK_IMPORTED_MODULE_7__["HttpserviceService"]],
            declarations: [_language_language_component__WEBPACK_IMPORTED_MODULE_2__["LanguageComponent"], _pipe_objoffilter_pipe__WEBPACK_IMPORTED_MODULE_8__["objoffilter"], _currency_currency_component__WEBPACK_IMPORTED_MODULE_9__["CurrencyComponent"]],
            exports: [
                _language_language_component__WEBPACK_IMPORTED_MODULE_2__["LanguageComponent"],
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"]
            ]
        })
    ], FiltersModule);
    return FiltersModule;
}());



/***/ }),

/***/ "./src/app/filters/language/language.component.css":
/*!*********************************************************!*\
  !*** ./src/app/filters/language/language.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container-fluid {\r\n    background-color:honeydew;\r\n    min-height: 100vh;\r\n    height: auto;\r\n}\r\n.ttl {\r\n    font-size: 3rem;\r\n    font-weight: 700;\r\n    font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;\r\n    color:rgb(41, 13, 65);\r\n    text-shadow: 2px 3px 1px lightslategrey;\r\n}\r\n.parent {\r\n    align-self: center;\r\n    display: flex;\r\n    flex-direction: row;\r\n    align-items: center;\r\n    height:auto ;\r\n    padding: 20px;\r\n}\r\n.childlink {\r\n    font-family:'Trebuchet MS',sans-serif;\r\n    -webkit-transform: translate(-50%, -50%);\r\n            transform: translate(-50%, -50%);\r\n    -ms-transform: translate(-50%, -50%);\r\n     color:rgba(76, 32, 102, 0.925);\r\n    font-size: 3rem;\r\n    cursor: pointer;\r\n    font-weight: 700;\r\n    margin-left: 6vw;\r\n    -webkit-text-decoration-line: none;\r\n            text-decoration-line: none;\r\n    border-radius: 20px;\r\n}\r\n.childlink:hover {\r\n    color:slateblue;\r\n}\r\n.btn-group .btn {\r\n    width: auto;\r\n    border:lightslategray 3px;\r\n    box-shadow:1px 4px 3px lightslategray;\r\n    color: beige;\r\n    background-color: rgba(15, 42, 59, 0.925);\r\n    font-family: 'Lucida Sans', Arial, sans-serif;\r\n    font-size: 2rem;\r\n}\r\n.dropdown-menu .list-group .list-group-item {\r\n    cursor: pointer;\r\n    color: beige;\r\n    background-color: rgba(15, 42, 59, 0.925);\r\n    font-family: 'Lucida Sans', Arial, sans-serif;\r\n    font-size: 2rem;\r\n    min-width:17vw;\r\n    width: auto;\r\n}\r\n.carddiv  {\r\n    width:80vw;\r\n    background-color:darkgrey ;\r\n    border: dimgray  2px groove;\r\n    color:rgba(10, 30, 54, 0.87);\r\n    font-family: 'Trebuchet MS', sans-serif;\r\n    font-size: 2rem;\r\n}\r\n.card-title {\r\n    font-size: 2rem;\r\n}\r\n.carddiv .card-img-top {\r\n    width:70vw;\r\n}\r\n@media screen and (min-width: 390px) and (max-width: 510px) {\r\n    .container-fluid .ttl {\r\n        font-size: 4rem;\r\n    }\r\n    .carddiv  {\r\n        font-size: 1.5rem;\r\n    }\r\n    .card-title {\r\n        font-size: 1.5rem;\r\n    }\r\n    .btn-group .btn {\r\n        font-size: 1.5rem;\r\n    }\r\n    .dropdown-menu .list-group .list-group-item {\r\n        font-size: 1.5rem;\r\n    }\r\n    .childlink {\r\n        font-size: 2rem;\r\n        font-weight: 500;\r\n    }\r\n    \r\n}\r\n@media screen and (min-width: 300px) and (max-width: 389px) {\r\n    .container-fluid .ttl {\r\n        font-size: 3rem;\r\n    }\r\n    .carddiv  {\r\n        font-size: 1.5rem;\r\n    }\r\n    .card-title {\r\n        font-size: 1.5rem;\r\n    }\r\n    .btn-group .btn {\r\n        font-size: 1.3rem;\r\n    }\r\n    .dropdown-menu .list-group .list-group-item {\r\n        font-size: 1.3rem;\r\n    }\r\n    .childlink {\r\n        font-size: 1.5rem;\r\n        font-weight: 400;\r\n    }\r\n    \r\n}\r\n@media screen and (min-width: 200px) and (max-width: 299px) {\r\n    .container-fluid .ttl {\r\n        font-size: 2rem;\r\n    }\r\n    .carddiv  {\r\n        font-size: 1rem;\r\n    }\r\n    .card-title {\r\n        font-size: 1rem;\r\n    }\r\n    .btn-group .btn {\r\n        font-size: 1rem;\r\n    }\r\n    .dropdown-menu .list-group .list-group-item {\r\n        font-size: 1rem;\r\n    }\r\n    .childlink {\r\n        font-size: 1rem;\r\n        font-weight: 300;\r\n    }\r\n    \r\n}"

/***/ }),

/***/ "./src/app/filters/language/language.component.html":
/*!**********************************************************!*\
  !*** ./src/app/filters/language/language.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<head>\n    <link rel=\"stylesheet\" href=\"https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/css/bootstrap.min.css\" \n    integrity=\"sha384-9gVQ4dYFwwWSjIDZnLEWnxCjeSWFphJiwGPXr1jddIhOegiu1FwO5qRGvFXOdJZ4\" crossorigin=\"anonymous\">\n</head>\n\n  <div  >\n      <div class=\"btn-group\" style=\"border-radius:10px;margin-right: 30vw\">\n        <button type=\"button\" class=\"btn btn-lg\">Languages</button>\n        <button type=\"button\" class=\"btn dropdown-toggle dropdown-toggle-split\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n          <span class=\"sr-only\">Toggle Dropdown</span>\n        </button>\n        <div class=\"dropdown-menu\">\n            <ul class=\"list-group list-group-flush\" *ngFor =\"let i of finalarray\">\n                <li  class=\"list-group-item\"><span class=\"glyphicon glyphicon-list-alt\"></span>&nbsp;&nbsp;<a \n                 (click)=\"showdetails(curname=i)\">{{i}}</a></li>\n            </ul>\n        </div>\n      </div>\n      \n      <div class=\"btn-group\" *ngIf=\"show\" style=\"border-radius:10px;\">\n          <button type=\"button\" class=\"btn btn-lg\">{{r}}</button>\n          <button type=\"button\" class=\"btn dropdown-toggle dropdown-toggle-split\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n            <span class=\"sr-only\">Toggle Dropdown</span>\n          </button>\n          <div class=\"dropdown-menu\">\n              <ul class=\"list-group list-group-flush\" *ngFor =\"let c of ctrdetails\">\n                  <li  class=\"list-group-item\"><span class=\"glyphicon glyphicon-flag\"></span>&nbsp;&nbsp;<a \n                   (click)=\"getcountriesdetails(cnname=c)\">{{c}}</a></li>\n              </ul>\n          </div>\n        </div>\n    </div>  \n    <br/>\n    <!-- Show current contries information -->\n    \n        <div class=\"card carddiv\"  *ngIf=\"cntrdet\">\n          <img class=\"card-img-top\" [src]=\"mydata.flag\">\n          <div class=\"card-body\">\n            <h5 class=\"card-title\"><b>Name<span class=\"glyphicon glyphicon-option-vertical\"></span></b>&nbsp;{{mydata.name}}</h5>\n            <p class=\"card-text\"><b>Capital<span class=\"glyphicon glyphicon-option-vertical\"></span></b>&nbsp;{{mydata.capital}}</p>\n            <p class=\"card-text\"><b>Region<span class=\"glyphicon glyphicon-option-vertical\"></span>&nbsp;</b>{{mydata.region}}</p>\n            <p class=\"card-text\"><b>Subregion<span class=\"glyphicon glyphicon-option-vertical\"></span>&nbsp;</b>{{mydata.subregion}}</p>\n            <p class=\"card-text\" ><b>Alpha2Code<span class=\"glyphicon glyphicon-option-vertical\"></span>&nbsp;</b>{{mydata.alpha2Code}}</p>\n            <p class=\"card-text\" ><b>Alpha3Code<span class=\"glyphicon glyphicon-option-vertical\"></span>&nbsp;</b>{{mydata.alpha3Code}}</p>\n            <p class=\"card-text\" ><b>Population<span class=\"glyphicon glyphicon-option-vertical\"></span>&nbsp;</b>{{mydata.population}}</p>\n            <p class=\"card-text\" ><b>Demonym<span class=\"glyphicon glyphicon-option-vertical\"></span>&nbsp;</b>{{mydata.demonym}}</p>\n            <p class=\"card-text\" ><b>Area<span class=\"glyphicon glyphicon-option-vertical\"></span>&nbsp;</b>{{mydata.area}}</p>\n            <p class=\"card-text\" ><b>Gini<span class=\"glyphicon glyphicon-option-vertical\"></span>&nbsp;</b>{{mydata.gini}}</p>\n            <p class=\"card-text\" ><b>NativeName<span class=\"glyphicon glyphicon-option-vertical\"></span>&nbsp;</b>{{mydata.nativeName}}</p>\n            <p class=\"card-text\" ><b>NumericCode<span class=\"glyphicon glyphicon-option-vertical\"></span>&nbsp;</b>{{mydata.numericCode}}</p>\n            <p class=\"card-text\" *ngFor=\"let cr of mydata.currencies\"><b>Currencies<span class=\"glyphicon glyphicon-option-vertical\"></span>&nbsp;</b><br/>\n              Code:&nbsp;{{cr.code}}<br/>\n              Name:&nbsp;{{cr.name}}<br/>\n              Symbol:&nbsp;{{cr.symbol}}<br/></p>\n            <p class=\"card-text\" *ngFor =\"let tp of mydata.topLevelDomain\"><b>TopLevelDomain<span class=\"glyphicon glyphicon-option-vertical\"></span>&nbsp;</b>{{tp}}</p>\n            <p class=\"card-text\" *ngFor =\"let cc of mydata.callingCodes\"><b>CallingCodes<span class=\"glyphicon glyphicon-option-vertical\"></span>&nbsp;</b>{{cc}}</p>\n            <p class=\"card-text\" ><b>AltSpellings<span class=\"glyphicon glyphicon-option-vertical\"></span>&nbsp;</b>\n              <span *ngFor =\"let al of mydata.altSpellings\">{{al}}<br/></span></p>\n            <p class=\"card-text\" ><b>Latlng<span class=\"glyphicon glyphicon-option-vertical\"></span>&nbsp;</b><span *ngFor =\"let la of mydata.latlng\">{{la}}<br/></span></p>\n            <p class=\"card-text\"><b>borders<span class=\"glyphicon glyphicon-option-vertical\"></span>&nbsp;</b><span *ngFor =\"let b of mydata.borders\">{{b}}<br/></span></p>\n            <p class=\"card-text\" ><b>Languages<span class=\"glyphicon glyphicon-option-vertical\"></span>&nbsp;</b><span *ngFor =\"let lan of mydata.languages\"><br/>\n              iso639_1 :&nbsp;{{lan.iso639_1}}<br/>\n              iso639_2 :&nbsp;{{lan.iso639_2}}<br/>\n              Name :&nbsp;{{lan.name}}<br/>\n              NativeName:&nbsp;{{lan.nativeName}}<br/></span></p>\n             <p class=\"card-text\" ><b>Translations<span class=\"glyphicon glyphicon-option-vertical\"></span>&nbsp;</b>           \n                   <span *ngFor=\"let trs of mydata.translations | trans\">{{trs.key}}<span class=\"glyphicon glyphicon-option-vertical\"></span>&nbsp; {{trs.value}}<br/></span>\n            </p> \n            <p class=\"card-text\" ><b>RegionalBlocs<span class=\"glyphicon glyphicon-option-vertical\"></span>&nbsp;</b><span *ngFor =\"let rb of mydata.regionalBlocs\"><br/>\n              Acronym:&nbsp;{{rb.acronym}}<br/>\n              Name:&nbsp;{{rb.name}}<br/>\n              OtherAcronyms:&nbsp;<span *ngFor =\"let rbn of rb.otherAcronyms\"></span>{{rbn}}<br/>\n              OtherNames:&nbsp;<span *ngFor =\"let rbo of rb.otherNames\"></span>{{rbo}}<br/></span></p>\n          </div>\n          <div class=\"card-footer\">\n            <small class=\"text-muted\" ><b>TimeZones<span class=\"glyphicon glyphicon-option-vertical\"></span>&nbsp;</b><span *ngFor =\"let tz of mydata.timezones\">{{tz}}<br/></span></small><br/>\n            <small class=\"text-muted\" ><b>Cioc<span class=\"glyphicon glyphicon-option-vertical\"></span>&nbsp;</b>{{mydata.cioc}}</small>\n          </div>\n        </div>\n    "

/***/ }),

/***/ "./src/app/filters/language/language.component.ts":
/*!********************************************************!*\
  !*** ./src/app/filters/language/language.component.ts ***!
  \********************************************************/
/*! exports provided: LanguageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LanguageComponent", function() { return LanguageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_httpservice_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/httpservice.service */ "./src/app/httpservice.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _pipe_objoffilter_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../pipe/objoffilter.pipe */ "./src/app/filters/pipe/objoffilter.pipe.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var LanguageComponent = /** @class */ (function () {
    function LanguageComponent(_route, router, httpservice, location, toastr, vcr) {
        this._route = _route;
        this.router = router;
        this.httpservice = httpservice;
        this.location = location;
        this.toastr = toastr;
        this.arrayname = [];
        this.finalarray = [];
        this.show = false;
        this.ctrdetails = [];
        console.log("Currency constructor is called");
        console.log(vcr);
    }
    LanguageComponent.prototype.goback = function () {
        //window.history.back();
        this.location.back();
        console.log("Back");
        this.toastr.success("Back");
    };
    LanguageComponent.prototype.getlanguages = function () {
        var _this = this;
        this.httpservice = this.httpservice.getlanguages().subscribe(function (data) {
            _this.toastr.success("Languages Filter-5 view​  displaying.");
            console.log(data);
            _this.ctrdata = data;
            for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
                var i = data_1[_i];
                console.log(i.languages);
                for (var _a = 0, _b = i.languages; _a < _b.length; _a++) {
                    var ic = _b[_a];
                    _this.arrayname.push(ic.name);
                }
            }
            console.log(_this.arrayname);
            function removeDuplicateregion(arr) {
                var rarr = arr.filter(function (elem, index, self) {
                    return index == self.indexOf(elem);
                });
                return rarr;
            }
            _this.finalarray = removeDuplicateregion(_this.arrayname);
            console.log(_this.finalarray);
        }, function (error) {
            _this.errormsg = true;
            console.log(_this.errormsg);
            console.log("some error occured");
            console.log(error.errorMessage);
        });
    }; //end method
    LanguageComponent.prototype.showdetails = function (iname) {
        this.show = !this.show;
        //console.log(iname);
        console.log(this.ctrdata);
        for (var _i = 0, _a = this.ctrdata; _i < _a.length; _i++) {
            var k = _a[_i];
            for (var _b = 0, _c = k.languages; _b < _c.length; _b++) {
                var kc = _c[_b];
                if (iname == kc.name) {
                    this.r = kc.name;
                    console.log(kc.name);
                    this.ctrdetails.push(k.name);
                    //console.log(this.ctrdetails);
                }
            }
        }
        console.log(this.ctrdetails);
        //this.toastr.show("Click on Any country and see 'ALL COUNTRIES VIEW'");
    };
    LanguageComponent.prototype.getcountriesdetails = function (cname) {
        this.cntrdet = !this.cntrdet;
        this.toastr.show("See Single countries all details.");
        console.log(this.ctrdata);
        for (var _i = 0, _a = this.ctrdata; _i < _a.length; _i++) {
            var cd = _a[_i];
            console.log(cd.name);
            if (cname == cd.name) {
                this.mydata = cd;
                console.log(this.mydata);
                console.log(cd.cioc);
                console.log(cd.languages);
            }
        }
        this.toastr.success("Thank You for visit !");
    };
    LanguageComponent.prototype.ngOnInit = function () {
        this.getlanguages();
    };
    LanguageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-language',
            template: __webpack_require__(/*! ./language.component.html */ "./src/app/filters/language/language.component.html"),
            styles: [__webpack_require__(/*! ./language.component.css */ "./src/app/filters/language/language.component.css")],
            providers: [_pipe_objoffilter_pipe__WEBPACK_IMPORTED_MODULE_5__["objoffilter"]]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], src_app_httpservice_service__WEBPACK_IMPORTED_MODULE_2__["HttpserviceService"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]])
    ], LanguageComponent);
    return LanguageComponent;
}());



/***/ }),

/***/ "./src/app/filters/pipe/objoffilter.pipe.ts":
/*!**************************************************!*\
  !*** ./src/app/filters/pipe/objoffilter.pipe.ts ***!
  \**************************************************/
/*! exports provided: objoffilter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "objoffilter", function() { return objoffilter; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var objoffilter = /** @class */ (function () {
    function objoffilter() {
    }
    objoffilter.prototype.transform = function (value, args) {
        var trans = [];
        for (var key in value) {
            trans.push({ key: key, value: value[key] });
        }
        return trans;
    };
    objoffilter = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'trans'
        })
    ], objoffilter);
    return objoffilter;
}());



/***/ }),

/***/ "./src/app/httpservice.service.ts":
/*!****************************************!*\
  !*** ./src/app/httpservice.service.ts ***!
  \****************************************/
/*! exports provided: HttpserviceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpserviceService", function() { return HttpserviceService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HttpserviceService = /** @class */ (function () {
    function HttpserviceService(_http) {
        this._http = _http;
        this.baseurl = "https://restcountries.eu/rest/v2";
        this.regionarray = [];
        console.log("http-service called");
    }
    HttpserviceService.prototype.handleError = function (err) {
        console.log("Handle error http calls");
        console.log(err.message);
        return rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"].throw(err.message);
    };
    HttpserviceService.prototype.getallregions = function () {
        var resp = this._http.get(this.baseurl + '/all?region');
        console.log(resp);
        return resp;
    };
    HttpserviceService.prototype.getcurrency = function () {
        var resp = this._http.get(this.baseurl + '/all?currency');
        console.log(resp);
        return resp;
    };
    HttpserviceService.prototype.getlanguages = function () {
        var resp = this._http.get(this.baseurl + '/all?lang');
        console.log(resp);
        return resp;
    };
    HttpserviceService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], HttpserviceService);
    return HttpserviceService;
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

module.exports = __webpack_require__(/*! c:\my-App\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map