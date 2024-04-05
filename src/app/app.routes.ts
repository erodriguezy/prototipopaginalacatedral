import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path:'pagina-web',
    loadComponent: ()=> import('./pagina-web/pagina-web.component'),
    children:[
      {
        path:'inicio',
        title:'Inicio',
        loadComponent: ()=> import('./pagina-web/pages/inicio/inicio.component'),
      },
      {
        path:'grupos',
        title:'Grupos',
        loadComponent: ()=> import('./pagina-web/pages/grupos/grupos.component'),
      },
      {
        path:'horarios',
        title:'Horarios',
        loadComponent: ()=> import('./pagina-web/pages/horarios/horarios.component'),
      },
      {
        path:'parroquia',
        title:'Parroquia',
        loadComponent: ()=> import('./pagina-web/pages/parroquia/parroquia.component'),
      },
      {
        path:'sacramentos',
        title:'Sacramentos',
        loadComponent: ()=> import('./pagina-web/pages/sacramentos/sacramentos.component'),
      },
      {
        path:'',
        redirectTo:'inicio',
        pathMatch:'full'
      }
    ]
  },
  {
    path:'',
    redirectTo:'pagina-web',
    pathMatch:'full',

  }
];
