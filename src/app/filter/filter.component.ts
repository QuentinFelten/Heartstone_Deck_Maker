import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import {manaCost,set,playerClass} from '../constant/filter-options.constant';
import { optionsList } from '../../interface/options-filter.interface';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {
  selectedManaCost?:string;
  selectedPlayerClass?:string;
  selectedSet?:string;
  manaCostList:Array<options>;
  setList:Array<options>;
  playerClassList:Array<options>;
  @Output()
  filterEvent = new EventEmitter<optionsList>();

  constructor() { 
    this.manaCostList = manaCost;
    this.setList = set;
    this.playerClassList = playerClass;
  }

  ngOnInit(): void {
      
  }

  onSubmit() {
    console.log(this.selectedManaCost + " " + " "+this.selectedPlayerClass+ " "+this.selectedSet)
    const optList: optionsList = {manaCost : this.selectedManaCost as string ,playerClass : this.selectedPlayerClass as string ,set : this.selectedSet as string};
    this.filterEvent.emit(optList);
  }

}

interface options {
  name : string
  value : string
}
 
