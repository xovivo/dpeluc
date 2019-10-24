import { Component, OnInit } from '@angular/core';
import { ChatService } from 'src/app/providers/chat.service';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {

  mensaje = '';
  elemento: any;


  constructor( public _cs: ChatService ) {

    this._cs.cargarMensajes()
            .subscribe( () => {

              setTimeout( () => {
                this.elemento.scrollTop = this.elemento.scrollHeight;
              }, 20);


            });

  }

  ngOnInit(){
    this.elemento = document.getElementById('app-mensajes');
  }



  enviar_mensaje(){
    console.log( this.mensaje );

    if( this.mensaje.length === 0 ){
      return;
    }

    this._cs.agregarMensaje( this.mensaje )
            .then( () => this.mensaje = '' )
            .catch( (err) => console.error('Error al enviar',  err ) );



  }

}
