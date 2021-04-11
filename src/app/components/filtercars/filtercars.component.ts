import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Brand } from 'src/app/models/brand';
import { Car } from 'src/app/models/car';
import { Color } from 'src/app/models/color';
import { BrandService } from 'src/app/services/brand.service';
import { ColorService } from 'src/app/services/color.service';

@Component({
  selector: 'app-filtercars',
  templateUrl: './filtercars.component.html',
  styleUrls: ['./filtercars.component.css']
})
export class FiltercarsComponent implements OnInit {

  brands!:Brand[];
  colors!:Color[];
  brandFilter!:string;
  colorFilter!:string;
  constructor(private brandService:BrandService,
    private colorService:ColorService,
    private ToastrService: ToastrService) { }

  ngOnInit(): void {
    this.getBrands();
    this.getColors();
  }

  getBrands(){
    this.brandService.getBrands().subscribe((response)=>{
      this.brands = response.data;
    })
  }

  getColors(){
    this.colorService.getColors().subscribe((response)=>{
      this.colors = response.data;
    })
  }

  selectedBrand(brand:string) {
    if (this.brandFilter == brand)
      return true;
    else
      return false;
  }
  selectedColor(color:string) {
    if (this.colorFilter == color)
      return true;      
    else
      return false;
  }
}
