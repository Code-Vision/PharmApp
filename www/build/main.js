webpackJsonp([10],{

/***/ 100:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CommentsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
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
 * Generated class for the CommentsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var CommentsPage = (function () {
    function CommentsPage(navCtrl, navParams, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
    }
    CommentsPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    CommentsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CommentsPage');
    };
    return CommentsPage;
}());
CommentsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-comments',template:/*ion-inline-start:"/home/romeo/Projects/PharmApp/src/pages/comments/comments.html"*/'<!--\n  Generated template for the CommentsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<!-- <ion-header>\n  <ion-toolbar>\n     <ion-title>\n       Comments\n     </ion-title>\n     <ion-buttons start>\n       <button ion-button (click)="dismiss()">\n         <span ion-text color="primary" showWhen="ios">Cancel</span>\n         <ion-icon name="md-close" showWhen="android, windows"></ion-icon>\n       </button>\n     </ion-buttons>\n   </ion-toolbar>\n</ion-header> -->\n\n\n<ion-content>\n  <ion-row>\n    <ion-col col-6>\n  <button ion-button icon-left clear small>\n    <ion-icon name="thumbs-up"></ion-icon>\n    <div>12 Likes</div>\n  </button>\n  </ion-col>\n\n  <ion-col col-6>\n<button ion-button icon-left clear small style="float:right">\n  <ion-icon name="thumbs-up"></ion-icon>\n</button>\n</ion-col>\n  </ion-row>\n\n  <ion-list>\n    <ion-item>\n  <ion-avatar item-start>\n    <img src="img/gehealth.JPG">\n  </ion-avatar>\n  <h2>Finn</h2>\n  <!-- <h3>Don\'t Know What To Do!</h3> -->\n  <p>I\'ve had a pretty messed up day. If we just...</p>\n  <ion-note style="float:right">\n    23 mins ago\n  </ion-note>\n</ion-item>\n\n<ion-item>\n      <ion-avatar item-start>\n        <img src="img/dompe.jpg">\n      </ion-avatar>\n      <h2>Han</h2>\n      <!-- <h3>Look, kid...</h3> -->\n      <p>I\'ve got enough on my plate as it is, and I...</p>\n      <ion-note style="float:right">\n        11h ago\n      </ion-note>\n    </ion-item>\n\n    <ion-item>\n      <ion-avatar item-start>\n        <img src="img/gensen.jpg">\n      </ion-avatar>\n      <h2>Rey</h2>\n      <!-- <h3>I can handle myself</h3> -->\n      <p>You will remove these restraints and leave...</p>\n      <ion-note style="float:right">\n        11h ago\n      </ion-note>\n    </ion-item>\n\n    <ion-item>\n      <ion-avatar item-start>\n        <img src="img/eclipsePharm.jpg">\n      </ion-avatar>\n      <h2>Luke</h2>\n      <!-- <h3>Your thoughts betray you</h3> -->\n      <p>I feel the good in you, the conflict...</p>\n      <ion-note style="float:right">\n        11h ago\n      </ion-note>\n    </ion-item>\n\n  </ion-list>\n\n\n  <ion-footer>\n  	<ion-toolbar>\n      <ion-buttons left>\n      <button icon-only item-left style="background:transparent; color:#488aff">\n      <ion-icon name="text"></ion-icon>\n      </button>\n      </ion-buttons>\n      <ion-input type="text" placeholder="Write comment..."></ion-input>\n  		<ion-buttons right>\n  			<button icon-only item-right style="background:transparent; color:#488aff">\n            <ion-icon name="send"></ion-icon>\n          </button>\n  		</ion-buttons>\n  	</ion-toolbar>\n  </ion-footer>\n</ion-content>\n'/*ion-inline-end:"/home/romeo/Projects/PharmApp/src/pages/comments/comments.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ViewController */]])
], CommentsPage);

//# sourceMappingURL=comments.js.map

/***/ }),

/***/ 101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReadMorePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__comments_comments__ = __webpack_require__(100);
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
 * Generated class for the ReadMorePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var ReadMorePage = (function () {
    function ReadMorePage(navCtrl, navParams, modalCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
    }
    ReadMorePage.prototype.tocommentmodal = function () {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_2__comments_comments__["a" /* CommentsPage */]);
        modal.present();
    };
    ReadMorePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ReadMorePage');
    };
    return ReadMorePage;
}());
ReadMorePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-read-more',template:/*ion-inline-start:"/home/romeo/Projects/PharmApp/src/pages/read-more/read-more.html"*/'<!--\n  Generated template for the ReadMorePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n<!--\n  <ion-navbar>\n    <ion-title>ReadMore</ion-title>\n  </ion-navbar> -->\n\n</ion-header>\n\n\n<ion-content>\n  <!-- <div id="titleImage"> -->\n  <img id="titleImage" src="img/gensen.jpg">\n  <!-- </div> -->\n\n  <ion-title center text-center>Ginseng, Fish, Berries, or Caffeine?</ion-title>\n\n  <p style="font-family:Helvetica; font-size: 1 rem; padding-top:0px; padding-right:15px; padding-left:15px" padding>Listen to the buzz about foods and dietary supplements, and you\'ll believe they can do everything from sharpen focus to enhance memory, attention span, and brain function.....\n  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\n  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\n  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.\n  Excepteur sint occaecat cupidatat non proident,\n  sunt in culpa qui officia deserunt mollit anim id est laborum.</p>\n\n  <ion-footer style="border-top:none">\n  <ion-row>\n    <ion-col col-6>\n      <button ion-button icon-left clear small>\n        <ion-icon name="thumbs-up"></ion-icon>\n        <div>12 Likes</div>\n      </button>\n    </ion-col>\n    <ion-col col-6>\n      <!-- <ion-note> -->\n      <button ion-button icon-left clear small style="float:right">\n        <ion-icon name="text"></ion-icon>\n        <div>4 Comments</div>\n      </button>\n    </ion-col>\n  </ion-row>\n  <ion-row>\n    <ion-col>\n      <button ion-button icon-left clear medium>\n        <ion-icon name="thumbs-up"></ion-icon>\n        <div>Like</div>\n      </button>\n\n    </ion-col>\n    <ion-col>\n      <button ion-button icon-left clear medium (click)="tocommentmodal()">\n        <ion-icon name="text"></ion-icon>\n        <div>Comment</div>\n      </button>\n    </ion-col>\n\n    <ion-col>\n      <button ion-button icon-left clear medium>\n        <ion-icon name="share-alt"></ion-icon>\n        <div>Share</div>\n      </button>\n    </ion-col>\n  </ion-row>\n  </ion-footer>\n\n\n\n</ion-content>\n'/*ion-inline-end:"/home/romeo/Projects/PharmApp/src/pages/read-more/read-more.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */]])
], ReadMorePage);

