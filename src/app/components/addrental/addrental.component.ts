import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Brand } from 'src/app/models/brand';
import { Car } from 'src/app/models/car';
import { CarImage } from 'src/app/models/carImage';
import { Color } from 'src/app/models/color';
import { Rental } from 'src/app/models/rental';
import { BrandService } from 'src/app/services/brand.service';
import { CarImageService } from 'src/app/services/car-image.service';
import { CarService } from 'src/app/services/car.service';
import { ColorService } from 'src/app/services/color.service';
import { RentalService } from 'src/app/services/rental.service';

@Component({
  selector: 'app-addrental',
  templateUrl: './addrental.component.html',
  styleUrls: ['./addrental.component.css']
})
export class AddrentalComponent implements OnInit {

  car!: Car;
  brand!: Brand;
  color!: Color;
  carImages!: CarImage[];
  DateTimeNow: Date = new Date();
  rentDate: Date = this.DateTimeNow;
  rentDateEnd: Date = this.DateTimeNow;

  constructor(
    private carService: CarService,
    private brandService: BrandService,
    private colorService: ColorService,
    private carImageService: CarImageService,
    private rentalService: RentalService,
    private activatedRoute: ActivatedRoute,
    private toastr: ToastrService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.getCarById(params['carId']);
    });
  }

  getCarById(carId: number) {
    this.carService.getCarById(carId).subscribe((response) => {
      this.car = response.data;

      this.getBrandById(this.car.brandId);
      this.getColorById(this.car.colorId);
      this.getCarImagesById(this.car.id);
    });
  }

  getBrandById(brandId: number) {
    this.brandService.getBrandById(brandId).subscribe((response) => {
      this.brand = response.data;
    });
  }

  getColorById(colorId: number) {
    this.colorService.getColorById(colorId).subscribe((response) => {
      this.color = response.data;
    });
  }

  getCarImagesById(carId: number) {
    this.carImageService.getImagesByCarId(carId).subscribe((response) => {
      this.carImages = response.data;
    });
  }

  isActiveCarousel(carImageIndex: number): string {
    return carImageIndex == 0 ? 'active' : '';
  }

  getCarImageUrl(carImageId: number): string {
    return this.carImageService.getCarImageUrl(carImageId);
  }

  rentCar() {
    let rental: Rental = {
      carId: this.car.id,
      customerId: 3, // Test
      rentDate: new Date(this.rentDate),
      rentDateEnd: new Date(this.rentDateEnd),
      returnDate: undefined,
    };
    this.rentalService.isAvailable(rental).subscribe(
      (response) => {
        this.toastr.info('You are redirected to payment page.');
        this.rentalService.rentalCheckout = rental;
        this.router.navigateByUrl('/checkout');
      },
      (error) => {
        if (error.status == 500)
          this.toastr.error('An error occured.');
        else this.toastr.error(error.error.message);
      }
    );
  }
}
