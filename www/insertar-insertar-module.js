(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["insertar-insertar-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/insertar/insertar.page.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/insertar/insertar.page.html ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  \n  <ion-toolbar>\n    <ion-button fill=\"clear\" routerLink=\"/home\" routerDirection=\"forward\">\n      <ion-icon slot=\"icon-only\" name=\"arrow-back\"></ion-icon><ion-item style=\"align-items: center\"><ion-title style=\"align-items: center; font-weight: bold\">{{pantalla}}</ion-title></ion-item>\n    </ion-button>\n    \n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <ion-list>\n    <ion-header>\n      <ion-segment scrollable>\n        <ion-segment-button *ngFor=\"let category of categorias; let ind = index\" (click)=\"selectCategoria(ind)\">\n          <ion-icon [name]=\"category.icon\"></ion-icon>\n          <ion-label [class.select]=\"category.select === true\">\n            {{ category.name }}\n          </ion-label>\n        </ion-segment-button>\n      </ion-segment>\n    </ion-header>\n  </ion-list>\n  <!----------------[formGroup]=\"motorForm\" ------------------------------------------->\n  <div *ngIf=\"categoria == null\">Seleccione una categoría, gracias</div>\n\n  <!----------------------------------------------------------->\n  <!-----------------------MOTOR------------------------------------>\n  <!----------------------------------------------------------->\n  <div *ngIf=\"categoria == 0\">\n    <form (ngSubmit)=\"insert(categoria)\">\n      <ion-list>\n\n        <ion-item>\n          <ion-label class=labelItem position=\"floating\">Título*:</ion-label>\n          <ion-input [formControl]=\"generalForm.controls.titulo\" inputmode=\"text\"></ion-input>\n        </ion-item>\n        <div *ngFor=\"let error of errorMessages.titulo\">\n          <ng-container *ngIf=\"titulo.hasError(error.type) && (titulo.dirty || titulo.touched)\">\n            <small class=\"error-message\">\n              <ion-icon name=\"alert\"></ion-icon>{{error.message}}\n            </small>\n          </ng-container>\n        </div>\n\n        <ion-item>\n          <ion-label class=labelItem position=\"floating\">Descripción:</ion-label>\n          <ion-textarea [formControl]=\"generalForm.controls.descripcion\" inputmode=\"text\"></ion-textarea>\n        </ion-item>\n        <div *ngFor=\"let error of errorMessages.descripcion\">\n          <ng-container *ngIf=\"descripcion.hasError(error.type) && (descripcion.dirty || descripcion.touched)\">\n            <small class=\"error-message\">\n              <ion-icon name=\"alert\"></ion-icon>{{error.message}}\n            </small>\n          </ng-container>\n        </div>\n\n        <ion-item lines=\"full\">\n          <ion-label class=labelItem>Tipología:</ion-label>\n          <ion-radio-group [formControl]=\"motorForm.controls.tipologia\">\n            <ion-item lines=\"none\">\n              <ion-label>Coche</ion-label>\n              <ion-radio slot=\"start\" value=\"Coche\">Coche</ion-radio>\n            </ion-item>\n            <ion-item lines=\"none\">\n              <ion-label>Motocicleta</ion-label>\n              <ion-radio slot=\"start\" value=\"Motocicleta\">Moto</ion-radio>\n            </ion-item>\n          </ion-radio-group>\n        </ion-item>\n\n        <ion-item>\n          <ion-label class=labelItem position=\"floating\">Kilometraje:</ion-label>\n          <ion-input [formControl]=\"motorForm.controls.kilometraje\" inputmode=\"numeric\"></ion-input>\n        </ion-item>\n        <div *ngFor=\"let error of errorMessages.enteroPositivo\">\n          <ng-container *ngIf=\"kilometraje.hasError(error.type) && (kilometraje.dirty || kilometraje.touched)\">\n            <small class=\"error-message\">\n              <ion-icon name=\"alert\"></ion-icon>{{error.message}}\n            </small>\n          </ng-container>\n        </div>\n\n        <ion-item>\n          <ion-label class=labelItem position=\"floating\">Año:</ion-label>\n          <ion-datetime [formControl]=\"motorForm.controls.anyo\" displayFormat=\"YYYY\" min=\"1981\" max=\"2020\">\n          </ion-datetime>\n        </ion-item>\n\n        <ion-item>\n          <ion-label class=labelItem position=\"floating\">Precio*:</ion-label>\n          <ion-input [formControl]=\"generalForm.controls.precio\" inputmode=\"decimal\"></ion-input>\n        </ion-item>\n        <div *ngFor=\"let error of errorMessages.precio\">\n          <ng-container *ngIf=\"precio.hasError(error.type) && (precio.dirty || precio.touched)\">\n            <small class=\"error-message\">\n              <ion-icon name=\"alert\"></ion-icon>{{error.message}}\n            </small>\n          </ng-container>\n        </div>\n\n      </ion-list>\n\n      <ion-button type=\"submit\" expand=\"full\">Añadir artículo</ion-button>\n    </form><br>\n    <!----------------------------------------------------------->\n    <ion-footer>\n      <ion-toolbar>\n        <ion-title style=\"font-weight: bold\">\n          Listado:\n        </ion-title>\n      </ion-toolbar>\n    </ion-footer>\n\n    <div *ngFor=\"let item of articulos\">\n      <ion-card *ngIf=\"item.categoria==0\" style=\"background-color: #f4f5f8;\">\n        <ion-card-header>\n          <ion-card-title>{{item.titulo}} ({{item.precio}}€)</ion-card-title>\n        </ion-card-header>\n        <ion-card-content>\n          <ion-label>{{item.descripcion}}</ion-label>\n        </ion-card-content>\n        <ion-icon button=true [name]=\"item.show ? 'remove' :'add'\" (click)=\"show(item.id)\"></ion-icon>\n        <ion-card-content *ngIf=\"item.show==true\">\n          <ion-label>Tipología: {{item.tipologia}}</ion-label><br>\n          <ion-label>Kilometraje: {{item.kilometraje}}</ion-label><br>\n          <ion-label>Año: {{item.anyo}}</ion-label>\n        </ion-card-content>\n      </ion-card>\n    </div>\n  </div>\n  <!----------------------------------------------------------->\n  <!---------------------INMOBILIARIA-------------------------------------->\n  <!----------------------------------------------------------->\n  <div *ngIf=\"categoria == 1\">\n    <form (ngSubmit)=\"insert(categoria)\">\n      <ion-list>\n\n        <ion-item>\n          <ion-label class=labelItem position=\"floating\">Título*:</ion-label>\n          <ion-input [formControl]=\"generalForm.controls.titulo\" inputmode=\"text\"></ion-input>\n        </ion-item>\n        <div *ngFor=\"let error of errorMessages.titulo\">\n          <ng-container *ngIf=\"titulo.hasError(error.type) && (titulo.dirty || titulo.touched)\">\n            <small class=\"error-message\">\n              <ion-icon name=\"alert\"></ion-icon>{{error.message}}\n            </small>\n          </ng-container>\n        </div>\n\n        <ion-item>\n          <ion-label class=labelItem position=\"floating\">Descripción:</ion-label>\n          <ion-textarea [formControl]=\"generalForm.controls.descripcion\" inputmode=\"text\"></ion-textarea>\n        </ion-item>\n        <div *ngFor=\"let error of errorMessages.descripcion\">\n          <ng-container *ngIf=\"descripcion.hasError(error.type) && (descripcion.dirty || descripcion.touched)\">\n            <small class=\"error-message\">\n              <ion-icon name=\"alert\"></ion-icon>{{error.message}}\n            </small>\n          </ng-container>\n        </div>\n\n        <ion-item>\n          <ion-label class=labelItem position=\"floating\">Metros cuadrados:</ion-label>\n          <ion-input [formControl]=\"inmobiliariaForm.controls.metros\" inputmode=\"numeric\"></ion-input>\n        </ion-item>\n        <div *ngFor=\"let error of errorMessages.enteroPositivo\">\n          <ng-container *ngIf=\"metros.hasError(error.type) && (metros.dirty || metros.touched)\">\n            <small class=\"error-message\">\n              <ion-icon name=\"alert\"></ion-icon>{{error.message}}\n            </small>\n          </ng-container>\n        </div>\n\n        <ion-item>\n          <ion-label class=labelItem position=\"floating\">Habitaciones:</ion-label>\n          <ion-input [formControl]=\"inmobiliariaForm.controls.habitaciones\" inputmode=\"numeric\"></ion-input>\n        </ion-item>\n        <div *ngFor=\"let error of errorMessages.enteroPositivo\">\n          <ng-container *ngIf=\"habitaciones.hasError(error.type) && (habitaciones.dirty || habitaciones.touched)\">\n            <small class=\"error-message\">\n              <ion-icon name=\"alert\"></ion-icon>{{error.message}}\n            </small>\n          </ng-container>\n        </div>\n\n        <ion-item>\n          <ion-label class=labelItem position=\"floating\">Localidad:</ion-label>\n          <ion-textarea [formControl]=\"inmobiliariaForm.controls.localidad\" inputmode=\"text\"></ion-textarea>\n        </ion-item>\n\n        <ion-item>\n          <ion-label class=labelItem position=\"floating\">Precio*:</ion-label>\n          <ion-input [formControl]=\"generalForm.controls.precio\" inputmode=\"decimal\"></ion-input>\n        </ion-item>\n        <div *ngFor=\"let error of errorMessages.precio\">\n          <ng-container *ngIf=\"precio.hasError(error.type) && (precio.dirty || precio.touched)\">\n            <small class=\"error-message\">\n              <ion-icon name=\"alert\"></ion-icon>{{error.message}}\n            </small>\n          </ng-container>\n        </div>\n\n      </ion-list>\n\n      <ion-button type=\"submit\" expand=\"full\">Añadir artículo</ion-button>\n    </form><br>\n    <!----------------------------------------------------------->\n    <ion-footer>\n      <ion-toolbar>\n        <ion-title style=\"font-weight: bold\">\n          Listado:\n        </ion-title>\n      </ion-toolbar>\n    </ion-footer>\n\n    <div *ngFor=\"let item of articulos\">\n      <ion-card *ngIf=\"item.categoria==1\" style=\"background-color: #f4f5f8;\">\n        <ion-card-header>\n          <ion-card-title>{{item.titulo}} ({{item.precio}}€)</ion-card-title>\n        </ion-card-header>\n        <ion-card-content>\n          <ion-label>{{item.descripcion}}</ion-label>\n        </ion-card-content>\n        <ion-icon button=true [name]=\"item.show ? 'remove' :'add'\" (click)=\"show(item.id)\"></ion-icon>\n        <ion-card-content *ngIf=\"item.show==true\">\n          <ion-label>Metros cuadrados: {{item.metros}}</ion-label><br>\n          <ion-label>Habitaciones: {{item.habitaciones}}</ion-label><br>\n          <ion-label>Localidad: {{item.localidad}}</ion-label>\n        </ion-card-content>\n      </ion-card>\n    </div>\n  </div>\n  <!----------------------------------------------------------->\n  <!------------------------TECNOLOGIA----------------------------------->\n  <!----------------------------------------------------------->\n  <div *ngIf=\"categoria == 2\">\n    <form (ngSubmit)=\"insert(categoria)\">\n      <ion-list>\n\n        <ion-item>\n          <ion-label class=labelItem position=\"floating\">Título*:</ion-label>\n          <ion-input [formControl]=\"generalForm.controls.titulo\" inputmode=\"text\"></ion-input>\n        </ion-item>\n        <div *ngFor=\"let error of errorMessages.titulo\">\n          <ng-container *ngIf=\"titulo.hasError(error.type) && (titulo.dirty || titulo.touched)\">\n            <small class=\"error-message\">\n              <ion-icon name=\"alert\"></ion-icon>{{error.message}}\n            </small>\n          </ng-container>\n        </div>\n\n        <ion-item>\n          <ion-label class=labelItem position=\"floating\">Descripción:</ion-label>\n          <ion-textarea [formControl]=\"generalForm.controls.descripcion\" inputmode=\"text\"></ion-textarea>\n        </ion-item>\n        <div *ngFor=\"let error of errorMessages.descripcion\">\n          <ng-container *ngIf=\"descripcion.hasError(error.type) && (descripcion.dirty || descripcion.touched)\">\n            <small class=\"error-message\">\n              <ion-icon name=\"alert\"></ion-icon>{{error.message}}\n            </small>\n          </ng-container>\n        </div>\n\n        <ion-item lines=\"full\">\n          <ion-label class=labelItem>Estado:</ion-label>\n          <ion-radio-group [formControl]=\"tecnologiaForm.controls.estado\">\n            <ion-item lines=\"none\">\n              <ion-label>Perfecto estado</ion-label>\n              <ion-radio slot=\"start\" value=\"Perfecto estado\">Perfecto estado</ion-radio>\n            </ion-item>\n            <ion-item lines=\"none\">\n              <ion-label>Usado</ion-label>\n              <ion-radio slot=\"start\" value=\"Usado\">Usado</ion-radio>\n            </ion-item>\n          </ion-radio-group>\n        </ion-item>\n\n        <ion-item>\n          <ion-label class=labelItem position=\"floating\">Precio*:</ion-label>\n          <ion-input [formControl]=\"generalForm.controls.precio\" inputmode=\"decimal\"></ion-input>\n        </ion-item>\n        <div *ngFor=\"let error of errorMessages.precio\">\n          <ng-container *ngIf=\"precio.hasError(error.type) && (precio.dirty || precio.touched)\">\n            <small class=\"error-message\">\n              <ion-icon name=\"alert\"></ion-icon>{{error.message}}\n            </small>\n          </ng-container>\n        </div>\n\n      </ion-list>\n\n      <ion-button type=\"submit\" expand=\"full\">Añadir artículo</ion-button>\n    </form><br>\n    <!----------------------------------------------------------->\n    <ion-footer>\n      <ion-toolbar>\n        <ion-title style=\"font-weight: bold\">\n          Listado:\n        </ion-title>\n      </ion-toolbar>\n    </ion-footer>\n\n    <div *ngFor=\"let item of articulos\">\n      <ion-card *ngIf=\"item.categoria==2\" style=\"background-color: #f4f5f8;\">\n        <ion-card-header>\n          <ion-card-title>{{item.titulo}} ({{item.precio}}€)</ion-card-title>\n        </ion-card-header>\n        <ion-card-content>\n          <ion-label>{{item.descripcion}}</ion-label>\n        </ion-card-content>\n        <ion-icon button=true [name]=\"item.show ? 'remove' :'add'\" (click)=\"show(item.id)\"></ion-icon>\n        <ion-card-content *ngIf=\"item.show==true\">\n          <ion-label>Estado: {{item.estado}}</ion-label>\n        </ion-card-content>\n      </ion-card>\n    </div>\n  </div>\n  <!----------------------------------------------------------->\n  <!---------------------HOGAR-------------------------------------->\n  <!----------------------------------------------------------->\n  <div *ngIf=\"categoria == 3\">\n    <form (ngSubmit)=\"insert(categoria)\">\n      <ion-list>\n\n        <ion-item>\n          <ion-label class=labelItem position=\"floating\">Título*:</ion-label>\n          <ion-input [formControl]=\"generalForm.controls.titulo\" inputmode=\"text\"></ion-input>\n        </ion-item>\n        <div *ngFor=\"let error of errorMessages.titulo\">\n          <ng-container *ngIf=\"titulo.hasError(error.type) && (titulo.dirty || titulo.touched)\">\n            <small class=\"error-message\">\n              <ion-icon name=\"alert\"></ion-icon>{{error.message}}\n            </small>\n          </ng-container>\n        </div>\n\n        <ion-item>\n          <ion-label class=labelItem position=\"floating\">Descripción:</ion-label>\n          <ion-textarea [formControl]=\"generalForm.controls.descripcion\" inputmode=\"text\"></ion-textarea>\n        </ion-item>\n        <div *ngFor=\"let error of errorMessages.descripcion\">\n          <ng-container *ngIf=\"descripcion.hasError(error.type) && (descripcion.dirty || descripcion.touched)\">\n            <small class=\"error-message\">\n              <ion-icon name=\"alert\"></ion-icon>{{error.message}}\n            </small>\n          </ng-container>\n        </div>\n\n        <ion-item>\n          <ion-label class=labelItem position=\"floating\">Precio*:</ion-label>\n          <ion-input [formControl]=\"generalForm.controls.precio\" inputmode=\"decimal\"></ion-input>\n        </ion-item>\n        <div *ngFor=\"let error of errorMessages.precio\">\n          <ng-container *ngIf=\"precio.hasError(error.type) && (precio.dirty || precio.touched)\">\n            <small class=\"error-message\">\n              <ion-icon name=\"alert\"></ion-icon>{{error.message}}\n            </small>\n          </ng-container>\n        </div>\n\n      </ion-list>\n\n      <ion-button type=\"submit\" expand=\"full\">Añadir artículo</ion-button>\n    </form><br>\n    <!----------------------------------#3171e0----------rgba(57, 75, 81, 0.065);--------------->\n    <ion-footer style=\"border-width: thick;\">\n      <ion-toolbar>\n        <ion-title style=\"text-decoration: underline; font-weight: bold\">\n          Listado:\n        </ion-title>\n      </ion-toolbar>\n    </ion-footer>\n\n    <div *ngFor=\"let item of articulos\">\n      <ion-card *ngIf=\"item.categoria==3\" style=\"background-color: #f4f5f8;\">\n        <ion-card-header>\n          <ion-card-title>{{item.titulo}} ({{item.precio}}€)</ion-card-title>\n        </ion-card-header>\n        <ion-card-content>\n          <ion-label>{{item.descripcion}}</ion-label>\n        </ion-card-content>\n      </ion-card>\n    </div>\n  </div>\n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/insertar/insertar.module.ts":
/*!*********************************************!*\
  !*** ./src/app/insertar/insertar.module.ts ***!
  \*********************************************/
/*! exports provided: InsertarPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InsertarPageModule", function() { return InsertarPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _insertar_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./insertar.page */ "./src/app/insertar/insertar.page.ts");







var InsertarPageModule = /** @class */ (function () {
    function InsertarPageModule() {
    }
    InsertarPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([
                    {
                        path: '',
                        component: _insertar_page__WEBPACK_IMPORTED_MODULE_6__["InsertarPage"]
                    }
                ])
            ],
            declarations: [_insertar_page__WEBPACK_IMPORTED_MODULE_6__["InsertarPage"]]
        })
    ], InsertarPageModule);
    return InsertarPageModule;
}());



