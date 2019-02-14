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

/***/ "./src/app/animations/routinganimation.ts":
/*!************************************************!*\
  !*** ./src/app/animations/routinganimation.ts ***!
  \************************************************/
/*! exports provided: fadeAnimation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fadeAnimation", function() { return fadeAnimation; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");

var fadeAnimation = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('fadeAnimation', [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => *', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':leave', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ position: 'absolute' })], { optional: true }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0, position: 'absolute' })], { optional: true }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':leave', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 1 }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('.4s', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0 }))], { optional: true }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0 }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('.6s', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 1 }))], { optional: true })
    ])
]);


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

module.exports = "<app-navigation></app-navigation>\n<div [@fadeAnimation]=\"o.isActivated ? o.activatedRoute : ''\">\n    <router-outlet #o=\"outlet\"></router-outlet>\n</div>\n\n\n"

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
/* harmony import */ var _animations_routinganimation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./animations/routinganimation */ "./src/app/animations/routinganimation.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Buchner Portfolio';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")],
            animations: [_animations_routinganimation__WEBPACK_IMPORTED_MODULE_1__["fadeAnimation"]],
        })
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./navigation/navigation.component */ "./src/app/navigation/navigation.component.ts");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./contact/contact.component */ "./src/app/contact/contact.component.ts");
/* harmony import */ var _background_background_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./background/background.component */ "./src/app/background/background.component.ts");
/* harmony import */ var _projects_projects_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./projects/projects.component */ "./src/app/projects/projects.component.ts");
/* harmony import */ var _pagenotfound_pagenotfound_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pagenotfound/pagenotfound.component */ "./src/app/pagenotfound/pagenotfound.component.ts");
/* harmony import */ var _directives_video_background_directive__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./directives/video-background.directive */ "./src/app/directives/video-background.directive.ts");
/* harmony import */ var _routing_routing_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./routing/routing.module */ "./src/app/routing/routing.module.ts");
/* harmony import */ var _projects_projectmodal_projectmodal_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./projects/projectmodal/projectmodal.component */ "./src/app/projects/projectmodal/projectmodal.component.ts");
/* harmony import */ var _directives_video_projectmodal_directive__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./directives/video-projectmodal.directive */ "./src/app/directives/video-projectmodal.directive.ts");
/* harmony import */ var _pipes_timer_pipe__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./pipes/timer.pipe */ "./src/app/pipes/timer.pipe.ts");
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
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_5__["NavigationComponent"],
                _contact_contact_component__WEBPACK_IMPORTED_MODULE_6__["ContactComponent"],
                _background_background_component__WEBPACK_IMPORTED_MODULE_7__["BackgroundComponent"],
                _projects_projects_component__WEBPACK_IMPORTED_MODULE_8__["ProjectsComponent"],
                _pagenotfound_pagenotfound_component__WEBPACK_IMPORTED_MODULE_9__["PagenotfoundComponent"],
                _directives_video_background_directive__WEBPACK_IMPORTED_MODULE_10__["VideoBackgroundDirective"],
                _projects_projectmodal_projectmodal_component__WEBPACK_IMPORTED_MODULE_12__["ProjectmodalComponent"],
                _directives_video_projectmodal_directive__WEBPACK_IMPORTED_MODULE_13__["VideoProjectmodalDirective"],
                _pipes_timer_pipe__WEBPACK_IMPORTED_MODULE_14__["TimerPipe"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _routing_routing_module__WEBPACK_IMPORTED_MODULE_11__["RoutingModule"]
            ],
            exports: [_directives_video_projectmodal_directive__WEBPACK_IMPORTED_MODULE_13__["VideoProjectmodalDirective"]],
            providers: [_directives_video_projectmodal_directive__WEBPACK_IMPORTED_MODULE_13__["VideoProjectmodalDirective"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/background/background.component.css":
/*!*****************************************************!*\
  !*** ./src/app/background/background.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".background-container > div {\r\n}\r\n\r\n.grid {\r\n    display: -ms-grid;\r\n    display: grid;\r\n    grid-column-gap: 40px;\r\n    -ms-grid-columns: calc(80% - 40px) 20%;\r\n        grid-template-columns: calc(80% - 40px) 20%;\r\n}\r\n\r\n.subtitle {\r\n    font-size: 1.2em;\r\n    font-weight: 600;\r\n}\r\n\r\np {\r\n    margin-bottom: 40px;\r\n    font-size: 1.1em;\r\n}\r\n\r\n.img {\r\n    position: relative;\r\n    top: 30%;\r\n    -webkit-transform: translateY(-30%);\r\n            transform: translateY(-30%);\r\n}\r\n\r\nimg {\r\n    width: 100%;\r\n}\r\n\r\n@media (max-width: 950px) {\r\n    .grid {\r\n        display: block;\r\n    }\r\n    p {\r\n        margin-bottom: 10px;\r\n    }\r\n\r\n    .img {\r\n        top: 0;\r\n        -webkit-transform: translateY(0);\r\n                transform: translateY(0);\r\n    }\r\n\r\n    img {\r\n        width: 200px;\r\n        margin-bottom: 30px;\r\n    }\r\n}\r\n\r\n@media (max-width: 600px) {\r\n    h1 {\r\n        font-size: 1.3em;\r\n    }\r\n\r\n    p {\r\n        font-size: .9em;\r\n    }\r\n\r\n    img {\r\n        width: 100px;\r\n    }\r\n}\r\n"

/***/ }),

/***/ "./src/app/background/background.component.html":
/*!******************************************************!*\
  !*** ./src/app/background/background.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page-container readable background-container\">\n  <div>\n      <h1 class=\"title\">Web Development Background</h1>\n      <div class=\"grid\" *ngFor=\"let info of backgroundInformation\">\n        <div>\n          <div class=\"subtitle\">{{info.subtitle}}</div>  \n          <p>{{info.description}}</p>\n        </div>\n        <div>\n            <div class=\"img\">\n              <img src=\"{{info.src}}\" />\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/background/background.component.ts":
/*!****************************************************!*\
  !*** ./src/app/background/background.component.ts ***!
  \****************************************************/
/*! exports provided: BackgroundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BackgroundComponent", function() { return BackgroundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _data_BACKGROUNDINFORMATION__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data/BACKGROUNDINFORMATION */ "./src/app/data/BACKGROUNDINFORMATION.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BackgroundComponent = /** @class */ (function () {
    function BackgroundComponent() {
        this.backgroundInformation = _data_BACKGROUNDINFORMATION__WEBPACK_IMPORTED_MODULE_1__["BACKGROUNDINFORMATION"];
    }
    BackgroundComponent.prototype.ngOnInit = function () {
    };
    BackgroundComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-background',
            template: __webpack_require__(/*! ./background.component.html */ "./src/app/background/background.component.html"),
            styles: [__webpack_require__(/*! ./background.component.css */ "./src/app/background/background.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], BackgroundComponent);
    return BackgroundComponent;
}());



/***/ }),

