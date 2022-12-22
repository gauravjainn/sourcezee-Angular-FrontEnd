import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../_services/auth.service';

import { AbstractControl, FormBuilder, FormGroup, FormControl, Validators, NgForm } from '@angular/forms';
import Validation from '../../_utils/validation';

@Component({
	selector: 'app-register',
	templateUrl: './register.component.html',
	styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

	submitted = false;
	show_button: Boolean = false;
	show_eye: Boolean = false;
	conform_button: Boolean = false;
	showconfirm_eye: Boolean = false;

	formgroup: any;

	// form: any = {

	// 	user_type: null,
	// 	company_name: null,
	// 	first_name: null,
	// 	last_name: null,
	// 	mobile: null,
	// 	fax: null,
	// 	address: null,
	// 	address2: null,
	// 	country: null,
	// 	city: null,
	// 	state: null,
	// 	zip: null,
	// 	tax_id: null,
	// 	website: null,
	// 	email: null,
	// 	confirm_email: null,
	// 	password: null,
	// 	confirm_password: null,
	// 	t_n_c: null,
	// };

	isSuccessful = false;
	isSignUpFailed = false;
	errorMessage = '';
	returnMessage = '';

	proper = false;


	constructor(private authService: AuthService, private formBuilder: FormBuilder, private _router: Router) { }


	ngOnInit(): void {
		this.formgroup = this.formBuilder.group(
			{

				user_type: ['Buyer', [Validators.required]],
				company_name: [''],
				first_name: ['', [Validators.required]],
				last_name: ['', [Validators.required]],
				mobile: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]],
				fax: [''],
				address: [''],
				address2: [''],
				country: ['', [Validators.required]],
				city: ['', [Validators.required]],
				state: ['', [Validators.required]],
				zip: ['', [Validators.required]],
				tax_id: ['', [Validators.required]],
				website: [''],
				email: ['', [Validators.required, Validators.email]],
				confirm_email: ['', [Validators.required, Validators.email]],
				password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(40)]],
				confirm_password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(40)]],
				t_n_c: [false, [Validators.requiredTrue]]
			},
			{
				validators: [Validation.match('password', 'confirm_password'), Validation.match('email', 'confirm_email')],
			}
		);
	}

	// get isEmailMismatch() { return this.form.getError('emailMismatch') }


	clearForm() {
		this.formgroup.reset();
	}

	// keyPress(event: any) {
	// 	const pattern = /[0-9\+\-\ ]/;
	// 	let inputChar = String.fromCharCode(event.charCode);
	// 	if (event.keyCode != 8 && !pattern.test(inputChar) && event.minLength(10)) {
	// 		event.preventDefault();
	// 	}
	// }


	onSubmit(): void {
		console.log("Inside");

		if (this.formgroup.invalid) {
			this.errorMessage = "Please fill in all required fields!";
			this.isSignUpFailed = true;
			return;
		}

		const { user_type, company_name, first_name, last_name, mobile, fax, address, country, city, state, zip, tax_id, email, password, website } = this.formgroup.value;

		this.authService.register(user_type, company_name, first_name, last_name, mobile, fax, address, country, city, state, zip, tax_id, email, password, website).subscribe({
			next: data => {
				console.log(data);

				if (data.success == true) {
					console.log("Register true");
					this.isSuccessful = true;
					this.returnMessage = data.message;
					this.isSignUpFailed = false;
					console.log(this.returnMessage);
					console.log(this.isSuccessful);
					// this._router.navigate(['/']);
				}

				if (data.status == false) {
					console.log("Register false");
					this.errorMessage = data.message;
					this.isSignUpFailed = true;
					console.log(this.errorMessage);
					console.log(this.isSuccessful);
				}

			},
			error: err => {
				console.log(err);
				this.errorMessage = err.error.message;
				// this.errorMessage = "Please fill in all required fields!";
				this.isSignUpFailed = true;
				console.log(this.isSuccessful);
			}
		});
	}


	// get f(): { [key: string]: AbstractControl } {
	// 	return this.form.controls;
	// }

	onReset(): void {
		this.submitted = false;
		this.formgroup.reset();
	}

	goTo() {
		this._router.navigate(['']);
	}

	redirectToLogin() {
		this._router.navigate(['/']);
	}


	get f(): { [key: string]: AbstractControl } {
		return this.formgroup.controls;
	}

	showPassword() {
		this.show_button = !this.show_button;
		this.show_eye = !this.show_eye;
	}
	confirmPassword() {
		this.conform_button = !this.conform_button;
		this.showconfirm_eye = !this.showconfirm_eye;
	}
	confirmEmail() {
		this.conform_button = !this.conform_button;
	}
}
