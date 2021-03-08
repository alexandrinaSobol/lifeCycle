import { Component, DoCheck, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChange } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})

export class ChildComponent {
@Input()
text = 'hello'

@Input() 
userName: string = '';

@Output() userNameChange = new EventEmitter<string>();
    onNameChange(model: string){
        this.userName = model;
        this.userNameChange.emit(model);
    }

@Output() newItemEvent = new EventEmitter<string>();


value = 'valoare initiala';

addNewItem(value: string) {
  this.newItemEvent.emit(value);
}

deleteItem(value: string){
  this.newItemEvent.emit(value)

}

  constructor() {
    console.log("CHILD constructor", this.value)
   }

   ngOnChanges(changes: SimpleChange): void{
    console.log("CHILD  ngOnChanges", changes)
  } 

   ngOnInit(): void {
    console.log("CHILD ngOnInit", this.value)
  }

  ngDoCheck(): void{
    console.log("CHILD ngDoCkeck", this.value)
  }  

  ngAfterContentInit(): void{
    console.log("CHILD ngAfterContentInit", this.value)
  }

  ngAfterContentChecked(): void{
    console.log("CHILD ngAfterContentChecked", this.value)
  }

  ngAfterViewInit(): void{
    console.log("CHILD ngAfterViewInit", this.value)
  }

  ngAfterViewChecked(): void{
    console.log("CHILD ngAfterViewChecked", this.value)
  }

  ngOnDestroy():void {
  console.log("CHILD  ngOnDestroy", this.value)
  }
}
