import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Color } from 'src/app/models/color';
import { ColorService } from 'src/app/services/color.service';

@Component({
  selector: 'app-editcolor',
  templateUrl: './editcolor.component.html',
  styleUrls: ['./editcolor.component.css']
})
export class EditcolorComponent implements OnInit {
  color:Color
  colorEditForm:FormGroup
  constructor(private colorService:ColorService,private formBuilder:FormBuilder,private toastrService:ToastrService) { }

  ngOnInit(): void {
    this.createColorEditForm();
  }

  createColorEditForm() {
    this.colorEditForm = this.formBuilder.group({
      name: [this.color.name, Validators.required],
    });
  }
  update() {
    if (!this.colorEditForm.valid) {
      this.toastrService.error('There are missing fields.');
      return;
    }

    let colorModule:Color = { id: this.color.id, ...this.colorEditForm.value };
    this.colorService.update(colorModule).subscribe((response) => {
      this.toastrService.success(response.message);
    });
  }

  delete() {
    if (window.confirm('The color will be deleted!')) {
      let colorModule:Color = {
        id: this.color.id,
        ...this.colorEditForm.value,
      };
      this.colorService.delete(colorModule).subscribe((response) => {
        this.toastrService.success(response.message);
      });
    }
  }
}
