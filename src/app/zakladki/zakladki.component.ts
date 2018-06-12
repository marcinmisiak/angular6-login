import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-zakladki',
  templateUrl: './zakladki.component.html',
  styleUrls: ['./zakladki.component.css']
})
export class ZakladkiComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    
  }
  
  tab_num = 4;
  selected = 0;
  selectedIndex: number = 1;
  SWIPE_ACTION = { LEFT: 'left', RIGHT: 'right' };

  swipe(lor: string){
    console.log(lor);
    if(lor === this.SWIPE_ACTION.LEFT  && this.selected < this.tab_num) {
      console.log("movin left")
      this.selected++;
     
    }
    else if(lor === this.SWIPE_ACTION.RIGHT && this.selected > 0  ){
      console.log("movin right")
      this.selected--;
    }
    this.selectedIndex = this.selected;
    console.log(this.selected)
  }

}
