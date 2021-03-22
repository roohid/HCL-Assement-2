import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngxs/store';
import Swal from 'sweetalert2';
 
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(
    private router: Router,
  ) {
    this.loginForm = new FormGroup({
      username: new FormControl('', {
        validators: [Validators.required]
      }),
      password: new FormControl('', {
        validators: [Validators.required]
      }),
    });

  }

  ngOnInit(): void {
  }


// Login Action
  login() {
    if (this.loginForm.controls.username.value === 'admin' && this.loginForm.controls.password.value === 'admin') {
      this.router.navigate(['/contact-form']);
    } else {
      Swal.fire({
        title: 'Login Faild',
        text: 'Invalid User Name or Password',
        icon: 'error',
        showConfirmButton: true,
        confirmButtonColor: '#00AEC5'
      });
    }
  }

}
