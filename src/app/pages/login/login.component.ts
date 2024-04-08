import { RegresApiService } from '../../services/regresApi.service';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Login } from '../../models/login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit{
  public formLogin: FormGroup
 

  constructor(
    formBuilder: FormBuilder,
    private router: Router,
    private apiLogin:RegresApiService
  ){
    this.formLogin = formBuilder.group({
      email:["", [Validators.required, Validators.email]],
      password:["", [Validators.required]]
    });
  }
  ngOnInit(): void {
   localStorage.clear
  }

  public login (){
    
    if(this.formLogin.valid){
      const login:Login = this.formLogin.value
    this.apiLogin.login(login).subscribe(
      (retorno:{token:string})=>{
        localStorage.setItem("token",retorno.token)
        alert("login realizado com sucesso")
        this.router.navigate(['/advices'])
      }
    )
    }else{
      alert("credenciais erradas")
    }
    
  }
}
