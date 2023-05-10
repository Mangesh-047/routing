import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appNavbarClick]'
})
export class NavbarClickDirective {

  constructor() { }


  @HostListener('click', ['$event'])
  onclick(eve: Event) {
    // console.log(eve.target);
    let el = eve.target as HTMLElement

    // console.log(el.closest('button')?.nextElementSibling);
    el.closest('button')?.nextElementSibling?.classList.toggle('show')
  }


}
