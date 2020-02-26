import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuicktradeService } from '../services/quicktrade.service';
import { IArticulo, IMotor, IInmobiliaria, ITecnologia } from '../interfaces';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.page.html',
  styleUrls: ['./buscar.page.scss'],
})
export class BuscarPage implements OnInit {

  id_usuario: string;
  articulos: (IArticulo | IMotor | IInmobiliaria | ITecnologia)[] = [];
  filterText: string;

  constructor(private _activatedRoute: ActivatedRoute, private _quicktradeservice: QuicktradeService) { }

  ngOnInit() {
    //CARGA EL ID DE USUARIO EN LA PAGINA
    this.id_usuario = this._activatedRoute.snapshot.paramMap.get("id");
    //this.articulos = this._quicktradeservice.getAllProductos();
  }
//BUSCA UN ARTÍCULO EN BASE A SU TÍTULO (include)
  buscar(texto){
    this.articulos = this._quicktradeservice.getAllProductos();
    let nuevosarticulos = this.articulos.filter(d => d.titulo.includes(texto));
    this.articulos = nuevosarticulos;
    this.save(texto, this.id_usuario)
  }
//SACA TODOS LOA ARTÍCULOS Y VACÍA EL CAMPO DE BÚSQUEDA
  all(){
    this.articulos = this._quicktradeservice.getAllProductos();
    this.filterText = "";
  }
//GUARDA EN UN NUEVO NODO BÚSQUEDAS, DENTRO DEL CLIENTE QUE ESTÉ LOGUEADO EN ESE MOMENTO
  save(busqueda, id_usuario) {
    let ref = this._quicktradeservice.getUsuarios();
    ref.child(id_usuario).child("busquedas").push(busqueda);
  }

}
