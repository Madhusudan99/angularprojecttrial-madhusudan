import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {

  constructor(public fb: FormBuilder) { }

  myForm:any;
  ngOnInit(): void {
    // this.myForm = new FormGroup({
    //   name: new FormControl("James"),
    //   email: new FormControl(""),
    //   message: new FormControl(""),
    // });


    this.myForm = this.fb.group({
      name: ["James", Validators.required],
      email: ['james@mail.com', [Validators.required, Validators.email]],
      message: ['This  messsage is loooooooong', [Validators.required, Validators.minLength(15)]],
    })
  }

  onSubmit(form: FormGroup) {
      console.log("valid", form.valid);
      console.log("Name", form.value.name);
      console.log("Email", form.value.email);
      console.log("Message", form.value.message);
    
  }


}
