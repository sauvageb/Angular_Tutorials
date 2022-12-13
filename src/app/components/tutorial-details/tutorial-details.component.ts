import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {TutorialService} from "../../services/tutorial.service";
import {Tutorial} from "../../models/tutorial";

@Component({
  selector: 'app-tutorial-details',
  templateUrl: './tutorial-details.component.html',
  styleUrls: ['./tutorial-details.component.css']
})
export class TutorialDetailsComponent implements OnInit {

  currentTutorial!: Tutorial;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private tutorialService: TutorialService) {
  }

  ngOnInit(): void {
    let tutorialId = this.route.snapshot.params['id'];

    this.tutorialService.getOne(tutorialId).subscribe({
      next: (tuto: Tutorial) => {
        this.currentTutorial = tuto;
      },
      error: err => console.log(err)
    });

  }

  removeTutorial() {
    this.tutorialService.deleteTutorial(this.currentTutorial.id!).subscribe({
      next: () => {
        this.router.navigate(['/tutorials']);
      },
      error: err => console.log(err)
    });
  }
}