/***/ "./src/app/contact/contact.component.css":
/*!***********************************************!*\
  !*** ./src/app/contact/contact.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h1.title {\r\n    font-weight: 200;\r\n    color: rgba(200,200,200, .96);\r\n    text-align: center;\r\n}\r\n\r\n.black-background {\r\n    padding: 60px 10px 100px 10px;\r\n}\r\n\r\n.btn-container {\r\n    text-align: center;\r\n}\r\n\r\n.btn {\r\n    display: inline-block;\r\n    margin: 60px 30px 0 0;\r\n    width: 150px;\r\n    padding: 8px 20px;\r\n    background-color: rgb(15, 50, 170);\r\n    border-radius: 6px;\r\n    text-transform: uppercase;\r\n    font-size: 1em;\r\n    cursor: pointer;\r\n    transition: background-color linear .2s;\r\n    text-align: center;\r\n}\r\n\r\n.btn:last-child {\r\n    margin-right: 0;\r\n}\r\n\r\n.btn:hover {\r\n    background-color: rgb(50, 75, 170);\r\n}\r\n\r\n.btn:active {\r\n    background-color: rgb(30, 60, 170);\r\n}\r\n\r\n/* Red button */\r\n\r\n.btn.red {\r\n    background-color: rgb(175, 0, 0);\r\n}\r\n\r\n.btn.red:hover {\r\n    background-color: rgb(175, 25, 25);\r\n}\r\n\r\n.btn.red:active {\r\n    background-color: rgb(175, 15, 15);\r\n}\r\n\r\n/* Hover Effect */\r\n\r\n.phone.no-progress::after {\r\n    content: ' Call my cell';\r\n}\r\n\r\n.phone.no-progress:hover::after {\r\n    content:' Set up mic first'\r\n}\r\n\r\n.phone.in-progress::after {\r\n    content: ' End';\r\n}\r\n\r\n.phone.in-progress:hover::after {\r\n    content:' End'\r\n}\r\n\r\n.show-email, .show-phone-message {\r\n    margin-top: 20px;\r\n    text-align: center;\r\n    height: 20px;\r\n}\r\n\r\n.show-phone-message span {\r\n    transition: opacity .8s linear;\r\n}\r\n\r\n.show-phone-message .hide {\r\n    opacity: 0;\r\n    \r\n}\r\n\r\n.show-phone-message .show {\r\n    opacity: 1;\r\n}\r\n\r\n@media (max-width: 600px) {\r\n    .black-background {\r\n        padding: 5px 10px 40px 10px;\r\n        width: calc(100% - 20px);\r\n    }\r\n    \r\n    .btn {\r\n        position: relative;\r\n        display: block;\r\n        margin: 30px 0 0;\r\n        width: 150px;\r\n\r\n        left: 50%;\r\n        -webkit-transform: translateX(-50%);\r\n                transform: translateX(-50%);\r\n    }\r\n}\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/contact/contact.component.html":
/*!************************************************!*\
  !*** ./src/app/contact/contact.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page-container\">\r\n    <div class=\"black-background\">\r\n        <h1 class=\"title\">Thank you for visiting</h1>\r\n        <div class=\"btn-container\">\r\n            <span\r\n            [class]=\" inProgress ? 'btn red' : 'btn blue' \" \r\n            (mouseover)=\"showMePhoneMessage(true)\" \r\n            (mouseleave)=\"showMePhoneMessage(false)\"\r\n            (click)=\"call()\">\r\n            \r\n            <i class=\"fas fa-phone-square\"></i><span  [class]=\"inProgress ? 'in-progress phone' : 'no-progress phone' \"></span></span>\r\n            <span class=\"btn\" (click)=\"showMeEmail()\"><i class=\"fas fa-envelope\"></i> Show Email</span>\r\n        </div>\r\n        <div class=\"show-email\"> \r\n            <span *ngIf=\"showEmail\">me@jonathanbuchner.com</span>\r\n        </div>\r\n        <div class=\"show-phone-message\">\r\n            <span [class]=\"showPhoneMessage || inProgress ? 'show' : 'hide' \" [innerHtml]=\"status\">Error</span>\r\n        </div>\r\n    </div>\r\n</div>\r\n  \r\n\r\n"

/***/ }),

/***/ "./src/app/contact/contact.component.ts":
/*!**********************************************!*\
  !*** ./src/app/contact/contact.component.ts ***!
  \**********************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_twilio_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/twilio.service */ "./src/app/services/twilio.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ContactComponent = /** @class */ (function () {
    function ContactComponent(twilio) {
        this.twilio = twilio;
        this.showEmail = false;
        this.showPhoneMessage = false;
    }
    ContactComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.twilio.setup().subscribe(function () {
        });
        this.statusSubscription = this.twilio.logged$.subscribe(function (message) { return _this.status = message; });
        this.statusSubscription = this.twilio.inProgress$.subscribe(function (inProgress) { return _this.inProgress = inProgress; });
    };
    ContactComponent.prototype.ngOnDestroy = function () {
        this.statusSubscription.unsubscribe();
    };
    ContactComponent.prototype.call = function () {
        this.twilio.call();
    };
    ContactComponent.prototype.showMeEmail = function () {
        this.showEmail = !this.showEmail;
    };
    ContactComponent.prototype.showMePhoneMessage = function (show) {
        this.showPhoneMessage = show;
    };
    ContactComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-contact',
            template: __webpack_require__(/*! ./contact.component.html */ "./src/app/contact/contact.component.html"),
            styles: [__webpack_require__(/*! ./contact.component.css */ "./src/app/contact/contact.component.css")]
        }),
        __metadata("design:paramtypes", [_services_twilio_service__WEBPACK_IMPORTED_MODULE_1__["TwilioService"]])
    ], ContactComponent);
    return ContactComponent;
}());



/***/ }),

/***/ "./src/app/data/BACKGROUNDINFORMATION.ts":
/*!***********************************************!*\
  !*** ./src/app/data/BACKGROUNDINFORMATION.ts ***!
  \***********************************************/
/*! exports provided: BACKGROUNDINFORMATION */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BACKGROUNDINFORMATION", function() { return BACKGROUNDINFORMATION; });
/* harmony import */ var _models_BackgroundInformation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/BackgroundInformation */ "./src/app/models/BackgroundInformation.ts");

var imgPath = '../../assets/img/';
var BACKGROUNDINFORMATION = [
    new _models_BackgroundInformation__WEBPACK_IMPORTED_MODULE_0__["BackgroundInformation"](imgPath + 'envision.png', "Developer in Test at Envision", "\n        Envision captures agent-customer interactions, which is usually the audio from a call center employee's phone combined with the video of her deskptop screen.  \n        The company collects call data, provides transcription services, does keywords spotting and offers a variety of data analytic and coaching tools.   \n        I worked for Envision from Jan 2017 through September 2018, primarily building new features for the Click2coach website.  The Engineering team included eight people, which was reduced to three people in September 2018.\n        "),
    new _models_BackgroundInformation__WEBPACK_IMPORTED_MODULE_0__["BackgroundInformation"](imgPath + 'epicodus.png', "Programming Background", "\n        I attended Epicodus, a six-month full-time programming school.  I took courses in .Net Core (Entity Framework, Identity), Ember, Angular, C#, SQL, Javascript, CSS, and HTML. \n        Programming, however, was a hobby before a career and I built a website for the non-profit Embracing Orphans and started an outdoor online community called Make The Summit.\n        Through programming I found my ideal, fulfilling work environment: each day I have a fresh set of puzzles and learning opportunities. \n        I love it.\n        "),
    new _models_BackgroundInformation__WEBPACK_IMPORTED_MODULE_0__["BackgroundInformation"](imgPath + 'whitman.png', "B.A. in Religion from Whitman College (2007)", "The study of religion at a secular college is religious literacy, which entails both a cognitive component (knowledge of religions and of the religious dimension of culture) \n        and proficiencies (the acquiring of skills relevant to the analysis of religion)."),
    new _models_BackgroundInformation__WEBPACK_IMPORTED_MODULE_0__["BackgroundInformation"](imgPath + 'wildwater.png', "And on the weekends...", " I spend time outdoors.  I previously taught outdoor climbing and I currently raft guide for WildWater. I will backcountry ski this winter. I enjoy games, especially chess.")
];


