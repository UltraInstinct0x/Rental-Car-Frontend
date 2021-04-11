import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators,FormControl } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Brand } from 'src/app/models/brand';
import { BrandService } from 'src/app/services/brand.service';

@Component({
  selector: 'app-editbrand',
  templateUrl: './editbrand.component.html',
  styleUrls: ['./editbrand.component.css']
})
export class EditbrandComponent implements OnInit {

  brand:Brand
  brandEditForm:FormGroup
  constructor(private brandService:BrandService,private formBuilder:FormBuilder,private toastrService:ToastrService) { }

  ngOnInit(): void {
    this.createBrandEditForm();
  }

  createBrandEditForm() {
    this.brandEditForm = this.formBuilder.group({
      name: [this.brand.name, Validators.required],
    });
  }
  update() {
    if (!this.brandEditForm.valid) {
      this.toastrService.error('There are missing fields.');
      return;
    }

    let brandModule: Brand = { id: this.brand.id, ...this.brandEditForm.value };
    this.brandService.update(brandModule).subscribe((response) => {
      this.toastrService.success(response.message);
    });
  }

  delete() {
    if (window.confirm('The brand will be deleted!')) {
      let brandModule: Brand = {
        id: this.brand.id,
        ...this.brandEditForm.value,
      };
      this.brandService.delete(brandModule).subscribe((response) => {
        this.toastrService.success(response.message);
      });
    }
  }
}
