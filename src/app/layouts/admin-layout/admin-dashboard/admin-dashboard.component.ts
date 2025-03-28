import { Component } from '@angular/core';
//import { RouterOutlet } from '@angular/router';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
//import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-admin-dashboard',
  imports: [MatSidenavModule,MatIconModule,MatButtonModule,MatToolbarModule],
  templateUrl: './admin-dashboard.component.html',
  styleUrl: './admin-dashboard.component.css'
})
export class AdminDashboardComponent {

}
