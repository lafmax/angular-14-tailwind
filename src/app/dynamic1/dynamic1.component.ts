import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { setProp } from '@ngneat/elf';
import { UserStoreProps, store, user } from 'user-store.repository';

@Component({
  selector: 'app-dynamic1',
  templateUrl: './dynamic1.component.html',
  styleUrls: ['./dynamic1.component.css']
})
export class Dynamic1Component implements OnInit {

  constructor(private router: Router) {
    this.nombre = store.getValue().data.nombre;
  }

  data: any = {};

  nombre: any = 'hola';

  next() {
    store.update(state => {
      return {
        ...state,
        data: {
          ...state.data,
          nombre: this.nombre,
        }
      }
    })
    this.router.navigate(['/segundo'], { skipLocationChange: true });
  }




  ngOnInit(): void {
    user.subscribe(state => this.nombre = state.nombre);
  }

}
