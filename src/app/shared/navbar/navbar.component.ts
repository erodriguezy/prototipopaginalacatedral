import { Component } from '@angular/core';
import { MaterialModule } from '../../material/material.module';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'shared-navbar',
  standalone: true,
  imports: [MaterialModule, RouterModule, CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {



}
