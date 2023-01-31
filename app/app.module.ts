import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TableMedicineComponent } from './components/components/table-medicine/table-medicine.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { VentaComponent } from './components/components/venta/venta.component';


        
@NgModule({
  declarations: [
    AppComponent,
    TableMedicineComponent,    
    VentaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,       
    FormsModule

          
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
