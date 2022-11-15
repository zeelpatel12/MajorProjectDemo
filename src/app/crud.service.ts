import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

class values {
  // productId?:num;
  productName?:string;
  productCategory?:string;
  productRate?:number;
}

@Injectable({
  providedIn: 'root'
})
export class CrudService {
  URL1="http://localhost:8080/product";
  URL= "http://localhost:8080/update";

  constructor(private http:HttpClient) { }

  getCurrentData(id:any){
    return this.http.get(`${this.URL1}/${id}`)
  }

  updateProduct(id:any,data:any){
    return this.http.put(`${this.URL}/${id}`,data)


  }
}