/***/ }),

/***/ "./src/app/data/PROJECTS.ts":
/*!**********************************!*\
  !*** ./src/app/data/PROJECTS.ts ***!
  \**********************************/
/*! exports provided: PROFESSIONALPROJECTS, PERSONALPROJECTS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PROFESSIONALPROJECTS", function() { return PROFESSIONALPROJECTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PERSONALPROJECTS", function() { return PERSONALPROJECTS; });
/* harmony import */ var _models_Project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/Project */ "./src/app/models/Project.ts");
/* harmony import */ var _models_TimeStamps__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/TimeStamps */ "./src/app/models/TimeStamps.ts");


var imgFolder = '../../assets/img/';
var vidFolder = 'https://buchner.z5.web.core.windows.net/assets/vid/';
var PROFESSIONALPROJECTS = [
    new _models_Project__WEBPACK_IMPORTED_MODULE_0__["Project"]('HTML5 Player', imgFolder + 'player.png', vidFolder + 'player.mp4', 'media-player-project', 'HTML5 Media | Blob Storage ', "Envision changed their screen capture from a proprietary video format to MP4 allowing for new video processing and MP4 delivery through the browser. \n      This video is a staged demo of an agent interaction featuring the newly implemented capture-to-play pipeline. \n      I created the new 'HTML5 Player' demonstrated in the video. \n      The biggest challenged was an interactive waveform that supports over 20,000 points.", [
        new _models_TimeStamps__WEBPACK_IMPORTED_MODULE_1__["TimeStamps"](21, 'HTML5 Player windows opened'),
        new _models_TimeStamps__WEBPACK_IMPORTED_MODULE_1__["TimeStamps"](31, 'Adding a mark'),
        new _models_TimeStamps__WEBPACK_IMPORTED_MODULE_1__["TimeStamps"](88, 'Transcription feature'),
    ]),
    new _models_Project__WEBPACK_IMPORTED_MODULE_0__["Project"]('Browser Phone', imgFolder + 'browserphone.png', vidFolder + 'browserphone.mp4', 'browser-phone-project', 'WebRTC | Twilio Integration | International Calling', "Envision\u2019s sales team requested a \u2018demo phone\u2019 for introducing new customers to the Click2Coach product. \n      This video demonstrates calling my cell phone from the browser.  Behind the scenes desktop \n      screen capture is started, paused, and ended as call data is captured. \n      The project included setting up a TwiML App to place the call, error and call reporting, and interfaces for managing the phone's use.\n      ", [
        new _models_TimeStamps__WEBPACK_IMPORTED_MODULE_1__["TimeStamps"](8, 'Call placed'),
        new _models_TimeStamps__WEBPACK_IMPORTED_MODULE_1__["TimeStamps"](15, 'Adding data tags'),
        new _models_TimeStamps__WEBPACK_IMPORTED_MODULE_1__["TimeStamps"](26, 'Call picked up'),
        new _models_TimeStamps__WEBPACK_IMPORTED_MODULE_1__["TimeStamps"](34, 'Call ended'),
    ]),
    new _models_Project__WEBPACK_IMPORTED_MODULE_0__["Project"]('Annotation Player', imgFolder + 'annotation.png', vidFolder + 'annotation.mp4', 'annotation-project', 'Browser APIs | Async Restful Api | Page Redrawing', "On the click2coach website, supervisor may add an audio annotation appended to original media as part of an agent\u2019s review. \n      This video demonstrates processing the audio in real time with the AudioContext API, collecting and graphing a set of points on a canvas, and sending the audio to the server as a blob.  \n      I also assisted in the creation of a media service api i that appends the annotation to the original media.   \n      The biggest front-end challenge was triggering the browser to redraw only part of the page. \n      ", [
        new _models_TimeStamps__WEBPACK_IMPORTED_MODULE_1__["TimeStamps"](13, 'Recording started'),
        new _models_TimeStamps__WEBPACK_IMPORTED_MODULE_1__["TimeStamps"](15, 'Live audio processing'),
        new _models_TimeStamps__WEBPACK_IMPORTED_MODULE_1__["TimeStamps"](22, 'Waveform generated'),
        new _models_TimeStamps__WEBPACK_IMPORTED_MODULE_1__["TimeStamps"](34, 'Recording sent for back-end processing.')
    ]),
];
var PERSONALPROJECTS = [];


/***/ }),

/***/ "./src/app/data/ROUTES.ts":
/*!********************************!*\
  !*** ./src/app/data/ROUTES.ts ***!
  \********************************/
/*! exports provided: ROUTES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ROUTES", function() { return ROUTES; });
/* harmony import */ var _projects_projects_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../projects/projects.component */ "./src/app/projects/projects.component.ts");
/* harmony import */ var _background_background_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../background/background.component */ "./src/app/background/background.component.ts");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../contact/contact.component */ "./src/app/contact/contact.component.ts");
/* harmony import */ var _pagenotfound_pagenotfound_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../pagenotfound/pagenotfound.component */ "./src/app/pagenotfound/pagenotfound.component.ts");




var ROUTES = [
    { path: '', component: _projects_projects_component__WEBPACK_IMPORTED_MODULE_0__["ProjectsComponent"] },
    { path: 'Background', component: _background_background_component__WEBPACK_IMPORTED_MODULE_1__["BackgroundComponent"] },
    { path: 'Contact', component: _contact_contact_component__WEBPACK_IMPORTED_MODULE_2__["ContactComponent"] },
    { path: '**', component: _pagenotfound_pagenotfound_component__WEBPACK_IMPORTED_MODULE_3__["PagenotfoundComponent"] },
];


/***/ }),

/***/ "./src/app/directives/video-background.directive.ts":
/*!**********************************************************!*\
  !*** ./src/app/directives/video-background.directive.ts ***!
  \**********************************************************/
