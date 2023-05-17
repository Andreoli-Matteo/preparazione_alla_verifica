import { Component, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PastaService } from '../service/service.module';
import { Welcome10, Product } from '../app.model';

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
  obsProd!:Observable<Welcome10>;
  ris:Product[] = [];

  constructor(public pasta:PastaService){
  }
  cerca(prodotti:HTMLInputElement):void{
    
    this.prodotto=prodotti.value;
    this.obsProd = this.pasta.SearchProd(this.prodotto);
    this.obsProd.subscribe((data : Welcome10)=>{this.ris=data.products;console.log(this.ris)})
  }
 
}
