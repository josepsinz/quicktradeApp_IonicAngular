(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["listado-listado-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/listado/listado.page.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/listado/listado.page.html ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-button fill=\"clear\" routerLink=\"/home\" routerDirection=\"forward\">\n      <ion-icon name=\"arrow-back\"></ion-icon>\n      <ion-item>\n        <ion-title style=\"font-weight: bold\">Listado</ion-title>\n      </ion-item>\n    </ion-button>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <ion-header>\n      <ion-segment scrollable>\n        <ion-segment-button *ngFor=\"let category of categorias; let ind = index\" (click)=\"selectCategoria(ind)\">\n          <ion-icon [name]=\"category.icon\"></ion-icon>\n          <ion-label [class.select]=\"category.select === true\">\n            {{ category.name }}\n          </ion-label>\n        </ion-segment-button>\n      </ion-segment>\n    </ion-header>\n  </ion-list>\n\n  <div *ngFor=\"let item of articulos\">\n    <ion-card button=true [routerLink]=\"['/detalles', item.id]\" style=\"background-color: #f4f5f8;\">\n      <ion-card-header>\n        <ion-card-title>{{item.titulo}} ({{item.precio}}€)</ion-card-title>\n      </ion-card-header>\n      <ion-card-content>\n        <ion-label>{{item.descripcion}}</ion-label>\n        <ion-thumbnail slot=\"start\">\n          <ion-img [src]=\"item.foto\"></ion-img>\n        </ion-thumbnail>\n      </ion-card-content>\n    </ion-card>\n  </div>\n</ion-content>");

/***/ }),

/***/ "./src/app/listado/listado-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/listado/listado-routing.module.ts ***!
  \***************************************************/
/*! exports provided: ListadoPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListadoPageRoutingModule", function() { return ListadoPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _listado_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./listado.page */ "./src/app/listado/listado.page.ts");




var routes = [
    {
        path: '',
        component: _listado_page__WEBPACK_IMPORTED_MODULE_3__["ListadoPage"]
    }
];
var ListadoPageRoutingModule = /** @class */ (function () {
    function ListadoPageRoutingModule() {
    }
    ListadoPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], ListadoPageRoutingModule);
    return ListadoPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/listado/listado.module.ts":
/*!*******************************************!*\
  !*** ./src/app/listado/listado.module.ts ***!
  \*******************************************/
/*! exports provided: ListadoPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListadoPageModule", function() { return ListadoPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _listado_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./listado-routing.module */ "./src/app/listado/listado-routing.module.ts");
/* harmony import */ var _listado_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./listado.page */ "./src/app/listado/listado.page.ts");







var ListadoPageModule = /** @class */ (function () {
    function ListadoPageModule() {
    }
    ListadoPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _listado_routing_module__WEBPACK_IMPORTED_MODULE_5__["ListadoPageRoutingModule"]
            ],
            declarations: [_listado_page__WEBPACK_IMPORTED_MODULE_6__["ListadoPage"]]
        })
    ], ListadoPageModule);
    return ListadoPageModule;
}());



/***/ }),

/***/ "./src/app/listado/listado.page.scss":
/*!*******************************************!*\
  !*** ./src/app/listado/listado.page.scss ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".select {\n  font-weight: bold;\n  font-size: 18px;\n}\n\nion-icon {\n  font-size: 20px;\n}\n\n.labelItem {\n  font-size: 17px;\n}\n\n.error-message {\n  color: var(--ion-color-danger);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qb3NlcG1pcmF0b21hcy9Eb2N1bWVudHMvaW9uaWMvcXVpY2t0cmFkZS9zcmMvYXBwL2xpc3RhZG8vbGlzdGFkby5wYWdlLnNjc3MiLCJzcmMvYXBwL2xpc3RhZG8vbGlzdGFkby5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQkFBQTtFQUNBLGVBQUE7QUNDRjs7QURDQTtFQUNFLGVBQUE7QUNFRjs7QURBQTtFQUNFLGVBQUE7QUNHRjs7QUREQTtFQUNFLDhCQUFBO0FDSUYiLCJmaWxlIjoic3JjL2FwcC9saXN0YWRvL2xpc3RhZG8ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNlbGVjdCB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDE4cHg7XG59XG5pb24taWNvbiB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbn1cbi5sYWJlbEl0ZW0ge1xuICBmb250LXNpemU6IDE3cHg7XG59XG4uZXJyb3ItbWVzc2FnZSB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFuZ2VyKTtcbn1cbiIsIi5zZWxlY3Qge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAxOHB4O1xufVxuXG5pb24taWNvbiB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbn1cblxuLmxhYmVsSXRlbSB7XG4gIGZvbnQtc2l6ZTogMTdweDtcbn1cblxuLmVycm9yLW1lc3NhZ2Uge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhbmdlcik7XG59Il19 */");

/***/ }),

/***/ "./src/app/listado/listado.page.ts":
/*!*****************************************!*\
  !*** ./src/app/listado/listado.page.ts ***!
  \*****************************************/
/*! exports provided: ListadoPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListadoPage", function() { return ListadoPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_quicktrade_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/quicktrade.service */ "./src/app/services/quicktrade.service.ts");



var ListadoPage = /** @class */ (function () {
    function ListadoPage(_quicktradeservice) {
        this._quicktradeservice = _quicktradeservice;
        this.categorias = [{ name: "Motor", icon: "car", select: false }, { name: "Inmobiliaria", icon: "home", select: false }, { name: "Tecnología", icon: "hammer", select: false }, { name: "Hogar", icon: "desktop", select: false }, { name: "Todos", icon: "logo-tumblr", select: false }];
    }
    ListadoPage.prototype.selectCategoria = function (tipo) {
        this.categoria = tipo;
        if (!this.categorias[tipo].select) {
            for (var i in this.categorias) {
                if (this.categorias[i] == this.categorias[tipo]) {
                    this.categorias[i].select = !this.categorias[i].select;
                }
                else {
                    this.categorias[i].select = false;
                }
            }
        }
        if (tipo == 4) {
            this.articulos = this._quicktradeservice.getProductos();
        }
        else {
            this.articulos = this._quicktradeservice.getProductoByCategoria(tipo);
        }
    };
    ListadoPage.prototype.ngOnInit = function () {
        this.articulos = this._quicktradeservice.getProductos();
    };
    ListadoPage.ctorParameters = function () { return [
        { type: _services_quicktrade_service__WEBPACK_IMPORTED_MODULE_2__["QuicktradeService"] }
    ]; };
    ListadoPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-listado',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./listado.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/listado/listado.page.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./listado.page.scss */ "./src/app/listado/listado.page.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_quicktrade_service__WEBPACK_IMPORTED_MODULE_2__["QuicktradeService"]])
    ], ListadoPage);
    return ListadoPage;
}());



/***/ })

}]);
//# sourceMappingURL=listado-listado-module.js.map