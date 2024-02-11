import { Component, OnInit } from '@angular/core';
import { ISkill } from 'src/app/interface/skill';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent implements OnInit {
  selectedSkillSet : string = 'JavaScript';
  numsValue = 150;
  skillArr : Array<ISkill> = [
    {
      skillName : "javascript",
      content : `<strong>javascript</strong> Javascript is the high-level, 
      interpreted programming language primariy used for adding interactivity of web pages.`
    },
    {
      skillName : "angular",
      content : `<strong>angular</strong> Angular is the framework of javascript 
      which is used to easy to add functionality.`
    },
    {
      skillName : "node",
      content : `<strong>node</strong> Node are the providing to the node package manager.`
    }
  ]
  
  constructor() { }

  ngOnInit(): void {
  }

  selectSkill(skill : string){
    // console.log(skill);
    this.selectedSkillSet = skill;
  }

}
