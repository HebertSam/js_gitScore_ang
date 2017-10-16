import { Component, OnInit } from '@angular/core';
import { GitService } from './../git.service';

@Component({
  selector: 'app-git-score',
  templateUrl: './git-score.component.html',
  styleUrls: ['./git-score.component.css']
})
export class GitScoreComponent implements OnInit {

  user = {user:""};
  score = [];
  newScore;

  constructor(private _gitService: GitService) { }

  ngOnInit() {
  }
  gitScore(){
    this._gitService.getScore(this.user.user, (data) =>{
      this.newScore = data
      this.score.push(data)
      // console.log(data)
      console.log(this.newScore)
    })
  }


}