/*! exports provided: VideoBackgroundDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideoBackgroundDirective", function() { return VideoBackgroundDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var VideoBackgroundDirective = /** @class */ (function () {
    function VideoBackgroundDirective(elRef, router) {
        var _this = this;
        this.elRef = elRef;
        this.router = router;
        this.video = elRef.nativeElement;
        router.events.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(function (e) { return e instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationStart"]; })).subscribe(function (event) {
            clearTimeout(_this.timeout);
            if (/Mobi|Android/i.test(navigator.userAgent)) {
                // mobile!
            }
            else {
                _this.video.pause();
                _this.video.play();
            }
        });
    }
    VideoBackgroundDirective.prototype.ngOnInit = function () { };
    VideoBackgroundDirective.prototype.ngAfterViewInit = function () {
        this.addEventListenerTimeUpdate();
    };
    VideoBackgroundDirective.prototype.addEventListenerTimeUpdate = function () {
        var _this = this;
        this.video.addEventListener('play', function () {
            _this.timeout = setTimeout(function () {
                _this.video.pause();
            }, 2000);
        });
    };
    //Video is 12 seconds.  First time it should play 4 seconds, then another 4 seconds, then another 4 seconds.  When it finishes, the third time, it will restart.  You can get out of the 4 second sequence and the video will automatically loop.
    VideoBackgroundDirective.prototype.addEventListenerTimePause = function () {
        var _this = this;
        this.video.addEventListener('pause', function () {
            if (_this.video.currentTime > 9) {
                _this.video.currentTime = 0;
            }
        });
    };
    VideoBackgroundDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[video-background]'
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], VideoBackgroundDirective);
    return VideoBackgroundDirective;
}());



/***/ }),

/***/ "./src/app/directives/video-projectmodal.directive.ts":
/*!************************************************************!*\
  !*** ./src/app/directives/video-projectmodal.directive.ts ***!
  \************************************************************/
/*! exports provided: VideoProjectmodalDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideoProjectmodalDirective", function() { return VideoProjectmodalDirective; });
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


var VideoProjectmodalDirective = /** @class */ (function () {
    function VideoProjectmodalDirective(videoRef) {
        this.videoRef = videoRef;
        this.playing = false;
        this.video = videoRef.nativeElement;
    }
    VideoProjectmodalDirective.prototype.ngOnInit = function () { };
    VideoProjectmodalDirective.prototype.ngAfterViewInit = function () {
        this.video = this.videoRef.nativeElement;
        this.addEventListenerPlay();
        this.addEventListenerPause();
    };
    //Observables
    VideoProjectmodalDirective.prototype.getPlayPauseState = function () {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(this.playing);
    };
    //Play or Pause
    VideoProjectmodalDirective.prototype.playPause = function () {
        if (this.playing) {
            this.video.pause();
        }
        else {
            this.video.play();
        }
    };
    // Event Listeners
    VideoProjectmodalDirective.prototype.addEventListenerPlay = function () {
        var _this = this;
        this.video.addEventListener('play', function () {
            _this.playing = true;
        });
    };
    VideoProjectmodalDirective.prototype.addEventListenerPause = function () {
        var _this = this;
        this.video.addEventListener('pause', function () {
            _this.playing = false;
        });
    };
    VideoProjectmodalDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[video-project]',
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], VideoProjectmodalDirective);
    return VideoProjectmodalDirective;
}());



/***/ }),

/***/ "./src/app/models/BackgroundInformation.ts":
/*!*************************************************!*\
  !*** ./src/app/models/BackgroundInformation.ts ***!
  \*************************************************/
/*! exports provided: BackgroundInformation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BackgroundInformation", function() { return BackgroundInformation; });
var BackgroundInformation = /** @class */ (function () {
    function BackgroundInformation(src, subtitle, description) {
        this.src = src;
        this.subtitle = subtitle;
        this.description = description;
    }
    return BackgroundInformation;
}());



/***/ }),

/***/ "./src/app/models/Project.ts":
/*!***********************************!*\
  !*** ./src/app/models/Project.ts ***!
  \***********************************/
/*! exports provided: Project */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Project", function() { return Project; });
var Project = /** @class */ (function () {
    function Project(title, src, videosrc, elementId, highlights, description, timestamps) {
        this.title = title;
        this.src = src;
        this.videosrc = videosrc;
        this.elementId = elementId;
        this.highlights = highlights;
        this.description = description;
        this.timestamps = timestamps;
    }
    return Project;
}());



/***/ }),

/***/ "./src/app/models/TimeStamps.ts":
/*!**************************************!*\
  !*** ./src/app/models/TimeStamps.ts ***!
  \**************************************/
/*! exports provided: TimeStamps */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimeStamps", function() { return TimeStamps; });
var TimeStamps = /** @class */ (function () {
    function TimeStamps(time, description) {
        this.time = time;
        this.description = description;
    }
    return TimeStamps;
}());



/***/ }),

/***/ "./src/app/navigation/navigation.component.css":
/*!*****************************************************!*\
  !*** ./src/app/navigation/navigation.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".video-background {\r\n    position: fixed;\r\n    top: 0;\r\n    left: 0;\r\n}\r\n\r\n.video-background video {\r\n    position: fixed;\r\n    top: 0;\r\n    right: 0;\r\n    margin: 0;\r\n    min-width: 100%; \r\n    min-height: 100%;\r\n}\r\n\r\n.video-background .cover {\r\n    position: fixed;\r\n    background: rgba(0,0,0,.86);\r\n    width: 100%;\r\n    height: 100%;\r\n}\r\n\r\n.navigation {\r\n    position: fixed;\r\n    top: 0;\r\n    left: 0;\r\n    width: 100%;\r\n    margin: 0;\r\n    padding: 20px 40px;\r\n    border-bottom: transparent 2px solid;\r\n    background: transparent;\r\n\r\n    z-index: 100;\r\n    transition: background .2s, border .5s;\r\n}\r\n\r\n.not-at-top {\r\n    background: black;\r\n    border-color: white;\r\n}\r\n\r\n.name {\r\n    font-size: 1.3em;\r\n    font-weight: 500;\r\n    letter-spacing: 2px;\r\n    margin-right: 30px; \r\n}\r\n\r\nnav a {\r\n    display: inline-block;\r\n    margin-right: 10px;\r\n    padding: 2px 15px 2px 0;\r\n    border-bottom: solid 1px transparent;\r\n    color: rgba(200,200,200,1);\r\n    font-size: .9em;\r\n    letter-spacing: 2px; \r\n}\r\n\r\nnav a:hover {\r\n    border-color:  rgba(200,200,200,1);\r\n}\r\n\r\nnav a::before {\r\n    display: inline-block;\r\n    content:'';\r\n    width:15px;\r\n    border-color: transparent;\r\n}\r\n\r\nnav a.active::before {\r\n    width: 15px;\r\n    display: inline-block;\r\n    font-size: .95em;\r\n    font-style: normal;\r\n    font-variant: normal;\r\n    font-weight: 700;\r\n    text-rendering: auto;\r\n    -webkit-font-smoothing: antialiased; \r\n    font-family: \"Font Awesome\\ 5 Free\";\r\n    content: \"\\f105\";\r\n}\r\n\r\n@media only screen and (max-width: 600px) {\r\n    \r\n    .navigation {\r\n        background: black;\r\n        border-color: white;\r\n    }\r\n    nav {\r\n        \r\n    }\r\n    nav a {\r\n        display: block;\r\n    }\r\n} \r\n\r\n"

/***/ }),

