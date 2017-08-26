webpackJsonp([6],{

/***/ 100:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CallPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the CallPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var CallPage = (function () {
    function CallPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    CallPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CallPage');
    };
    return CallPage;
}());
CallPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-call',template:/*ion-inline-start:"/home/romeo/Projects/PharmApp/src/pages/call/call.html"*/'<!--\n  Generated template for the CallPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Call\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content class="list-avatar-page" style="background-image:url(\'img/signup.png\'); background-size: cover; background-repeat: no-repeat;">\n  <div style="padding:20px;">\n      <b>Call a Pharmacy by tapping on the green call button</b>\n  </div>\n\n  <ion-list>\n\n    <ion-list-header>Sugested</ion-list-header>\n\n    <ion-item>\n      <ion-avatar item-start>\n        <img src="img/angelini.jpg">\n      </ion-avatar>\n      <h2>Woody Pharmacy</h2>\n      <p>@woodysPharm</p>\n      <ion-note item-end><ion-icon name="call" style="color: green; font-size: 30px;"></ion-icon></ion-note>\n    </ion-item>\n\n    <ion-item>\n      <ion-avatar item-start>\n        <img src="img/dompe.jpg">\n      </ion-avatar>\n      <h2>Lightyear Pharmacy</h2>\n      <p>@LightyearPharm</p>\n      <ion-note item-end><ion-icon name="call" style="color: green; font-size: 30px;"></ion-icon></ion-note>\n    </ion-item>\n\n    <ion-item>\n      <ion-avatar item-start>\n        <img src="img/eclipsePharm.jpg">\n      </ion-avatar>\n      <h2>Jessie\'s Pharmacy</h2>\n      <p>@JessiesPharm</p>\n      <ion-note item-end><ion-icon name="call" style="color: green; font-size: 30px;"></ion-icon></ion-note>\n    </ion-item>\n\n    <ion-item>\n      <ion-avatar item-start>\n        <img src="img/garpham.jpg">\n      </ion-avatar>\n      <h2>Potao Pharmacy</h2>\n      <p>@PotaoPharm</p>\n      <ion-note item-end><ion-icon name="call" style="color: green; font-size: 30px;"></ion-icon></ion-note>\n    </ion-item>\n\n  </ion-list>\n\n  <ion-list>\n\n    <ion-list-header>Other</ion-list-header>\n\n    <ion-item>\n      <ion-avatar item-start>\n        <img src="img/gehealth.jpg">\n      </ion-avatar>\n      <h2>Hamm Pharmacy</h2>\n      <p>@HammPharm</p>\n      <ion-note item-end><ion-icon name="call" style="color: green; font-size: 30px;"></ion-icon></ion-note>\n    </ion-item>\n\n    <ion-item>\n      <ion-avatar item-start>\n        <img src="img/sigma.jpg">\n      </ion-avatar>\n      <h2>Slinky Dog Pharmacy</h2>\n      <p>@SlinkyPharm</p>\n      <ion-note item-end><ion-icon name="call" style="color: green; font-size: 30px;"></ion-icon></ion-note>\n    </ion-item>\n\n    <ion-item>\n      <ion-avatar item-start>\n        <img src="img/saudiPharm.jpg">\n      </ion-avatar>\n      <h2>Rex</h2>\n      <p>@SlinkyPharm</p>\n      <ion-note item-end><ion-icon name="call" style="color: green; font-size: 30px;"></ion-icon></ion-note>\n    </ion-item>\n\n    <ion-item>\n      <ion-avatar item-start>\n        <img src="assets/img/avatar-ts-bullseye.png">\n      </ion-avatar>\n      <h2>Bullseye</h2>\n      <p>@BullseyePharm</p>\n      <ion-note item-end><ion-icon name="call" style="color: green; font-size: 30px;"></ion-icon></ion-note>\n    </ion-item>\n\n    <ion-item>\n      <ion-avatar item-start>\n        <img src="assets/img/avatar-ts-barbie.png">\n      </ion-avatar>\n      <h2>Barbie</h2>\n      <p>@BarbiePharm</p>\n      <ion-note item-end><ion-icon name="call" style="color: green; font-size: 30px;"></ion-icon></ion-note>\n    </ion-item>\n\n    <ion-item>\n      <ion-avatar item-start>\n        <img src="assets/img/avatar-ts-squeeze.png">\n      </ion-avatar>\n      <h2>Squeeze</h2>\n      <p>@SqueezePharm</p>\n      <ion-note item-end><ion-icon name="call" style="color: green; font-size: 30px;"></ion-icon></ion-note>\n    </ion-item>\n\n    <ion-item>\n      <ion-avatar item-start>\n        <img src="assets/img/avatar-ts-sarge.png">\n      </ion-avatar>\n      <h2>Sarge</h2>\n      <p>@SargePharm</p>\n      <ion-note item-end><ion-icon name="call" style="color: green; font-size: 30px;"></ion-icon></ion-note>\n    </ion-item>\n\n    <ion-item>\n      <ion-avatar item-start>\n        <img src="assets/img/avatar-ts-bopeep.png">\n      </ion-avatar>\n      <h2>Bo Peep</h2>\n      <p>@BoPharm</p>\n      <ion-note item-end><ion-icon name="call" style="color: green; font-size: 30px;"></ion-icon></ion-note>\n    </ion-item>\n\n  </ion-list>\n\n</ion-content>\n'/*ion-inline-end:"/home/romeo/Projects/PharmApp/src/pages/call/call.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
], CallPage);

//# sourceMappingURL=call.js.map

/***/ }),

