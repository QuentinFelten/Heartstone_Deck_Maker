import { Component , OnInit} from '@angular/core';
import { cardHs } from '../../interface/card-hs.interface';
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

	isNotHero(card:cardHs){
		return card.type != "Hero"
	}
	
  getUrl(options:optionsList) {
    this.hearthstone.getInfo().then((data)=> {this.images = data.filter(this.isNotHero))
    console.log(options + "test");
    
  }
  
}
