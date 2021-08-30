import { Component } from '@angular/core';


@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent {

  heroes:string[]=['Spiderman','Ironman','Hulk','Thor'];
  heroeBorrado:string[]=[];

  borrarHeroe():void{
 
    const heroeborradoindividual=this.heroes.shift()||'';
    this.heroeBorrado.push(heroeborradoindividual);
    console.log(heroeborradoindividual);
  }



}
