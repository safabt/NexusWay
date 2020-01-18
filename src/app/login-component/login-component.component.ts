import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { LoginService } from '../service/login.service';
import { JsonPipe } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.css']
})
export class LoginComponentComponent implements OnInit {
  firstForm: FormGroup;
  errormessage:string = '';

  constructor(private fb: FormBuilder , private LoginService: LoginService , private router: Router) { }

  ngOnInit() {
    this.firstForm = this.fb.group({
      firstCtrl: ['', Validators.email],
      scndCtrl: ['', Validators.required],
    });
  }
  onFirstSubmit() {
   console.log(this.firstForm.get('firstCtrl').value);

   this.LoginService.authenticate(this.firstForm.get('firstCtrl').value ,this.firstForm.get('scndCtrl').value).subscribe(data => {
    localStorage.setItem('token',data.token);
    localStorage.setItem('refresh_token', data.refresh_token);
    this.LoginService.login().subscribe(data => {
      localStorage.setItem("email", data.email);  
    });
    this.router.navigateByUrl('/home');    
  }, err => {
    this.errormessage="************  Please verify your data !";
    console.log(err);
   
  }
);
  }

}
