import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './views/login/login.component';
import { RegisterComponent } from './views/register/register.component';
import { AccountRecoveryComponent } from './views/account-recovery/account-recovery.component';
import { FormLoginComponent } from './components/form-login/form-login.component';
import { FooterFormComponent } from './components/footer-form/footer-form.component';
import { TermsAndConditionsComponent } from './components/terms-and-conditions/terms-and-conditions.component';
import { ReactiveFormsModule } from '@angular/forms';
import { UiModule } from '../../shared/ui/ui.module';
import { AuthRoutingModule } from './routes/auth-routing.module';
import { BannerComponent } from './components/banner/banner.component';
import { FormRecoveryComponent } from './components/form-recovery/form-recovery.component';
import { AuthLayoutComponent } from './layout/auth-layout.component';
import { FormRegisterComponent } from './components/form-register/form-register.component';
import { SocialMediaAuthComponent } from './components/social-media-auth/social-media-auth.component';

@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    AccountRecoveryComponent,
    FormLoginComponent,
    SocialMediaAuthComponent,
    FooterFormComponent,
    TermsAndConditionsComponent,
    BannerComponent,
    FormRecoveryComponent,
    AuthLayoutComponent,
    FormRegisterComponent,
  ],
  imports: [CommonModule, ReactiveFormsModule, AuthRoutingModule, UiModule],
})
export default class AuthModule {}
