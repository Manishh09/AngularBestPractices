import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-child',
  templateUrl: './first-child.component.html',
  styleUrls: ['./first-child.component.scss']
})
export class FirstChildComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

  }
  onChange(event: any){
   this.isCapsLockOn();

  }
  isCapsLockOn(){
    const input = document.getElementById('email');
    input?.addEventListener('keyup', (event) =>{
      if(event.getModifierState('CapsLock')){
         alert('Caps Lock is on');
      } else {
         alert('Caps Lock Off');
      }
    },{once: true})
  }



}
