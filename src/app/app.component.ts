import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'bytebank';
  transferencias: any[] = [];

  transferir($event){
    const transferencia = {...$event, data: new Date()}; //apenas os objetos internos de evento são passados para transferencia
    this.transferencias.push(transferencia);
  }
}
