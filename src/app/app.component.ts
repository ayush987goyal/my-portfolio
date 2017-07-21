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
  portfolioData = [{ "name": 'Tic Tac Toe', "img": 'https://raw.githubusercontent.com/ayush987goyal/my-portfolio/master/src/assets/tictactoe.PNG', "link": 'https://codepen.io/ayush987goyal/full/WRNaMX/' },
  { "name": 'Simon Game', "img": 'https://raw.githubusercontent.com/ayush987goyal/my-portfolio/master/src/assets/simongame.PNG', "link": 'https://codepen.io/ayush987goyal/full/egmjEw/' },
  {"name": 'Fame of Life', "img": 'https://raw.githubusercontent.com/ayush987goyal/my-portfolio/master/src/assets/gameoflife.PNG', "link": 'https://ayush987goyal.github.io/game-of-life/'},
  {"name": 'Markdown Previewer', "img": 'https://raw.githubusercontent.com/ayush987goyal/my-portfolio/master/src/assets/markdown.PNG', "link": 'https://ayush987goyal.github.io/mardown-previewer/'},
  {"name": "Camper Leaderboard", "img": 'https://raw.githubusercontent.com/ayush987goyal/my-portfolio/master/src/assets/leaderboard.PNG', "link": 'https://ayush987goyal.github.io/camper-leaderboard/'},
  { "name": 'Pomodoro Clock', "img": 'https://raw.githubusercontent.com/ayush987goyal/my-portfolio/master/src/assets/pomodoroclock.PNG', "link": 'https://codepen.io/ayush987goyal/full/apbmRj/' },
  {"name": 'Recipe Book', "img": 'https://raw.githubusercontent.com/ayush987goyal/my-portfolio/master/src/assets/recipebook.PNG', "link": 'https://ayush987goyal.github.io/recipe-book/'},
  { "name": 'Wikipedia Viewer', "img": 'https://raw.githubusercontent.com/ayush987goyal/my-portfolio/master/src/assets/wikiviewer.PNG', "link": 'https://codepen.io/ayush987goyal/full/QdLwzq/' },
  { "name": 'Random Joke Machine', "img": 'https://raw.githubusercontent.com/ayush987goyal/my-portfolio/master/src/assets/jokemachine.PNG', "link": 'https://codepen.io/ayush987goyal/full/PbMpJz/' },
  { "name": 'Calculator', "img": 'https://raw.githubusercontent.com/ayush987goyal/my-portfolio/master/src/assets/calculator.PNG', "link": 'https://codepen.io/ayush987goyal/full/dNyGRQ/' }];

  onSectionChange(section) {
    this.selectedSection = section;
  }

  onSubmit(){
    console.log(this.mainForm.value);
    this.mainForm.form.reset();
  }
}
