import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params} from '@angular/router';
import { BlockUI, NgBlockUI } from 'ng-block-ui';
import { EnrolamientoService } from '../../services/enrolamiento.service';

@Component({
  selector: 'validatoken',
  templateUrl: './validatoken.component.html'
})
export class ValidatokenComponent implements OnInit {

  @BlockUI() blockUI: NgBlockUI;
  tokenValidado: boolean;
  conToken: boolean;
  curp: string;
  token: string;
  vigente: boolean;
  pensionado: boolean;
  tipoPension: number;
  anioPension: number;
  password: string;
  passwordR: string;
  celular: number;
  telefono: number;
  otroCorreo: string;

  preguntarVigencia: boolean;
  preguntarPension: boolean;
  preguntarDatosPension: boolean;
  preguntarDatosFinales: boolean;

  constructor(
    private _enrolamientoService: EnrolamientoService,
    private _route: ActivatedRoute,
    private _router: Router
  ) {
    this.tokenValidado = false;
  }

  ngOnInit() {
    this._route.queryParams.subscribe(params => {
      this.curp= params.curp,
      this.token = params.token;
      console.log("el correo es: " + this.curp + " y el token es " + this.token)
      if(this.curp && this.token) {
         this.validaToken();
       } else {
         this.curp= "",
         this.token = "";
         this.tokenValidado = true;
         this.conToken = false;
       }
    })
  }

  validaToken() {
    this.conToken = true;
    this.blockUI.start("Validando informacion del token");
    this._enrolamientoService.validaToken(this.curp, this.token).subscribe(
      response => {
        this.tokenValidado=true;
        this.preguntarVigencia=true;
        this.blockUI.stop();
      }
    )
  }

  verificarVigencia(){
    console.log("Verificar vigencia " + this.vigente);

    if(this.vigente) {
      this.blockUI.start("Validando vigencia espera por favor...");
      this._enrolamientoService.verificarVigencia().subscribe(
        response => {
          this.preguntarPension = true;
          this.blockUI.stop();
        }
      )
    }
  }

  verificarPension() {
    console.log("Verificar pension " + this.pensionado);

    if(this.pensionado) {
      this.blockUI.start("Validando pension espera por favor...");
      this._enrolamientoService.verificarPension().subscribe(
        response => {
          this.preguntarDatosPension = true;
          this.preguntarDatosFinales=true;
          this.blockUI.stop();
        }
      )
    }
  }

  limpiarFormulario(formCuestionario) {
    this.blockUI.start("Cancelando el trámite espera por favor...");
    this._enrolamientoService.verificarPension().subscribe(
      response => {
        this._router.navigate(["/"]);
        this.blockUI.stop();
      }
    )

    /*this.inicializarFormulario();
    formCuestionario.reset();
    window.scrollTo(0,0)*/
  }

  private inicializarFormulario(): void {
    this.preguntarVigencia = false;
    this.preguntarPension = false;
    this.preguntarDatosPension = false;
    this.preguntarDatosFinales = false;

    this.vigente = false;
    this.pensionado = false;
  }

}