/***/ 101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the ChatPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var ChatPage = (function () {
    function ChatPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ChatPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ChatPage');
    };
    return ChatPage;
}());
ChatPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-chat',template:/*ion-inline-start:"/home/romeo/Projects/PharmApp/src/pages/chat/chat.html"*/'<!--\n  Generated template for the ChatPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>chat</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding style="background-image:url(\'img/signup.png\'); background-size: cover; background-repeat: no-repeat;">\n\n</ion-content>\n'/*ion-inline-end:"/home/romeo/Projects/PharmApp/src/pages/chat/chat.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
], ChatPage);

//# sourceMappingURL=chat.js.map

/***/ }),

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the MapPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var MapPage = (function () {
    function MapPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.start = 'chicago, il';
        this.end = 'chicago, il';
        this.directionsService = new google.maps.DirectionsService;
        this.directionsDisplay = new google.maps.DirectionsRenderer;
    }
    MapPage.prototype.ionViewDidLoad = function () {
        // console.log('ionViewDidLoad MapPage');
        this.initMap();
    };
    MapPage.prototype.initMap = function () {
        this.map = new google.maps.Map(this.mapElement.nativeElement, {
            zoom: 8,
            center: { lat: 5.6037, lng: 0.1870 }
        });
        this.directionsDisplay.setMap(this.map);
    };
    MapPage.prototype.calculateAndDisplayRoute = function () {
        var _this = this;
        this.directionsService.route({
            origin: this.start,
            destination: this.end,
            travelMode: 'DRIVING'
        }, function (response, status) {
            if (status === 'OK') {
                _this.directionsDisplay.setDirections(response);
            }
            else {
                window.alert('Directions request failed due to ' + status);
            }
        });
    };
    return MapPage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])('map'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */]) === "function" && _a || Object)
], MapPage.prototype, "mapElement", void 0);
MapPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-map',template:/*ion-inline-start:"/home/romeo/Projects/PharmApp/src/pages/map/map.html"*/'<!--\n  Generated template for the MapPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>map</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-content>\n  <!-- <div id="floating-panel">\n   <b>Start: </b>\n   <select [(ngModel)]="start" id="start" (change)="calculateAndDisplayRoute()">\n     <option value="chicago, il">Chicago</option>\n     <option value="st louis, mo">St Louis</option>\n     <option value="joplin, mo">Joplin, MO</option>\n     <option value="oklahoma city, ok">Oklahoma City</option>\n     <option value="amarillo, tx">Amarillo</option>\n     <option value="gallup, nm">Gallup, NM</option>\n     <option value="flagstaff, az">Flagstaff, AZ</option>\n     <option value="winona, az">Winona</option>\n     <option value="kingman, az">Kingman</option>\n     <option value="barstow, ca">Barstow</option>\n     <option value="san bernardino, ca">San Bernardino</option>\n     <option value="los angeles, ca">Los Angeles</option>\n   </select><br>\n   <b>End: </b>\n   <select [(ngModel)]="end" id="end" (change)="calculateAndDisplayRoute()">\n     <option value="chicago, il">Chicago</option>\n     <option value="st louis, mo">St Louis</option>\n     <option value="joplin, mo">Joplin, MO</option>\n     <option value="oklahoma city, ok">Oklahoma City</option>\n     <option value="amarillo, tx">Amarillo</option>\n     <option value="gallup, nm">Gallup, NM</option>\n     <option value="flagstaff, az">Flagstaff, AZ</option>\n     <option value="winona, az">Winona</option>\n     <option value="kingman, az">Kingman</option>\n     <option value="barstow, ca">Barstow</option>\n     <option value="san bernardino, ca">San Bernardino</option>\n     <option value="los angeles, ca">Los Angeles</option>\n   </select>\n   </div> -->\n   <div #map id="map"></div>\n   </ion-content>\n</ion-content>\n'/*ion-inline-end:"/home/romeo/Projects/PharmApp/src/pages/map/map.html"*/,
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]) === "function" && _c || Object])
], MapPage);

