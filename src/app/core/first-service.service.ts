import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class FirstServiceService {

  myDate:any = new Subject();

  constructor() {}

}
