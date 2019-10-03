import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { routing, appRoutingProviders} from './app.routing';
import { CuestionarioComponent } from './components/cuestionario/cuestionario.component';
import { BlockUIModule } from 'ng-block-ui';
import { FormsModule } from '@angular/forms';
import { EnrolamientoService } from './services/enrolamiento.service';
import { HttpClientModule }  from '@angular/common/http';
import { ValidatokenComponent } from './components/validatoken/validatoken.component';


@NgModule({
  declarations: [
    AppComponent,
    CuestionarioComponent,
    ValidatokenComponent
  ],
  imports: [
    routing,
    BrowserModule,
    BlockUIModule.forRoot(),
    FormsModule,
    HttpClientModule
  ],
  providers: [
    appRoutingProviders,
    EnrolamientoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
