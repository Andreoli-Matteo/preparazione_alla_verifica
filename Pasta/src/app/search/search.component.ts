import { Component, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PastaService } from '../service/service.module';
import { SearchResult, Product } from '../search.model';

@Injectable({
  providedIn: 'root'
})
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  prodotto !:string;
  obsProd!:Observable<SearchResult>;
  ris:Product[] = [];

  constructor(public pasta:PastaService){
  }
  cerca(prodotti:HTMLInputElement):void{
    
    this.prodotto=prodotti.value;
    this.obsProd = this.pasta.SearchProd(this.prodotto);
    this.obsProd.subscribe((data : SearchResult)=>{this.ris=data.products;console.log(this.ris)})
  }
 
}
