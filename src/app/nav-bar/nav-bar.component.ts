import { Component, OnInit } from '@angular/core';
import { ROUTES } from '../config/routes.contant';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  ROUTES = ROUTES;

  constructor() { }

  ngOnInit() {
  }

}
