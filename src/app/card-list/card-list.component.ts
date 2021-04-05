import { Component , OnInit} from '@angular/core';
import { cardHs,setHs } from '../../interface/card-hs.interface';
import { optionsList } from '../../interface/options-filter.interface';
import { ApiService } from './../api.service';

@Component({
  selector: 'app-root',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.css']
})
export class CardListComponent implements OnInit {
	public images:Array<cardHs> = new Array<cardHs>();

	constructor(private hearthstone:ApiService) {
	}
	ngOnInit(): void {

	}
	
  getUrl(options:optionsList) {
    this.hearthstone.getInfo(options.playerClass).then((data)=>  {
      if (Number(options.manaCost) < 7) {
        this.images = data.filter(function(card) {return Number(card.cost) == Number(options.manaCost) && card.cardSet == options.set;})
      }
      else {
        this.images = data.filter(function(card) {return Number(card.cost) >= Number(options.manaCost) && card.cardSet == options.set;})
      }
    })
    console.log(this.images);
    
  }

  isNotHero(card:cardHs){
		return card.type != "hero";
	}
  
}
