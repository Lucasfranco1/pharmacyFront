import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SaleEntity } from 'src/app/model/SaleEntity';

@Injectable({
  providedIn: 'root'
})
export class SaleService {
  url = "http://localhost:8087/sales"
  constructor(private http: HttpClient) { }

  public sale(sale: SaleEntity): Observable<SaleEntity>{
    return this.http.post<SaleEntity>(this.url + "/sale", sale)
  }

  
}
