import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  driver()
  {
    location.href = "/driver";
  }

  passenger()
  {
    location.href = "/passenger";
  }
}
