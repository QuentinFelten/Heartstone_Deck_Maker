import { Component , OnInit} from '@angular/core';
import { cardHs } from '../../interface/card-hs.interface';
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
		
		this.hearthstone.getInfo().then((data)=> {this.images = data.filter(this.isNotHero)
			console.log(this.images)})
		console.log(this.images);
		

	}

	isNotHero(card:cardHs){
		return card.type != "Hero"
	  }
	
  
}
