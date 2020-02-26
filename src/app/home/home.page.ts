import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuicktradeService } from '../services/quicktrade.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  nombre_usuario: string;
  id_usuario: string;

  constructor(private _activatedRoute: ActivatedRoute, private _quicktradeservice: QuicktradeService) { }

  ngOnInit() {
    this.id_usuario = this._activatedRoute.snapshot.paramMap.get("id");
    let ref = this._quicktradeservice.getUsuarios();
    ref.orderByChild("id").equalTo(this.id_usuario).once('value', snapshot => {
      snapshot.forEach(child => {
        this.nombre_usuario = child.val().nombre;
      })
    })
  }

}
