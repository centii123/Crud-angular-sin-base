import { Component } from '@angular/core';
import { CrudService } from '../services/crud.service';
import { Animal } from '../interfaces/animal';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CrudComponent  {

  public ListAnimales:Animal[]=[]
  public animal:string=""

  constructor(private crudService:CrudService, private routes:Router){}

  ngOnInit(): void {
    console.log(this.animal)
    this.ListAnimales=this.crudService.getListAnimal()
  }

  agregarAnimal(){
    this.crudService.agregar(this.animal)
    this.animal=""
    this.ListAnimales=this.crudService.getListAnimal()
  }

  borrar(ids:any){
    /*let div=document.getElementById('PEditar') as HTMLDivElement

    div.classList.add("active")*/
    this.ListAnimales=this.crudService.getListAnimal()

    for (let i = 0; i < this.ListAnimales.length; i++) {
      if(this.ListAnimales[i].id==ids){
        this.ListAnimales.splice(i,1)
      }
    }
    localStorage.setItem('animales',JSON.stringify(this.ListAnimales))
  }

  editar(id:number){
    this.routes.navigate([`crud/edit/${id}`])
  }

  

}
