import { CommonModule, JsonPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {  FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators  } from '@angular/forms';






@Component({
  selector: 'app-reactive-form',
  imports: [CommonModule,ReactiveFormsModule,FormsModule,JsonPipe],
  templateUrl: './reactive-form.component.html',
  styleUrl: './reactive-form.component.css'
})
export class ReactiveFormComponent implements OnInit {
    

    stdForm:FormGroup;
  constructor(private fbuilder:FormBuilder)
  {
    this.stdForm=this.fbuilder.group({
      firstname:['Radha',[Validators.required]],
      lastname:'',
      username:'',
      city:'',
      state:'',
      zipCode:'',
      IsAgree:false, 
    })
  }
 
  ngOnInit(): void {

   

  IndianStates : [
    {id:1,name:"Telangana"},
    {id:2,name:"Andhra"},
    {id:3,name:"Tamilnadu"},
    {id:4,name:"Karanataka"},
    {id:1,name:"Maharastra"},
  ]

//   stdForm:FormGroup = new FormGroup({ 
//     firstname: new  FormControl("Radha",[Validators.required, Validators.minLength(5)]),
//     lastname: new FormControl(''),
//     username: new FormControl(''),
//     city: new FormControl(''),
//     state : new FormControl(''),
//     zipCode : new FormControl(''),
//     IsAgree : new FormControl(false)



    



//   });

//   onSubmit(){
//     console.log(this.stdForm);
//  }
  }

}



