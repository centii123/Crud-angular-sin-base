import { Injectable } from '@angular/core';
import { Animal } from '../interfaces/animal';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  private animales:Animal[] | undefined;
  public espacio:any;

  getListAnimal(){
    return JSON.parse(localStorage.getItem('animales') ?? '[]')
  }

  agregar(animalNuevo: string):void{
    let objetoAnimal:Animal={
      nombre: '',
      id: 0
    }
    objetoAnimal.nombre=animalNuevo
    this.animales=this.getListAnimal()

    let totalAnimales=this.animales?.length

    if(totalAnimales){
      objetoAnimal.id=totalAnimales + 1
    }else{
      objetoAnimal.id=1
    }
    
    
    this.animales?.push(objetoAnimal)
    localStorage.setItem('animales',JSON.stringify(this.animales))

    
  }

  imprimir(){
    /*this.espacio= document.getElementById('animales') as HTMLElement

    this.espacio.innerHTML=""

    this.animales=this.getListAnimal()
    if(this.animales && this.espacio){
      for (let i:number = 0; i < this.animales.length; i++) {
        
        this.espacio.insertAdjacentHTML('beforeend',`
        <div class="opcionAnimal">
                <h4><li class="color">${this.animales[i]}</li></h4>
                <p class="valores">${i}</p>
                <div>
                    <button class="borrar" >Borrar</button>
                    <button class="editar" >Editar</button>
                </div>
        </div>
        `)
      }
    }*/
    
    

    
  }

}
