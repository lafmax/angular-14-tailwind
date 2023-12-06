import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { user } from 'user-store.repository';

@Component({
  selector: 'app-dynamic1',
  templateUrl: './dynamic1.component.html',
  styleUrls: ['./dynamic1.component.css']
})
export class Dynamic1Component implements OnInit {

  constructor(private router: Router) {
    user.subscribe(state => this.data = state);
  }

  next() {
    this.router.navigate(['/segundo'], { skipLocationChange: true });
  }


  data: any = {};

  ngOnInit(): void {
  }

}
