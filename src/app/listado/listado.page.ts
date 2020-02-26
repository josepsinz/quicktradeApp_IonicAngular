import { Component, OnInit, NgZone } from '@angular/core';
import { IArticulo, IMotor, IInmobiliaria, ITecnologia } from '../interfaces';
import { QuicktradeService } from '../services/quicktrade.service'
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.page.html',
  styleUrls: ['./listado.page.scss'],
})
export class ListadoPage implements OnInit {

  categoria: number;
  categorias = [{ name: "Motor", icon: "car", select: false }, { name: "Inmobiliaria", icon: "home", select: false }, { name: "Tecnología", icon: "hammer", select: false }, { name: "Hogar", icon: "desktop", select: false }, { name: "Todos", icon: "logo-tumblr", select: false }];
  articulos: (IArticulo | IMotor | IInmobiliaria | ITecnologia)[] = [];
  id_usuario: string;

  constructor(
    private _quicktradeservice: QuicktradeService,
    private _activatedRoute: ActivatedRoute,
    private _route: Router,
    private ngZone: NgZone,
    private _alertCtrl: AlertController) { }

  ngOnInit() {
    this.id_usuario = this._activatedRoute.snapshot.paramMap.get("id");
    this.articulos = this._quicktradeservice.getAllProductos();
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
      this.articulos = this._quicktradeservice.getAllProductos();
    } else {
      this.articulos = this._quicktradeservice.getProductosByCategoria(tipo);
    }
  }

  verDetalles(clave) {
    this.ngZone.run(() => this._route.navigate(['/detalles', clave, this.id_usuario])).then();
  }

}
