import { Component, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MedicineEntity } from 'src/app/model/MedicineEntity';
import { SaleEntity } from 'src/app/model/SaleEntity';
import { MedicineService } from 'src/app/service/service/medicine.service';
import { SaleService } from 'src/app/service/service/sale.service';

@Component({
  selector: 'app-venta',
  templateUrl: './venta.component.html',
  styleUrls: ['./venta.component.css']
})
export class VentaComponent implements OnInit {

  medicineEntity!: MedicineEntity;  
  sales?: SaleEntity;
  total = 0;
  constructor(private activateRouter: ActivatedRoute, private sale: SaleService, 
    private medicineService:MedicineService) {}

  ngOnInit(): void {
    const id = this.activateRouter.snapshot.params['id'];    
    this.medicineService.detail(id).subscribe(
      {
      next: data =>{
        this.medicineEntity = data;
      }, error: err =>{
                
      }
    })
  }

  onSale():void{
    const id = this.activateRouter.snapshot.params['id'];
    
  }
  
}
