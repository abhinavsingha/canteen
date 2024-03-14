import {Component, OnInit} from '@angular/core';
import {ConstantsService} from "../services/constants/constants.service";
import {ApiCallingServiceService} from "../services/api-calling/api-calling-service.service";

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrl: './shop.component.css'
})
export class ShopComponent implements OnInit{
  constructor(private cons:ConstantsService,
              private apiService: ApiCallingServiceService,) {
  }

  categories:any;
  products:any;
  ngOnInit(): void {
    this.getAllCategories();
    this.getAllProduct();
  }
  private getAllCategories() {
    this.apiService.getApiWithToken(this.cons.api.getAllCategories).subscribe(
      (response: object) => {
        let result: { [key: string]: any } = response;
        this.categories=result['response'];
        debugger;
      },
      (error) => {
        console.error('Add Product failed:', error);
      }
    );
  }

  private getAllProduct() {
    this.apiService.getApiWithToken(this.cons.api.getAllProducts).subscribe(
      (response: object) => {
        let result: { [key: string]: any } = response;
        this.products=result['response'];
        debugger;
      },
      (error) => {
        console.error('Add Product failed:', error);
      }
    );
  }
}
