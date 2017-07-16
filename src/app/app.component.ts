import { Component, ViewChild } from '@angular/core';
import { NgForm } from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  selectedSection = 'about';
  @ViewChild('f') mainForm: NgForm;
  portfolioData = [{ "name": 'Tic Tac Toe', "img": 'assets/tictactoe.PNG', "link": 'https://codepen.io/ayush987goyal/full/WRNaMX/' },
  { "name": 'Simon Game', "img": 'assets/simongame.PNG', "link": 'https://codepen.io/ayush987goyal/full/egmjEw/' },
  {"name": 'Markdown Previewer', "img": 'assets/markdown.PNG', "link": 'https://ayush987goyal.github.io/mardown-previewer/'},
  {"name": "Camper Leaderboard", "img": 'assets/leaderboard.PNG', "link": 'https://ayush987goyal.github.io/camper-leaderboard/'},
  { "name": 'Pomodoro Clock', "img": 'assets/pomodoroclock.PNG', "link": 'https://codepen.io/ayush987goyal/full/apbmRj/' },
  { "name": 'Wikipedia Viewer', "img": 'assets/wikiviewer.PNG', "link": 'https://codepen.io/ayush987goyal/full/QdLwzq/' },
  { "name": 'Random Joke Machine', "img": 'assets/jokemachine.PNG', "link": 'https://codepen.io/ayush987goyal/full/PbMpJz/' },
  { "name": 'Calculator', "img": 'assets/calculator.PNG', "link": 'https://codepen.io/ayush987goyal/full/dNyGRQ/' }];

  onSectionChange(section) {
    this.selectedSection = section;
  }

  onSubmit(){
    console.log(this.mainForm.value);
    this.mainForm.form.reset();
  }
}
