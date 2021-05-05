import { Component, OnInit } from '@angular/core';
import { FirstServiceService } from '../../core/first-service.service';

@Component({
  selector: 'app-first-comp',
  templateUrl: './first-comp.component.html',
  styleUrls: ['./first-comp.component.scss']
})
export class FirstCompComponent implements OnInit {

  firstComponent = new Date();

  constructor(private dateService: FirstServiceService) {
    this.dateService.myDate.subscribe(res => {
      this.firstComponent = res;
    })
  }

  ngOnInit() {
  }
}