//# sourceMappingURL=read-more.js.map

/***/ }),

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__signin_signin__ = __webpack_require__(49);
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
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-profile',template:/*ion-inline-start:"/home/romeo/Projects/PharmApp/src/pages/profile/profile.html"*/'<!--\n  Generated template for the ProfilePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-row>\n    <ion-col col-5 >\n\n    </ion-col>\n    <ion-col col-4>\n      <h3 style="color: #43d1ea;">Profile</h3>\n    </ion-col>\n  </ion-row>\n</ion-header>\n\n\n\n<ion-content style="background-image:url(\'img/signup.png\'); background-size: cover; background-repeat: no-repeat;">\n  <ion-list style="background: transparent !important;">\n    <ion-row>\n      <ion-col col-12 style="height:200px;  background-repeat: no-repeat; ">\n        <div style="text-align: center; ">\n            <img src="img/user.png" class="slide-image" height="100" width="100" style="margin-top: 55px; border-radius: 159px 159px 159px 159px; border: 4px solid #fff;"/>\n            <p>Change Photo</p>\n        </div>\n      </ion-col>\n    </ion-row>\n  </ion-list>\n\n\n  <ion-list no-border>\n    <ion-list-header>\n      Details\n    </ion-list-header>\n\n    <ion-item>\n      <ion-icon name=\'person\' item-start style="color: #caddff;"></ion-icon>\n      <ion-input name="pin" type="text"  placeholder="Other Name"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-icon name=\'people\' item-start style="color: #caddff;"></ion-icon>\n      <ion-input name="pin" type="text"  placeholder="Last Name"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-icon name=\'phone-portrait\' item-start style="color: #caddff;"></ion-icon>\n      <ion-input name="pin" type="text"  placeholder="Phone Number"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-icon name=\'mail\' item-start style="color: #caddff;"></ion-icon>\n      <ion-input name="pin" type="text"  placeholder="Email"></ion-input>\n    </ion-item>\n\n  </ion-list>\n\n\n  <ion-list>\n    <ion-list-header>\n      Settings\n    </ion-list-header>\n\n    <ion-item>\n      <ion-toggle ></ion-toggle>\n      <ion-label class="label"> Enable notifications </ion-label>\n      <ion-icon name=\'notifications\' item-start  style="color: #caddff;"></ion-icon>\n    </ion-item>\n\n    <ion-item>\n      <ion-icon name=\'lock\' item-start  style="color: #caddff;"></ion-icon>\n      <ion-label>Change Password</ion-label>\n    </ion-item>\n\n    <ion-item>\n      <ion-icon name=\'help\' item-start  style="color: #caddff;"></ion-icon>\n      <ion-label>Help</ion-label>\n    </ion-item>\n\n    <ion-item>\n      <ion-icon name=\'build\' item-start  style="color: #caddff;"></ion-icon>\n      <ion-label>Report a Problem</ion-label>\n    </ion-item>\n\n    <ion-item>\n      <ion-icon name=\'create\' item-start  style="color: #caddff;"></ion-icon>\n      <ion-label>Terms and Policy</ion-label>\n    </ion-item>\n\n  </ion-list>\n\n\n  <ion-list>\n    <ion-list-header>\n      Other\n    </ion-list-header>\n    <ion-item>\n      <ion-icon name=\'power\' item-start style="color: red;"></ion-icon>\n      <button (click)="tosignin()" ion-button item-end>\n      Logout\n      </button>\n    </ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/home/romeo/Projects/PharmApp/src/pages/profile/profile.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
], ProfilePage);

//# sourceMappingURL=profile.js.map