/***/ "./src/app/navigation/navigation.component.html":
/*!******************************************************!*\
  !*** ./src/app/navigation/navigation.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"video-background\">\r\n    <video video-background src=\"../../assets/vid/womantyping.mp4\" autoplay loop></video>\r\n    <div class=\"cover\"></div>\r\n</div>\r\n<div class=\"navigation heading-text\" [ngClass]=\"atTop ? 'at-top' : 'not-at-top' \">\r\n  <nav>\r\n    <span class=\"name\">Jonathan Buchner</span>\r\n    <a routerLink=\"./\" routerLinkActive=\"active\" [routerLinkActiveOptions]= \"{exact: true}\">Projects</a>\r\n    <a routerLink=\"./Background\" routerLinkActive=\"active\">Background</a>\r\n    <a routerLink=\"./Contact\" routerLinkActive=\"active\">Contact</a>\r\n    <a href=\"https://www.linkedin.com/in/buchner/\"><i class=\"fab fa-linkedin\"></i> LinkedIn</a>\r\n    <a href=\"https://github.com/JonathanBuchner\"><i class=\"fab fa-github-square\"></i> Github</a>\r\n  </nav>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/navigation/navigation.component.ts":
/*!****************************************************!*\
  !*** ./src/app/navigation/navigation.component.ts ***!
  \****************************************************/
/*! exports provided: NavigationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationComponent", function() { return NavigationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_window_ref_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/window-ref.service */ "./src/app/services/window-ref.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NavigationComponent = /** @class */ (function () {
    function NavigationComponent(window) {
        this.window = window;
        this.atTop = true;
    }
    NavigationComponent.prototype.ngOnInit = function () {
        this.addEventListernScroll();
    };
    NavigationComponent.prototype.addEventListernScroll = function () {
        var _this = this;
        window.addEventListener('scroll', function () {
            var pos = window.scrollY;
            if (pos > 30) {
                _this.atTop = false;
            }
            else {
                _this.atTop = true;
            }
        });
    };
    NavigationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-navigation',
            template: __webpack_require__(/*! ./navigation.component.html */ "./src/app/navigation/navigation.component.html"),
            styles: [__webpack_require__(/*! ./navigation.component.css */ "./src/app/navigation/navigation.component.css")]
        }),
        __metadata("design:paramtypes", [_services_window_ref_service__WEBPACK_IMPORTED_MODULE_1__["WindowRefService"]])
    ], NavigationComponent);
    return NavigationComponent;
}());



/***/ }),

/***/ "./src/app/pagenotfound/pagenotfound.component.css":
/*!*********************************************************!*\
  !*** ./src/app/pagenotfound/pagenotfound.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pagenotfound/pagenotfound.component.html":
/*!**********************************************************!*\
  !*** ./src/app/pagenotfound/pagenotfound.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pagenotfound/pagenotfound.component.ts":
/*!********************************************************!*\
  !*** ./src/app/pagenotfound/pagenotfound.component.ts ***!
  \********************************************************/
/*! exports provided: PagenotfoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagenotfoundComponent", function() { return PagenotfoundComponent; });
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

var PagenotfoundComponent = /** @class */ (function () {
    function PagenotfoundComponent() {
    }
    PagenotfoundComponent.prototype.ngOnInit = function () {
    };
    PagenotfoundComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-pagenotfound',
            template: __webpack_require__(/*! ./pagenotfound.component.html */ "./src/app/pagenotfound/pagenotfound.component.html"),
            styles: [__webpack_require__(/*! ./pagenotfound.component.css */ "./src/app/pagenotfound/pagenotfound.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PagenotfoundComponent);
    return PagenotfoundComponent;
}());



/***/ }),

/***/ "./src/app/pipes/timer.pipe.ts":
/*!*************************************!*\
  !*** ./src/app/pipes/timer.pipe.ts ***!
  \*************************************/
/*! exports provided: TimerPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimerPipe", function() { return TimerPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var TimerPipe = /** @class */ (function () {
    function TimerPipe() {
    }
    TimerPipe.prototype.transform = function (time) {
        return this.changeSecondsToMMSS(time);
    };
    TimerPipe.prototype.changeSecondsToMMSS = function (time) {
        time = Math.floor(time);
        if (time < 10) {
            return "0:0" + time;
        }
        else if (time < 60) {
            return "0:" + time;
        }
        else if (time < 60 * 60) {
            var minutes = Math.floor(time / 60);
            var seconds = time % 60;
            if (seconds < 10) {
                return minutes + ":0" + seconds;
            }
            else {
                return minutes + ":" + seconds;
            }
        }
        else {
            //Not implimented
            return 'error';
        }
    };
    TimerPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'timer'
        })
    ], TimerPipe);
    return TimerPipe;
}());



/***/ }),

