import { Component } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';
import {MatBadgeModule} from '@angular/material/badge';
import {MatListModule} from '@angular/material/list';


@Component({
  selector: 'app-mainpage',
  imports: [MatIconModule,MatCardModule,MatButtonModule,MatDividerModule,MatBadgeModule,MatListModule],
  templateUrl: './mainpage.component.html',
  styleUrl: './mainpage.component.css'
})
export class MainpageComponent {

}
