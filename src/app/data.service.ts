import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(

    public http: HttpClient,
  ) { }
  getProducts(): Observable<any> {
    return this.http.get('http://localhost:3000/products');
    }

  postProducts(body: any): any {
    return this.http.post("http://localhost:3000/products", body);
  }

  deleteIdProducts(id: any) {
    return this.http.delete( 'http://localhost:3000/products',{params:id});
  }
  // create()

}