var _a, _b, _c;
//# sourceMappingURL=map.js.map

/***/ }),

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SigninPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__signup_signup__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tabs_tabs__ = __webpack_require__(154);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SigninPage = (function () {
    function SigninPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.segmentPages = "signIn";
    }
    SigninPage.prototype.totabs = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__tabs_tabs__["a" /* TabsPage */]);
    };
    SigninPage.prototype.toNextPage = function () {
        //push the sign up continue page on to the stack
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__signup_signup__["a" /* SignupPage */]);
    };
    SigninPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SigninPage');
    };
    return SigninPage;
}());
SigninPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-signin',template:/*ion-inline-start:"/home/romeo/Projects/PharmApp/src/pages/signin/signin.html"*/'<!--\n  Generated template for the SigninPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<!-- <ion-header> -->\n  <!-- <ion-row> -->\n    <!-- <ion-col col-4 > -->\n\n    <!-- </ion-col> -->\n    <!-- <ion-col col-4> -->\n      <!-- <h3 style="color: #43d1ea">PharmApp</h3> -->\n      <!-- <img src="img/icon.png"> -->\n    <!-- </ion-col> -->\n  <!-- </ion-row> -->\n  <!-- <ion-row>\n    <ion-col col-12>\n        <ion-searchbar (ionInput)="getItems($event)"></ion-searchbar>\n    </ion-col>\n  </ion-row> -->\n<!-- </ion-header> -->\n\n<ion-content style="background-image: url(\'img/mains.png\');background-size:cover; background-repeat: no-repeat">\n  <img src="img/icon.png">\n  <div padding>\n    <ion-segment [(ngModel)]="segmentPages">\n      <ion-segment-button value="signIn">\n        signIn\n      </ion-segment-button>\n      <ion-segment-button value="signUp">\n        signUp\n      </ion-segment-button>\n    </ion-segment>\n  </div>\n\n  <div [ngSwitch]="segmentPages">\n    <ion-list *ngSwitchCase="\'signIn\'">\n      <!-- <div class="userName"> -->\n  <ion-item class="firstInput">\n    <!-- <ion-label fixed>Username</ion-label> -->\n    <ion-input type="text" placeholder="Username"></ion-input>\n  </ion-item>\n  <!-- </div> -->\n  <ion-item class="secondInput">\n  <!-- <ion-label fixed>Password</ion-label> -->\n  <ion-input type="password" placeholder="Password"></ion-input>\n  </ion-item>\n    <div padding id="signInButton">\n        <button (click)="totabs()" ion-button color="primary" round>Sign In</button>\n  </div>\n  </ion-list>\n\n    <ion-list *ngSwitchCase="\'signUp\'">\n      <ion-item class="firstInput">\n    <!-- <ion-label floating>First Name</ion-label> -->\n    <ion-input type="text" placeholder="First Name"></ion-input>\n  </ion-item>\n\n  <ion-item class="secondInput">\n<!-- <ion-label floating>Last Name</ion-label> -->\n<ion-input type="text" placeholder="Last Name"></ion-input>\n</ion-item>\n\n<ion-item class="secondInput">\n<!-- <ion-label floating>Phone Number</ion-label> -->\n<ion-input type="tel" placeholder="Phone Number"></ion-input>\n</ion-item>\n<div padding id="signUpButton">\n    <button (click)="toNextPage()"ion-button color="primary" round>Next</button>\n</div>\n    </ion-list>\n  </div>\n\n\n</ion-content>\n'/*ion-inline-end:"/home/romeo/Projects/PharmApp/src/pages/signin/signin.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
], SigninPage);