/***/ }),

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CallPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
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
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-call',template:/*ion-inline-start:"/home/romeo/Projects/PharmApp/src/pages/call/call.html"*/'<!--\n  Generated template for the CallPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-row>\n    <ion-col col-5 >\n\n    </ion-col>\n    <ion-col col-4 style="">\n      <h3 style="color: #43d1ea; margin-top: 20px !important; margin-bottom: 8px !important;">Call</h3>\n    </ion-col>\n  </ion-row>\n</ion-header>\n\n\n<ion-content class="list-avatar-page" style="background-image:url(\'img/signup.png\'); background-size: cover; background-repeat: no-repeat;">\n  <div style="padding:20px;">\n      <b>Call a Pharmacy by tapping on the green call button</b>\n  </div>\n\n  <ion-list>\n\n    <ion-list-header>Sugested</ion-list-header>\n\n    <ion-item>\n      <ion-avatar item-start>\n        <img src="img/angelini.jpg">\n      </ion-avatar>\n      <h2>Woody Pharmacy</h2>\n      <p>@woodysPharm</p>\n      <ion-note item-end><ion-icon name="call" style="color: green; font-size: 30px;"></ion-icon></ion-note>\n    </ion-item>\n\n    <ion-item>\n      <ion-avatar item-start>\n        <img src="img/dompe.jpg">\n      </ion-avatar>\n      <h2>Lightyear Pharmacy</h2>\n      <p>@LightyearPharm</p>\n      <ion-note item-end><ion-icon name="call" style="color: green; font-size: 30px;"></ion-icon></ion-note>\n    </ion-item>\n\n    <ion-item>\n      <ion-avatar item-start>\n        <img src="img/eclipsePharm.jpg">\n      </ion-avatar>\n      <h2>Jessie\'s Pharmacy</h2>\n      <p>@JessiesPharm</p>\n      <ion-note item-end><ion-icon name="call" style="color: green; font-size: 30px;"></ion-icon></ion-note>\n    </ion-item>\n\n    <ion-item>\n      <ion-avatar item-start>\n        <img src="img/garpham.jpg">\n      </ion-avatar>\n      <h2>Potao Pharmacy</h2>\n      <p>@PotaoPharm</p>\n      <ion-note item-end><ion-icon name="call" style="color: green; font-size: 30px;"></ion-icon></ion-note>\n    </ion-item>\n\n  </ion-list>\n\n  <ion-list>\n\n    <ion-list-header>Other</ion-list-header>\n\n    <ion-item>\n      <ion-avatar item-start>\n        <img src="img/gehealth.jpg">\n      </ion-avatar>\n      <h2>Hamm Pharmacy</h2>\n      <p>@HammPharm</p>\n      <ion-note item-end><ion-icon name="call" style="color: green; font-size: 30px;"></ion-icon></ion-note>\n    </ion-item>\n\n    <ion-item>\n      <ion-avatar item-start>\n        <img src="img/sigma.jpg">\n      </ion-avatar>\n      <h2>Slinky Dog Pharmacy</h2>\n      <p>@SlinkyPharm</p>\n      <ion-note item-end><ion-icon name="call" style="color: green; font-size: 30px;"></ion-icon></ion-note>\n    </ion-item>\n\n    <ion-item>\n      <ion-avatar item-start>\n        <img src="img/saudiPharm.jpg">\n      </ion-avatar>\n      <h2>Rex</h2>\n      <p>@SlinkyPharm</p>\n      <ion-note item-end><ion-icon name="call" style="color: green; font-size: 30px;"></ion-icon></ion-note>\n    </ion-item>\n\n    <ion-item>\n      <ion-avatar item-start>\n        <img src="assets/img/avatar-ts-bullseye.png">\n      </ion-avatar>\n      <h2>Bullseye</h2>\n      <p>@BullseyePharm</p>\n      <ion-note item-end><ion-icon name="call" style="color: green; font-size: 30px;"></ion-icon></ion-note>\n    </ion-item>\n\n    <ion-item>\n      <ion-avatar item-start>\n        <img src="assets/img/avatar-ts-barbie.png">\n      </ion-avatar>\n      <h2>Barbie</h2>\n      <p>@BarbiePharm</p>\n      <ion-note item-end><ion-icon name="call" style="color: green; font-size: 30px;"></ion-icon></ion-note>\n    </ion-item>\n\n    <ion-item>\n      <ion-avatar item-start>\n        <img src="assets/img/avatar-ts-squeeze.png">\n      </ion-avatar>\n      <h2>Squeeze</h2>\n      <p>@SqueezePharm</p>\n      <ion-note item-end><ion-icon name="call" style="color: green; font-size: 30px;"></ion-icon></ion-note>\n    </ion-item>\n\n    <ion-item>\n      <ion-avatar item-start>\n        <img src="assets/img/avatar-ts-sarge.png">\n      </ion-avatar>\n      <h2>Sarge</h2>\n      <p>@SargePharm</p>\n      <ion-note item-end><ion-icon name="call" style="color: green; font-size: 30px;"></ion-icon></ion-note>\n    </ion-item>\n\n    <ion-item>\n      <ion-avatar item-start>\n        <img src="assets/img/avatar-ts-bopeep.png">\n      </ion-avatar>\n      <h2>Bo Peep</h2>\n      <p>@BoPharm</p>\n      <ion-note item-end><ion-icon name="call" style="color: green; font-size: 30px;"></ion-icon></ion-note>\n    </ion-item>\n\n  </ion-list>\n\n</ion-content>\n'/*ion-inline-end:"/home/romeo/Projects/PharmApp/src/pages/call/call.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
], CallPage);

//# sourceMappingURL=call.js.map

/***/ }),

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
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
        this.toUser = {
            toUserId: '210000198410281948',
            toUserName: 'Hancock'
        };
    }
    ChatPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ChatPage');
    };
    return ChatPage;
}());
ChatPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-chat',template:/*ion-inline-start:"/home/romeo/Projects/PharmApp/src/pages/chat/chat.html"*/'<!--\n  Generated template for the ChatPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n<ion-header>\n  <ion-row>\n    <ion-col col-5 >\n\n    </ion-col>\n    <ion-col col-4>\n      <h3 style="color: #43d1ea;">Chat</h3>\n    </ion-col>\n  </ion-row>\n</ion-header>\n\n\n\n<ion-content style="background-image: url(\'img/mains.png\');background-size:cover; background-repeat: no-repeat">\n  <ion-list>\n\n    <ion-item navPush="MessagePage"\n              [navParams]="toUser">\n      <ion-avatar item-left>\n        <img src="./assets/to-user.jpg">\n      </ion-avatar>\n      <h2>Hancock</h2>\n      <p>If at first you don’t succeed, call it version 1.0</p>\n    </ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/home/romeo/Projects/PharmApp/src/pages/chat/chat.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
], ChatPage);

//# sourceMappingURL=chat.js.map

