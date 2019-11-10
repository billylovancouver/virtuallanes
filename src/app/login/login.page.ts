import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor() { }

  username: string = '';
  password: string ='';

  ngOnInit() {
  }

  login()
  {
    if (this.username == 'Billy')
    {
      location.href = "/home"
    }
    else if (this.username == 'Kevin')
    {
      location.href = "/home"
    }
    else {
      alert("Invalid username or password")
    }
  }

  register()
  {
    location.href = "/signup";
  }  

  
}
