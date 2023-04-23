import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CrudService } from '../services/crud.service';
import { Animal } from '../interfaces/animal';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css','./../crud/crud.component.css']
})
export class EditarComponent implements OnInit {

  public animal:string = ""
  private listaAnimales:Animal[] | undefined;
  private urlId:number | undefined;


  constructor(private router:Router, private params:ActivatedRoute, private crudService:CrudService){}

  ngOnInit(): void {
  this.obtener()
  }

  getParametro(){
    this.params.paramMap.subscribe(e=>{
      this.urlId = Number(e.get('id'))
      
    })

    return this.urlId
  }

  editar(){
    this.listaAnimales = this.crudService.getListAnimal();


    let urlParm=this.getParametro()

    if(this.listaAnimales){
      for (let i = 0; i < this.listaAnimales.length; i++) {
        if(urlParm==this.listaAnimales[i].id){
          this.listaAnimales[i].nombre = this.animal
        }
      }
    }

    localStorage.setItem('animales',JSON.stringify(this.listaAnimales))
    this.router.navigate(['/crud'])

  }

  obtener(){
    this.listaAnimales = this.crudService.getListAnimal()
    let urlParm=this.getParametro()

    if(this.listaAnimales){
      for (let i = 0; i < this.listaAnimales.length; i++) {
        if(urlParm==this.listaAnimales[i].id){
          this.animal= this.listaAnimales[i].nombre 
        }
      }
    }
  }

  regresar(){
    this.router.navigate(['/crud'])
  }

  
}
