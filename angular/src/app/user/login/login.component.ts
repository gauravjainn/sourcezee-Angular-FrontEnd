import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../../_services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form: any = {
    email: null,
    password: null
  };
  isLoggedIn = false;
  isLoginFailed = false;
  show_button: Boolean = false;
  show_eye: Boolean = false;

  errorMessage = '';
  roles: string[] = [];


  constructor(private authService: AuthService,
    private _router: Router,) { }

  ngOnInit(): void {
    // if (this.tokenStorage.getToken()) {
    //   this.isLoggedIn = true;
    //   this.roles = this.tokenStorage.getUser().roles;
    // }
   
  }

  onSubmit(): void {
    const { email, password } = this.form;

    this.authService.login(email, password).subscribe({
      next: resp => {

        if (resp.statusCode === 200) {
          var localdata = window.btoa(JSON.stringify(resp.data));
          localStorage.setItem("userdata", localdata);

          var token = resp.data.auth_token;
          localStorage.setItem("token", token);

          this.isLoginFailed = false;
          this.isLoggedIn = true;

          this._router.navigate(['/home']);
        }
      },
      error: err => {
        this.errorMessage = err.error.message;
        console.log(this.errorMessage);
        this.isLoginFailed = true;
      }
    });
  }

  reloadPage(): void {
    window.location.reload();
  }

  goTo() {
    this._router.navigate([''])
  }
  showPassword() {
    this.show_button = !this.show_button;
    this.show_eye = !this.show_eye;
  }
 
}
