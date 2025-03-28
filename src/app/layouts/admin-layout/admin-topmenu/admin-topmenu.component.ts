import { Component } from '@angular/core';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';

@Component({
  selector: 'app-admin-topmenu',
  imports: [MatSidenavModule,MatIconModule,MatButtonModule,MatToolbarModule],
  //imports:[],
  templateUrl: './admin-topmenu.component.html',
  styleUrl: './admin-topmenu.component.css'
})
export class AdminTopmenuComponent {

}
