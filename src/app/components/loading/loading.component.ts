import { Component, OnInit, Input } from '@angular/core';
import { transition, trigger, state, style, animate } from '@angular/animations';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.css'],
  animations : [
    // trigger('openClose', [
    //   state('open', style({
    //     opacity: 0
    //   })),
    //   transition('closed <=> open', animate(1000)),
    // ]),

    // trigger('openClose', [
    //   state('void', style({
    //     opacity: 0
    //   })),
    //   transition('void <=> *', animate(1000)),
    // ]),




    trigger('openClose', [
      // ...
      state('open', style({
        opacity: 1,
      })),
      state('closed', style({
        opacity: 0,
      })),
      transition('open => closed', [
        animate('2s')
      ]),
      transition('closed => open', [
        animate('0.5s')
      ]),
    ]),

]
})
export class LoadingComponent implements OnInit {

  //@Input() loading: boolean = false;
  loading = true;

  constructor() { }

  ngOnInit() {

    setTimeout(() => {
      this.loading = false;
      console.log('mando false');
      
    }, 2000);

  }

}

/*

https://dzone.com/articles/understanding-angular-6-animations
https://medium.com/@tanya/angular4-animated-route-transitions-b5b9667cd67c
https://www.freecodecamp.org/news/how-to-use-animation-with-angular-6-675b19bc3496/
https://angular.io/guide/animations

*/