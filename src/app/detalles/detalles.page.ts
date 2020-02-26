import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuicktradeService } from '../services/quicktrade.service';
import { IArticulo, IMotor, IInmobiliaria, ITecnologia } from '../interfaces';

@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.page.html',
  styleUrls: ['./detalles.page.scss'],
})
export class DetallesPage implements OnInit {

  id_usuario: string;
  clave: string;
  articulo: (IArticulo | IMotor | IInmobiliaria | ITecnologia);

  constructor(private _activatedRoute: ActivatedRoute, private _quicktradeservice: QuicktradeService) { }

  ngOnInit() {
    this.clave = this._activatedRoute.snapshot.params.clave;
    this.id_usuario = this._activatedRoute.snapshot.params.id;

    let ref = this._quicktradeservice.getProductos();
    ref.orderByKey().equalTo(this.clave).once('value', snapshot => {
      snapshot.forEach(child => {
        let value = child.val();
        this.articulo = value;
      })
    })
  }

}

