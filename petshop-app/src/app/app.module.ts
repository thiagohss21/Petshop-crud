import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAnalyticsModule } from '@angular/fire/compat/analytics';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import { PetComponent } from './components/pet/pet.component';
import { TutorComponent } from './components/tutor/tutor.component';
import { ServicoComponent } from './components/servico/servico.component';
import { SolicitacaoComponent } from './components/solicitacao/solicitacao.component';
import { PetListComponent } from './components/pet-list/pet-list.component';
import { PetFormComponent } from './components/pet-form/pet-form.component';
import { FormsModule } from '@angular/forms';
import { TutorListComponent } from './components/tutor-list/tutor-list.component';
import { TutorFormComponent } from './components/tutor-form/tutor-form.component';
import { PetService } from './services/pet/pet.service';
import { TutorService } from './services/tutor/tutor.service';
import { CepService } from './services/cep/cep.service';
import { IbgeService } from './services/ibge/ibge.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    PetComponent,
    TutorComponent,
    ServicoComponent,
    SolicitacaoComponent,
    PetListComponent,
    PetFormComponent,
    TutorListComponent,
    TutorFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule
  ],
  providers: [PetService, TutorService, CepService, IbgeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
