import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Brand } from 'src/app/models/brand';
import { BrandService } from 'src/app/services/brand.service';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.css']
})
export class BrandComponent implements OnInit {

  brand:Brand
  currentBrand:Brand = {id:0, name:""}
  brands:Brand[]=[];
  clearBrand:Brand={id:0, name:""}
  filterText!:string;
  brandEditForm:FormGroup;
  formBuilder: any;
  constructor(private brandService:BrandService,private toastrService:ToastrService) { }

  ngOnInit(): void {
    this.getBrands();
  }

  getBrands(){
    this.brandService.getBrands().subscribe(response=>{
      this.brands=response.data;
    })
  }

  setCurrentBrand(brand: Brand){
    this.currentBrand=brand;
  }

  getCurrentBrandClass(brand:Brand){
    if (brand.id == this.currentBrand.id) {
      return 'list-group-item list-group-item-dark';
    } else {
      return 'list-group-item';
    }
  }

  
}
