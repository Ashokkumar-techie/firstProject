import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators  } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet , HeaderComponent , HomeComponent,ReactiveFormsModule,AppComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'firstProject';
  x=10;

   test() {
    return this.x; 
  }

  city = "Hyderabad";

  d = new Date().toLocaleTimeString();

  timer = setInterval(()=>{
    this.d = new Date().toLocaleTimeString();
  },1000)
    
   
  path = "y4.avif";

  c = "pecial special";


  login = new FormGroup({
    uname: new FormControl(),
    password: new FormControl(),
  })

  onSubmit(){
    console.log(this.login);
  }

  

}
