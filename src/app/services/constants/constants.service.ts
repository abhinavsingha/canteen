import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ConstantsService {
  constructor() {}

  serviceUrl = 'http://192.168.43.200:8082/';
  api = {
        addProduct:this.serviceUrl+'product/add-product',
    registrationUrl:this.serviceUrl+"loginAuth/registerNewUser",
    sendOtp:this.serviceUrl+"loginAuth/generate-otp",
    verifyEmailotp:this.serviceUrl+"loginAuth/otpVerify",
    login:this.serviceUrl+"loginAuth/authenticate"
  };
}