//# sourceMappingURL=signin.js.map

/***/ }),

/***/ 112:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 112;

/***/ }),

/***/ 153:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/call/call.module": [
		272,
		5
	],
	"../pages/chat/chat.module": [
		273,
		4
	],
	"../pages/map/map.module": [
		274,
		3
	],
	"../pages/profile/profile.module": [
		271,
		2
	],
	"../pages/signin/signin.module": [
		275,
		1
	],
	"../pages/signup/signup.module": [
		270,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 153;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 154:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__home_home__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__profile_profile__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__call_call__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__chat_chat__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__map_map__ = __webpack_require__(102);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var TabsPage = (function () {
    function TabsPage() {
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_1__home_home__["a" /* HomePage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_4__chat_chat__["a" /* ChatPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_5__map_map__["a" /* MapPage */];
        this.tab4Root = __WEBPACK_IMPORTED_MODULE_3__call_call__["a" /* CallPage */];
        this.tab5Root = __WEBPACK_IMPORTED_MODULE_2__profile_profile__["a" /* ProfilePage */];
    }
    return TabsPage;
}());
TabsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/home/romeo/Projects/PharmApp/src/pages/tabs/tabs.html"*/'<ion-tabs>\n  <ion-tab [root]="tab1Root" tabTitle="Home" tabIcon="home"></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="Chat" tabIcon="chatbubbles"></ion-tab>\n  <ion-tab [root]="tab3Root" tabTitle="Map" tabIcon="locate"></ion-tab>\n  <ion-tab [root]="tab4Root" tabTitle="Call" tabIcon="call"></ion-tab>\n  <ion-tab [root]="tab5Root" tabTitle="Profile" tabIcon="contact"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"/home/romeo/Projects/PharmApp/src/pages/tabs/tabs.html"*/
    }),
    __metadata("design:paramtypes", [])
], TabsPage);

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 155:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomePage = (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
        this.searchQuery = '';
    }
    return HomePage;
}());
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-home',template:/*ion-inline-start:"/home/romeo/Projects/PharmApp/src/pages/home/home.html"*/'<ion-header>\n  <ion-row>\n    <ion-col col-4 >\n\n    </ion-col>\n    <ion-col col-4>\n      <h3 style="color: #43d1ea">PharmApp</h3>\n    </ion-col>\n  </ion-row>\n  <ion-row>\n    <ion-col col-12>\n        <ion-searchbar (ionInput)="getItems($event)"></ion-searchbar>\n    </ion-col>\n  </ion-row>\n</ion-header>\n\n\n<ion-content class="cards-bg social-cards" style="background-image:url(\'img/signup.png\'); background-size: cover; background-repeat: no-repeat;">\n\n\n\n  <ion-row>\n    <div class="">\n      <p style="margin-left: 30px;">Suggested Topics</p>\n    </div>\n    <ion-slides pager>\n\n        <ion-slide>\n          <ion-row>\n            <ion-col col-4 padding>\n              <ion-avatar item-start >\n                <img src="img/pregnanc.jpg" class="sugestedimg">\n              </ion-avatar>\n              <p class="sugestedfont">Pregnancy</p>\n            </ion-col>\n            <ion-col col-4 padding>\n              <ion-avatar item-start >\n                <img src="img/garlic.jpg" class="sugestedimg">\n              </ion-avatar>\n              <p class="sugestedfont">Garlic</p>\n            </ion-col>\n            <ion-col col-4 padding>\n              <ion-avatar item-start >\n                <img src="img/ginger.jpg" class="sugestedimg">\n              </ion-avatar>\n              <p class="sugestedfont">Ginger</p>\n            </ion-col>\n          </ion-row>\n        </ion-slide>\n\n        <ion-slide >\n          <ion-row>\n            <ion-col col-4 padding>\n              <ion-avatar item-start >\n                <img src="img/fruits.jpg" class="sugestedimg">\n              </ion-avatar>\n              <p class="sugestedfont">Fruits</p>\n            </ion-col>\n            <ion-col col-4 padding>\n              <ion-avatar item-start >\n                <img src="img/vegetables.jpg" class="sugestedimg">\n              </ion-avatar>\n              <p class="sugestedfont">Vegetables</p>\n            </ion-col>\n            <ion-col col-4 padding>\n              <ion-avatar item-start >\n                <img src="img/exercise.jpg" class="sugestedimg">\n              </ion-avatar>\n              <p class="sugestedfont">Exercise</p>\n            </ion-col>\n          </ion-row>\n        </ion-slide>\n\n        <ion-slide >\n          <ion-row>\n            <ion-col col-4 padding>\n              <ion-avatar item-start >\n                <img src="img/gensen.jpg" class="sugestedimg">\n              </ion-avatar>\n              <p class="sugestedfont">Pregnancy</p>\n            </ion-col>\n            <ion-col col-4 padding>\n              <ion-avatar item-start >\n                <img src="img/gensen.jpg" class="sugestedimg">\n              </ion-avatar>\n              <p class="sugestedfont">Gensen</p>\n            </ion-col>\n            <ion-col col-4 padding>\n              <ion-avatar item-start >\n                <img src="img/smoking.jpg" class="sugestedimg">\n              </ion-avatar>\n              <p class="sugestedfont">Ginger</p>\n            </ion-col>\n          </ion-row>\n        </ion-slide>\n\n      </ion-slides>\n  </ion-row>\n\n\n\n  <ion-card>\n\n  <ion-item>\n    <ion-avatar item-start>\n      <img src="img/gensen.jpg">\n    </ion-avatar>\n    <h2>McFly Pharmacy</h2>\n    <p>November 5, 1955</p>\n  </ion-item>\n\n  <img src="img/gensen.jpg">\n\n  <ion-card-content>\n    <h5>Ginseng, Fish, Berries, or Caffeine?</h5>\n    <p>Listen to the buzz about foods and dietary supplements, and you\'ll believe they can do everything from sharpen focus to enhance memory, attention span, and brain function.....</p>\n  </ion-card-content>\n\n  <ion-row>\n    <ion-col>\n      <button ion-button icon-left clear small>\n        <ion-icon name="thumbs-up"></ion-icon>\n        <div>12 Likes</div>\n      </button>\n    </ion-col>\n    <ion-col>\n      <button ion-button icon-left clear small>\n        <ion-icon name="text"></ion-icon>\n        <div>4 Comments</div>\n      </button>\n    </ion-col>\n    <ion-col center text-center>\n      <ion-note>\n        11h ago\n      </ion-note>\n    </ion-col>\n  </ion-row>\n\n</ion-card>\n\n\n\n<ion-card>\n\n<ion-item>\n  <ion-avatar item-start>\n    <img src="img/smoking.jpg">\n  </ion-avatar>\n  <h2>McFly Pharmacy</h2>\n  <p>November 5, 1955</p>\n</ion-item>\n\n<img src="img/smoking.jpg">\n\n<ion-card-content>\n  <h5>Quitting Smoking: Tips for the First Hard Days</h5>\n  <b>Sip, Eat</b>\n  <p>Sipping cold water through a straw can help replace the act of sucking on a cigarette. It also releases dopamine, a brain chemical that can help ease bad moods.\nEating small meals can also help you get past the urge to smoke. Choose lean, healthy foods to avoid weight gain.</p>\n</ion-card-content>\n\n<ion-row>\n  <ion-col>\n    <button ion-button icon-left clear small>\n      <ion-icon name="thumbs-up"></ion-icon>\n      <div>12 Likes</div>\n    </button>\n  </ion-col>\n  <ion-col>\n    <button ion-button icon-left clear small>\n      <ion-icon name="text"></ion-icon>\n      <div>4 Comments</div>\n    </button>\n  </ion-col>\n  <ion-col center text-center>\n    <ion-note>\n      11h ago\n    </ion-note>\n  </ion-col>\n</ion-row>\n\n</ion-card>\n\n\n\n<ion-card>\n\n<ion-item>\n  <ion-avatar item-start>\n    <img src="img/oat.jpg">\n  </ion-avatar>\n  <h2>McFly Pharmacy</h2>\n  <p>November 5, 1955</p>\n</ion-item>\n\n<img src="img/oat.jpg">\n\n<ion-card-content>\n  <h5>14 Best and Worst Foods for Your Liver</h5>\n  <b>Oatmeal</b>\n  <p>Food with lots of fiber can help your liver work at its best. Want one that\'s a great way to start your day? Try oatmeal. Research shows it can help you shed some extra pounds and belly fat, which is a good way to keep away liver disease.... </p>\n</ion-card-content>\n\n<ion-row>\n  <ion-col>\n    <button ion-button icon-left clear small>\n      <ion-icon name="thumbs-up"></ion-icon>\n      <div>12 Likes</div>\n    </button>\n  </ion-col>\n  <ion-col>\n    <button ion-button icon-left clear small>\n      <ion-icon name="text"></ion-icon>\n      <div>4 Comments</div>\n    </button>\n  </ion-col>\n  <ion-col center text-center>\n    <ion-note>\n      11h ago\n    </ion-note>\n  </ion-col>\n</ion-row>\n\n</ion-card>\n\n  </ion-content>\n\n  <style>\n    .social-cards ion-col {\n      padding: 0;\n    }\n  </style>\n'/*ion-inline-end:"/home/romeo/Projects/PharmApp/src/pages/home/home.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(218);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 218:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(259);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_about_about__ = __webpack_require__(268);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_contact_contact__ = __webpack_require__(269);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_signin_signin__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_signup_signup__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_profile_profile__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_call_call__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_chat_chat__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_map_map__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_native_status_bar__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ionic_native_splash_screen__ = __webpack_require__(198);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_4__pages_about_about__["a" /* AboutPage */],
            __WEBPACK_IMPORTED_MODULE_5__pages_contact_contact__["a" /* ContactPage */],
            __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__["a" /* TabsPage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_signin_signin__["a" /* SigninPage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_signup_signup__["a" /* SignupPage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_profile_profile__["a" /* ProfilePage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_call_call__["a" /* CallPage */],
            __WEBPACK_IMPORTED_MODULE_12__pages_chat_chat__["a" /* ChatPage */],
            __WEBPACK_IMPORTED_MODULE_13__pages_map_map__["a" /* MapPage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                links: [
                    { loadChildren: '../pages/signup/signup.module#SignupPageModule', name: 'SignupPage', segment: 'signup', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/profile/profile.module#ProfilePageModule', name: 'ProfilePage', segment: 'profile', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/call/call.module#CallPageModule', name: 'CallPage', segment: 'call', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/chat/chat.module#ChatPageModule', name: 'ChatPage', segment: 'chat', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/map/map.module#MapPageModule', name: 'MapPage', segment: 'map', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/signin/signin.module#SigninPageModule', name: 'SigninPage', segment: 'signin', priority: 'low', defaultHistory: [] }
                ]
            })
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_4__pages_about_about__["a" /* AboutPage */],
            __WEBPACK_IMPORTED_MODULE_5__pages_contact_contact__["a" /* ContactPage */],
            __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__["a" /* TabsPage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_signin_signin__["a" /* SigninPage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_signup_signup__["a" /* SignupPage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_profile_profile__["a" /* ProfilePage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_call_call__["a" /* CallPage */],
            __WEBPACK_IMPORTED_MODULE_12__pages_chat_chat__["a" /* ChatPage */],
            __WEBPACK_IMPORTED_MODULE_13__pages_map_map__["a" /* MapPage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_14__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_15__ionic_native_splash_screen__["a" /* SplashScreen */],
            { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] }
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 259:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_signin_signin__ = __webpack_require__(103);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




