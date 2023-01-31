import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TableMedicineComponent } from './components/components/table-medicine/table-medicine.component';
import { VentaComponent } from './components/components/venta/venta.component';

const routes: Routes = [
  {path: '',  component: TableMedicineComponent},
  {path: 'venta/:id',  component: VentaComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