/***/ }),

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MapPage = (function () {
    function MapPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.start = 'Accra';
        this.end = 'Accra';
        this.directionsService = new google.maps.DirectionsService;
        this.directionsDisplay = new google.maps.DirectionsRenderer;
    }
    MapPage.prototype.ionViewDidLoad = function () {
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
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */])
], MapPage.prototype, "mapElement", void 0);
MapPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-map',template:/*ion-inline-start:"/home/romeo/Projects/PharmApp/src/pages/map/map.html"*/'<!--\n  Generated template for the MapPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-row>\n    <ion-col col-5 >\n\n    </ion-col>\n    <ion-col col-4>\n      <h3 style="color: #43d1ea;">Map</h3>\n    </ion-col>\n  </ion-row>\n</ion-header>\n\n\n\n<ion-content style="background-image:url(\'img/signup.png\'); background-size: cover; background-repeat: no-repeat;">\n\n  <!-- <div id="floating-panel">\n   <b>Start: </b>\n   <select [(ngModel)]="start" id="start" (change)="calculateAndDisplayRoute()">\n     <option value="Accra">Accra</option>\n     <option value="Tema">Tema</option>\n     <option value="joplin, mo">Joplin, MO</option>\n     <option value="oklahoma city, ok">Oklahoma City</option>\n     <option value="amarillo, tx">Amarillo</option>\n     <option value="gallup, nm">Gallup, NM</option>\n     <option value="flagstaff, az">Flagstaff, AZ</option>\n     <option value="winona, az">Winona</option>\n     <option value="kingman, az">Kingman</option>\n     <option value="barstow, ca">Barstow</option>\n     <option value="san bernardino, ca">San Bernardino</option>\n     <option value="los angeles, ca">Los Angeles</option>\n   </select><br>\n   <b>End: </b>\n   <select [(ngModel)]="end" id="end" (change)="calculateAndDisplayRoute()">\n     <option value="Accra">Accra</option>\n     <option value="Tema">Tema</option>\n     <option value="joplin, mo">Joplin, MO</option>\n     <option value="oklahoma city, ok">Oklahoma City</option>\n     <option value="amarillo, tx">Amarillo</option>\n     <option value="gallup, nm">Gallup, NM</option>\n     <option value="flagstaff, az">Flagstaff, AZ</option>\n     <option value="winona, az">Winona</option>\n     <option value="kingman, az">Kingman</option>\n     <option value="barstow, ca">Barstow</option>\n     <option value="san bernardino, ca">San Bernardino</option>\n     <option value="los angeles, ca">Los Angeles</option>\n   </select>\n   </div> -->\n\n   <div #map id="map"></div>\n   <ion-title>Closest Pharmacies</ion-title>\n   <ion-list>\n   <ion-item-sliding>\n      <ion-item>\n        <ion-avatar item-start>\n          <img src="img/angelini.jpg">\n        </ion-avatar>\n        <h2>Venkman</h2>\n        <p>Back off man, I\'m a scientist.</p>\n      </ion-item>\n      <ion-item-options>\n        <!-- <button ion-button color="light" icon-start>\n          <ion-icon name="ios-more"></ion-icon>\n          More\n        </button> -->\n        <button ion-button color="primary" icon-start>\n          <ion-icon name="text"></ion-icon>\n          Text\n        </button>\n        <button ion-button color="secondary" icon-start>\n          <ion-icon name="call"></ion-icon>\n          Call\n        </button>\n      </ion-item-options>\n    </ion-item-sliding>\n\n\n    <ion-item-sliding>\n      <ion-item>\n        <ion-avatar item-start>\n          <img src="img/dompe.jpg">\n        </ion-avatar>\n        <h2>Egon</h2>\n        <p>We\'re gonna go full stream.</p>\n      </ion-item>\n      <ion-item-options>\n        <!-- <button ion-button color="light" icon-start>\n          <ion-icon name="ios-more"></ion-icon>\n          More\n        </button> -->\n        <button ion-button color="primary" icon-start>\n          <ion-icon name="text"></ion-icon>\n          Text\n        </button>\n        <button ion-button color="secondary" icon-start>\n          <ion-icon name="call"></ion-icon>\n          Call\n        </button>\n      </ion-item-options>\n    </ion-item-sliding>\n\n    <ion-item-sliding>\n      <ion-item>\n        <ion-avatar item-start>\n          <img src="img/eclipsePharm.jpg">\n        </ion-avatar>\n        <h2>Ray</h2>\n        <p>Ugly little spud, isn\'t he?</p>\n      </ion-item>\n      <ion-item-options>\n        <!-- <button ion-button color="light" icon-start>\n          <ion-icon name="ios-more"></ion-icon>\n          More\n        </button> -->\n        <button ion-button color="primary" icon-start>\n          <ion-icon name="text"></ion-icon>\n          Text\n        </button>\n        <button ion-button color="secondary" icon-start>\n          <ion-icon name="call"></ion-icon>\n          Call\n        </button>\n      </ion-item-options>\n    </ion-item-sliding>\n\n    <ion-item-sliding>\n      <ion-item>\n        <ion-avatar item-start>\n          <img src="img/eclipsePharm.jpg">\n        </ion-avatar>\n        <h2>Winston</h2>\n        <p>That\'s a big Twinkie.</p>\n      </ion-item>\n      <ion-item-options>\n        <!-- <button ion-button color="light" icon-start>\n          <ion-icon name="ios-more"></ion-icon>\n          More\n        </button> -->\n        <button ion-button color="primary" icon-start>\n          <ion-icon name="text"></ion-icon>\n          Text\n        </button>\n        <button ion-button color="secondary" icon-start>\n          <ion-icon name="call"></ion-icon>\n          Call\n        </button>\n      </ion-item-options>\n    </ion-item-sliding>\n\n    <ion-item-sliding>\n      <ion-item>\n        <ion-avatar item-start>\n          <img src="img/garpham.jpg">\n        </ion-avatar>\n        <h2>Tully</h2>\n        <p>Okay, who brought the dog?</p>\n      </ion-item>\n      <ion-item-options>\n        <!-- <button ion-button color="light" icon-start>\n          <ion-icon name="ios-more"></ion-icon>\n          More\n        </button> -->\n        <button ion-button color="primary" icon-start>\n          <ion-icon name="text"></ion-icon>\n          Text\n        </button>\n        <button ion-button color="secondary" icon-start>\n          <ion-icon name="call"></ion-icon>\n          Call\n        </button>\n      </ion-item-options>\n    </ion-item-sliding>\n    </ion-list>\n</ion-content>\n'/*ion-inline-end:"/home/romeo/Projects/PharmApp/src/pages/map/map.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
], MapPage);

