import { Component, inject } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';
import { FormsModule } from '@angular/forms';

import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  imports: [MatCardModule,MatFormFieldModule,MatInputModule,MatButtonModule,MatDividerModule,
    FormsModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent  {

  apiUrl: string = 'http://localhost:4001';
  http = inject(HttpClient);
  constructor(private router: Router) {}

  formData = {
    email: '',
    password: ''
  };

  onSubmit():void {
   this.http.post(`${this.apiUrl}/login` , this.formData).subscribe((res:any)=>{
    console.log(res)
    if(res.err==0){
      localStorage.setItem('log_user', JSON.stringify(res.result))
      this.router.navigate(['/admin']);

    }else{
      alert('Please enter valid email or password!')
    }
   })
  }


}
