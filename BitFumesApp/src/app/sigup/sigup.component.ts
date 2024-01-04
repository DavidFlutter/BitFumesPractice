import { Component } from '@angular/core';
import { ILoginForm, ISignUpForm } from '../interfaces/IForms';

@Component({
  selector: 'app-login',
  template: `
    <div class="wrapper">
      <div class="form-tile">
        <img src="https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Ym9va3xlbnwwfHwwfHx8MA%3D%3D" alt="">
        <form #myForm="ngForm">
          <h2>Welcome</h2>
          <section class="email">
            <label for="email">Email</label>
            <input type="email" name="email" [(ngModel)]="form.email" required>
          </section>
          <section class="password">
            <label for="password">Password</label>
            <input type="password" name="password" [(ngModel)]="form.password" required>
          </section>
          <section class="password">
            <label for="confrim-password">Confrim password</label>
            <input type="password" name="confrim-password" [(ngModel)]="form.confrimPassword" required>
          </section>
          <button (click)="submit(myForm.form.invalid)" type="submit">Signup</button>
        </form>
      </div>
    </div>
  `,
  styleUrl: './sigup.component.scss'
})
export class SigupComponent {
  form:ISignUpForm = {
    email:"",
    password:"",
    confrimPassword:"",
  }

  submit(isInvalid:boolean):void{
    if(isInvalid){
      alert("All fields are rquired");
      return;
    }
    if(!this.form.email.includes("@") || !this.form.email.includes(".")){
      alert("Email is invalid");
      return;
    }
    console.log(this.form);
    this.form.email = "";
    this.form.password = "";
    this.form.confrimPassword = "";
  }
}