/***/ }),

/***/ "./src/app/insertar/insertar.page.scss":
/*!*********************************************!*\
  !*** ./src/app/insertar/insertar.page.scss ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".select {\n  font-weight: bold;\n  font-size: 18px;\n}\n\nion-icon {\n  font-size: 20px;\n}\n\n.labelItem {\n  font-size: 17px;\n}\n\n.error-message {\n  color: var(--ion-color-danger);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qb3NlcG1pcmF0b21hcy9Eb2N1bWVudHMvaW9uaWMvcXVpY2t0cmFkZS9zcmMvYXBwL2luc2VydGFyL2luc2VydGFyLnBhZ2Uuc2NzcyIsInNyYy9hcHAvaW5zZXJ0YXIvaW5zZXJ0YXIucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQUE7RUFDQSxlQUFBO0FDQ0Y7O0FEQ0E7RUFDRSxlQUFBO0FDRUY7O0FEQUE7RUFDRSxlQUFBO0FDR0Y7O0FEREE7RUFDRSw4QkFBQTtBQ0lGIiwiZmlsZSI6InNyYy9hcHAvaW5zZXJ0YXIvaW5zZXJ0YXIucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNlbGVjdCB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDE4cHg7XG59XG5pb24taWNvbiB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbn1cbi5sYWJlbEl0ZW0ge1xuICBmb250LXNpemU6IDE3cHg7XG59XG4uZXJyb3ItbWVzc2FnZSB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFuZ2VyKTtcbn1cbiIsIi5zZWxlY3Qge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAxOHB4O1xufVxuXG5pb24taWNvbiB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbn1cblxuLmxhYmVsSXRlbSB7XG4gIGZvbnQtc2l6ZTogMTdweDtcbn1cblxuLmVycm9yLW1lc3NhZ2Uge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhbmdlcik7XG59Il19 */");

