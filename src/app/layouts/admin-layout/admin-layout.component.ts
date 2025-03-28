import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MatSidenavModule} from '@angular/material/sidenav';
//import { AdminSidenavComponent } from './admin-sidenav/admin-sidenav.component';
// import { AdminTopmenuComponent } from './admin-topmenu/admin-topmenu.component';

 import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-admin-layout',
  imports: [RouterOutlet,MatSidenavModule,
    MatIconModule,MatButtonModule,MatToolbarModule,RouterLink
  ],
  templateUrl: './admin-layout.component.html',
  styleUrl: './admin-layout.component.css'
})
export class AdminLayoutComponent {

}
