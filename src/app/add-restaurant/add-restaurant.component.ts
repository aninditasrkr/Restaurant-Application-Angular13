import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-add-restaurant',
  templateUrl: './add-restaurant.component.html',
  styleUrls: ['./add-restaurant.component.css']
})
export class AddRestaurantComponent implements OnInit {
  alert = false;
  addRestaurant = new FormGroup({
    name: new FormControl(''),
    Address: new FormControl(''),
    email: new FormControl(''),
  })
  constructor(private commonService: CommonService) { }

  ngOnInit(): void {
  }

  createResto() {
    // console.log('Form field values-', this.addRestaurant.value);
    this.commonService.addResto(this.addRestaurant.value).subscribe((result) => {
      this.alert=true; //after submitting form data, shows alert msg
      this.addRestaurant.reset({});
      console.log('GET DATA FROM SERVICE', result);
    })
  }

  closeAlert() {
    this.alert=false;
  }
}
