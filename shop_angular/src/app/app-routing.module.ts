import { Routes, RouterModule } from "@angular/router";
import { LoginComponent } from "./login/login.component";
import { HomeComponent } from "./home/home.component";
import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'home', component: HomeComponent,
    children: [
      {
        path: "menu",
        loadChildren: 'app/middle-section/middle-section.module#MiddleSectionModule',
        data: { preload: true}
      }]
  }
];

 @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule {
}