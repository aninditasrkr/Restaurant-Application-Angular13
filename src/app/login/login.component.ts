import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email='';
  password = '';
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  login() {
    if(this.email == 'admin@gmail.com' && this.password == 'Admin@123') {
      console.log("Welcome user");
      this.router.navigate(["list"]);
    } else {
      alert('Plese Enter Valid Credentials');
    }
    console.log(this.email);
  }
}
