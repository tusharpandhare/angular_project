import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.css']
})
export class AboutusComponent implements OnInit {
  debugger;
  imgurl: string = "assets/images/image1.jpg";
  constructor() { }

  ngOnInit(): void {
  }

}
