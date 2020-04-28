import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule,Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { BsDropdownModule } from "ngx-bootstrap/dropdown";
import { ProgressbarModule } from "ngx-bootstrap/progressbar";
import { TooltipModule } from "ngx-bootstrap/tooltip";
import { CollapseModule } from "ngx-bootstrap/collapse";
import { TabsModule } from "ngx-bootstrap/tabs";
import { PaginationModule } from "ngx-bootstrap/pagination";
import { AlertModule } from "ngx-bootstrap/alert";
import { BsDatepickerModule } from "ngx-bootstrap/datepicker";
import { CarouselModule } from "ngx-bootstrap/carousel";
import { ModalModule } from "ngx-bootstrap/modal";
import { HomePageComponent } from './home-page/home-page.component';
import { LearningComponent } from './learning/learning.component';
import { AdmissionsComponent } from './admissions/admissions.component';
import { InternshipComponent } from './internship/internship.component';
import { ProjectComponent } from './project/project.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { AuthService } from '../app/auth.service';
import { AuthGuard } from './auth.guard';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';



@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    LearningComponent,
    AdmissionsComponent,
    InternshipComponent,
    ProjectComponent,
    LoginComponent,
    SignupComponent,
    HeaderComponent,
    FooterComponent
    // IndexComponent,
    // ProfilepageComponent,
    // RegisterpageComponent,
    // LandingpageComponent
  ],
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
    AppRoutingModule,
     BsDropdownModule.forRoot(),
     ProgressbarModule.forRoot(),
     TooltipModule.forRoot(),
     CollapseModule.forRoot(),
     TabsModule.forRoot(),
    //  ToastrModule.forRoot({
    //   timeOut: 10000,
    //   positionClass: 'toast-bottom-right',
    //   preventDuplicates: true,
    //   closeButton: true
    // }),
     PaginationModule.forRoot(),
     AlertModule.forRoot(),
     BsDatepickerModule.forRoot(),
     CarouselModule.forRoot(),
     ModalModule.forRoot()
  ],
  providers: [AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule {}
