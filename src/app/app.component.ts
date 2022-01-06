import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  newName= '';
  members: string[] = [];
  errorMessage = '';
  numberOfTeams: number | '' = '';
  teams: string [][] = [];

  onInput(member: string){
    this.newName = member;
  }

  onInputTeams(value: string) {
    this.numberOfTeams = Number(value);
  }

  addMember() {
    if(!this.newName)
    {
      this.errorMessage = "Please enter a valid name";
      return;
    }
   this.members.push(this.newName);
   this.newName = '';
   this.errorMessage= '';
  }

  generateTeams() {
    if(!this.numberOfTeams || this.numberOfTeams <= 0) {
      this.errorMessage = "Please enter a valid number";
      return;
    }
    if(this.members.length < this.numberOfTeams){
      this.errorMessage = "Members are less than team count";
      return;
    }
    this.errorMessage = '';
    const allmembers = [...this.members];

    while(allmembers.length) {
      for (let i = 0; i<this.numberOfTeams; i++)
    {
      const randomindex = Math.floor(Math.random() * allmembers.length);
      const member = allmembers.splice(randomindex, 1)[0];
      if(!member) break;
      if(this.teams[i]) {
        this.teams[i].push(member)
      }
     else
       {
        this.teams[i]= [member];
      }
    }
    }
    this.numberOfTeams = '';
    this.members = [];
  }
}
