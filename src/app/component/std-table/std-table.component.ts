import { Component, OnInit } from '@angular/core';
import { playerArr } from 'src/app/consts/consts';
import { IPlayer } from 'src/app/interface/player';

@Component({
  selector: 'app-std-table',
  templateUrl: './std-table.component.html',
  styleUrls: ['./std-table.component.scss']
})
export class StdTableComponent implements OnInit {

  playerData : Array<IPlayer> = playerArr

  constructor() { }

  ngOnInit(): void {
    console.log(this.playerData);
    
  }

}
