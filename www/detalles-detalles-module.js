(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["detalles-detalles-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/detalles/detalles.page.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/detalles/detalles.page.html ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-button fill=\"clear\" routerLink=\"/listado\" routerDirection=\"forward\">\n      <ion-icon name=\"arrow-back\"></ion-icon>\n      <ion-item>\n        <ion-title style=\"font-weight: bold\">{{articulo.titulo}}</ion-title>\n      </ion-item>\n    </ion-button>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <ion-list>\n    <ion-item>\n      <ion-img [src]=\"articulo.foto\"></ion-img>\n    </ion-item>\n    <ion-item>\n      <ion-label style=\"font-weight: bold; font-size: x-large;\">{{articulo.precio}}€</ion-label><br>\n    </ion-item>\n    <ion-item>\n      <ion-label class=\"ion-text-wrap\" style=\"font-size: medium;\">{{articulo.descripcion}}</ion-label>\n    </ion-item>\n    <div *ngIf=\"articulo.categoria==0\">\n      <ion-item>\n        <ion-label style=\"font-size: small;\">Año de compra: {{articulo.anyo}}</ion-label>\n      </ion-item>\n      <ion-item>\n        <ion-label style=\"font-size: small;\">Kilometraje: {{articulo.kilometraje}} Km.</ion-label>\n      </ion-item>\n    </div>\n    <div *ngIf=\"articulo.categoria==1\">\n      <ion-item>\n        <ion-label style=\"font-size: small;\">Metros cuadrados: {{articulo.metros}}</ion-label>\n      </ion-item>\n      <ion-item>\n        <ion-label style=\"font-size: small;\">Nº habitaciones: {{articulo.habitaciones}}</ion-label>\n      </ion-item>\n      <ion-item>\n        <ion-label style=\"font-size: small;\">Localidad: {{articulo.localidad}}</ion-label>\n      </ion-item>\n    </div>\n    <div *ngIf=\"articulo.categoria==2\">\n      <ion-item>\n        <ion-label style=\"font-size: small;\">Estado: {{articulo.estado}}</ion-label>\n      </ion-item>\n    </div>\n  </ion-list>\n</ion-content>\n\n\n\n\n\n\n\n<ion-footer>\n  <ion-button expand=\"full\">COMPRAR</ion-button>\n  <ion-button expand=\"full\">RESERVAR</ion-button>\n</ion-footer>");

/***/ }),

/***/ "./src/app/detalles/detalles-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/detalles/detalles-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: DetallesPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetallesPageRoutingModule", function() { return DetallesPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _detalles_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./detalles.page */ "./src/app/detalles/detalles.page.ts");




var routes = [
    {
        path: '',
        component: _detalles_page__WEBPACK_IMPORTED_MODULE_3__["DetallesPage"]
    }
];
var DetallesPageRoutingModule = /** @class */ (function () {
    function DetallesPageRoutingModule() {
    }
    DetallesPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], DetallesPageRoutingModule);
    return DetallesPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/detalles/detalles.module.ts":
/*!*********************************************!*\
  !*** ./src/app/detalles/detalles.module.ts ***!
  \*********************************************/
/*! exports provided: DetallesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetallesPageModule", function() { return DetallesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _detalles_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./detalles-routing.module */ "./src/app/detalles/detalles-routing.module.ts");
/* harmony import */ var _detalles_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./detalles.page */ "./src/app/detalles/detalles.page.ts");







var DetallesPageModule = /** @class */ (function () {
    function DetallesPageModule() {
    }
    DetallesPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _detalles_routing_module__WEBPACK_IMPORTED_MODULE_5__["DetallesPageRoutingModule"]
            ],
            declarations: [_detalles_page__WEBPACK_IMPORTED_MODULE_6__["DetallesPage"]]
        })
    ], DetallesPageModule);
    return DetallesPageModule;
}());



/***/ }),

/***/ "./src/app/detalles/detalles.page.scss":
/*!*********************************************!*\
  !*** ./src/app/detalles/detalles.page.scss ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".displayed {\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n  height: \"150px\";\n  width: \"150px\";\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qb3NlcG1pcmF0b21hcy9Eb2N1bWVudHMvaW9uaWMvcXVpY2t0cmFkZS9zcmMvYXBwL2RldGFsbGVzL2RldGFsbGVzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvZGV0YWxsZXMvZGV0YWxsZXMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksY0FBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvZGV0YWxsZXMvZGV0YWxsZXMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRpc3BsYXllZCB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICAgIGhlaWdodDogXCIxNTBweFwiO1xuICAgIHdpZHRoOiBcIjE1MHB4XCJcbn0iLCIuZGlzcGxheWVkIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gIGhlaWdodDogXCIxNTBweFwiO1xuICB3aWR0aDogXCIxNTBweFwiO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/detalles/detalles.page.ts":
/*!*******************************************!*\
  !*** ./src/app/detalles/detalles.page.ts ***!
  \*******************************************/
/*! exports provided: DetallesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetallesPage", function() { return DetallesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_quicktrade_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/quicktrade.service */ "./src/app/services/quicktrade.service.ts");




var DetallesPage = /** @class */ (function () {
    function DetallesPage(_activatedRoute, _quicktradeservice) {
        this._activatedRoute = _activatedRoute;
        this._quicktradeservice = _quicktradeservice;
    }
    DetallesPage.prototype.ngOnInit = function () {
        this.id = +this._activatedRoute.snapshot.paramMap.get('id');
        this.articulo = this._quicktradeservice.getProductoById(this.id);
        //console.log(this.articulo);
        /*
        switch (this.articulo2.categoria) {
          case 0:
            this.articulo2['Año'] = this.articulo2['anyo'];
            this.articulo2['kilometraje'] += ' km.'
            this.articulo2['Kilometraje'] = this.articulo2['kilometraje'];
            this.articulo2['Tipología'] = this.articulo2['tipologia'];
            delete this.articulo2['anyo'];
            delete this.articulo2['kilometraje'];
            delete this.articulo2['tipologia'];
            break;
          case 1:
            this.articulo2['Metros cuadrados'] = this.articulo2['metros'];
            this.articulo2['Número habitaciones'] = this.articulo2['habitaciones'];
            this.articulo2['Localidad'] = this.articulo2['localidad'];
            delete this.articulo2['metros'];
            delete this.articulo2['habitaciones'];
            delete this.articulo2['localidad'];
            break;
          case 2:
            this.articulo2['Estado del artículo'] = this.articulo2['estado'];
            delete this.articulo2['estado'];
            break;
        }*/
    };
    DetallesPage.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _services_quicktrade_service__WEBPACK_IMPORTED_MODULE_3__["QuicktradeService"] }
    ]; };
    DetallesPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-detalles',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./detalles.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/detalles/detalles.page.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./detalles.page.scss */ "./src/app/detalles/detalles.page.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _services_quicktrade_service__WEBPACK_IMPORTED_MODULE_3__["QuicktradeService"]])
    ], DetallesPage);
    return DetallesPage;
}());



/***/ })

}]);
//# sourceMappingURL=detalles-detalles-module.js.map