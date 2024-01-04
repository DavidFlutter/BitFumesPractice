import { Component } from '@angular/core';
import { ILoginForm } from '../interfaces/IForms';

@Component({
  selector: 'app-login',
  template: `
    <div class="wrapper">
      <div class="form-tile">
        <img src="https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Ym9va3xlbnwwfHwwfHx8MA%3D%3D" alt="">
        <form #myForm="ngForm">
          <h2>Welcome Back</h2>
          <section class="email">
            <label for="email">Email</label>
            <input type="email" name="email" [(ngModel)]="form.email" required>
          </section>
          <section class="password">
            <label for="email">Password</label>
            <input type="password" name="password" [(ngModel)]="form.password" required>
          </section>
          <button (click)="submit(myForm.form.invalid)" type="submit">Login</button>
        </form>
      </div>
    </div>
  `,
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  form:ILoginForm = {
    email:"",
    password:"",
  }

  submit(isInvalid:boolean):void{
    if(isInvalid){
      alert("All fields are rquired");
      return;
    }
    console.log(this.form);
    this.form.email = "";
    this.form.password = "";
  }
}
