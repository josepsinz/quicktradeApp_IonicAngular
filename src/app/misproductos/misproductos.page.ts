import { Component, OnInit, NgZone, AfterViewInit } from '@angular/core';
import { QuicktradeService } from '../services/quicktrade.service';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { IArticulo, IMotor, IInmobiliaria, ITecnologia } from '../interfaces';

@Component({
  selector: 'app-misproductos',
  templateUrl: './misproductos.page.html',
  styleUrls: ['./misproductos.page.scss'],
})
export class MisproductosPage implements OnInit {


  categoria;
  id_usuario: string;
  nombre_usuario: string;

  categorias = [{ name: "Motor", icon: "car", select: false }, { name: "Inmobiliaria", icon: "home", select: false }, { name: "Tecnología", icon: "hammer", select: false }, { name: "Hogar", icon: "desktop", select: false }, { name: "Todos", icon: "logo-tumblr", select: false }];
  articulos: (IArticulo | IMotor | IInmobiliaria | ITecnologia)[] = [];

  constructor(
    private _quicktradeservice: QuicktradeService,
    private _activatedRoute: ActivatedRoute,
    private _route: Router,
    private ngZone: NgZone) {

    this._activatedRoute.params.subscribe(
      (params: Params) => {
        this.id_usuario = params["id"];
        this.articulos = this._quicktradeservice.getProductosByUsuario(this.id_usuario);
      }
    );
  }

  ngOnInit() {
    this.id_usuario = this._activatedRoute.snapshot.paramMap.get("id");
    //this.articulos = this._quicktradeservice.getProductosByUsuario(this.id_usuario);

    let ref = this._quicktradeservice.getUsuarios();
    ref.orderByKey().equalTo(this.id_usuario).on("value", snapshot => {
      snapshot.forEach(child => {
        let nombre = child.val().nombre;
        this.nombre_usuario = nombre;
      })
    })
  }

  eliminar(id_articulo) {
    let ref = this._quicktradeservice.getProductos();
    ref.orderByChild("clave").equalTo(id_articulo).once("value", snapshot => {
      snapshot.forEach(child => {
        let clave = child.key;
        ref.child(clave).remove()
        this.articulos = this._quicktradeservice.getProductosByUsuario(this.id_usuario);
      })
    })
  }

  selectCategoria(tipo) {
    this.categoria = tipo;
    if (!this.categorias[tipo].select) {
      for (let i in this.categorias) {
        if (this.categorias[i] == this.categorias[tipo]) {
          this.categorias[i].select = !this.categorias[i].select
        } else {
          this.categorias[i].select = false
        }
      }
    }
    tipo = this.categoria.toString();
    if (tipo === "4") {
      this.articulos = this._quicktradeservice.getProductosByUsuario(this.id_usuario);
    } else {
      this.articulos = this._quicktradeservice.getProductosByUsuario_Categoria(this.id_usuario, tipo);
    }
  }

  editarProducto(clave) {
    //this.articulos = [];
    this.ngZone.run(() => this._route.navigate(['/editar', clave, this.id_usuario])).then();
  }

}
