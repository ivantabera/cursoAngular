import { Injectable } from '@angular/core';

//Este import es para conectarnos a cualquier api con peticiones http
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ArticulosService {

  public url : string;

  constructor(private http : HttpClient) {
    this.url = "assets/json/articulos.json";
  }

  getArticulos(){
    return this.http.get(this.url);
  }
}
