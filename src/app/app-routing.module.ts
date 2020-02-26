import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },

  { path: 'insertar/:id', loadChildren: () => import('./insertar/insertar.module').then(m => m.InsertarPageModule) },
  {
    path: 'home/:id',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'listado/:id',
    loadChildren: () => import('./listado/listado.module').then(m => m.ListadoPageModule)
  },
  {
    path: 'detalles/:clave/:id',
    loadChildren: () => import('./detalles/detalles.module').then(m => m.DetallesPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then(m => m.LoginPageModule)
  },


  {
    path: 'misproductos/:id',
    loadChildren: () => import('./misproductos/misproductos.module').then(m => m.MisproductosPageModule)
  },
  {
    path: 'editar/:clave/:id',
    loadChildren: () => import('./editar/editar.module').then(m => m.EditarPageModule)
  },
  {
    path: 'buscar/:id',
    loadChildren: () => import('./buscar/buscar.module').then( m => m.BuscarPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
