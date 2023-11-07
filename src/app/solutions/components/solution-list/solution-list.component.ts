
import { Component } from '@angular/core';
import { SolutionService } from '../../services/solution.service';
import { Solution } from '../../models/solution';

@Component({
  selector: 'app-solution-list',
  templateUrl: './solution-list.component.html',
  styleUrls: ['./solution-list.component.css']
})
export class SolutionListComponent {
  
  AllSolutions: Solution[] = [];
  constructor(private _solutionService:SolutionService){}

  ngOnInit() {
    //Calling JSON file, then parsing it
    this._solutionService.GetSolutions().subscribe((response:Solution[]) =>{
      console.log(response);
      this.AllSolutions = response;
    },
    //if error when calling JSON file
    (err) => {
      console.log(err);
    });
  }
}
