import {Component, OnInit} from '@angular/core';
import {TutorialService} from "../../services/tutorial.service";
import {Tutorial} from "../../models/tutorial";

@Component({
  selector: 'app-add-tutorial',
  templateUrl: './add-tutorial.component.html',
  styleUrls: ['./add-tutorial.component.css']
})
export class AddTutorialComponent implements OnInit {

  tutorial: Tutorial = {
    title: '',
    description: '',
    published: false
  };


  submitted: boolean = false;

  constructor(private tutorialService: TutorialService) {
  }

  ngOnInit(): void {
  }

  saveTutorial() {
    this.tutorialService.create(this.tutorial).subscribe({
      next: (tutorial) => {
        this.submitted = true;
      },
      error: (err) => console.error(err)
    });
  }
}
