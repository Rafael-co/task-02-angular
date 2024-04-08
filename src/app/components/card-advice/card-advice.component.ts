import { Component, Input } from '@angular/core';
import { CardAdviceModel } from '../../models/cardAdvice';

@Component({
  selector: 'app-card-advice',
  templateUrl: './card-advice.component.html',
  styleUrl: './card-advice.component.scss'
})
export class CardAdviceComponent {
  @Input()
  card!:CardAdviceModel ; 
}