// import { TabsPage } from '../pages/tabs/tabs';

// import { ProfilePage } from '../pages/profile/profile';
// import { CallPage } from '../pages/call/call';
// import { ChatPage } from '../pages/chat/chat';
// import { MapPage } from '../pages/map/map';
var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_signin_signin__["a" /* SigninPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    return MyApp;
}());
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/home/romeo/Projects/PharmApp/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/home/romeo/Projects/PharmApp/src/app/app.html"*/
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]) === "function" && _c || Object])
], MyApp);

var _a, _b, _c;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 268:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AboutPage = (function () {
    function AboutPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    return AboutPage;
}());
AboutPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-about',template:/*ion-inline-start:"/home/romeo/Projects/PharmApp/src/pages/about/about.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      About\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/home/romeo/Projects/PharmApp/src/pages/about/about.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
], AboutPage);

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 269:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ContactPage = (function () {
    function ContactPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    return ContactPage;
}());
ContactPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-contact',template:/*ion-inline-start:"/home/romeo/Projects/PharmApp/src/pages/contact/contact.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Contact\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <ion-list-header>Follow us on Twitter</ion-list-header>\n    <ion-item>\n      <ion-icon name="ionic" item-left></ion-icon>\n      @ionicframework\n    </ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/home/romeo/Projects/PharmApp/src/pages/contact/contact.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
], ContactPage);

