import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-list-restaurant',
  templateUrl: './list-restaurant.component.html',
  styleUrls: ['./list-restaurant.component.css']
})
export class ListRestaurantComponent implements OnInit {
  collection: any;
  constructor(private commonService: CommonService) { }

  ngOnInit(): void {
    this.commonService.getRestoList().subscribe((result) => {
      this.collection = result;
      console.log('API DATA-', this.collection);
    });
  }

  deleteRow(id: any) {
    this.commonService.deleteResto(id).subscribe((result) => {
      this.collection = result;
      console.log('Deleted API DATA-', this.collection);
      // })
    })
  }
}
