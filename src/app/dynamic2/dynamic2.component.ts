import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dynamic2',
  templateUrl: './dynamic2.component.html',
  styleUrls: ['./dynamic2.component.css']
})
export class Dynamic2Component implements OnInit {

  constructor(private router: Router) {
    
  }

  ngOnInit(): void {
  }

  before() {
    this.router.navigate(['/'], { skipLocationChange: true });
  }

}
