import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Welcome10 } from '../app.model';


@Injectable({
  providedIn: 'root'
})
export class PastaService {

  constructor(private http:HttpClient) { }

  SearchProd(query:string){
    const url = `https://world.openfoodfacts.org/cgi/search.pl?search_terms=${query}&page_size=2&json=true`
    let obsprod = this.http.get<Welcome10>(url);
    return obsprod;
  }

  getProd(id:string){
    const url= `https://world.openfoodfacts.org/product/${id}`;
    return this.http.get(url)
  }

}