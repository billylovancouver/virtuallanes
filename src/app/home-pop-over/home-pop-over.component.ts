import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-home-pop-over',
  templateUrl: './home-pop-over.component.html',
  styleUrls: ['./home-pop-over.component.scss'],
})
export class HomePopOverComponent implements OnInit {

  constructor(public popoverController: PopoverController) { }

  ngOnInit() {}

  close() {
    this.popoverController.dismiss();
  }

}
