import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Car } from 'src/app/models/car';
import { CarDetailDto } from 'src/app/models/carDetailDto';

import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css'],
})
export class CarComponent implements OnInit {
  cars: Car[]=[];
  filteredCars!: CarDetailDto[];
  filterText!:string;

  constructor(
    private carService: CarService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      if (params['colorId']) {
        this.getCarsByColor(params['colorId']);
      } else if (params['brandId']) {
        this.getCarsByBrand(params['brandId']);
      } else if (params['brand'] && ['color']) {
        this.getByBrandAndColor(params['brand'], params['color']);
      } else {
        this.getAllCars();
      }
    });
  }

  getCarsByColor(colorId: number) {
    this.carService.getCarsByColor(colorId).subscribe((response) => {
      this.cars = response.data;
    });
  }

  getCarsByBrand(brandId: number) {
    this.carService.getCarsByBrand(brandId).subscribe((response) => {
      this.cars = response.data;
    });
  }

  getAllCars() {
    this.carService.getAllCars().subscribe((response) => {
      this.cars = response.data;
    });
  }
  getByBrandAndColor(brand: string, color: string) {
    this.carService.getByBrandAndColor(brand, color).subscribe((response) => {
      this.filteredCars = response.data;
      console.log(this.filteredCars);
    });
  }
}
