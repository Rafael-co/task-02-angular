import { Component } from '@angular/core';
import { Login } from '../../models/login';
import { RegresApiService } from '../../services/regresApi.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class registerComponent {
 public cadastro:Login ={
   email: '',
   password: ''
 }
 constructor(
  private router:Router,
  private registerApi:RegresApiService
 ){}

 public register(form:NgForm):void {
     if(form.valid){
     const novoCadastro = this.cadastro
     console.log(this.cadastro)
     console.log(novoCadastro)
      this.registerApi.register(novoCadastro).subscribe(
        (result)=>{
          console.log(result
            )
            this.router.navigate(["/login"])
        }
      )
     }
 }
}
