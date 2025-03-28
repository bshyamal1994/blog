import { Routes } from '@angular/router';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { MainpageComponent } from './layouts/main-layout/mainpage/mainpage.component';
import { AdminDashboardComponent } from './layouts/admin-layout/admin-dashboard/admin-dashboard.component';
import { PostDetailsComponent } from './layouts/main-layout/post-details/post-details.component';
import { LoginComponent } from './layouts/main-layout/login/login.component';
import { ContactComponent } from './layouts/main-layout/contact/contact.component';
import { AddPostComponent } from './layouts/admin-layout/add-post/add-post.component';

export const routes: Routes = [
    {
        path: '',
        component: MainLayoutComponent,
        children: [
          { path: '', component: MainpageComponent },
          { path: 'details', component: PostDetailsComponent },
          { path: 'login', component: LoginComponent },
          { path: 'contact', component: ContactComponent },
        
          // Add more routes as needed
        ]
      },
      {
        path: 'admin',
        component: AdminLayoutComponent,
        children: [
          { path: '', component: AdminDashboardComponent },
          { path: 'add-post', component: AddPostComponent },
          //{ path: '/details', component: post },
          // Add more admin routes as needed
        ]
      }
];
