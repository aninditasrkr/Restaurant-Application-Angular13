import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-update-restaurant',
  templateUrl: './update-restaurant.component.html',
  styleUrls: ['./update-restaurant.component.css']
})
export class UpdateRestaurantComponent implements OnInit {
  alert = false;
  editRestaurant = new FormGroup({
    name: new FormControl(''),
    Address: new FormControl(''),
    email: new FormControl(''),
  })
  constructor(private commonService: CommonService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    // console.log(this.router.snapshot.params.id);
    this.commonService.getCurrentData(this.route.snapshot.params['id']).subscribe((result) => {
      // console.log(result);
      this.editRestaurant = new FormGroup({
        // name: new FormControl(result['name']),
        // Address: new FormControl(result['Address']),
        // email: new FormControl(result['email'])
              name: new FormControl(),
        Address: new FormControl(),
        email: new FormControl()
      })
    })
  }

  // updateResto() {
  //   console.log('Form field values-', this.editRestaurant.value);
  //   this.commonService.addResto(this.editRestaurant.value).subscribe((result) => {
  //     this.alert=true; //after submitting form data, shows alert msg
  //     this.editRestaurant.reset({});
  //     console.log('GET DATA FROM SERVICE- Edit', result);
  //   })
  // }

  updateResto() {
    console.log('Form field values-', this.editRestaurant.value);
    this.commonService.updateResto(this.route.snapshot.params['id'], this.editRestaurant.value).subscribe((result) => {
      this.alert = true; //after submitting form data, shows alert msg
      // this.editRestaurant.reset({});
      console.log('data updated successfully', result);
    })
  }

  closeAlert() {
    this.alert = false;
  }
}

