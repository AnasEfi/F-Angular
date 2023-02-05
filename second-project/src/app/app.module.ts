import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule, NoPreloading } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { NotFoundComponent } from './not-found/not-found.component';

const appRoutes: Routes=[
{ path: '', component: HomeComponent},
{ path: 'about', component: AboutComponent},
// { path: '**', component: NotFoundComponent}
{ path: '**', redirectTo: '/'} // Перенаправление

];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
