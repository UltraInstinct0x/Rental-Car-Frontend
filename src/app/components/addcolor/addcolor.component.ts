import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,FormControl, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ColorService } from 'src/app/services/color.service';

@Component({
  selector: 'app-addcolor',
  templateUrl: './addcolor.component.html',
  styleUrls: ['./addcolor.component.css']
})
export class AddcolorComponent implements OnInit {

  colorAddForm:FormGroup;
  constructor(private colorService:ColorService,
    private toastrService:ToastrService,
    private formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.createColorAddForm();
  }

  createColorAddForm(){
    this.colorAddForm = this.formBuilder.group({
      name: ['', Validators.required]
    });
  }

  add(){
    if(this.colorAddForm.valid){
      let colorModel = Object.assign({},this.colorAddForm.value);
      this.colorService.add(colorModel).subscribe(response=>{
        console.log(response)
        this.toastrService.success(response.message,"Başarılı")
      },responseError=>{
        if(responseError.error.ValidationErrors.length>0){
          for (let i = 0; i < responseError.error.ValidationErrors.length; i++) {
            const element = responseError.error.ValidationErrors[i].ErrorMessage;
            this.toastrService.error(element,"Doğrulama Hatası!")
          }

        }
      });
      }else{
        this.toastrService.error("Form hatalı.", "Dikkat!")
      }
  }
}
