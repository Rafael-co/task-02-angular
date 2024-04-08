import { AdviceApiService } from './../../services/advice-api.service';

import { CardAdviceModel } from '../../models/cardAdvice';
import { CatApiService } from './../../services/cat-api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  public cardDados:CardAdviceModel = {
    advice : " aasd",
    url: ""
  }

  constructor(private catApi:CatApiService,
    private adviceApi:AdviceApiService){
     
  }
  ngOnInit(): void {
    this.getData()
  }
  
  getData(){
  this.catApi.searchImage().subscribe(
    (result) => {
    this.cardDados.url = result[0].url
    this.getAdvice()
  

    },
    (erro) =>{
      console.error(erro)
    })
    
    }
  getAdvice(){
    this.adviceApi.getadvice().subscribe(
      (retorno:{slip:{advice:string}})=>{
        let card:string
        card=retorno.slip.advice
      
        this.cardDados.advice = card
      
       
      }
    )
  }
 }



