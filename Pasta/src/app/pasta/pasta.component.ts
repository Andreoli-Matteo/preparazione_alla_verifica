import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product, Welcome10 } from '../app.model';
import { PastaService } from '../service/service.module';
import { SearchComponent } from '../search/search.component';

@Component({
  selector: 'app-pasta',
  templateUrl: './pasta.component.html',
  styleUrls: ['./pasta.component.css']
})
export class PastaComponent implements OnInit {
  prodotto !:string;
  obsProd!:Observable<Welcome10>;
  ris:Product[] = [];
  constructor(public pasta:PastaService ){

  }
  ngOnInit(): void {
    console.log("bvc");
  
    this.obsProd = this.pasta.SearchProd(this.prodotto);
    this.obsProd.subscribe((data : Welcome10)=>{this.ris=data.products;console.log(this.ris)})
  }



 }