//# sourceMappingURL=map.js.map

/***/ }),

/***/ 115:
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
webpackEmptyAsyncContext.id = 115;

/***/ }),

/***/ 157:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/call/call.module": [
		279,
		9
	],
	"../pages/chat/chat.module": [
		280,
		8
	],
	"../pages/comments/comments.module": [
		276,
		7
	],
	"../pages/map/map.module": [
		281,
		6
	],
	"../pages/maptest/maptest.module": [
		283,
		1
	],
	"../pages/message/message.module": [
		284,
		0
	],
	"../pages/profile/profile.module": [
		278,
		5
	],
	"../pages/read-more/read-more.module": [
		277,
		4
	],
	"../pages/signin/signin.module": [
		282,
		3
	],
	"../pages/signup/signup.module": [
		275,
		2
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
webpackAsyncContext.id = 157;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 158:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__home_home__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__profile_profile__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__call_call__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__chat_chat__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__map_map__ = __webpack_require__(105);
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

/***/ 159:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__read_more_read_more__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__comments_comments__ = __webpack_require__(100);
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
    function HomePage(navCtrl, modalCtrl) {
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
        this.searchQuery = '';
    }
    HomePage.prototype.tocommentmodal = function () {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3__comments_comments__["a" /* CommentsPage */]);
        modal.present();
    };
    HomePage.prototype.toreadmore = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__read_more_read_more__["a" /* ReadMorePage */]);
    };
    return HomePage;
}());
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-home',template:/*ion-inline-start:"/home/romeo/Projects/PharmApp/src/pages/home/home.html"*/'<ion-header>\n  <ion-row>\n    <ion-col col-4 >\n\n    </ion-col>\n    <ion-col col-4>\n      <h3 style="color: #43d1ea; margin: 0 auto !important;">PharmApp</h3>\n    </ion-col>\n  </ion-row>\n  <ion-row>\n    <ion-col col-12>\n        <ion-searchbar (ionInput)="getItems($event)" style="background: transparent;"></ion-searchbar>\n    </ion-col>\n  </ion-row>\n</ion-header>\n\n\n<ion-content class="cards-bg social-cards" style="background-image:url(\'img/signup.png\'); background-size: cover; background-repeat: no-repeat;">\n\n\n\n  <ion-row style="background: white;">\n    <div class="">\n      <p style="margin-left: 30px;">Suggested Topics</p>\n    </div>\n    <ion-slides pager>\n\n        <ion-slide>\n          <ion-row>\n            <ion-col col-4 padding>\n              <ion-avatar item-start >\n                <img src="img/pregnanc.jpg" class="sugestedimg">\n              </ion-avatar>\n              <p class="sugestedfont">Pregnancy</p>\n            </ion-col>\n            <ion-col col-4 padding>\n              <ion-avatar item-start >\n                <img src="img/garlic.jpg" class="sugestedimg">\n              </ion-avatar>\n              <p class="sugestedfont">Garlic</p>\n            </ion-col>\n            <ion-col col-4 padding>\n              <ion-avatar item-start >\n                <img src="img/ginger.jpg" class="sugestedimg">\n              </ion-avatar>\n              <p class="sugestedfont">Ginger</p>\n            </ion-col>\n          </ion-row>\n        </ion-slide>\n\n        <ion-slide >\n          <ion-row>\n            <ion-col col-4 padding>\n              <ion-avatar item-start >\n                <img src="img/fruits.jpg" class="sugestedimg">\n              </ion-avatar>\n              <p class="sugestedfont">Fruits</p>\n            </ion-col>\n            <ion-col col-4 padding>\n              <ion-avatar item-start >\n                <img src="img/vegetables.jpg" class="sugestedimg">\n              </ion-avatar>\n              <p class="sugestedfont">Vegetables</p>\n            </ion-col>\n            <ion-col col-4 padding>\n              <ion-avatar item-start >\n                <img src="img/exercise.jpg" class="sugestedimg">\n              </ion-avatar>\n              <p class="sugestedfont">Exercise</p>\n            </ion-col>\n          </ion-row>\n        </ion-slide>\n\n        <ion-slide >\n          <ion-row>\n            <ion-col col-4 padding>\n              <ion-avatar item-start >\n                <img src="img/gensen.jpg" class="sugestedimg">\n              </ion-avatar>\n              <p class="sugestedfont">Pregnancy</p>\n            </ion-col>\n            <ion-col col-4 padding>\n              <ion-avatar item-start >\n                <img src="img/gensen.jpg" class="sugestedimg">\n              </ion-avatar>\n              <p class="sugestedfont">Gensen</p>\n            </ion-col>\n            <ion-col col-4 padding>\n              <ion-avatar item-start >\n                <img src="img/smoking.jpg" class="sugestedimg">\n              </ion-avatar>\n              <p class="sugestedfont">Ginger</p>\n            </ion-col>\n          </ion-row>\n        </ion-slide>\n\n      </ion-slides>\n  </ion-row>\n\n\n\n  <ion-card>\n\n  <ion-item>\n    <ion-avatar item-start>\n      <img src="img/gensen.jpg">\n    </ion-avatar>\n    <h2>McFly Pharmacy</h2>\n    <p>November 5, 1955</p>\n  </ion-item>\n\n<div (click)="toreadmore()">\n  <img src="img/gensen.jpg">\n\n  <ion-card-content>\n    <h5>Ginseng, Fish, Berries, or Caffeine?</h5>\n    <p>Listen to the buzz about foods and dietary supplements, and you\'ll believe they can do everything from sharpen focus to enhance memory, attention span, and brain function.....</p>\n  </ion-card-content>\n  </div>\n\n  <ion-row>\n    <ion-col>\n      <button ion-button icon-left clear small>\n        <ion-icon name="thumbs-up"></ion-icon>\n        <div>12 Likes</div>\n      </button>\n    </ion-col>\n    <ion-col>\n      <button ion-button icon-left clear small>\n        <ion-icon name="text"></ion-icon>\n        <div (click)="tocommentmodal()">4 Comments</div>\n      </button>\n    </ion-col>\n    <ion-col center text-center>\n      <ion-note>\n        11h ago\n      </ion-note>\n    </ion-col>\n  </ion-row>\n\n</ion-card>\n\n\n\n<ion-card>\n\n<ion-item>\n  <ion-avatar item-start>\n    <img src="img/smoking.jpg">\n  </ion-avatar>\n  <h2>McFly Pharmacy</h2>\n  <p>November 5, 1955</p>\n</ion-item>\n<div (click)="toreadmore()">\n<img src="img/smoking.jpg">\n\n<ion-card-content>\n  <h5>Quitting Smoking: Tips for the First Hard Days</h5>\n  <b>Sip, Eat</b>\n  <p>Sipping cold water through a straw can help replace the act of sucking on a cigarette. It also releases dopamine, a brain chemical that can help ease bad moods.\nEating small meals can also help you get past the urge to smoke. Choose lean, healthy foods to avoid weight gain.</p>\n</ion-card-content>\n</div>\n\n<ion-row>\n  <ion-col>\n    <button ion-button icon-left clear small>\n      <ion-icon name="thumbs-up"></ion-icon>\n      <div>12 Likes</div>\n    </button>\n  </ion-col>\n  <ion-col>\n    <button ion-button icon-left clear small>\n      <ion-icon name="text"></ion-icon>\n      <div (click)="tocommentmodal()">4 Comments</div>\n    </button>\n  </ion-col>\n  <ion-col center text-center>\n    <ion-note>\n      11h ago\n    </ion-note>\n  </ion-col>\n</ion-row>\n\n</ion-card>\n\n\n\n<ion-card>\n\n<ion-item>\n  <ion-avatar item-start>\n    <img src="img/oat.jpg">\n  </ion-avatar>\n  <h2>McFly Pharmacy</h2>\n  <p>November 5, 1955</p>\n</ion-item>\n\n<div (click)="toreadmore()">\n<img src="img/oat.jpg">\n\n<ion-card-content>\n  <h5>14 Best and Worst Foods for Your Liver</h5>\n  <b>Oatmeal</b>\n  <p>Food with lots of fiber can help your liver work at its best. Want one that\'s a great way to start your day? Try oatmeal. Research shows it can help you shed some extra pounds and belly fat, which is a good way to keep away liver disease.... </p>\n</ion-card-content>\n</div>\n\n<ion-row>\n  <ion-col>\n    <button ion-button icon-left clear small>\n      <ion-icon name="thumbs-up"></ion-icon>\n      <div>12 Likes</div>\n    </button>\n  </ion-col>\n  <ion-col>\n    <button ion-button icon-left clear small>\n      <ion-icon name="text"></ion-icon>\n      <div (click)="tocommentmodal()">4 Comments</div>\n    </button>\n  </ion-col>\n  <ion-col center text-center>\n    <ion-note>\n      11h ago\n    </ion-note>\n  </ion-col>\n</ion-row>\n\n</ion-card>\n\n  </ion-content>\n\n  <style>\n    .social-cards ion-col {\n      padding: 0;\n    }\n  </style>\n'/*ion-inline-end:"/home/romeo/Projects/PharmApp/src/pages/home/home.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmojiProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(246);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
  Generated class for the EmojiProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
var EmojiProvider = (function () {
    function EmojiProvider(http) {
        this.http = http;
        console.log('Hello EmojiProvider Provider');
    }
    EmojiProvider.prototype.getEmojis = function () {
        var EMOJIS = "😀 😃 😄 😁 😆 😅 😂 🤣 ☺️ 😊 😇 🙂 🙃 😉 😌 😍 😘 😗 😙 😚 😋 😜 😝 😛 🤑 🤗 🤓 😎 🤡 🤠 😏 😒 😞 😔 😟 😕 🙁" +
            " ☹️ 😣 😖 😫 😩 😤 😠 😡 😶 😐 😑 😯 😦 😧 😮 😲 😵 😳 😱 😨 😰 😢 😥 🤤 😭 😓 😪 😴 🙄 🤔 🤥 😬 🤐 🤢 🤧 😷 🤒 🤕 😈 👿" +
            " 👹 👺 💩 👻 💀 ☠️ 👽 👾 🤖 🎃 😺 😸 😹 😻 😼 😽 🙀 😿 😾 👐 🙌 👏 🙏 🤝 👍 👎 👊 ✊ 🤛 🤜 🤞 ✌️ 🤘 👌 👈 👉 👆 👇 ☝️ ✋ 🤚" +
            " 🖐 🖖 👋 🤙 💪 🖕 ✍️ 🤳 💅 🖖 💄 💋 👄 👅 👂 👃 👣 👁 👀 🗣 👤 👥 👶 👦 👧 👨 👩 👱‍♀️ 👱 👴 👵 👲 👳‍♀️ 👳 👮‍♀️ 👮 👷‍♀️ 👷" +
            " 💂‍♀️ 💂 🕵️‍♀️ 🕵️ 👩‍⚕️ 👨‍⚕️ 👩‍🌾 👨‍🌾 👩‍🍳 👨‍🍳 👩‍🎓 👨‍🎓 👩‍🎤 👨‍🎤 👩‍🏫 👨‍🏫 👩‍🏭 👨‍🏭 👩‍💻 👨‍💻 👩‍💼 👨‍💼 👩‍🔧 👨‍🔧 👩‍🔬 👨‍🔬" +
            " 👩‍🎨 👨‍🎨 👩‍🚒 👨‍🚒 👩‍✈️ 👨‍✈️ 👩‍🚀 👨‍🚀 👩‍⚖️ 👨‍⚖️ 🤶 🎅 👸 🤴 👰 🤵 👼 🤰 🙇‍♀️ 🙇 💁 💁‍♂️ 🙅 🙅‍♂️ 🙆 🙆‍♂️ 🙋 🙋‍♂️ 🤦‍♀️ 🤦‍♂️ 🤷‍♀" +
            "️ 🤷‍♂️ 🙎 🙎‍♂️ 🙍 🙍‍♂️ 💇 💇‍♂️ 💆 💆‍♂️ 🕴 💃 🕺 👯 👯‍♂️ 🚶‍♀️ 🚶 🏃‍♀️ 🏃 👫 👭 👬 💑 👩‍❤️‍👩 👨‍❤️‍👨 💏 👩‍❤️‍💋‍👩 👨‍❤️‍💋‍👨 👪 👨‍👩‍👧" +
            " 👨‍👩‍👧‍👦 👨‍👩‍👦‍👦 👨‍👩‍👧‍👧 👩‍👩‍👦 👩‍👩‍👧 👩‍👩‍👧‍👦 👩‍👩‍👦‍👦 👩‍👩‍👧‍👧 👨‍👨‍👦 👨‍👨‍👧 👨‍👨‍👧‍👦 👨‍👨‍👦‍👦 👨‍👨‍👧‍👧 👩‍👦 👩‍👧" +
            " 👩‍👧‍👦 👩‍👦‍👦 👩‍👧‍👧 👨‍👦 👨‍👧 👨‍👧‍👦 👨‍👦‍👦 👨‍👧‍👧 👚 👕 👖 👔 👗 👙 👘 👠 👡 👢 👞 👟 👒 🎩 🎓 👑 ⛑ 🎒 👝 👛 👜 💼 👓" +
            " 🕶 🌂 ☂️";
        var EmojiArr = EMOJIS.split(' ');
        var groupNum = Math.ceil(EmojiArr.length / (24));
        var items = [];
        for (var i = 0; i < groupNum; i++) {
            items.push(EmojiArr.slice(i * 24, (i + 1) * 24));
        }
        return items;
    };
    return EmojiProvider;
}());
EmojiProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
], EmojiProvider);

//# sourceMappingURL=emoji.js.map

/***/ }),

