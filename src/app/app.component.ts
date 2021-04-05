import { Component , OnInit} from '@angular/core';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

	constructor(private hearthstone:ApiService) {
	}
	ngOnInit(): void {
		this.hearthstone.getInfo().then((data)=> {console.log(data)})
	}
	
  
}
