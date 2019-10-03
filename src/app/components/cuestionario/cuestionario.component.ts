import { Component, OnInit } from '@angular/core';
import { BlockUI, NgBlockUI } from 'ng-block-ui';
import { EnrolamientoService } from '../../services/enrolamiento.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cuestionario',
  templateUrl: './cuestionario.component.html'
})
export class CuestionarioComponent implements OnInit {

  peticionRealizada: boolean;
  erroresEnPeticion: boolean;
  descripcionError: string;

  curp: string;
  correo: string;

  @BlockUI() blockUI: NgBlockUI;

  constructor(
    private enrolamientoService: EnrolamientoService,
    private _route: ActivatedRoute,
    private _router: Router
  ) {
    this.inicializarFormulario();
  }

  inicializarFormulario() {
    this.peticionRealizada = false;
    this.erroresEnPeticion = false;
  }

  ngOnInit() {
  }

  detenerBlockUI() {
    this.blockUI.stop();
  }

  verificarDatosCurpCorreo() {
    this.blockUI.start("Validando CURP espera por favor...");
    console.log("El correo es " + this.correo);
    console.log("El curp es: " + this.curp);

    this.enrolamientoService.getInformacionCurpCorreo(this.curp, this.correo).subscribe(
      response => {
        this.peticionRealizada = true;
      },
      error => {
        this.erroresEnPeticion = true;
        this.peticionRealizada = true;
      },
      () => {
        this.blockUI.stop();
      }
    );

  }

  finalizar(formCuestionario) {
    //this.blockUI.start("Finalizando ...");
    this.curp="";
    this.correo="";
    this.limpiarFormulario(formCuestionario);
  }

  limpiarFormulario(formCuestionario) {
    if(formCuestionario)
      formCuestionario.reset();
    this.inicializarFormulario();
    this.peticionRealizada = false;

     window.scrollTo(0,0)
   }

}
