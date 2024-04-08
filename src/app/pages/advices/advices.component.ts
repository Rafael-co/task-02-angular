import { Component, afterRender } from '@angular/core';
import { CardAdviceModel } from '../../models/cardAdvice';
import { CatApiService } from '../../services/cat-api.service';
import { AdviceApiService } from '../../services/advice-api.service';

@Component({
  selector: 'app-advices',
  templateUrl: './advices.component.html',
  styleUrl: './advices.component.scss'
})
export class AdvicesComponent {
  public cardDados:CardAdviceModel[] = []

  constructor(private catApi:CatApiService,
    private adviceApi:AdviceApiService){
  
     
  }
  ngOnInit(): void {
    this.getData()
  }
  
  getData(){
  this.catApi.serchTenImages().subscribe(
    (result) => {
   
    for(let i = 1 ;i < result.length;i++){
      let card:CardAdviceModel = {
        advice: '',
        url: ''
      }
      card.url = result[i].url
      
      card.advice = this.getAdvice()
      this.cardDados.push(card)
      
    }
    
    

    },
    (erro) =>{
      console.error(erro)
    })
    
    }
  getAdvice():string{
    let advice = ""
    this.adviceApi.getadvice().subscribe(
      (retorno:{slip:{advice:string}})=>{
        let card:string = retorno.slip.advice
       advice = card
      
       
      }
    )
    return advice
  }
}
