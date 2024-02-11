import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skill-sets',
  templateUrl: './skill-sets.component.html',
  styleUrls: ['./skill-sets.component.scss']
})
export class SkillSetsComponent implements OnInit {
  skills : Array<string> = ["HTML5", "CSS3", "SASS", "FLEX"];
  constructor() { }

  ngOnInit(): void {
  }

}
