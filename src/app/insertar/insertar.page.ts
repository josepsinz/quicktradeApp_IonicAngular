import { Component, OnInit } from '@angular/core';
import { IArticulo, IMotor, IInmobiliaria, ITecnologia } from '../interfaces';
import { ToastController } from '@ionic/angular';
import { FormBuilder, Validators } from '@angular/forms';
import { QuicktradeService } from '../services/quicktrade.service';
import { ActivatedRoute } from '@angular/router';
import { AngularFireStorage } from '@angular/fire/storage';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-insertar',
  templateUrl: 'insertar.page.html',
  styleUrls: ['insertar.page.scss'],
})
export class InsertarPage implements OnInit {

  categoria: number;
  categorias = [{ name: "Motor", icon: "car", select: false }, { name: "Inmobiliaria", icon: "home", select: false }, { name: "Tecnología", icon: "hammer", select: false }, { name: "Hogar", icon: "desktop", select: false }];
  returnpath: string[] = [];
  id_usuario: string;
  nombre_usuario: string;
  returnpaths;
  downloadURL;

  articulos: (IArticulo | IMotor | IInmobiliaria | ITecnologia)[] = [];

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
  get clave() {
    return this.generalForm.get("clave");
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

  generalForm = this._formBuilder.group({
    titulo: ['', [Validators.required, Validators.maxLength(30)]],
    descripcion: ['', Validators.maxLength(100)],
    precio: ['', [Validators.required, Validators.pattern('^[0-9]+(\.[0-9]{1,2})?$')]]
  })

  motorForm = this._formBuilder.group({
    tipologia: ['Coche'],
    kilometraje: ['', Validators.pattern('[0-9]{0,}')],
    anyo: ['']
  });

  inmobiliariaForm = this._formBuilder.group({
    metros: ['', Validators.pattern('[0-9]{0,}')],
    habitaciones: ['', Validators.pattern('[0-9]{0,}')],
    localidad: ['']
  })

  tecnologiaForm = this._formBuilder.group({
    estado: ['Perfecto estado'],
  })

  constructor(
    private _toastController: ToastController,
    private _formBuilder: FormBuilder,
    private _quicktradeservice: QuicktradeService,
    private _activatedRoute: ActivatedRoute,
    private _storage: AngularFireStorage) { }

  ngOnInit() {
    this.id_usuario = this._activatedRoute.snapshot.paramMap.get("id");

    let ref = this._quicktradeservice.getProductos();
    ref.once("value", snapshot => {
      snapshot.forEach(child => {
        let value = child.val();
        this.articulos.push(value);
      })
    })

    let ref2 = this._quicktradeservice.getUsuarios();
    ref2.orderByKey().equalTo(this.id_usuario).on("value", snapshot => {
      snapshot.forEach(child => {
        let nombre = child.val().nombre;
        this.nombre_usuario = nombre;
      })
    })
  }

  uploadPhoto(e) {
    const profile = this.id_usuario;
    const id = Math.random().toString(36).substring(2);
    const file = e.target.files[0];
    const filePath = `uploads/${profile}_${id}`;
    this.returnpaths = filePath;
    const ref = this._storage.ref(filePath);
    const task = this._storage.upload(filePath, file);
    task.snapshotChanges().pipe(
      finalize(() => {
        this.downloadURL = ref.getDownloadURL()
        this.downloadURL.subscribe(url => (this.returnpath.push(url)));
      })
    )
      .subscribe();
    this.okToast2();
  }

  insert(categoria) {
    if (!this.generalForm.valid || !this.motorForm.valid || !this.inmobiliariaForm.valid || !this.tecnologiaForm.valid) {
      this.errorToast();
    } else {
      let articulo: (IArticulo | IMotor | IInmobiliaria | ITecnologia);
      let clave = "";

      console.log("fotos", this.returnpath.length);
      if(this.returnpath.length === 0){
        this.returnpath = [""];
      }
      switch (categoria) {
        case 0:
          let anyo = ""
          if (this.anyo.value != null) {
            anyo = this.anyo.value.substr(0, 4);
          }
          articulo = {
            "id": this.articulos.length + 1,
            "categoria": this.categoria.toString(),
            "titulo": this.titulo.value,
            "descripcion": this.descripcion.value,
            "tipologia": this.tipologia.value,
            "kilometraje": this.kilometraje.value,
            "anyo": anyo,
            "precio": this.precio.value,
            "show": false,
            "foto": this.returnpath,
            "clave": clave,
            "usuario": this.id_usuario
          }
          break;
        case 1:
          articulo = {
            "id": this.articulos.length + 1,
            "categoria": this.categoria.toString(),
            "titulo": this.titulo.value,
            "descripcion": this.descripcion.value,
            "metros": this.metros.value,
            "habitaciones": this.habitaciones.value,
            "localidad": this.localidad.value,
            "precio": this.precio.value,
            "show": false,
            "foto": this.returnpath,
            "clave": clave,
            "usuario": this.id_usuario
          }
          break;
        case 2:
          articulo = {
            "id": this.articulos.length + 1,
            "categoria": this.categoria.toString(),
            "titulo": this.titulo.value,
            "descripcion": this.descripcion.value,
            "estado": this.estado.value,
            "precio": this.precio.value,
            "show": false,
            "foto": this.returnpath,
            "clave": clave,
            "usuario": this.id_usuario
          }
          break;
        case 3:
          articulo = {
            "id": this.articulos.length + 1,
            "categoria": this.categoria.toString(),
            "titulo": this.titulo.value,
            "descripcion": this.descripcion.value,
            "precio": this.precio.value,
            "show": false,
            "foto": this.returnpath,
            "clave": clave,
            "usuario": this.id_usuario
          }
          break;
      }
      this.okToast();
      this.generalForm.reset();
      this.motorForm.reset();
      this.inmobiliariaForm.reset();
      this.tecnologiaForm.reset();

      let key = this._quicktradeservice.setArticulo(articulo);

      articulo.clave = key;

      //COPIAMOS LA CLAVE EN EL NODO "CLAVE"
      let ref = this._quicktradeservice.getProductos();
      ref.child(key).child("clave").set(key);

      this.articulos.push(articulo);
    }
  }

  async okToast() {
    const toast = await this._toastController.create({
      message: '¡Artículo añadido!',
      duration: 1500,
      color: "success"
    });
    toast.present();
  }

  async okToast2() {
    const toast = await this._toastController.create({
      message: '¡Foto añadida!',
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
  }

  show(id) {
    for (let item of this.articulos) {
      if (item.id == id) {
        item.show = !item.show;
        break;
      }
    }
  }

}