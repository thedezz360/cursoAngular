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

  constructor() { }

  ngOnInit(): void {
  }

}
