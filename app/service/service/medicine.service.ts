import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MedicineEntity } from 'src/app/model/MedicineEntity';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MedicineService {

  url = "http://localhost:8087/medicine"
  urlMedicines = "http://localhost:8087/medicine/medicines?"
  

  constructor(private http: HttpClient) { }

  public medicines(page: number, size: number, order: string, asc:boolean): Observable<any>{
    return this.http.get<any>(this.urlMedicines+ `page=${page}&size=${size}&order=${order}&asc=${asc}`)
  }
  public editMedicine(id: string, medicine:MedicineEntity): Observable<MedicineEntity>{
    return this.http.put<MedicineEntity>(this.url + `/update/${id}`, medicine);
  }

  public detail(id: number): Observable<MedicineEntity>{
    return this.http.get<MedicineEntity>(this.url + `/detail/${id}`);
  } 

  public deleteMedicine (id: number): Observable<any>{
    return this.http.delete<any>(this.url + `/delete/${id}`);
  } 


  
}
