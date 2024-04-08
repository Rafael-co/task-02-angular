import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {
public token !:string|null
public isLogado:boolean = this.token!=null?true:false

constructor(){

}
  ngOnInit(): void {
    this.capturarToken()
  }

capturarToken(){
  this.token = localStorage.getItem("token")
}
}
