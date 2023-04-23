import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './Pages/error/error.component';
import { AppComponent } from './app.component';
import { CrudComponent } from './Pages/crud/crud.component';
import { EditarComponent } from './Pages/editar/editar.component';


const routes: Routes = [
  { path: '', redirectTo: '/crud', pathMatch: 'full' },
  {path:'error/:id', component: ErrorComponent},
  {path:'home',component: AppComponent},
  {path:'crud',component: CrudComponent},
  {path:'crud/edit/:id',component: EditarComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
