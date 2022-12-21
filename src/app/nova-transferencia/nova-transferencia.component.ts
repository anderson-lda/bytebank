import { Component } from "@angular/core";

@Component({
    selector:'app-nova-transferencia',
    templateUrl:'./nova-transferencia.component.html',
    styleUrls:['./nova-transferencia.component.scss']
})
export class NovaTransferenciaComponent{
    valor: number;
    destino: number;

    transferir(){
        console.log('SOlicitado nova transferencia');
        console.log('destino: '+this.destino);
        console.log('valor: '+this.valor);
    }
}