/***/ }),

/***/ "./src/app/insertar/insertar.page.ts":
/*!*******************************************!*\
  !*** ./src/app/insertar/insertar.page.ts ***!
  \*******************************************/
/*! exports provided: InsertarPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InsertarPage", function() { return InsertarPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_quicktrade_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/quicktrade.service */ "./src/app/services/quicktrade.service.ts");





var InsertarPage = /** @class */ (function () {
    function InsertarPage(_toastController, _formBuilder, 
    //private _filePath: FilePath,
    //private _fileChooser: FileChooser
    _quicktradeservice) {
        this._toastController = _toastController;
        this._formBuilder = _formBuilder;
        this._quicktradeservice = _quicktradeservice;
        this.pantalla = "Añadir artículo";
        this.categorias = [{ name: "Motor", icon: "car", select: false }, { name: "Inmobiliaria", icon: "home", select: false }, { name: "Tecnología", icon: "hammer", select: false }, { name: "Hogar", icon: "desktop", select: false }];
        this.articulos = [
            {
                "id": 1,
                "categoria": 0,
                "titulo": "Peugeot 206",
                "descripcion": "Coche para uso en ciudad",
                "tipologia": "Coche",
                "kilometraje": 203123,
                "anyo": "2005",
                "precio": 2000,
                "show": false,
                "foto": "../../assets/fotos/peugeot.jpg"
            },
            {
                "id": 2,
                "categoria": 0,
                "titulo": "Yamaha Supersport",
                "descripcion": "Motocicleta de carrera. 500cc",
                "tipologia": "Motocicleta",
                "kilometraje": 40000,
                "anyo": "2010",
                "precio": 850,
                "show": false,
                "foto": "../../assets/fotos/motoyamaha.png"
            },
            {
                "id": 3,
                "categoria": 1,
                "titulo": "Piso en Moncloa",
                "descripcion": "Tercera altura con ascensor. Reformado",
                "metros": 80,
                "habitaciones": 4,
                "localidad": "Madrid",
                "precio": 80000,
                "show": false,
                "foto": "../../assets/fotos/pisomoncloa.jpg"
            },
            {
                "id": 4,
                "categoria": 1,
                "titulo": "Estudio en zona Sol",
                "descripcion": "Quinto sin ascensor. Muy acogedor",
                "metros": 38,
                "habitaciones": 1,
                "localidad": "Madrid",
                "precio": 100000,
                "show": false,
                "foto": "../../assets/fotos/zonasol.png"
            },
            {
                "id": 5,
                "categoria": 2,
                "titulo": 'MacBook Pro 15"',
                "descripcion": "Pantalla retina. Modelo del 2013",
                "estado": "Usado",
                "precio": 1050,
                "show": false,
                "foto": "../../assets/fotos/macbook.jpg"
            },
            {
                "id": 6,
                "categoria": 2,
                "titulo": "Kindle",
                "descripcion": "Color negro. Con regulación de luz",
                "estado": "Perfecto estado",
                "precio": 65.50,
                "show": false,
                "foto": "../../assets/fotos/kindle.png"
            },
            {
                "id": 7,
                "categoria": 3,
                "titulo": "Mesa 50x50",
                "descripcion": "Color madera. Sin apenas uso",
                "precio": 20.49,
                "show": false,
                "foto": "../../assets/fotos/mesa.jpg"
            },
            {
                "id": 8,
                "categoria": 3,
                "titulo": "Set de tazas Dragon Ball",
                "descripcion": "10 tazas tamaño estándar",
                "precio": 50,
                "show": false,
                "foto": "../../assets/fotos/tazas.png"
            }
        ];
        this.errorMessages = {
            titulo: [
                { type: 'required', message: 'Campo obligatorio' },
                { type: 'maxlength', message: 'No puede tener más de 30 caracteres' },
            ],
            descripcion: [
                { type: 'maxlength', message: 'No puede tener más de 100 caracteres' },
            ],
            precio: [
                { type: 'required', message: 'Campo obligatorio' },
                { type: 'pattern', message: 'Inserte un número decimal positivo' }
            ],
            enteroPositivo: [
                { type: 'pattern', message: 'Inserte un número entero positivo' }
            ]
        };
        this.generalForm = this._formBuilder.group({
            titulo: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(30)]],
            descripcion: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(100)],
            precio: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern('^[0-9]+(\.[0-9]{1,2})?$')]]
        });
        this.motorForm = this._formBuilder.group({
            tipologia: [''],
            kilometraje: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern('[0-9]{0,}')],
            anyo: ['']
        });
        this.inmobiliariaForm = this._formBuilder.group({
            metros: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern('[0-9]{0,}')],
            habitaciones: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern('[0-9]{0,}')],
            localidad: ['']
        });
        this.tecnologiaForm = this._formBuilder.group({
            estado: [''],
        });
        this.returnpath = "";
    }
    Object.defineProperty(InsertarPage.prototype, "titulo", {
        //GENERAL
        get: function () {
            return this.generalForm.get('titulo');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InsertarPage.prototype, "descripcion", {
        get: function () {
            return this.generalForm.get('descripcion');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InsertarPage.prototype, "precio", {
        get: function () {
            return this.generalForm.get('precio');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InsertarPage.prototype, "tipologia", {
        //MOTOR
        get: function () {
            return this.motorForm.get('tipologia');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InsertarPage.prototype, "kilometraje", {
        get: function () {
            return this.motorForm.get('kilometraje');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InsertarPage.prototype, "anyo", {
        get: function () {
            return this.motorForm.get("anyo");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InsertarPage.prototype, "metros", {
        //INMOBILIARIA
        get: function () {
            return this.inmobiliariaForm.get("metros");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InsertarPage.prototype, "habitaciones", {
        get: function () {
            return this.inmobiliariaForm.get("habitaciones");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InsertarPage.prototype, "localidad", {
        get: function () {
            return this.inmobiliariaForm.get("localidad");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InsertarPage.prototype, "estado", {
        //TECNOLOGIA
        get: function () {
            return this.tecnologiaForm.get("estado");
        },
        enumerable: true,
        configurable: true
    });
    InsertarPage.prototype.insert = function (categoria) {
        if (!this.generalForm.valid || !this.motorForm.valid || !this.inmobiliariaForm.valid) {
            this.errorToast();
        }
        else {
            var articulo = void 0;
            switch (categoria) {
                case 0:
                    var anyo = "";
                    if (this.anyo.value != null) {
                        anyo = this.anyo.value.substr(0, 4);
                    }
                    articulo = {
                        "id": this.articulos.length + 1,
                        "categoria": this.categoria,
                        "titulo": this.titulo.value,
                        "descripcion": this.descripcion.value,
                        "tipologia": this.tipologia.value,
                        "kilometraje": this.kilometraje.value,
                        "anyo": anyo,
                        "precio": this.precio.value,
                        "show": false,
                        "foto": this.returnpath
                    };
                    break;
                case 1:
                    articulo = {
                        "id": this.articulos.length + 1,
                        "categoria": this.categoria,
                        "titulo": this.titulo.value,
                        "descripcion": this.descripcion.value,
                        "metros": this.metros.value,
                        "habitaciones": this.habitaciones.value,
                        "localidad": this.localidad.value,
                        "precio": this.precio.value,
                        "show": false,
                        "foto": this.returnpath
                    };
                    break;
                case 2:
                    articulo = {
                        "id": this.articulos.length + 1,
                        "categoria": this.categoria,
                        "titulo": this.titulo.value,
                        "descripcion": this.descripcion.value,
                        "estado": this.estado.value,
                        "precio": this.precio.value,
                        "show": false,
                        "foto": this.returnpath
                    };
                    break;
                case 3:
                    articulo = {
                        "id": this.articulos.length + 1,
                        "categoria": this.categoria,
                        "titulo": this.titulo.value,
                        "descripcion": this.descripcion.value,
                        "precio": this.precio.value,
                        "show": false,
                        "foto": this.returnpath
                    };
                    break;
            }
            console.log(articulo);
            this.articulos.push(articulo);
            this.okToast();
            this.motorForm.reset();
            this.generalForm.reset();
            this.tecnologiaForm.reset();
            this._quicktradeservice.insertar(articulo);
        }
    };
    /*
    pickFile(){
      this._fileChooser.open().then((fileuri) => {
        this._filePath.resolveNativePath(fileuri).then((resolvednativepath)=>{
          this.returnpath = resolvednativepath;
        })
      })
    }
    */
    InsertarPage.prototype.okToast = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var toast;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._toastController.create({
                            message: '¡Artículo añadido!',
                            duration: 1500,
                            color: "success"
                        })];
                    case 1:
                        toast = _a.sent();
                        toast.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    InsertarPage.prototype.errorToast = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var toast;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._toastController.create({
                            message: '¡Ups! Algo ha fallado. Compruebe los campos de nuevo',
                            duration: 1500,
                            color: "warning"
                        })];
                    case 1:
                        toast = _a.sent();
                        toast.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    InsertarPage.prototype.selectCategoria = function (tipo) {
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
    };
    InsertarPage.prototype.show = function (id) {
        for (var _i = 0, _a = this.articulos; _i < _a.length; _i++) {
            var item = _a[_i];
            if (item.id == id) {
                item.show = !item.show;
                break;
            }
        }
    };
    InsertarPage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
        { type: _services_quicktrade_service__WEBPACK_IMPORTED_MODULE_4__["QuicktradeService"] }
    ]; };
    InsertarPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-insertar',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./insertar.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/insertar/insertar.page.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./insertar.page.scss */ "./src/app/insertar/insertar.page.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _services_quicktrade_service__WEBPACK_IMPORTED_MODULE_4__["QuicktradeService"]])
    ], InsertarPage);
    return InsertarPage;
}());



/***/ })

}]);
//# sourceMappingURL=insertar-insertar-module.js.map