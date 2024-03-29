import {Component, OnInit, ViewChild} from '@angular/core';
import {ApiCallingServiceService} from "../services/api-calling/api-calling-service.service";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {ConstantsService} from "../services/constants/constants.service";
import {CommonService} from "../services/common/common.service";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.scss'
})
export class AddProductComponent implements OnInit {
  @ViewChild('invoiceFileInput') invoiceFileInput: any;
  constructor(
    private router: Router,
    private http: HttpClient,
    private apiService: ApiCallingServiceService,
    private cons: ConstantsService,
  ) {}

  name: any;
  desc: any;
  aPrice: any;
  dPrice: any;
  ngOnInit(): void {}



  addProduct() {
    const file: File = this.invoiceFileInput.nativeElement;
    // console.log(file);
    const formData = new FormData();
    formData.append('imageFiles', file);
    const jsonData = {
      productName: this.name,
      productDescription: this.desc,
      productActualPrice: this.aPrice,
      productDiscountedPrice: this.dPrice

    };
    formData.append('json_data', JSON.stringify(jsonData));
    debugger;

    this.apiService.postApiWithToken(this.cons.api.addProduct, formData).subscribe({
      next: (v: object) => {
        let result: { [key: string]: any } = v;
        if (result['message'] == 'success') {

        } else {

        }
      },
      error: (e) => {

        console.error(e);
      },
      complete: () => console.log(),
    });
  }

}