//# sourceMappingURL=contact.js.map

/***/ }),

/***/ 98:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the SignupPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var SignupPage = (function () {
    function SignupPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    SignupPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SignupPage');
    };
    return SignupPage;
}());
SignupPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-signup',template:/*ion-inline-start:"/home/romeo/Projects/PharmApp/src/pages/signup/signup.html"*/'<!--\n  Generated template for the SignupPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>signup</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding style="background-image:url(\'img/signup.png\'); background-size: cover; background-repeat: no-repeat;">\n  <ion-grid>\n        <ion-item>\n          <ion-row radio-group>\n      <ion-col col-6>\n        <ion-thumbnail item-start>\n          <img src="img/008-boy-1.png">\n        </ion-thumbnail>\n        <ion-item>\n          <!-- <ion-label>Male</ion-label> -->\n          <ion-radio name="gender" value="male"></ion-radio>\n        </ion-item>\n    </ion-col>\n    <!-- <ion-label>Male</ion-label>\n    <ion-radio checked="true" value="male"></ion-radio> -->\n\n\n        <ion-col col-6>\n          <ion-thumbnail item-end>\n          <img src="img/002-girl-1.png" >\n          </ion-thumbnail>\n          <ion-item>\n            <!-- <ion-label>Female</ion-label> -->\n            <ion-radio name="gender" value="female"></ion-radio>\n          </ion-item>\n        </ion-col>\n        <!-- <ion-label>Female</ion-label>\n    <ion-radio value="female"></ion-radio> -->\n\n        </ion-row>\n      </ion-item>\n    </ion-grid>\n  <ion-list>\n\n  <ion-item class="firstInput">\n    <!-- <ion-label floating>Email</ion-label> -->\n    <ion-input type="email" placeholder="Email"></ion-input>\n  </ion-item>\n\n  <ion-item class="secondInput">\n    <!-- <ion-label floating>Password</ion-label> -->\n    <ion-input type="password" placeholder="Password"></ion-input>\n  </ion-item>\n\n  <ion-item class="secondInput">\n    <!-- <ion-label floating>Confirm Password</ion-label> -->\n    <ion-input type="password" placeholder="Confirm Password"></ion-input>\n  </ion-item>\n  <div padding id="signUpButton">\n      <button ion-button color="primary" round>Sign Up</button>\n  </div>\n</ion-list>\n\n</ion-content>\n'/*ion-inline-end:"/home/romeo/Projects/PharmApp/src/pages/signup/signup.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
], SignupPage);

