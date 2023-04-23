import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent implements OnInit{
  private numParam!: number;
  private idParam!:any;

  constructor(private parametros:ActivatedRoute){}
  ngOnInit(): void {
    this.num()
    
  }

  num():void{
   this.parametros.queryParams.subscribe(p=>{
      this.numParam=p['num']
      
    })
    console.log(typeof this.numParam ) //http://localhost:4200/error?num=20 imprime 20 tipo string

    this.parametros.paramMap.subscribe(p=>{
      this.idParam=p.get('id')
    })
    console.log(typeof this.idParam) //http://localhost:4200/error/1 imprime 1 tipo string
  }

  id():void{

  }

}
