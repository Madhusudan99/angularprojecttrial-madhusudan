import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-httpcheck',
  templateUrl: './httpcheck.component.html',
  styleUrls: ['./httpcheck.component.css']
})
export class HttpcheckComponent implements OnInit {

  constructor(private http: HttpClient) { }

  httpdata:any;
  
  ngOnInit() {
    this.http.get("http://192.168.2.85:3000/users")
    .subscribe((data) => this.displaydata(data));     
 }

 displaydata(data:any) {this.httpdata = data;

console.log(this.httpdata);}
    
    

}
