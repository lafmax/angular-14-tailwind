import { AfterViewInit, Component, Directive, ElementRef, EventEmitter, HostListener, OnChanges, Output, ViewChild } from '@angular/core';
import { OnInit } from '@angular/core';
import { initFlowbite } from 'flowbite';
import * as dayjs from 'dayjs';
import { Dynamic1Component } from './dynamic1/dynamic1.component';
import { Dynamic2Component } from './dynamic2/dynamic2.component';
declare var Datepicker: any;

@Directive({
  selector: "[change-datepicker]",
})
export class ChangeDateDirective {
  @Output() data: EventEmitter<any> = new EventEmitter();

  @HostListener('changeDate', ['$event.detail.date'])
  public clicked(d: Date): void {
    this.data.emit(dayjs(d).format('DD-MM-YYYY'));
  }
}

Datepicker.locales.es = {
  days: ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"],
  daysShort: ["Dom", "Lun", "Mar", "Mié", "Jue", "Vie", "Sáb"],
  daysMin: ["Do", "Lu", "Ma", "Mi", "Ju", "Vi", "Sa"],
  months: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"],
  monthsShort: ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"],
  today: "Hoy",
  monthsTitle: "Meses",
  clear: "Borrar",
  weekStart: 1,
  format: "dd/mm/yyyy"
};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit {

  /* const COMPONENTS = [
    {
      data: {
        text: 'Component 1'
      },
      component : BannerOneComponent
    },
    {
      data: {
        text: 'Component 2'
      },
      component : BannerTwoComponent
    }
  ] */

  dynamicsComponent: any = Dynamic1Component;
  title = 'web-app';
  class = 'bg-green-600';
  dateInitCalendar = '';

  @ViewChild('calendar') public calendar!: ElementRef;

  ngOnInit(): void {
    initFlowbite();
  }

  fnClass(): string {
    return this.class;
  }

  readChangeDate(data: any) {
    console.log(data);
    this.dateInitCalendar = data;
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.class = 'bg-indigo-700';
    }, 3000);
    new Datepicker(this.calendar.nativeElement, {
      todayHighlight: true,
      minDate: new Date(),
      language: 'es'
    }).setDate(this.dateInitCalendar);

  }
}


