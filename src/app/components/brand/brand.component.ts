import { Component, OnInit } from '@angular/core';
import { Brand } from 'src/app/models/brand';
import { BrandService } from 'src/app/services/brand.service';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.css']
})
export class BrandComponent implements OnInit {

  currentBrand:Brand = {id:0, name:""}
  brands:Brand[]=[];
  clearBrand:Brand={id:0, name:""}
  filterText!:string;
  constructor(private brandService:BrandService) { }

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
