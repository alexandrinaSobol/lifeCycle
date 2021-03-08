import { Component, OnInit, Input, SimpleChange } from '@angular/core';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.scss']
})

export class Child2Component implements OnInit { 
  name = "Tom"; 

  items = ['item1', 'item2', 'item3', 'item4'];
  t1 ='salut Input';
 
  @Input()
value = 'valoare initiala';

addItem(newItem: string) {
  this.items.push(newItem);
}


  constructor() {
    console.log("CHILD2 constructor", this.value)
   }

   ngOnChanges(changes: SimpleChange): void{
    console.log("CHILD2  ngOnChanges", changes)
  } 

   ngOnInit(): void {
    console.log("CHILD2 ngOnInit", this.value)
  }

  ngDoCheck(): void{
    console.log("CHILD2 ngDoCkeck", this.value)
  }  

  ngAfterContentInit(): void{
    console.log("CHILD2 ngAfterContentInit", this.value)
  }

  ngAfterContentChecked(): void{
    console.log("CHILD2 ngAfterContentChecked", this.value)
  }

  ngAfterViewInit(): void{
    console.log("CHILD2 ngAfterViewInit", this.value)
  }

  ngAfterViewChecked(): void{
    console.log("CHILD2 ngAfterViewChecked", this.value)
  }

  ngOnDestroy():void {
  console.log("CHILD2  ngOnDestroy", this.value)
  }

}
