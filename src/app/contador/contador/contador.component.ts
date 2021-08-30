import {Component} from '@angular/core';

@Component({
    selector:'app-contador',
    template: `
            <H1>{{titulo}} </H1>
            <h3> La base es:<strong>{{base}}</strong></h3>


            <button (click)="acumular(base)">+{{base}}</button>
            <span>{{numero}} </span>
            <button (click)="acumular(-base)">-{{base}}</button>
    
        `
})
export class ContadorComponent{
    titulo = 'Contadorapp';
    numero:number=10;
    base:number=8;
    acumular(valor:number){
      this.numero+=valor;
    }


}