//# sourceMappingURL=signup.js.map

/***/ }),

/***/ 99:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__signin_signin__ = __webpack_require__(103);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the ProfilePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var ProfilePage = (function () {
    function ProfilePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ProfilePage.prototype.tosignin = function () {
        // this.navCtrl.pop(TabsPage)
        // this.navCtrl.push(SigninPage);
        // this.navCtrl.setRoot(SigninPage);
        this.navCtrl.parent.parent.setRoot(__WEBPACK_IMPORTED_MODULE_2__signin_signin__["a" /* SigninPage */]);
    };
    ProfilePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ProfilePage');
    };
    return ProfilePage;
}());
ProfilePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-profile',template:/*ion-inline-start:"/home/romeo/Projects/PharmApp/src/pages/profile/profile.html"*/'<!--\n  Generated template for the ProfilePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Profile\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content style="background-image:url(\'img/signup.png\'); background-size: cover; background-repeat: no-repeat;">\n  <ion-list>\n    <ion-list-header>\n      <ion-avatar item-start (click)="updateProfileImage()">\n        <img src="img/appbg.jpg">\n      </ion-avatar>\n      <p class="username">Selassie Boye</p>\n      <p>Owner</p>\n    </ion-list-header>\n  </ion-list>\n  <ion-list no-border>\n    <ion-list-header>\n      General\n    </ion-list-header>\n    <ion-item>\n      <ion-toggle ></ion-toggle>\n      <ion-label class="label"> Enable notifications </ion-label>\n      <ion-icon name=\'notifications\' item-start  style="color: #4d9fcf;"></ion-icon>\n    </ion-item>\n  </ion-list>\n  <ion-list>\n    <ion-list-header>\n      Settings\n    </ion-list-header>\n\n    <ion-item>\n      <ion-icon name=\'help\' item-start  style="color: #ffc87b;"></ion-icon>\n      <ion-label>Help</ion-label>\n      <ion-select >\n        <ion-option> </ion-option>\n      </ion-select>\n    </ion-item>\n    <ion-item>\n      <ion-icon name=\'build\' item-start  style="color: #42cac6;"></ion-icon>\n      <ion-label>Report a Problem</ion-label>\n      <ion-select >\n        <ion-option> </ion-option>\n      </ion-select>\n    </ion-item>\n    <ion-item>\n      <ion-icon name=\'create\' item-start  style="color: #6cabf6;"></ion-icon>\n      <ion-label>Terms and Policy</ion-label>\n      <ion-select >\n        <ion-option> </ion-option>\n      </ion-select>\n    </ion-item>\n  </ion-list>\n  <ion-list>\n    <ion-list-header>\n      Other\n    </ion-list-header>\n    <ion-item>\n      <ion-icon name=\'power\' item-start style="color: red;"></ion-icon>\n      <button (click)="tosignin()" ion-button item-end>\n      Logout\n      </button>\n    </ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/home/romeo/Projects/PharmApp/src/pages/profile/profile.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
], ProfilePage);

//# sourceMappingURL=profile.js.map

/***/ })

},[199]);
//# sourceMappingURL=main.js.map