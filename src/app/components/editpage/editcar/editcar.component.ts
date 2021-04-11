import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormControl,FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Car } from 'src/app/models/car';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-editcar',
  templateUrl: './editcar.component.html',
  styleUrls: ['./editcar.component.css']
})
export class EditcarComponent implements OnInit {
  car:Car;
  carEditForm:FormGroup;
  constructor(private formBuilder: FormBuilder,
    private carService: CarService,
    private toastrService: ToastrService,
    private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.createCarEditForm();
    this.getCarIdFromParam();
  }

  createCarEditForm() {
    this.carEditForm = this.formBuilder.group({
      carId: ['this.car.id', Validators.required],
      colorId: ['', Validators.required],
      brandId:['',Validators.required],
      modelYear: ['', Validators.required],
      dailyPrice: ['', Validators.required],
      description: ['', Validators.required],
    });
  }

  getCarIdFromParam() {
    this.activatedRoute.params.subscribe((params) => {
      if (params['carId']) this.getCarById(params['carId']);
    });
  }

  getCarById(carId: number) {
    this.carService.getCarById(carId).subscribe((response) => {
      this.car = response.data;
      this.createCarEditForm();
    });
  }

  update() {
    if (!this.carEditForm.valid) {
      this.toastrService.error('There are missing fields.');
      return;
    }

    let carModel: Car = { id: this.car.id, ...this.carEditForm.value };
    this.carService.update(carModel).subscribe((response) => {
      this.toastrService.success(response.message);
    });
  }

  delete() {
    if (window.confirm('The car will be deleted!')) {
      let carModel: Car = {
        id: this.car.id,
        ...this.carEditForm.value,
      };
      this.carService.delete(carModel).subscribe((response) => {
        this.toastrService.success(response.message);
      });
    }
  }

}
