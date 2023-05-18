import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PastaService } from '../service/service.module';
import { SearchComponent } from '../search/search.component';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Product, Product_Api } from '../product.model';

@Component({
  selector: 'app-pasta',
  templateUrl: './pasta.component.html',
  styleUrls: ['./pasta.component.css']
})
export class PastaComponent  {
  prodotto !:string | null  ;
  obsProd!:Observable<Product_Api>;
  ris!:Product;
  constructor(public pasta:PastaService , private route: ActivatedRoute ){ 
    this.route.paramMap.subscribe(this.getRouterParam);
  }
 
  getRouterParam = (params: ParamMap) =>
  {
    this.prodotto = params.get('id');
    this.obsProd = this.pasta.getProd(this.prodotto);
    this.obsProd.subscribe((data : Product_Api)=>{this.ris=data.product;console.log(this.ris)})
  }



 }

