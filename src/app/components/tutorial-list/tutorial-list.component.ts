import {Component, OnInit} from '@angular/core';
import {TutorialService} from "../../services/tutorial.service";
import {Tutorial} from "../../models/tutorial";

@Component({
  selector: 'app-tutorial-list',
  templateUrl: './tutorial-list.component.html',
  styleUrls: ['./tutorial-list.component.css']
})
export class TutorialListComponent implements OnInit {

  tutorials!: Tutorial[];

  constructor(private tutorialService: TutorialService) {
  }

  ngOnInit(): void {
    this.fetchTutorials();
  }

  private fetchTutorials() {
    this.tutorialService.getAll().subscribe({
      next: (data: Tutorial[]) => {
        this.tutorials = data;
      },
      error: (error) => console.log(error)
    });
  }

  removeAllTutorials() {
    console.log("Button clicked")

    this.tutorialService.deleteAll().subscribe({
      next: () => {
        this.tutorials = [];
      },
      error: (error) => console.log(error)
    });
  }
}
