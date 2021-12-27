import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-siblings',
  templateUrl: './siblings.component.html',
  styleUrls: ['./siblings.component.css']
})
export class SiblingsComponent implements OnInit {


  datamessage = "";

  constructor(private dataservice : DataService) { }

  ngOnInit(): void {

    this.dataservice.currentMessage.subscribe(data => this.datamessage = data);
   // this.newMessage();
   this.dataservice.newdata("hello it will apply all other components - sibling initial");
  }

  newMessage()
  {
    this.dataservice.newdata("hello it will apply all other components");
  }


}
