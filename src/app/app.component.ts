import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  public appPages = [
    // {
    //   title: 'Home',
    //   url: '/home',
    //   icon: 'home'
    // },
    // {
    //   title: 'List',
    //   url: '/list',
    //   icon: 'list'
    // },
    // {
    //   title: 'Login',
    //   url: '/login',
    //   icon: 'login'
    // },
    // {
    //   title: 'Signup',
    //   url: '/signup',
    //   icon: 'signup'
    // },
    // {
    //   title: 'Driver',
    //   url: '/driver',
    //   icon: 'driver'
    // },
    // {
    //   title: 'Passenger',
    //   url: '/passenger',
    //   icon: 'passenger'
    // },
    {
      title: 'Map',
      url: '/map',
      icon: 'map'
    },
    {
      title: 'Profile',
      url: '/profile',
      icon: 'contact'
    },
    {
      title: 'Messages',
      url: '/messages',
      icon: 'contacts'
    },
    {
      title: 'Trips',
      url: '/history',
      icon: 'list'
    },
    {
      title: 'Logout',
      url: '/login',
      icon: 'power'
    }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
