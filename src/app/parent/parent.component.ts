import { AfterViewInit, ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { ChildComponent } from '../child/child.component';
import { DataService } from '../data.service';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit, AfterViewInit {

  msg:string = "hello how are you boss";

  recevent;

  datamessage; 

  babas ="aa";

  @ViewChild(ChildComponent) child;


  constructor( private cdref: ChangeDetectorRef, private dataservice : DataService) { }
 
  ngOnInit(): void {
    console.log("parent component -init");
    this.dataservice.newdata("hello it will apply all other components - parent initial");
    this.dataservice.currentMessage.subscribe(data => this.datamessage = data);
    
  }
  ngAfterViewInit()
  {
    debugger;
    this.recevent = this.child.childmsg;
    this.cdref.detectChanges();
    this.babas = this.child.baba;
  }
  receivedEvent(evnt)
  {
    debugger;
    console.log(evnt);
     this.recevent = "i changed " + evnt;
  }

}
