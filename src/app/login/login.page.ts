import { Component, OnInit, NgZone } from '@angular/core';
import { QuicktradeService } from '../services/quicktrade.service'
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import * as firebase from 'firebase';
import { Observable } from 'rxjs';



@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  email: string = "pepe@hotmail.com";
  password: string = "pepito1";

  usuario_registro: string;
  email_registro: string;
  password_registro: string;

  id_usuario: string = "";

  user: Observable<firebase.User>;

  constructor(
    private _quicktradeservice: QuicktradeService,
    private _route: Router,
    private ngZone: NgZone,
    private _toastController: ToastController,
    private _afAuth: AngularFireAuth) { }


  ngOnInit() {
  }

  //revisar con el auth
  /*
  check() {
    let ref = this._quicktradeservice.getUsuarios();
    ref.orderByChild("nombre").equalTo(this.email).once("value", snapshot => {
      if (snapshot.exists() && this.password !== "") {
        snapshot.forEach(child => {
          this.id_usuario = child.val().id;
        })
        this.ngZone.run(() => this._route.navigate(['/home', this.id_usuario])).then();
      } else {
        this.errorToast("Jk");
      }
    });
  }
  */

  login(){
    this._afAuth.auth.signInWithEmailAndPassword(this.email, this.password).then(
      value => {
        console.log("Credenciales correctas", value);
        this.ngZone.run(() => this._route.navigate(['/home', value.user.uid])).then();
      }
    ).catch(err => {
      this.errorToast(err.message);
    })
  }

  registrar() {
    this._afAuth.auth.createUserWithEmailAndPassword(this.email_registro, this.password_registro).then(
      value => {
        this.okToast("Usuario registrado");
        this._quicktradeservice.setUsuario(this.email_registro, this.password_registro, this.usuario_registro, value.user.uid);
        
      }
    ).catch( err => {
      this.errorToast(err.message);
    })

  }

  async errorToast(mensaje: string) {
    const toast = await this._toastController.create({
      message: 'ERROR: '+mensaje,
      duration: 1500,
      color: "warning"
    });
    toast.present();
  }

  async okToast(mensaje: string) {
    const toast = await this._toastController.create({
      message: 'BIEN!: '+mensaje,
      duration: 1500,
      color: "success"
    });
    toast.present();
  }

}