/***/ "./src/app/projects/projectmodal/projectmodal.component.css":
/*!******************************************************************!*\
  !*** ./src/app/projects/projectmodal/projectmodal.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".background {\r\n    position: fixed;\r\n    top: 0;\r\n    left: 0;\r\n    height: 100%;\r\n    width: 100%;\r\n    background: rgba(0,0,0,.96);\r\n    overflow: scroll;\r\n\r\n    z-index: 100;\r\n}\r\n\r\n.background.hide {\r\n    display: none;\r\n}\r\n\r\n.container {\r\n    position: absolute;\r\n    top: 50%;\r\n    left: 50%;\r\n    width: 1390px;\r\n    max-width: 1800px;\r\n\r\n    -webkit-transform: translate(-50%, -50%);\r\n\r\n            transform: translate(-50%, -50%);\r\n}\r\n\r\n.grid {\r\n    display: -ms-grid;\r\n    display: grid;\r\n        grid-template-areas: \r\n        'title video'\r\n        'description video'\r\n        'footer controls';\r\n    -ms-grid-columns: 40% 60%;\r\n    grid-template-columns: 40% 60%;\r\n    -ms-grid-rows: 45px 100% auto;\r\n    grid-template-rows: 45px 100% auto;\r\n}\r\n\r\n@media (max-width: 1390px) {\r\n    .container {\r\n        width: 100%;\r\n        max-width: 556px;;\r\n    }\r\n    .grid {\r\n        display: -ms-grid;\r\n        display: grid;\r\n        margin-bottom: 30px;\r\n            grid-template-areas: \r\n            'title'\r\n            'video'\r\n            'controls'\r\n            'description'\r\n            'footer'; \r\n        -ms-grid-columns: auto; \r\n        grid-template-columns: auto;\r\n        -ms-grid-rows: auto;\r\n        grid-template-rows: auto;\r\n    }\r\n}\r\n\r\n@media (max-height: 750px) {\r\n    .container {\r\n        top: 10px;\r\n        -webkit-transform: translateX(-50%);\r\n                transform: translateX(-50%);\r\n    } \r\n}\r\n\r\n.grid > div {\r\n    margin: 6px;\r\n}\r\n\r\n.video {\r\n    -ms-grid-row: 1;\r\n    -ms-grid-row-span: 2;\r\n    -ms-grid-column: 2;\r\n    grid-area: video;\r\n    height: 100%;\r\n}\r\n\r\n.video > div {\r\n    position: relative;\r\n    transition: opacity .5s linear;\r\n}\r\n\r\n.video .hide {\r\n    opacity: 0;\r\n}\r\n\r\n.video .show {\r\n    opacity: 1;\r\n}\r\n\r\nvideo {\r\n    width: 100%;\r\n}\r\n\r\n.loading {\r\n    position: absolute;\r\n    top: 50%;\r\n    left: 50%;\r\n    width: 50px;\r\n\r\n    -webkit-transform: translate(-50%, -50%);\r\n\r\n            transform: translate(-50%, -50%);\r\n}\r\n\r\n.loading.hide {\r\n    display: none;\r\n}\r\n\r\n.loading i {\r\n    font-size: 3em;\r\n}\r\n\r\n.title-block {\r\n    -ms-grid-row: 1;\r\n    -ms-grid-column: 1;\r\n    grid-area: title;\r\n    border-radius: 4px;\r\n    padding: 6px 0;\r\n    background-color:  rgb(15, 50, 170);\r\n}\r\n\r\ndiv.title {\r\n    font-family: Segoe UI,SegoeUI,\"Helvetica Neue\", Helvetica, Arial, sans-serif;\r\n    font-size: 1em;\r\n    font-weight: 600;\r\n    text-transform: uppercase;\r\n    letter-spacing: 0;\r\n    line-height: 1.3;\r\n    text-align: center;\r\n}\r\n\r\n.description {\r\n    -ms-grid-row: 2;\r\n    -ms-grid-column: 1;\r\n    grid-area: description;\r\n    margin-bottom: 10px;\r\n    border-radius: 4px;    \r\n    padding: 30px;\r\n    background:white; \r\n    box-shadow: 0 0 8px 3px black;\r\n    color: rgb(40,40,40);\r\n}\r\n\r\n.description .highlights {\r\n    text-align: center;\r\n    text-transform: uppercase;\r\n    color: darkslategray;\r\n    font-family: Segoe UI,SegoeUI,\"Helvetica Neue\", Helvetica, Arial, sans-serif;\r\n}\r\n\r\n.description .message {\r\n    margin-top: 20px;\r\n}\r\n\r\n.description .timestamps {\r\n    margin-top: 20px;\r\n    padding-left: 20px;\r\n    text-transform: uppercase;\r\n    color: darkslategray;\r\n    font-family: Segoe UI,SegoeUI,\"Helvetica Neue\", Helvetica, Arial, sans-serif;\r\n    cursor: pointer;\r\n}\r\n\r\n.description .activated .stamptime.text::after {\r\n    color: green;\r\n    display: inline-block;\r\n    font-size: .95em;\r\n    font-style: normal;\r\n    font-variant: normal;\r\n    font-weight: 900;\r\n    text-rendering: auto;\r\n    -webkit-font-smoothing: antialiased; \r\n    font-family: \"Font Awesome\\ 5 Free\";\r\n    content: \"\\f00c\";\r\n}\r\n\r\n.description .stamptime {\r\n    border-bottom: 1px solid transparent;\r\n    transition: border .3s\r\n}\r\n\r\n.description .stamptime.text:hover {\r\n    border-color: black;\r\n}\r\n\r\n.footer {\r\n    -ms-grid-row: 3;\r\n    -ms-grid-column: 1;\r\n    grid-area: footer;\r\n    text-align: center;\r\n}\r\n\r\n.close, .currentTime {\r\n    margin-bottom: 30px;\r\n    padding: 2px 8px;\r\n    border-bottom: transparent solid 1px;\r\n    font-family: Segoe UI,SegoeUI,\"Helvetica Neue\", Helvetica, Arial, sans-serif;\r\n    font-weight: 600;\r\n    text-transform: uppercase;\r\n    font-size: 1em;\r\n    color: white;\r\n    cursor: pointer;\r\n}\r\n\r\n.close:hover {\r\n    border-color: white;\r\n}\r\n\r\n.controls {\r\n    -ms-grid-row: 3;\r\n    -ms-grid-column: 2;\r\n    grid-area: controls;\r\n    color: rgb(40,40,40);\r\n    text-align: center;\r\n}\r\n\r\n@media (max-width: 1390px) {\r\n    .video {\r\n        -ms-grid-row: 2;\r\n        -ms-grid-column: 1;\r\n    }\r\n    .title-block {\r\n        -ms-grid-row: 1;\r\n        -ms-grid-column: 1;\r\n    }\r\n    .description {\r\n        -ms-grid-row: 4;\r\n        -ms-grid-column: 1;\r\n    }\r\n    .footer {\r\n        -ms-grid-row: 5;\r\n        -ms-grid-column: 1;\r\n    }\r\n    .controls {\r\n        -ms-grid-row: 3;\r\n        -ms-grid-column: 1;\r\n    }\r\n}\r\n\r\n.sliderBar {\r\n    position: relative;\r\n    width: 315px;\r\n    left: 50%;\r\n    \r\n    -webkit-transform: translateX(-50%);\r\n    \r\n            transform: translateX(-50%);\r\n}\r\n\r\n.slider {\r\n    -webkit-appearance: none;  \r\n    -moz-appearance: none;  \r\n         appearance: none;\r\n    outline: none; /* Remove outline */\r\n    width: 100%; \r\n    height: 3px; \r\n    border-radius: 3px;\r\n   \r\n    border: 0 solid transparent;\r\n    box-shadow: 0 0 2px 0; \r\n    opacity: 0.7; /* Set transparency (for mouse-over effects on hover) */\r\n    cursor: pointer;\r\n    \r\n    transition: opacity .4s;\r\n}\r\n\r\n/* Fix range input for Firefox */\r\n\r\n@-moz-document url-prefix() {\r\n    .slider  {\r\n        background: transparent;\r\n    }\r\n  }\r\n\r\n.slider:hover {\r\n    opacity: 1;\r\n}\r\n\r\n.slider::-webkit-slider-thumb {\r\n    -webkit-appearance: none;\r\n    appearance: none;\r\n    width: 10px;\r\n    height: 10px;\r\n    border-radius: 50%; \r\n    background: rgb(255, 100, 5);\r\n    cursor: pointer;\r\n    border: 0 solid transparent;\r\n}\r\n\r\n.slider::-moz-range-thumb {\r\n    width: 10px;\r\n    height: 10px;\r\n    border-radius: 50%;\r\n    background: rgb(255, 100, 5);\r\n    cursor: pointer;\r\n    border: 0 solid transparent;\r\n}\r\n\r\n.time {\r\n    position: absolute;\r\n    display: inline-block;\r\n    bottom: 100%;\r\n    width: 100px;\r\n    margin-left: -40px;\r\n    border-radius: 6px;\r\n    padding: 5px 0;\r\n    background: rgb(0,0,0, .9);\r\n    font-family: Arial, Helvetica, sans-serif;\r\n    font-size: .8em;\r\n    color:white;\r\n    text-align: center;\r\n    \r\n    transition: opacity linear .2s;\r\n}\r\n\r\n.time.show {\r\n    opacity: 1\r\n}\r\n\r\n.time.hide {\r\n    opacity: 0;\r\n}\r\n\r\n.time::after {\r\n    content: \"\";\r\n    position: absolute;\r\n    width: 0;\r\n    height: 0;\r\n    border-top: 10px solid rgb(0,0,0, .9);\r\n    border-left: 5px solid transparent;\r\n    border-right: 5px solid transparent;\r\n    top: 100%;\r\n    left: 50%;\r\n    margin-left: -5px;\r\n    margin-top: -1px;\r\n}\r\n\r\n.playbtncontainer {\r\n    text-align: center;\r\n    margin-top: 15px;\r\n}\r\n\r\n.playbtn {\r\n    cursor: pointer;\r\n    font-size: 2em;\r\n    color: rgb(15, 50, 170);\r\n    opacity: .7;\r\n\r\n    transition: opacity .4s;\r\n}\r\n\r\n.playbtn:hover {\r\n    opacity: 1;\r\n}\r\n\r\n"

/***/ }),

