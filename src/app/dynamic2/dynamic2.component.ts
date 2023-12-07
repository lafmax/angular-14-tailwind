import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { store, user } from 'user-store.repository';

@Component({
  selector: 'app-dynamic2',
  templateUrl: './dynamic2.component.html',
  styleUrls: ['./dynamic2.component.css']
})
export class Dynamic2Component implements OnInit {

  constructor(private router: Router) {
    
  }

  ngOnInit(): void {
    console.log(store.getValue().data.nombre);
  }

  before() {
    this.router.navigate(['/'], { skipLocationChange: true });
  }

}
