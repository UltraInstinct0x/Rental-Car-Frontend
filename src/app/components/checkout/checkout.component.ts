import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CheckoutService } from 'src/app/services/checkout.service';
import { RentalService } from 'src/app/services/rental.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  paymentSuccessfull!: boolean;

  constructor(
    private rentalService: RentalService,
    private checkoutService: CheckoutService,
    private router: Router,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
  }

  payment() {
    this.checkoutService.payment().subscribe(
      (response) => {
        this.paymentSuccessfull = true;
        this.toastr.success(response.message);
      },
      (error) => {
        this.paymentSuccessfull = false;
        this.toastr.error(error.error.message);
      }
    );
  }
}