/***/ "./src/app/projects/projectmodal/projectmodal.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/projects/projectmodal/projectmodal.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [ngClass]=\"project ? 'show' : 'hide' \" class=\"background\">\r\n  <div class=\"container\">\r\n    <div class=\"grid\">\r\n      \r\n      <!-- TITLE -->\r\n      <div class=\"title-block\">\r\n        <div class=\"title\">{{project.title}}</div>\r\n      </div>\r\n      \r\n      <!-- VIDEO -->\r\n      <div class=\"video\">\r\n          <div class=\"loading\" [ngClass]=\"loaded ? 'hide' : 'show' \"><i class=\"fas fa-spinner fa-spin\"></i></div>\r\n        <div [ngClass]=\"loaded ? 'show' : 'hide' \">\r\n          <video #videoPlayer src=\"{{project.videosrc}}\"></video>\r\n        </div>\r\n      </div>\r\n      \r\n      <!-- DESCRIPTION -->\r\n      <div class=\"description\">\r\n        <div class=\"highlights\">{{project.highlights}}</div>\r\n        <div class=\"message\">{{project.description}}</div>\r\n        <div class=\"playbtncontainer\">\r\n          <i (click)=\"playPause()\" [ngClass]=\"playing ? 'fas fa-pause-circle' : 'fas fa-play-circle' \" class=\"playbtn\"> </i>\r\n        </div>\r\n        <div class=\"timestamps\">\r\n          <div *ngFor=\"let stamp of project.timestamps\" (click)=\"updateTime(stamp.time)\" [ngClass]=\"currentTime >= stamp.time ? 'activated' : 'deactivated' \">\r\n            <span class=\"stamptime\">[{{stamp.time | timer}}] </span> <span class=\"stamptime text\"> {{stamp.description}} </span>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      \r\n      <!-- CLOSE -->\r\n      <div class=\"footer\">\r\n        <span (click)=\"closeModal()\" class=\"close\">Close</span>\r\n      </div>\r\n      \r\n      <!-- CONTROLS -->\r\n      <div class=\"controls\">\r\n        <div #sliderBar class=\"sliderBar\">\r\n          <input #videoSlider type=\"range\" min=\"0\" [max]=\"duration\" [value]=\"currentTime\" class=\"slider\" \r\n          (input)=\"updateTime($event.target.value)\"\r\n          (mousemove)=\"mousemove($event)\"\r\n          (mouseover)=\"displayTime = true\"\r\n          (mouseleave)=\"displayTime = false\">\r\n          <span #hoverTime class=\"time\" [ngClass]=\"loaded && displayTime ? 'show' : 'hide' \">{{hovertime | timer }} / {{duration | timer }}</span>\r\n        </div>\r\n        <div class=\"currentTime\">{{currentTime | timer }}</div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/projects/projectmodal/projectmodal.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/projects/projectmodal/projectmodal.component.ts ***!
  \*****************************************************************/
/*! exports provided: ProjectmodalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectmodalComponent", function() { return ProjectmodalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_Project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/Project */ "./src/app/models/Project.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProjectmodalComponent = /** @class */ (function () {
    function ProjectmodalComponent() {
        this.close = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.active = false;
        this.playing = false;
        this.loaded = false;
        this.displayTime = false;
        this.updateSlider = true;
        this.currentTime = 0;
        this.hovertime = 0;
        this.devmode = false;
    }
    Object.defineProperty(ProjectmodalComponent.prototype, "videoRef", {
        set: function (videoRef) {
            this.video = videoRef.nativeElement;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProjectmodalComponent.prototype, "sliderRef", {
        set: function (sliderRef) {
            this.slider = sliderRef.nativeElement;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProjectmodalComponent.prototype, "hoverRef", {
        set: function (hoverRef) {
            this.hover = hoverRef.nativeElement;
        },
        enumerable: true,
        configurable: true
    });
    ProjectmodalComponent.prototype.ngOnInit = function () { };
    ProjectmodalComponent.prototype.ngAfterViewInit = function () {
        this.addEventListenerPlay();
        this.addEventListenerPause();
        this.addEventListenerLoadedmetadata();
        this.addEventListenerTimeupdate();
    };
    //close
    ProjectmodalComponent.prototype.closeModal = function () {
        this.close.emit(false);
    };
    //slider change time
    ProjectmodalComponent.prototype.updateTime = function (time) {
        this.video.currentTime = time;
        this.currentTime = time;
    };
    ProjectmodalComponent.prototype.mousemove = function ($event) {
        var mouseXPos = $event.x;
        var eleXPos = this.slider.getBoundingClientRect().left;
        var offset = this.fixMouseOffset(mouseXPos - eleXPos);
        this.hovertime = Math.floor(offset * this.duration / 315);
        this.hover.style.left = offset.toString() + 'px';
    };
    ProjectmodalComponent.prototype.fixMouseOffset = function (offset) {
        if (offset < 0) {
            return 0;
        }
        else if (offset > 315) {
            return 315;
        }
        else {
            return offset;
        }
    };
    //Play or Pause
    ProjectmodalComponent.prototype.playPause = function () {
        if (this.video.paused) {
            this.video.play();
        }
        else {
            this.video.pause();
        }
    };
    // Event Listeners
    ProjectmodalComponent.prototype.addEventListenerPlay = function () {
        var _this = this;
        this.video.addEventListener('play', function () {
            _this.playing = true;
        });
    };
    ProjectmodalComponent.prototype.addEventListenerPause = function () {
        var _this = this;
        this.video.addEventListener('pause', function () {
            _this.playing = false;
        });
    };
    ProjectmodalComponent.prototype.addEventListenerLoadedmetadata = function () {
        var _this = this;
        this.video.addEventListener('loadedmetadata', function () {
            _this.duration = _this.video.duration;
            _this.loaded = true;
        });
    };
    ProjectmodalComponent.prototype.addEventListenerTimeupdate = function () {
        var _this = this;
        this.video.addEventListener('timeupdate', function () {
            if (_this.updateSlider)
                _this.currentTime = _this.video.currentTime;
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('videoPlayer'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], ProjectmodalComponent.prototype, "videoRef", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('videoSlider'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], ProjectmodalComponent.prototype, "sliderRef", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('hoverTime'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], ProjectmodalComponent.prototype, "hoverRef", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _models_Project__WEBPACK_IMPORTED_MODULE_1__["Project"])
    ], ProjectmodalComponent.prototype, "project", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], ProjectmodalComponent.prototype, "close", void 0);
    ProjectmodalComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-projectmodal',
            template: __webpack_require__(/*! ./projectmodal.component.html */ "./src/app/projects/projectmodal/projectmodal.component.html"),
            styles: [__webpack_require__(/*! ./projectmodal.component.css */ "./src/app/projects/projectmodal/projectmodal.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ProjectmodalComponent);
    return ProjectmodalComponent;
}());



/***/ }),

/***/ "./src/app/projects/projects.component.css":
/*!*************************************************!*\
  !*** ./src/app/projects/projects.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".project-container {\r\n    background: transparent;\r\n}\r\n\r\np {\r\n    font-size: 1.1em;\r\n}\r\n\r\n.project-container .project {\r\n    display: inline-block;\r\n    margin: 0 30px 20px 0; /* For stacking */\r\n    cursor: pointer;\r\n}\r\n\r\n.project-container .project:last-child {\r\n    margin: 0 0 20px 0; /* For stacking */\r\n}\r\n\r\n.project-container img {\r\n    width: 250px;\r\n    height: 140px;\r\n}\r\n\r\n@media (max-width: 950px) {\r\n    .project-container > div {\r\n        width: calc(100% - 40px);\r\n        margin: 0 0 20px 0; /* For stacking */\r\n        padding: 5px 20px;\r\n    }\r\n\r\n    .project-container .project {\r\n        margin: 0 0 20px 0; /* For stacking */\r\n    }\r\n\r\n    .project-container img {\r\n        max-width: 500px;\r\n        width: 100%;\r\n        height: 100%;\r\n    }\r\n}"

