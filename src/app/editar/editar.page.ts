import { Component, OnInit, NgZone } from '@angular/core';
import { IArticulo, IMotor, IInmobiliaria, ITecnologia } from '../interfaces';
import { ToastController } from '@ionic/angular';
import { FormBuilder, Validators } from '@angular/forms';
import { QuicktradeService } from '../services/quicktrade.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-editar',
  templateUrl: 'editar.page.html',
  styleUrls: ['editar.page.scss'],
})
export class EditarPage implements OnInit {

  clave: string = "";
  id_usuario: string = "";
  articulo: (IArticulo | ITecnologia | IInmobiliaria | IMotor);
  categoria;

  generalForm = this._fb.group({
    titulo: [''],
    descripcion: [''],
    precio: [''],
  })

  motorForm = this._fb.group({
    tipologia: [''],
    kilometraje: [''],
    anyo: ['']
  });

  inmobiliariaForm = this._fb.group({
    metros: [''],
    habitaciones: [''],
    localidad: ['']
  })

  tecnologiaForm = this._fb.group({
    estado: [''],
  })

  //GENERAL
  get titulo() {
    return this.generalForm.get('titulo');
  }
  get descripcion() {
    return this.generalForm.get('descripcion');
  }
  get precio() {
    return this.generalForm.get("precio");
  }
  //MOTOR
  get tipologia() {
    return this.motorForm.get('tipologia');
  }
  get kilometraje() {
    return this.motorForm.get('kilometraje');
  }
  get anyo() {
    return this.motorForm.get("anyo")
  }
  //INMOBILIARIA
  get metros() {
    return this.inmobiliariaForm.get("metros")
  }
  get habitaciones() {
    return this.inmobiliariaForm.get("habitaciones")
  }
  get localidad() {
    return this.inmobiliariaForm.get("localidad")
  }
  //TECNOLOGIA
  get estado() {
    return this.tecnologiaForm.get("estado")
  }


  public errorMessages = {
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
  }

  constructor(
    private _fb: FormBuilder,
    private _quicktradeservice: QuicktradeService,
    private _activatedRoute: ActivatedRoute,
    private _toastController: ToastController) { }

  ngOnInit() {
    this.clave = this._activatedRoute.snapshot.params.clave;
    this.id_usuario = this._activatedRoute.snapshot.params.id;

    let ref = this._quicktradeservice.getProductos();
    ref.orderByKey().equalTo(this.clave).once('value', snapshot => {
      snapshot.forEach(child => {
        let value = child.val();
        this.articulo = value;
        this.categoria = value.categoria;
        this.generalForm = this._fb.group({
          titulo: [value.titulo, [Validators.required, Validators.maxLength(30)]],
          descripcion: [value.descripcion, Validators.maxLength(100)],
          precio: [value.precio, [Validators.required, Validators.pattern('^[0-9]+(\.[0-9]{1,2})?$')]],
        })
        switch (value.categoria) {
          case "0":
            this.motorForm = this._fb.group({
              tipologia: [value.tipologia],
              kilometraje: [value.kilometraje, Validators.pattern('[0-9]{0,}')],
              anyo: [value.anyo]
            });
            break;
          case "1":
            this.inmobiliariaForm = this._fb.group({
              metros: [value.metros, Validators.pattern('[0-9]{0,}')],
              habitaciones: [value.habitaciones, Validators.pattern('[0-9]{0,}')],
              localidad: [value.localidad]
            });
            break;
          case "2":
            this.tecnologiaForm = this._fb.group({
              estado: [value.estado]
            });
            break;
        }
      })
    })
  }

  modificarArticulo() {
    if (!this.generalForm.valid || !this.inmobiliariaForm.valid || !this.motorForm.valid || !this.tecnologiaForm.valid) {
      this.errorToast();
    } else {
      let ref = this._quicktradeservice.getProductos();
      ref.orderByKey().equalTo(this.clave).on("value", snapshot => {
        snapshot.forEach(child => {
          let clave = child.key;
          ref.child(clave).child('titulo').set(this.generalForm.get('titulo').value);
          ref.child(clave).child('descripcion').set(this.generalForm.get('descripcion').value);
          ref.child(clave).child('precio').set(this.generalForm.get('precio').value);
          switch (this.categoria) {
            case "0":
              let anyo = ""
              if (this.motorForm.get('anyo').value != null) {
                anyo = this.anyo.value.substr(0, 4);
              }
              ref.child(clave).child('tipologia').set(this.motorForm.get('tipologia').value);
              ref.child(clave).child('kilometraje').set(this.motorForm.get('kilometraje').value);
              ref.child(clave).child('anyo').set(anyo);
              break;
            case "1":
              ref.child(clave).child('metros').set(this.inmobiliariaForm.get('metros').value);
              ref.child(clave).child('habitaciones').set(this.inmobiliariaForm.get('habitaciones').value);
              ref.child(clave).child('localidad').set(this.inmobiliariaForm.get('localidad').value);
              break;
            case "2":
              ref.child(clave).child('estado').set(this.tecnologiaForm.get('estado').value);
              break;
          }
        })
      });
      this.okToast();
    }
  }

  async okToast() {
    const toast = await this._toastController.create({
      message: '¡Artículo modificado!',
      duration: 1500,
      color: "success"
    });
    toast.present();
  }

  async errorToast() {
    const toast = await this._toastController.create({
      message: '¡Ups! Algo ha fallado. Compruebe los campos de nuevo',
      duration: 1500,
      color: "warning"
    });
    toast.present();
  }

}