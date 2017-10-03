webpackJsonp([0],{

/***/ 108:
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
webpackEmptyAsyncContext.id = 108;

/***/ }),

/***/ 149:
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
webpackEmptyAsyncContext.id = 149;

/***/ }),

/***/ 193:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(100);
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
    function HomePage(navCtrl, storage) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.storage = storage;
        var date = new Date();
        var month = date.getMonth() + 1;
        this.date = date.getFullYear() + '-' + (month.toString().length == 1 ? 0 + month.toString() : month);
        this.creditTotal = 0;
        this.debitTotal = 0;
        this.storage.get('credits_' + this.date).then(function (data) {
            _this.credits = data;
            if (data != null) {
                data.map(function (each) {
                    _this.creditTotal += parseFloat(each.value);
                });
            }
        });
        this.storage.get('debits_' + this.date).then(function (data) {
            _this.debits = data;
            if (data != null) {
                data.map(function (each) {
                    _this.debitTotal += parseFloat(each.value);
                });
            }
        });
    }
    return HomePage;
}());
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-home',template:/*ion-inline-start:"/Users/leonardo/ionic-app/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Home</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-card>\n    <ion-item>\n      <ion-label>Data:</ion-label>\n      <ion-datetime disabled displayFormat="MMM YYYY" pickerFormat="MMM YYYY" [(ngModel)]="date"></ion-datetime>\n    </ion-item>\n  </ion-card>\n  \n    <ion-card color="secondary">\n      <ion-card-header color="secondary">\n        <ion-item color="secondary">\n          Saldo\n          <ion-badge color="light" item-end> R$ {{creditTotal - debitTotal}}</ion-badge>\n        </ion-item>\n      </ion-card-header>\n    </ion-card>\n  \n    <ion-card color="primary">\n      <!--(click)="showDetails()"-->\n      <ion-card-header color="primary">\n        <ion-item color="primary">\n          A receber\n          <ion-badge color="light" item-end>R$ {{creditTotal}}</ion-badge>\n        </ion-item>\n      </ion-card-header>\n    </ion-card>\n    \n    <ion-card color="danger">\n      <!--(click)="showDetails()"-->\n      <ion-card-header color="danger">\n        <ion-item color="danger">\n          A pagar\n          <ion-badge color="light" item-end>R$ {{debitTotal}}</ion-badge>\n        </ion-item>\n      </ion-card-header>\n    </ion-card>\n</ion-content>\n'/*ion-inline-end:"/Users/leonardo/ionic-app/src/pages/home/home.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 194:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(100);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ListPage = (function () {
    function ListPage(navCtrl, navParams, storage, alertCtrl, actionsheetCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this.alertCtrl = alertCtrl;
        this.actionsheetCtrl = actionsheetCtrl;
        var date = new Date();
        var month = date.getMonth() + 1;
        this.date = date.getFullYear() + '-' + (month.toString().length == 1 ? 0 + month.toString() : month);
        this.show = false;
        this.creditTotal = 0;
        this.debitTotal = 0;
        this.storage.get('credits_' + this.date).then(function (data) {
            _this.credits = data;
            if (data != null) {
                data.map(function (each) {
                    _this.creditTotal += parseFloat(each.value);
                });
            }
        });
        this.storage.get('debits_' + this.date).then(function (data) {
            _this.debits = data;
            if (data != null) {
                data.map(function (each) {
                    _this.debitTotal += parseFloat(each.value);
                });
            }
        });
    }
    ListPage.prototype.showDetails = function () {
        this.show = true;
    };
    ListPage.prototype.choiceOption = function () {
        var _this = this;
        var confirm = this.alertCtrl.create({
            title: 'Escolha o tipo de entrada',
            buttons: [
                {
                    text: 'A receber',
                    handler: function () {
                        _this.newCredit();
                    }
                },
                {
                    text: 'A pagar',
                    handler: function () {
                        _this.newDebit();
                    }
                }
            ]
        });
        confirm.present();
    };
    ListPage.prototype.newCredit = function () {
        var _this = this;
        var prompt = this.alertCtrl.create({
            title: 'A receber',
            inputs: [
                {
                    name: 'title',
                    placeholder: 'Título'
                },
                {
                    name: 'value',
                    placeholder: 'Valor'
                }
            ],
            buttons: [
                {
                    text: 'Cancelar',
                    handler: function (data) {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Salvar',
                    handler: function (values) {
                        _this.storage.get('credits_' + _this.date).then(function (data) {
                            if (data != null) {
                                data.push(values);
                                _this.storage.set('credits_' + _this.date, data);
                                _this.credits = data;
                                _this.creditTotal = 0;
                                data.map(function (each) {
                                    _this.creditTotal += parseFloat(each.value);
                                });
                            }
                            else {
                                var array = [];
                                array.push(values);
                                _this.storage.set('credits_' + _this.date, array);
                                _this.credits = array;
                                _this.creditTotal = 0;
                                array.map(function (each) {
                                    _this.creditTotal += parseFloat(each.value);
                                });
                            }
                        });
                    }
                }
            ]
        });
        prompt.present();
    };
    ListPage.prototype.newDebit = function () {
        var _this = this;
        var prompt = this.alertCtrl.create({
            title: 'A pagar',
            inputs: [
                {
                    name: 'title',
                    placeholder: 'Título'
                },
                {
                    name: 'value',
                    placeholder: 'Valor'
                }
            ],
            buttons: [
                {
                    text: 'Cancelar',
                    handler: function (data) {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Salvar',
                    handler: function (values) {
                        _this.storage.get('debits_' + _this.date).then(function (data) {
                            if (data != null) {
                                data.push(values);
                                _this.storage.set('debits_' + _this.date, data);
                                _this.debits = data;
                                _this.debitTotal = 0;
                                data.map(function (each) {
                                    _this.debitTotal += parseFloat(each.value);
                                });
                            }
                            else {
                                var array = [];
                                array.push(values);
                                _this.storage.set('debits_' + _this.date, array);
                                _this.debits = array;
                                _this.debitTotal = 0;
                                array.map(function (each) {
                                    _this.debitTotal += parseFloat(each.value);
                                });
                            }
                        });
                    }
                }
            ]
        });
        prompt.present();
    };
    ListPage.prototype.update = function () {
        var _this = this;
        this.debitTotal = 0;
        this.creditTotal = 0;
        this.storage.get('credits_' + this.date).then(function (data) {
            _this.credits = data;
            if (data != null) {
                data.map(function (each) {
                    _this.creditTotal += parseFloat(each.value);
                });
            }
        });
        this.storage.get('debits_' + this.date).then(function (data) {
            _this.debits = data;
            if (data != null) {
                data.map(function (each) {
                    _this.debitTotal += parseFloat(each.value);
                });
            }
        });
    };
    ListPage.prototype.optionDebits = function (index) {
        var _this = this;
        var actionSheet = this.actionsheetCtrl.create({
            title: 'Opções',
            cssClass: 'action-sheets-basic-page',
            buttons: [
                {
                    text: 'Pago',
                    role: 'edit',
                    handler: function () {
                        console.log('done');
                    }
                },
                {
                    text: 'Deletar',
                    role: 'destructive',
                    // icon: !this.platform.is('ios') ? 'trash' : null,
                    handler: function () {
                        var confirm = _this.alertCtrl.create({
                            title: 'Deseja realmente deletar?',
                            buttons: [
                                {
                                    text: 'Não',
                                    handler: function () {
                                        console.log('Disagree clicked');
                                    }
                                },
                                {
                                    text: 'Sim',
                                    handler: function () {
                                        _this.debits.splice(index, 1);
                                        _this.storage.set('debits_' + _this.date, _this.debits);
                                        _this.debitTotal = 0;
                                        _this.debits.map(function (each) {
                                            _this.debitTotal += parseFloat(each.value);
                                        });
                                    }
                                }
                            ]
                        });
                        confirm.present();
                    }
                }
            ]
        });
        actionSheet.present();
    };
    ListPage.prototype.optionCredits = function (index) {
        var _this = this;
        var actionSheet = this.actionsheetCtrl.create({
            title: 'Opções',
            cssClass: 'action-sheets-basic-page',
            buttons: [
                {
                    text: 'Deletar',
                    role: 'destructive',
                    // icon: !this.platform.is('ios') ? 'trash' : null,
                    handler: function () {
                        var confirm = _this.alertCtrl.create({
                            title: 'Deseja realmente deletar?',
                            buttons: [
                                {
                                    text: 'Não',
                                    handler: function () {
                                        console.log('Disagree clicked');
                                    }
                                },
                                {
                                    text: 'Sim',
                                    handler: function () {
                                        _this.credits.splice(index, 1);
                                        _this.storage.set('credits_' + _this.date, _this.credits);
                                        _this.creditTotal = 0;
                                        _this.credits.map(function (each) {
                                            _this.creditTotal += parseFloat(each.value);
                                        });
                                    }
                                }
                            ]
                        });
                        confirm.present();
                    }
                }
            ]
        });
        actionSheet.present();
    };
    return ListPage;
}());
ListPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-list',template:/*ion-inline-start:"/Users/leonardo/ionic-app/src/pages/list/list.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Contas</ion-title>\n     <ion-buttons (click)="update()" end>\n      <button ion-button icon-only>\n        <ion-icon ios="ios-refresh" md="md-refresh"  item-end></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-card>\n    <ion-item>\n      <ion-label>Data:</ion-label>\n      <ion-datetime displayFormat="MMM YYYY" pickerFormat="MMM YYYY" [(ngModel)]="date"></ion-datetime>\n    </ion-item>\n  </ion-card>\n  \n  <ion-card>\n    <ion-card-header>\n      <ion-item>\n        Saldo\n        <ion-badge item-end color="secondary">R$ {{creditTotal - debitTotal}}</ion-badge>\n      </ion-item>\n    </ion-card-header>\n  </ion-card>\n\n  <ion-card>\n    <!--(click)="showDetails()"-->\n    <ion-card-header>\n      <ion-item>\n        A receber\n        <ion-badge item-end color="primary">R$ {{creditTotal}}</ion-badge>\n      </ion-item>\n    </ion-card-header>\n    <ion-list *ngFor="let credit of credits; let i = index" [attr.data-index]="i">\n      <ion-item (click)="optionCredits(i)">{{credit.title}} <ion-badge item-end color="light">R$ {{credit.value}}</ion-badge></ion-item>\n    </ion-list>\n  </ion-card>\n  \n  <ion-card>\n    <!--(click)="showDetails()"-->\n    <ion-card-header>\n      <ion-item>\n        A pagar\n        <ion-badge item-end color="danger">R$ {{debitTotal}}</ion-badge>\n      </ion-item>\n    </ion-card-header>\n    <ion-list *ngFor="let debit of debits; let i = index" [attr.data-index]="i">\n      <ion-item (click)="optionDebits(i)">{{debit.title}} <ion-badge item-end color="light">R$ {{debit.value}}</ion-badge></ion-item>\n    </ion-list>\n  </ion-card>\n  \n  <p padding>\n    <button ion-button block (click)="choiceOption()">Nova Entrada</button>\n  </p>\n  \n  \n</ion-content>\n'/*ion-inline-end:"/Users/leonardo/ionic-app/src/pages/list/list.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */]])
], ListPage);

