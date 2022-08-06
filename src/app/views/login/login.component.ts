import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loginForm!: FormGroup;
  public resultado!:string;

  constructor(private fb:FormBuilder) {
     
   }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      user: ['usuario', Validators.required],
      password: ['senha', Validators.required]
   })
  }

  submitForm(){
    this.resultado = JSON.stringify(this.loginForm.value)
  }

}
