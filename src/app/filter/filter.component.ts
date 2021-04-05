import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import {manaCost,set,playerClass,format} from '../constant/filter-options.constant';
import { optionsList } from '../../interface/options-filter.interface';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {
  selectedManaCost?:string;
  selectedFormat?:string;
  selectedPlayerClass?:string;
  selectedSet?:string;
  manaCostList:Array<options>;
  setList:Array<options>;
  formatList:Array<options>;
  playerClassList:Array<options>;
  @Output()
  filterEvent = new EventEmitter<optionsList>();

  constructor() { 
    this.manaCostList = manaCost;
    this.setList = set;
    this.playerClassList = playerClass;
    this.formatList = format;
  }

  ngOnInit(): void {
      
  }

  onSubmit() {
    
    console.log(this.selectedManaCost + " " + this.selectedFormat+ " "+this.selectedPlayerClass+ " "+this.selectedSet)
    const optList: optionsList = {manaCost : this.selectedManaCost,format : this.selectedFormat,playerClass : this.selectedPlayerClass,set : this.selectedSet};
    this.filterEvent.emit(optList);
  }

}

interface options {
  name : string
  value : string
}
 
