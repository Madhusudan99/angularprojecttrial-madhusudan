import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import  { ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule} from "@angular/common/http";

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { DescriptionComponent } from './description/description.component';
import { XComponent } from './x/x.component';
import { FComponent } from './f/f.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { DatetimeService } from "./datetime.service";
import { UserInfoService } from './user-info.service';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { ReactiveAddressFormComponent } from './reactive-address-form/reactive-address-form.component';
import { HttpcheckComponent } from './httpcheck/httpcheck.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    DescriptionComponent,
    XComponent,
    FComponent,
    ProductDetailsComponent,
    ReactiveFormComponent,
    ReactiveAddressFormComponent,
    HttpcheckComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, 
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [DatetimeService, UserInfoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
