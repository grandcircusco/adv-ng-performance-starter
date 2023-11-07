import { Component, Input } from '@angular/core';
import { Solution } from '../../models/solution';
import { SolutionService } from '../../services/solution.service';

@Component({
  selector: 'app-solution',
  templateUrl: './solution.component.html',
  styleUrls: ['./solution.component.css']
})
export class SolutionComponent {
  @Input() ID:number = 0;
  
  AllSolutions: Solution[] = [];
  DisplaySolution: Solution = {} as Solution;
  constructor(private _solutionService:SolutionService){}

  ngOnInit() {
    this._solutionService.GetSolutions().subscribe((response:Solution[]) =>{
      console.log(response);
      this.AllSolutions = response;
      this.findMatchingSolution();
    },
    (err) => {
      console.log(err);
    });
  }

  findMatchingSolution():void{
    this.AllSolutions.forEach((s) => {
      console.log(s);
      if(s.id == this.ID){
        this.DisplaySolution = s;
      }
    });
  }
}
