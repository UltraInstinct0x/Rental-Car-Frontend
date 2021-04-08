import { Component, OnInit } from '@angular/core';
import { Car } from 'src/app/models/car';
import { CarDetailDto } from 'src/app/models/carDetailDto';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {
  cars:Car[] = [];
  carDetails:CarDetailDto[]=[];
  
  constructor(private carService:CarService) { }

  ngOnInit(): void {
    this.getAllCars();
    this.getCarDetails();
  }

  getAllCars(){
    this.carService.getAllCars().subscribe(response=>{
      this.cars=response.data;
    })
  }
  getCarDetails(){
    this.carService.getCarDetails().subscribe(response=>{
      this.carDetails=response.data;
    })
  }
}
