import { Component, OnInit } from '@angular/core';
import { trigger, state, animate, transition, style } from '@angular/animations';
import { NgModule } from '@angular/core';

@Component({
  selector: 'aplicacio',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
  animations: [
    trigger("animacioBanner", [
      state('hidden', style({
        transform: 'translateY(0%)', opacity:0})
      ), state('shown', style({
        transform: 'translateY(100%)', opacity: 1})
      ), transition('hidden => shown', [
        animate('1s')
      ]),
    ])
  ]
})


export class MenuComponent implements OnInit{
  constructor() { }

  ngOnInit(): void {
  }

  state = 'hidden';

  ngAfterViewInit() {
    setTimeout( () => {
      this.state = 'shown';
    }, 0);
  }

  megadada: string="pobresa mundial 2022";
}