/***/ }),

/***/ "./src/app/projects/projects.component.html":
/*!**************************************************!*\
  !*** ./src/app/projects/projects.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"page-container project-container\">\r\n    <div>\r\n        <p>Greetings,</p>\r\n        <p>I am a web developer in Seattle with two years of professional experience using the .NET stack and TypeScript. I familiar with Azure, Angular, TSQL, and PHP. Below are front-end highlights of my work.</p>\r\n        <p>Jonathan</p>\r\n    </div>\r\n  <div>\r\n    <h3 class=\"title\">Professional</h3>\r\n    <div class=\"project\" *ngFor=\"let project of professionalProjects\" (click)=\"selectProject(project)\">\r\n      <h4 id =\"{{project.elementId}}\" class=\"sub-title\">{{project.title}}</h4>\r\n      <img src=\"{{project.src}}\" />\r\n    </div>\r\n  </div>\r\n  <div>\r\n    <h3 class=\"title\">Personal</h3>\r\n    <h3 class=\"sub-title\">Coming soon.</h3>\r\n    <br><br>\r\n    <span class=\"project\" *ngFor=\"let project of personalProjects\" (click)=\"selectProject(project)\">\r\n        <h4 id =\"{{project.elementId}}\" class=\"sub-title\">{{project.title}}</h4>\r\n        <img src=\"{{project.src}}\" />\r\n      </span>\r\n  </div>\r\n</div>\r\n<app-projectmodal  \r\n  *ngIf=\"selectedProject\" \r\n  [project]=\"selectedProject\"\r\n  (close)=\"selectedProject = null\">  \r\n</app-projectmodal>\r\n"

/***/ }),

/***/ "./src/app/projects/projects.component.ts":
/*!************************************************!*\
  !*** ./src/app/projects/projects.component.ts ***!
  \************************************************/
/*! exports provided: ProjectsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectsComponent", function() { return ProjectsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _data_PROJECTS__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data/PROJECTS */ "./src/app/data/PROJECTS.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProjectsComponent = /** @class */ (function () {
    function ProjectsComponent() {
        this.professionalProjects = _data_PROJECTS__WEBPACK_IMPORTED_MODULE_1__["PROFESSIONALPROJECTS"];
        this.personalProjects = _data_PROJECTS__WEBPACK_IMPORTED_MODULE_1__["PERSONALPROJECTS"];
        this.selectedProject = null;
    }
    ProjectsComponent.prototype.ngOnInit = function () {
    };
    ProjectsComponent.prototype.selectProject = function (project) {
        this.selectedProject = project;
    };
    ProjectsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-projects',
            template: __webpack_require__(/*! ./projects.component.html */ "./src/app/projects/projects.component.html"),
            styles: [__webpack_require__(/*! ./projects.component.css */ "./src/app/projects/projects.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ProjectsComponent);
    return ProjectsComponent;
}());



/***/ }),

/***/ "./src/app/routing/routing.module.ts":
/*!*******************************************!*\
  !*** ./src/app/routing/routing.module.ts ***!
  \*******************************************/
/*! exports provided: routes, RoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoutingModule", function() { return RoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _data_ROUTES__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data/ROUTES */ "./src/app/data/ROUTES.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = _data_ROUTES__WEBPACK_IMPORTED_MODULE_2__["ROUTES"];
var RoutingModule = /** @class */ (function () {
    function RoutingModule() {
    }
    RoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, { enableTracing: false })
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], RoutingModule);
    return RoutingModule;
}());



/***/ }),

/***/ "./src/app/services/twilio.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/twilio.service.ts ***!
  \********************************************/
/*! exports provided: TwilioService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TwilioService", function() { return TwilioService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
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




var TwilioService = /** @class */ (function () {
    function TwilioService(http) {
        this.http = http;
        this.loggedItem = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]('Loading');
        this.logged$ = this.loggedItem.asObservable();
        this.inProgress = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](false);
        this.inProgress$ = this.inProgress.asObservable();
        this.inprogress = false;
    }
    TwilioService.prototype.setup = function () {
        var _this = this;
        return this.http.get('https://iceberg-camel-2736.twil.io/capability-token')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (data) {
            _this.addEventHandlers(data);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('Failure to load token')));
    };
    TwilioService.prototype.addEventHandlers = function (data) {
        var _this = this;
        Twilio.Device.setup(data.token);
        Twilio.Device.ready(function (device) {
            _this.log('Ready! Set up your mic.');
        });
        Twilio.Device.error(function (error) {
            _this.log('Error: ' + error.message);
        });
        Twilio.Device.connect(function (conn) {
            _this.log('Call established. You should hear ringing.');
            _this.inProgress.next(true);
            _this.inprogress = true;
        });
        Twilio.Device.disconnect(function (conn) {
            _this.log('Call ended.  Ready!');
            _this.inProgress.next(false);
            _this.inprogress = false;
        });
        Twilio.Device.incoming(function (conn) {
            _this.inProgress.next(true);
            _this.inprogress = true;
            _this.log('Incoming connection from ' + conn.parameters.From);
            conn.accept();
        });
    };
    TwilioService.prototype.call = function () {
        if (this.inprogress) {
            Twilio.Device.disconnectAll();
        }
        else {
            var params = {
                To: '4253678895' //Can hide in Twiml App if necessary.
            };
            Twilio.Device.connect(params);
        }
    };
    TwilioService.prototype.log = function (message) {
        console.log(message);
        this.loggedItem.next(message);
    };
    TwilioService.prototype.handleError = function (operation, result) {
        if (operation === void 0) { operation = 'operation'; }
        return function (error) {
            console.error(error);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(result);
        };
    };
    TwilioService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], TwilioService);
    return TwilioService;
}());



/***/ }),

/***/ "./src/app/services/window-ref.service.ts":
/*!************************************************!*\
  !*** ./src/app/services/window-ref.service.ts ***!
  \************************************************/
/*! exports provided: WindowRefService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WindowRefService", function() { return WindowRefService; });
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

var WindowRefService = /** @class */ (function () {
    function WindowRefService() {
    }
    WindowRefService.prototype.nativeWindow = function () {
        return window;
    };
    WindowRefService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], WindowRefService);
    return WindowRefService;
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
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
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
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Developer\Portfolio\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map