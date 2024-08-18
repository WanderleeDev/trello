import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { RouterModule, Routes } from '@angular/router';
import { UiModule } from '../../shared/ui/ui.module';
import { FormLoginComponent } from './components/form-login/form-login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TermsAndConditionsComponent } from './components/terms-and-conditions/terms-and-conditions.component';
import { BannerComponent } from './components/banner/banner.component';
import { SocialLoginButtonsComponent } from './components/social-login-buttons/social-login-buttons.component';
import { FooterLoginComponent } from './components/footer-login/footer-login.component';

const routes: Routes = [{ path: '', component: LoginComponent }];

@NgModule({
  declarations: [
    LoginComponent,
    FormLoginComponent,
    TermsAndConditionsComponent,
    BannerComponent,
    SocialLoginButtonsComponent,
    FooterLoginComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    UiModule,
  ],
})
export default class LoginModule {}
