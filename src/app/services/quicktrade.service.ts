import { Injectable } from '@angular/core';
import { IArticulo, IMotor, IInmobiliaria, ITecnologia } from '../interfaces';
import { AngularFireDatabase } from '@angular/fire/database';
import { EmailValidator } from '@angular/forms';
import { ɵangular_packages_platform_browser_platform_browser_d } from '@angular/platform-browser';

@Injectable()

export class QuicktradeService {

  articulos: (IArticulo | IMotor | IInmobiliaria | ITecnologia)[] = [];
  articulo: (IArticulo | IMotor | IInmobiliaria | ITecnologia);

  constructor(private _db: AngularFireDatabase) { }

  getProductos(): firebase.database.Reference {
    let ref = this._db.database.ref("articulos");
    ref.orderByKey().on("child_added", function (snapshot) {
    });
    return ref;
  }

  getAllProductos() {
    this.articulos = [];
    let ref = this._db.database.ref("articulos")
    ref.on("value", snapshot => {
      snapshot.forEach(child => {
        let value = child.val();
        this.articulos.push(value);
      })
    })
    return this.articulos;
  }

  getProductosByCategoria(categoria: string) {
    this.articulos = [];
    let ref = this._db.database.ref("articulos")
    ref.orderByChild("categoria").equalTo(categoria).on("value", snapshot => {
      snapshot.forEach(child => {
        let value = child.val();
        this.articulos.push(value);
      })
    })
    return this.articulos;
  }

  getProductosByUsuario(id_usuario: string) {
    this.articulos = [];
    let ref = this._db.database.ref("articulos")
    ref.orderByChild("usuario").equalTo(id_usuario).on("value", snapshot => {
      snapshot.forEach(child => {
        let value = child.val();
        this.articulos.push(value);
      })
    })
    return this.articulos;
  }

  getProductosByUsuario_Categoria(id_usuario: string, categoria: string) {
    this.articulos = [];
    let ref = this._db.database.ref("articulos")
    ref.orderByChild("usuario").equalTo(id_usuario).on("value", snapshot => {
      snapshot.forEach(child => {
        let value = child.val();
        if (value.categoria === categoria) {
          this.articulos.push(value);
        }
      })
    })
    return this.articulos;
  }

  getProductoByClave(clave: string): (IArticulo | IMotor | IInmobiliaria | ITecnologia) {
    let ref = this.getProductos();
    ref.orderByKey().equalTo(clave).on('value', snapshot => {
      this.articulo = snapshot.val();
    })
    return this.articulo;
  }

  setArticulo(articulo) {
    let ref = this._db.database.ref("articulos");
    let clave = ref.push(articulo);
    return clave.key;
  }

  setUsuario(email: string, password: string, nombre: string, uid: string) {
    let ref = this._db.database.ref("usuarios");
    ref.child(uid).set({
      email: email,
      id: uid,
      nombre: nombre,
      password: password
    })
  }

  getUsuarios(): firebase.database.Reference {
    let ref = this._db.database.ref("usuarios");
    ref.orderByKey().once("child_added", function (snapshot) {
    });
    return ref;
  }



}