//# sourceMappingURL=list.js.map

/***/ }),

/***/ 195:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(214);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 214:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(255);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_list_list__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_status_bar__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_splash_screen__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_storage__ = __webpack_require__(100);
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
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_5__pages_list_list__["a" /* ListPage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                links: []
            }),
            __WEBPACK_IMPORTED_MODULE_8__ionic_storage__["a" /* IonicStorageModule */].forRoot()
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_5__pages_list_list__["a" /* ListPage */]
        ],
        providers: [
            Storage,
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_7__ionic_native_splash_screen__["a" /* SplashScreen */],
            { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicErrorHandler */] }
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 255:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_list_list__ = __webpack_require__(194);
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
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        this.initializeApp();
        // used for an example of ngFor and navigation
        this.pages = [
            { title: 'Resumo', component: __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */] },
            { title: 'Contas', component: __WEBPACK_IMPORTED_MODULE_5__pages_list_list__["a" /* ListPage */] }
        ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    return MyApp;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Nav */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Nav */])
], MyApp.prototype, "nav", void 0);
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/Users/leonardo/ionic-app/src/app/app.html"*/'<ion-menu [content]="content">\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>Menu</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list>\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n        {{p.title}}\n      </button>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"/Users/leonardo/ionic-app/src/app/app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ })

},[195]);
//# sourceMappingURL=main.js.map