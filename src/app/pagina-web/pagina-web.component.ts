import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../material/material.module';
import { BannerComponent } from '../shared/banner/banner.component';
import { NavbarComponent } from '../shared/navbar/navbar.component';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-pagina-web',
  standalone: true,
  imports: [
    RouterModule,
    MaterialModule,
    BannerComponent,
    NavbarComponent,
    CommonModule
  ],
  templateUrl: './pagina-web.component.html',
  styleUrl: './pagina-web.component.css'
})
export default class PaginaWebComponent {

}
