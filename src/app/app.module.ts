import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { LocationStrategy, HashLocationStrategy, JsonPipe } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { MaterialModule } from './material.module';
import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';
import { AppComponent } from './components/app/app.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { LoginComponent } from './login/login.component';
import { AuthGuardGuard } from '@core/services/seguridad/auth-guard.guard';
import { AuthInterceptorService } from '@core/services/seguridad/auth-interceptor.service';
import { UsersComponent } from './users/users.component';
import { EvaluationsComponent } from './evaluations/evaluations.component';
import { CertificatesComponent } from './certificates/certificates/certificates.component';
import { ClassRoomComponent } from './class-room/class-room/class-room.component';
import { RegisterComponent } from './register/register.component';
import { ListCertificatesComponent } from './certificates/list-certificates/list-certificates.component';
import { ConfigurationCertificateComponent } from './certificates/configuration-certificate/configuration-certificate.component';
import { ClassRoomItemComponent } from './class-room/class-room-item/class-room-item.component';
import { AttendanceComponent } from './attendance/attendance.component';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ComponentsModule,
    RouterModule,
    AppRoutingModule,
    MaterialModule,
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    LoginComponent,
    UsersComponent,
    EvaluationsComponent,
    CertificatesComponent,
    ClassRoomComponent,
    RegisterComponent,
    ListCertificatesComponent,
    ConfigurationCertificateComponent,
    ClassRoomItemComponent,
    AttendanceComponent
  ],
  providers: [
    {
      provide: [ LocationStrategy, AuthGuardGuard,  JsonPipe],
      useClass: HashLocationStrategy
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
