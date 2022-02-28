import { Component, OnInit, Input } from '@angular/core';
import { UserInfoService } from '../user-info.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  userData:any;
  constructor(public uI: UserInfoService) { 
   }

   btnPressed(){
     this.uI.increaseCounter();
   }
   name="";
   sendNameToService(){
    this.uI.name = this.name;
   }
  ngOnInit(): void {
  }


  
  
}