/***/ 204:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(223);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 223:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(264);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_about_about__ = __webpack_require__(273);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_contact_contact__ = __webpack_require__(274);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_home_home__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_tabs_tabs__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_signin_signin__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_signup_signup__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_profile_profile__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_call_call__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_chat_chat__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_map_map__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_read_more_read_more__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_comments_comments__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__providers_emoji__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__ionic_native_status_bar__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__ionic_native_splash_screen__ = __webpack_require__(202);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

















//import { ChatService } from '../providers/chat-service';



var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_5__pages_about_about__["a" /* AboutPage */],
            __WEBPACK_IMPORTED_MODULE_6__pages_contact_contact__["a" /* ContactPage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_tabs_tabs__["a" /* TabsPage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_signin_signin__["a" /* SigninPage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_signup_signup__["a" /* SignupPage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_profile_profile__["a" /* ProfilePage */],
            __WEBPACK_IMPORTED_MODULE_12__pages_call_call__["a" /* CallPage */],
            __WEBPACK_IMPORTED_MODULE_13__pages_chat_chat__["a" /* ChatPage */],
            __WEBPACK_IMPORTED_MODULE_14__pages_map_map__["a" /* MapPage */],
            __WEBPACK_IMPORTED_MODULE_15__pages_read_more_read_more__["a" /* ReadMorePage */],
            __WEBPACK_IMPORTED_MODULE_16__pages_comments_comments__["a" /* CommentsPage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */], __WEBPACK_IMPORTED_MODULE_4__angular_http__["b" /* HttpModule */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {
                scrollPadding: false,
                scrollAssist: true,
                autoFocusAssist: false,
                tabsHideOnSubPages: true
            }, {
                links: [
                    { loadChildren: '../pages/signup/signup.module#SignupPageModule', name: 'SignupPage', segment: 'signup', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/comments/comments.module#CommentsPageModule', name: 'CommentsPage', segment: 'comments', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/read-more/read-more.module#ReadMorePageModule', name: 'ReadMorePage', segment: 'read-more', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/profile/profile.module#ProfilePageModule', name: 'ProfilePage', segment: 'profile', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/call/call.module#CallPageModule', name: 'CallPage', segment: 'call', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/chat/chat.module#ChatPageModule', name: 'ChatPage', segment: 'chat', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/map/map.module#MapPageModule', name: 'MapPage', segment: 'map', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/signin/signin.module#SigninPageModule', name: 'SigninPage', segment: 'signin', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/maptest/maptest.module#MaptestPageModule', name: 'MaptestPage', segment: 'maptest', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/message/message.module#MessagePageModule', name: 'MessagePage', segment: 'message', priority: 'low', defaultHistory: [] }
                ]
            }),
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_5__pages_about_about__["a" /* AboutPage */],
            __WEBPACK_IMPORTED_MODULE_6__pages_contact_contact__["a" /* ContactPage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_tabs_tabs__["a" /* TabsPage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_signin_signin__["a" /* SigninPage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_signup_signup__["a" /* SignupPage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_profile_profile__["a" /* ProfilePage */],
            __WEBPACK_IMPORTED_MODULE_12__pages_call_call__["a" /* CallPage */],
            __WEBPACK_IMPORTED_MODULE_13__pages_chat_chat__["a" /* ChatPage */],
            __WEBPACK_IMPORTED_MODULE_14__pages_map_map__["a" /* MapPage */],
            __WEBPACK_IMPORTED_MODULE_15__pages_read_more_read_more__["a" /* ReadMorePage */],
            __WEBPACK_IMPORTED_MODULE_16__pages_comments_comments__["a" /* CommentsPage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_18__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_19__ionic_native_splash_screen__["a" /* SplashScreen */],
            { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicErrorHandler */] },
            __WEBPACK_IMPORTED_MODULE_17__providers_emoji__["a" /* EmojiProvider */]
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 264:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_comments_comments__ = __webpack_require__(100);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_comments_comments__["a" /* CommentsPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
            // Keyboard.disableScroll(false);
        });
    }
    return MyApp;
}());
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/home/romeo/Projects/PharmApp/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/home/romeo/Projects/PharmApp/src/app/app.html"*/
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]) === "function" && _c || Object])
], MyApp);

