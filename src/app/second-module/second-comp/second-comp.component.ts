import { Component, OnInit } from '@angular/core';
import { FirstServiceService } from '../../core/first-service.service';

@Component({
  selector: 'app-second-comp',
  templateUrl: './second-comp.component.html',
  styleUrls: ['./second-comp.component.scss']
})
export class SecondCompComponent implements OnInit {

  secondComponent: any = "Coming from 2nd Component";

  constructor(private dateService: FirstServiceService) {
    this.dateService.myDate.subscribe(res => {
      this.secondComponent = res;
    })
  }

  ngOnInit() {
  }

}
