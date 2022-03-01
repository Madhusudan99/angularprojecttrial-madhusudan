import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { UserInfoService } from '../user-info.service';
@Component({
  selector: 'app-reactive-address-form',
  templateUrl: './reactive-address-form.component.html',
  styleUrls: ['./reactive-address-form.component.css']
})
export class ReactiveAddressFormComponent implements OnInit {

  result:any;
  constructor(private fb: FormBuilder, public uI: UserInfoService) {
  // this.uI.sendGetRequest();

   }




  userRegistrationForm:any;

  ngOnInit(): void {

    this.userRegistrationForm = this.fb.group({
      firstName: ['John', Validators.required],
      lastName: ['Doe', Validators.required],
      email: ['johndoe@mail.com', [Validators.required, Validators.email]],
      city: ['Ahmedabad', Validators.required],
      age: [32, [Validators.required, Validators.min(18)]],
      phone:['8209759721', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]],
      fromDate:[''],
      toDate:[''],
    })
    this.uI.sendGetRequest().subscribe((data:any) => this.displaydata(data));     
     //console.log(data);
 


  }
  httpdata:any;
  displaydata(data:any) {this.httpdata = data;

    console.log(this.httpdata);}


  fromDateValid:any;
  toDateValid:any;

  getDate(dateStr:any)  {
    return new Date(dateStr);
  }

  getTotalDays(startDate: any, endDate: any) {
    return (endDate.getTime() - startDate.getTime()) / (1000*3600*24);
  }
  fromDate = new Date()
  submitUserRegistrationForm(form: FormGroup) {

    
    console.log("is_valid: ", form.valid);
    console.log("First Name: ", form.value.firstName);
    console.log("Last Name: ", form.value.lastName);
    console.log("Email: ", form.value.email);
    console.log("City: ", form.value.city);
    console.log("Age: ", form.value.age);
    console.log("Phone: ", form.value.phone);
    console.log("From: ", this.getDate(form.value.fromDate))
    console.log("To: ", this.getDate(form.value.toDate))
    console.log("Total Number of Days: ", this.getTotalDays(this.getDate(form.value.fromDate),this.getDate(form.value.toDate)))

  }

}
