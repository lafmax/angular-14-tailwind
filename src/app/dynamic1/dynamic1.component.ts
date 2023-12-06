import { Component, OnInit } from '@angular/core';
import { user } from 'user-store.repository';

@Component({
  selector: 'app-dynamic1',
  templateUrl: './dynamic1.component.html',
  styleUrls: ['./dynamic1.component.css']
})
export class Dynamic1Component implements OnInit {

  constructor() {
    user.subscribe(state => this.data = state);
  }

  public readonly NAME = 'Animal';

  data: any = {};

  ngOnInit(): void {
  }

}