var _a, _b, _c;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 273:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
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
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */]])
], AboutPage);

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 274:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
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
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */]])
], ContactPage);

//# sourceMappingURL=contact.js.map

/***/ }),

/***/ 49:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SigninPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__signup_signup__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tabs_tabs__ = __webpack_require__(158);
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
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-signin',template:/*ion-inline-start:"/home/romeo/Projects/PharmApp/src/pages/signin/signin.html"*/'<!--\n  Generated template for the SigninPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<!-- <ion-header> -->\n  <!-- <ion-row> -->\n    <!-- <ion-col col-4 > -->\n\n    <!-- </ion-col> -->\n    <!-- <ion-col col-4> -->\n      <!-- <h3 style="color: #43d1ea">PharmApp</h3> -->\n      <!-- <img src="img/icon.png"> -->\n    <!-- </ion-col> -->\n  <!-- </ion-row> -->\n  <!-- <ion-row>\n    <ion-col col-12>\n        <ion-searchbar (ionInput)="getItems($event)"></ion-searchbar>\n    </ion-col>\n  </ion-row> -->\n<!-- </ion-header> -->\n\n<ion-content style="background-image: url(\'img/mains.png\');background-size:cover; background-repeat: no-repeat">\n  <img src="img/icon.png">\n  <div padding>\n    <ion-segment [(ngModel)]="segmentPages">\n      <ion-segment-button value="signIn">\n        signIn\n      </ion-segment-button>\n      <ion-segment-button value="signUp">\n        signUp\n      </ion-segment-button>\n    </ion-segment>\n  </div>\n\n  <div [ngSwitch]="segmentPages">\n    <ion-list *ngSwitchCase="\'signIn\'">\n      <!-- <div class="userName"> -->\n  <ion-item class="firstInput">\n    <!-- <ion-label fixed>Username</ion-label> -->\n    <ion-input type="text" placeholder="Username"></ion-input>\n  </ion-item>\n  <!-- </div> -->\n  <ion-item class="secondInput">\n  <!-- <ion-label fixed>Password</ion-label> -->\n  <ion-input type="password" placeholder="Password"></ion-input>\n  </ion-item>\n    <div padding id="signInButton">\n        <button (click)="totabs()" ion-button color="primary" round>Sign In</button>\n  </div>\n  </ion-list>\n\n    <ion-list *ngSwitchCase="\'signUp\'">\n      <ion-item class="firstInput">\n    <!-- <ion-label floating>First Name</ion-label> -->\n    <ion-input type="text" placeholder="First Name"></ion-input>\n  </ion-item>\n\n  <ion-item class="secondInput">\n<!-- <ion-label floating>Last Name</ion-label> -->\n<ion-input type="text" placeholder="Last Name"></ion-input>\n</ion-item>\n\n<ion-item class="secondInput">\n<!-- <ion-label floating>Phone Number</ion-label> -->\n<ion-input type="tel" placeholder="Phone Number"></ion-input>\n</ion-item>\n<div padding id="signUpButton">\n    <button (click)="toNextPage()"ion-button color="primary" round>Next</button>\n</div>\n    </ion-list>\n  </div>\n\n\n</ion-content>\n'/*ion-inline-end:"/home/romeo/Projects/PharmApp/src/pages/signin/signin.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
], SigninPage);

