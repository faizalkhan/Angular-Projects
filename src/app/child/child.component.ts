import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { DataService } from '../data.service';


@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Input() message;

  datamessage ="";
  
  childmsg= "Child to parent";

  baba = "iam your son";

  @Output() messageEvent = new EventEmitter();

 
  constructor(private dataservice : DataService) { }

  sendMessage()
  {
    this.messageEvent.emit(this.childmsg);
  }

  ngOnInit(): void {
  console.log("child component - init");
    this.dataservice.newdata("hello it will apply all other components - child initial");
    this.dataservice.currentMessage.subscribe(data => this.datamessage = data);

  }

  

}
