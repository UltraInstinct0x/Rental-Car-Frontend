import { Component, Input, OnInit } from '@angular/core';
import { Car } from 'src/app/models/car';
import { CarDetailDto } from 'src/app/models/carDetailDto';
import { CarImage } from 'src/app/models/carImage';
import { CarImageService } from 'src/app/services/car-image.service';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-car-card',
  templateUrl: './car-card.component.html',
  styleUrls: ['./car-card.component.css'],
})
export class CarCardComponent implements OnInit {
  @Input() carDetail!: CarDetailDto;
  carDetails: CarDetailDto[] = [];
  carImage!: CarImage;
  carImageUrl: string = '';
  cars: Car[] = [];
  currentDetail: Car = {
    id: 0,
    colorId: 0,
    brandId: 0,
    dailyPrice: 0,
    description: '',
    modelYear: 0,
  };
  currentimagesDetail: CarDetailDto = {
    id: 0,
    imagePath: '',
    description: '',
    carName: '',
    brandName: '',
    colorName: '',
    dailyPrice: 0,
    modelYear: 0,
  };
  images: CarDetailDto[] = [];

  constructor(
    private carImageService : CarImageService
  ) {}

  ngOnInit(): void {
    
  }
}
