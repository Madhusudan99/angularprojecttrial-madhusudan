import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { DescriptionComponent } from './description/description.component';
import { XComponent } from './x/x.component';
import { FComponent } from './f/f.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { DatetimeService } from "./datetime.service";


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    DescriptionComponent,
    XComponent,
    FComponent,
    ProductDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [DatetimeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
