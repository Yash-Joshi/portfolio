import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BlogsComponent } from './blogs/blogs.component';
import { MailComponent } from './mail/mail.component';
import { ProjectLinksComponent } from './project-links/project-links.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot([
    {path: '', component: HomeComponent},
    {path: 'blogs', component: BlogsComponent},
    {path: 'email', component: MailComponent},
    {path: 'projects', component: ProjectLinksComponent}
  ])],
  exports: [RouterModule]
})
export class AppRoutingModule { }