//# sourceMappingURL=signin.js.map

/***/ }),

/***/ 99:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
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
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-signup',template:/*ion-inline-start:"/home/romeo/Projects/PharmApp/src/pages/signup/signup.html"*/'<!--\n  Generated template for the SignupPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>signup</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding style="background-image:url(\'img/signup.png\'); background-size: cover; background-repeat: no-repeat;">\n  <ion-grid>\n        <ion-item>\n          <ion-row radio-group>\n      <ion-col col-6>\n        <ion-thumbnail item-start>\n          <img src="img/008-boy-1.png">\n        </ion-thumbnail>\n        <ion-item>\n          <!-- <ion-label>Male</ion-label> -->\n          <ion-radio name="gender" value="male"></ion-radio>\n        </ion-item>\n    </ion-col>\n    <!-- <ion-label>Male</ion-label>\n    <ion-radio checked="true" value="male"></ion-radio> -->\n\n\n        <ion-col col-6>\n          <ion-thumbnail item-end>\n          <img src="img/002-girl-1.png" >\n          </ion-thumbnail>\n          <ion-item>\n            <!-- <ion-label>Female</ion-label> -->\n            <ion-radio name="gender" value="female"></ion-radio>\n          </ion-item>\n        </ion-col>\n        <!-- <ion-label>Female</ion-label>\n    <ion-radio value="female"></ion-radio> -->\n\n        </ion-row>\n      </ion-item>\n    </ion-grid>\n  <ion-list>\n\n  <ion-item class="firstInput">\n    <!-- <ion-label floating>Email</ion-label> -->\n    <ion-input type="email" placeholder="Email"></ion-input>\n  </ion-item>\n\n  <ion-item class="secondInput">\n    <!-- <ion-label floating>Password</ion-label> -->\n    <ion-input type="password" placeholder="Password"></ion-input>\n  </ion-item>\n\n  <ion-item class="secondInput">\n    <!-- <ion-label floating>Confirm Password</ion-label> -->\n    <ion-input type="password" placeholder="Confirm Password"></ion-input>\n  </ion-item>\n  <div padding id="signUpButton">\n      <button ion-button color="primary" round>Sign Up</button>\n  </div>\n</ion-list>\n\n</ion-content>\n'/*ion-inline-end:"/home/romeo/Projects/PharmApp/src/pages/signup/signup.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
], SignupPage);

//# sourceMappingURL=signup.js.map

/***/ })

},[204]);
//# sourceMappingURL=main.js.map