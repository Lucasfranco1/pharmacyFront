import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MedicineEntity } from 'src/app/model/MedicineEntity';
import { MedicineService } from 'src/app/service/service/medicine.service';

@Component({
  selector: 'app-table-medicine',
  templateUrl: './table-medicine.component.html',
  styleUrls: ['./table-medicine.component.css']
})
export class TableMedicineComponent implements OnInit {

  medicines: MedicineEntity[] = [];
  totalPages!: Array<number>;
  page = 0;
  size = 5;
  order = "id";
  asc = false;
  name = "";
  filterPost= "";
  
  isFirst = false;
  isLast = false;

  constructor(private medicineService: MedicineService, private router: Router) { }

  ngOnInit(): void {
     this.loadMedicines(); 
  }
  next() {
    null
  }

  loadMedicines(){
    this.medicineService.medicines(this.page, this.size, this.order, this.asc).subscribe(
      {
        next: data => {          
          this.medicines = data.content;          
          this.isFirst = data.first;
          this.isLast = data.last;
          this.totalPages = new Array(data['totalPages']);
          console.log(data)
        }, error: err => {
          console.log("error" + err)
        }
      });
  } 

  


  sort():void{
    this.asc = !this.asc
    this.loadMedicines()
     
  }

  rewind(): void {
    if (!this.isFirst) {
      this.page--;
      this.loadMedicines();
    }
  }

  forward(): void {
    if (!this.isLast) {
      this.page++;
      this.loadMedicines();
    }
  }

  setPage(page: number): void {
    this.page = page;
    this.loadMedicines();
  }
  
  setOrder(order: string): void {
    this.order = order;
    this.loadMedicines();
  }


  delete(id?: number){
    if(id != undefined){
      let option = confirm("¿Seguro que quieres eliminar este medicamento?");
      if(option == true){
        this.medicineService.deleteMedicine(id).subscribe(
          {
            next: data => {
            this.loadMedicines();
            alert('¡Medicamento eliminado exitosamente!')
          }, error: err =>{
            alert("Error al borrar medicamento");
          }
      })
      }       
        this.loadMedicines();            
    }
  }

}
