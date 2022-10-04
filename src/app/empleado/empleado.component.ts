import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  //ejemplo html inline
  //template: "<p>aqui iría un empleado</p>",
  styleUrls: ['./empleado.component.css']
  //ejemplo de css inline
  //styles: ["p{background-color : red;}"]
})
export class EmpleadoComponent implements OnInit {

  //creamos propiedades
  nombre : string = "Daniel";
  apellido : string ="Zapata";
  //empresa : string ="Pildoras Informaticas";
  edad :  number = 18;

  //defino funcion para evento
  // setEmpresa(value:String){

  // }

  //property binding
  habilitarInput=false;

  //otro ejemplo de binding
  usuRegistrado=false;

  getRegistroUsuario(){
    this.usuRegistrado=false;
  }

    //getter
  getEdad(){
    return this.edad;
  }

  //para usar con el event binding
  textoDeRegistro="No hay nadie registrado";
  //event se crea automaticamente al utilizar cualquier evento , simplemente lo
  //estamos capturando
  setUsuarioRegistrado(evento:Event){
    //alert("El usuario se acaba de registrar");

    //this.textoDeRegistro="El usuario se acaba de registrar";
    //hacemos un casting del avento a htmlinputElement,
    //aunque el evento provenia de un htmlinputElement
    if((<HTMLInputElement>evento.target).value=="si"){
      this.textoDeRegistro="El usuario se acaba de registrar";
    }else{
      this.textoDeRegistro="No hay nadie registrado";
    }
  }



  constructor() { }

  ngOnInit(): void {
  }

}
